import type { InscripcionData } from "./inscripcionSchema";

export interface SubmitResult {
  ok: boolean;
  simulated: boolean;
}

/**
 * Envía la inscripción al Web App de Google Apps Script (que la escribe en Google Sheets).
 * - Honeypot: si el campo trampa está lleno, es un bot → no enviamos nada.
 * - Content-Type text/plain para evitar el preflight CORS de Apps Script.
 * - Leemos la respuesta y la logueamos para poder diagnosticar (éxito/errores del servidor).
 * - Sin URL configurada (VITE_APPS_SCRIPT_URL) → modo prueba (no envía, solo loguea).
 */
export async function submitInscripcion(data: InscripcionData): Promise<SubmitResult> {
  if (data.website) return { ok: true, simulated: true };

  const payload: Record<string, unknown> = { ...data };
  delete payload.website;
  const url = import.meta.env.VITE_APPS_SCRIPT_URL;

  if (!url) {
    console.warn("[inscripcion] VITE_APPS_SCRIPT_URL no configurado — modo prueba. Datos:", payload);
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true, simulated: true };
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  console.log("[inscripcion] respuesta del servidor:", text);

  let parsed: { ok?: boolean; error?: string } = {};
  try {
    parsed = JSON.parse(text);
  } catch {
    // Respuesta no-JSON (puede pasar si el deploy responde HTML): la tratamos como envío realizado.
  }

  if (parsed.ok === false) throw new Error(parsed.error || "El servidor rechazó la inscripción");
  return { ok: true, simulated: false };
}
