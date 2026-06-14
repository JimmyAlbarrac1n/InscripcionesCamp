import { z } from "zod";

export type Categoria = "Niños" | "Adolescentes" | "Jóvenes";

export const CATEGORIA_FECHAS: Record<Categoria, string> = {
  Niños: "10 al 15 de agosto",
  Adolescentes: "17 al 22 de agosto",
  Jóvenes: "24 al 29 de agosto",
};

// Condiciones que se muestran y deben aceptarse en el último paso.
export const CONDICIONES = [
  "La inscripción presentada es para facilitar el registro. Toda la información privada de este formulario no será compartida externamente.",
  "Dado el límite de 45 cupos, el envío de este formulario de inscripción no garantiza la inscripción definitiva.",
  "La Parroquia, mediante el equipo de coordinación, se compromete a tomar las medidas de seguridad y cautela para el cuidado de los participantes, pero exime su responsabilidad en caso de accidentes por falta de prudencia de los participantes, pérdida de objetos de valor, pérdida de dinero, entre otros.",
  "Los padres de familia se comprometen a abonar el 50% del monto total del costo del campamento hasta máximo 2 días después del momento en que los contactemos. El monto restante debe pagarse antes de la salida del campamento; caso contrario, el cupo puede ser reasignado.",
];

// Validación real de cédula ecuatoriana (provincia + dígito verificador módulo 10).
export function isValidCedulaEC(cedula: string): boolean {
  if (!/^\d{10}$/.test(cedula)) return false;
  const prov = parseInt(cedula.slice(0, 2), 10);
  if (prov < 1 || (prov > 24 && prov !== 30)) return false;
  if (parseInt(cedula[2], 10) >= 6) return false;
  const coef = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let v = parseInt(cedula[i], 10) * coef[i];
    if (v > 9) v -= 9;
    sum += v;
  }
  const check = (10 - (sum % 10)) % 10;
  return check === parseInt(cedula[9], 10);
}

export function ageFromISO(iso: string): number | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  const m = now.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age--;
  return age;
}

export function categoryFromAge(age: number | null): Categoria | null {
  if (age === null) return null;
  if (age >= 5 && age <= 11) return "Niños";
  if (age >= 12 && age <= 15) return "Adolescentes";
  if (age >= 16 && age <= 22) return "Jóvenes";
  return null;
}

const phoneRe = /^\+?\d[\d\s-]{6,14}$/;
const parentesco = z.enum(["Madre", "Padre", "Otro"], { errorMap: () => ({ message: "Selecciona una opción" }) });

export const inscripcionSchema = z
  .object({
    // Honeypot anti-bots: debe quedar vacío.
    website: z.string().optional(),

    // Paso 1 — Participante
    nombres: z.string().trim().min(2, "Ingresa los nombres").max(60, "Máximo 60 caracteres"),
    apellidos: z.string().trim().min(2, "Ingresa los apellidos").max(60, "Máximo 60 caracteres"),
    cedula: z.string().trim().refine(isValidCedulaEC, "Cédula ecuatoriana inválida"),
    fechaNacimiento: z
      .string()
      .min(1, "Ingresa la fecha de nacimiento")
      .refine((iso) => {
        const a = ageFromISO(iso);
        return a !== null && a >= 5 && a <= 22;
      }, "La edad debe estar entre 5 y 22 años"),
    genero: z.enum(["Masculino", "Femenino"], { errorMap: () => ({ message: "Selecciona una opción" }) }),
    institucion: z.string().trim().min(2, "Ingresa la institución").max(100, "Máximo 100 caracteres"),
    anioNivel: z.string().trim().min(1, "Ingresa el año o nivel").max(40, "Máximo 40 caracteres"),

    // Paso 2 — Campamento
    categoria: z.enum(["Niños", "Adolescentes", "Jóvenes"], { errorMap: () => ({ message: "Selecciona una categoría" }) }),

    // Paso 3 — Motivación
    asistioAntes: z.enum(["Sí", "No"], { errorMap: () => ({ message: "Selecciona una opción" }) }),
    motivacion: z.string().trim().min(5, "Indica tu motivación").max(500, "Máximo 500 caracteres"),

    // Paso 4 — Representante y contacto adicional
    representanteNombre: z.string().trim().min(2, "Ingresa el nombre del representante").max(80, "Máximo 80 caracteres"),
    representanteParentesco: parentesco,
    representanteParentescoOtro: z.string().trim().max(40).optional(),
    representanteTelefono: z.string().trim().regex(phoneRe, "Teléfono inválido"),
    direccion: z.string().trim().min(3, "Ingresa la dirección").max(120, "Máximo 120 caracteres"),
    ciudad: z.string().trim().min(2, "Ingresa la ciudad").max(60, "Máximo 60 caracteres"),
    adicionalNombre: z.string().trim().min(2, "Ingresa el nombre del contacto adicional").max(80, "Máximo 80 caracteres"),
    adicionalParentesco: parentesco,
    adicionalParentescoOtro: z.string().trim().max(40).optional(),
    adicionalTelefono: z.string().trim().regex(phoneRe, "Teléfono inválido"),

    // Paso 5 — Salud
    condicionMedica: z.string().trim().max(400, "Máximo 400 caracteres").optional(),
    tratamientoMedico: z.string().trim().max(400, "Máximo 400 caracteres").optional(),
    tipoSangre: z.string().trim().max(10).optional(),

    // Paso 6 — Confirmación
    autorizacion: z.boolean().refine((v) => v === true, "Debes confirmar las condiciones para continuar"),
  })
  .superRefine((data, ctx) => {
    if (data.representanteParentesco === "Otro" && !data.representanteParentescoOtro?.trim()) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["representanteParentescoOtro"], message: "Especifica el parentesco" });
    }
    if (data.adicionalParentesco === "Otro" && !data.adicionalParentescoOtro?.trim()) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["adicionalParentescoOtro"], message: "Especifica el parentesco" });
    }
    if (data.condicionMedica?.trim() && !data.tratamientoMedico?.trim()) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["tratamientoMedico"], message: "Indica el tratamiento de la condición médica" });
    }
  });

export type InscripcionData = z.infer<typeof inscripcionSchema>;
