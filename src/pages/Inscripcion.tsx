import { useEffect, useState, type ReactNode } from "react";
import { useForm, type UseFormRegister, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  inscripcionSchema,
  ageFromISO,
  categoryFromAge,
  CATEGORIA_FECHAS,
  CONDICIONES,
  type InscripcionData,
  type Categoria,
} from "@/lib/inscripcionSchema";
import { submitInscripcion } from "@/lib/submitInscripcion";

const STEPS = ["Participante", "Campamento", "Motivación", "Contacto", "Salud", "Confirmación"];
const STEP_FIELDS: (keyof InscripcionData)[][] = [
  ["nombres", "apellidos", "cedula", "fechaNacimiento", "genero", "institucion", "anioNivel"],
  ["categoria"],
  ["asistioAntes", "motivacion"],
  [
    "representanteNombre",
    "representanteParentesco",
    "representanteParentescoOtro",
    "representanteTelefono",
    "direccion",
    "ciudad",
    "adicionalNombre",
    "adicionalParentesco",
    "adicionalParentescoOtro",
    "adicionalTelefono",
  ],
  ["condicionMedica", "tratamientoMedico", "tipoSangre"],
  ["autorizacion"],
];

const inputCls =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/25";

const TIPOS_SANGRE = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "No sé"];

function Field({ label, error, hint, children }: { label: string; error?: string; hint?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {hint && !error && <span className="mt-1 block text-xs text-muted-foreground">{hint}</span>}
      {error && <span className="mt-1 block text-xs font-medium text-destructive">{error}</span>}
    </label>
  );
}

function RadioPills({
  name,
  options,
  register,
  selected,
}: {
  name: keyof InscripcionData;
  options: readonly string[];
  register: UseFormRegister<InscripcionData>;
  selected?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm transition ${
            selected === opt ? "border-primary bg-primary/5 font-semibold text-primary" : "border-border text-foreground hover:border-primary/40"
          }`}
        >
          <input type="radio" value={opt} className="accent-[hsl(138_36%_27%)]" {...register(name)} />
          {opt}
        </label>
      ))}
    </div>
  );
}

const Inscripcion = () => {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<InscripcionData>({
    resolver: zodResolver(inscripcionSchema),
    mode: "onTouched",
    defaultValues: {
      website: "",
      nombres: "",
      apellidos: "",
      cedula: "",
      fechaNacimiento: "",
      institucion: "",
      anioNivel: "",
      motivacion: "",
      representanteNombre: "",
      representanteParentescoOtro: "",
      representanteTelefono: "",
      direccion: "",
      ciudad: "",
      adicionalNombre: "",
      adicionalParentescoOtro: "",
      adicionalTelefono: "",
      condicionMedica: "",
      tratamientoMedico: "",
      tipoSangre: "",
      autorizacion: false,
    },
  });

  const fechaNac = watch("fechaNacimiento");
  const edad = ageFromISO(fechaNac);
  const categoria = watch("categoria");

  useEffect(() => {
    const cat = categoryFromAge(ageFromISO(fechaNac));
    if (cat) setValue("categoria", cat, { shouldValidate: false });
  }, [fechaNac, setValue]);

  const next = async () => {
    const ok = await trigger(STEP_FIELDS[step]);
    if (ok) {
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onValid = async (data: InscripcionData) => {
    setServerError(null);
    try {
      const res = await submitInscripcion(data);
      if (res.ok) setDone(true);
      else setServerError("No se pudo registrar la inscripción. Inténtalo de nuevo.");
    } catch {
      setServerError("No se pudo enviar. Revisa tu conexión e inténtalo de nuevo.");
    }
  };

  const onInvalid = (errs: FieldErrors<InscripcionData>) => {
    const firstField = Object.keys(errs)[0] as keyof InscripcionData | undefined;
    if (!firstField) return;
    const idx = STEP_FIELDS.findIndex((fields) => fields.includes(firstField));
    if (idx >= 0) setStep(idx);
  };

  if (done) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-foreground">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-serif text-3xl font-black tracking-tight sm:text-4xl">Inscripción recibida</h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          Hemos recibido la inscripción. Nos pondremos en contacto al número del representante para confirmar los detalles y el pago.
          Recuerda que, por el límite de 45 cupos, el envío no garantiza el cupo definitivo.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-7 py-3 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </main>
    );
  }

  const isLast = step === STEPS.length - 1;

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <img src={logo} alt="Pastoral Juvenil Cristo Rey" className="w-16" />
          <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary/60">
            Inscripciones · Cristo Rey 2026
          </span>
          <h1 className="mt-2 font-serif text-3xl font-black tracking-tight sm:text-4xl">Formulario de inscripción</h1>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => (
              <div key={s} className={`flex flex-1 flex-col items-center gap-1.5 ${i <= step ? "text-primary" : "text-muted-foreground/50"}`}>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold ${
                    i < step
                      ? "border-primary bg-primary text-primary-foreground"
                      : i === step
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground/50"
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className="hidden text-[10px] font-medium sm:block">{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 h-1 w-full overflow-hidden rounded bg-secondary">
            <div className="h-full rounded bg-primary transition-all duration-300" style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }} />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onValid, onInvalid)}
          className="rounded-2xl border border-primary/15 bg-card p-6 shadow-[0_24px_50px_-30px_hsl(138_36%_27%/0.35)] sm:p-8"
        >
          <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("website")} />

          {/* Paso 1 — Participante */}
          {step === 0 && (
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombres" error={errors.nombres?.message}>
                  <input className={inputCls} placeholder="Juan Andrés" {...register("nombres")} />
                </Field>
                <Field label="Apellidos" error={errors.apellidos?.message}>
                  <input className={inputCls} placeholder="Pérez López" {...register("apellidos")} />
                </Field>
              </div>
              <Field label="Cédula" error={errors.cedula?.message}>
                <input className={inputCls} inputMode="numeric" placeholder="0401234567" maxLength={10} {...register("cedula")} />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Fecha de nacimiento" error={errors.fechaNacimiento?.message} hint={edad !== null ? `Edad: ${edad} años` : undefined}>
                  <input type="date" className={inputCls} {...register("fechaNacimiento")} />
                </Field>
                <Field label="Género" error={errors.genero?.message}>
                  <select className={inputCls} defaultValue="" {...register("genero")}>
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </Field>
              </div>
              <Field label="Institución en la que estudia" error={errors.institucion?.message}>
                <input className={inputCls} placeholder="Nombre de la institución" {...register("institucion")} />
              </Field>
              <Field label="Año / Nivel" error={errors.anioNivel?.message}>
                <input className={inputCls} placeholder="Ej. 8.º de básica, 2.º de bachillerato…" {...register("anioNivel")} />
              </Field>
            </div>
          )}

          {/* Paso 2 — Campamento */}
          {step === 1 && (
            <div className="space-y-5">
              {edad !== null && (
                <p className="rounded-xl bg-secondary px-4 py-3 text-sm text-secondary-foreground">
                  Edad: <b>{edad} años</b>. Categoría sugerida: <b>{categoryFromAge(edad) ?? "—"}</b>.
                </p>
              )}
              <Field label="Categoría" error={errors.categoria?.message}>
                <select className={inputCls} defaultValue="" {...register("categoria")}>
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>
                  <option value="Niños">Niños (5 a 11 años)</option>
                  <option value="Adolescentes">Adolescentes (12 a 15 años)</option>
                  <option value="Jóvenes">Jóvenes (16 a 22 años)</option>
                </select>
              </Field>
              {categoria && (
                <p className="text-sm text-muted-foreground">
                  Fechas: <b className="text-foreground">{CATEGORIA_FECHAS[categoria as Categoria]}</b> · Costo:{" "}
                  <b className="text-foreground">$45</b> · Lugar: <b className="text-foreground">Gualchán, Cantón Espejo</b>
                </p>
              )}
            </div>
          )}

          {/* Paso 3 — Motivación */}
          {step === 2 && (
            <div className="space-y-5">
              <Field label="¿Has asistido anteriormente a algún campamento?" error={errors.asistioAntes?.message}>
                <RadioPills name="asistioAntes" options={["Sí", "No"]} register={register} selected={watch("asistioAntes")} />
              </Field>
              <Field label="Motivación para asistir a este campamento" error={errors.motivacion?.message}>
                <textarea className={inputCls} rows={4} placeholder="Cuéntanos por qué quieres participar" {...register("motivacion")} />
              </Field>
            </div>
          )}

          {/* Paso 4 — Representante y contacto adicional */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60">Representante</h3>
                <Field label="Nombre del representante" error={errors.representanteNombre?.message}>
                  <input className={inputCls} placeholder="Nombre completo" {...register("representanteNombre")} />
                </Field>
                <Field label="Parentesco" error={errors.representanteParentesco?.message}>
                  <RadioPills name="representanteParentesco" options={["Madre", "Padre", "Otro"]} register={register} selected={watch("representanteParentesco")} />
                </Field>
                {watch("representanteParentesco") === "Otro" && (
                  <Field label="Especifica el parentesco" error={errors.representanteParentescoOtro?.message}>
                    <input className={inputCls} placeholder="Ej. tío, abuela, tutor…" {...register("representanteParentescoOtro")} />
                  </Field>
                )}
                <Field label="Teléfono / WhatsApp" error={errors.representanteTelefono?.message} hint="Nos contactaremos a este número.">
                  <input className={inputCls} inputMode="tel" placeholder="0991234567" {...register("representanteTelefono")} />
                </Field>
                <Field label="Dirección o barrio" error={errors.direccion?.message}>
                  <input className={inputCls} placeholder="Calle y referencia" {...register("direccion")} />
                </Field>
                <Field label="Ciudad" error={errors.ciudad?.message}>
                  <input className={inputCls} placeholder="Ciudad" {...register("ciudad")} />
                </Field>
              </div>

              <div className="space-y-5 border-t border-border pt-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60">Contacto adicional</h3>
                <Field label="Nombre del contacto adicional" error={errors.adicionalNombre?.message}>
                  <input className={inputCls} placeholder="Nombre completo" {...register("adicionalNombre")} />
                </Field>
                <Field label="Parentesco" error={errors.adicionalParentesco?.message}>
                  <RadioPills name="adicionalParentesco" options={["Madre", "Padre", "Otro"]} register={register} selected={watch("adicionalParentesco")} />
                </Field>
                {watch("adicionalParentesco") === "Otro" && (
                  <Field label="Especifica el parentesco" error={errors.adicionalParentescoOtro?.message}>
                    <input className={inputCls} placeholder="Ej. tío, abuela, tutor…" {...register("adicionalParentescoOtro")} />
                  </Field>
                )}
                <Field label="Teléfono / WhatsApp" error={errors.adicionalTelefono?.message}>
                  <input className={inputCls} inputMode="tel" placeholder="0991234567" {...register("adicionalTelefono")} />
                </Field>
              </div>
            </div>
          )}

          {/* Paso 5 — Salud */}
          {step === 4 && (
            <div className="space-y-5">
              <p className="font-semibold text-foreground">
                Indícanos si el participante posee alguna alergia o condición médica de la que debamos estar informados.
              </p>
              <Field label="Condición médica" error={errors.condicionMedica?.message}>
                <textarea className={inputCls} rows={2} placeholder="Alergias, enfermedades, etc." {...register("condicionMedica")} />
              </Field>
              <Field
                label="Tratamiento médico"
                error={errors.tratamientoMedico?.message}
                hint="Obligatorio si indicaste una condición médica."
              >
                <textarea className={inputCls} rows={2} placeholder="Medicación, cuidados, indicaciones…" {...register("tratamientoMedico")} />
              </Field>
              <Field label="Tipo de sangre" error={errors.tipoSangre?.message}>
                <select className={inputCls} defaultValue="" {...register("tipoSangre")}>
                  <option value="">Selecciona (opcional)</option>
                  {TIPOS_SANGRE.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          )}

          {/* Paso 6 — Confirmación */}
          {step === 5 && (
            <div className="space-y-5">
              <div className="rounded-xl border border-border bg-secondary/40 p-5">
                <p className="text-sm font-semibold text-foreground">
                  Al enviar este formulario, confirmas que conoces las siguientes condiciones:
                </p>
                <ul className="mt-3 space-y-3 text-sm text-foreground/80">
                  {CONDICIONES.map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <label className="flex items-start gap-3 rounded-xl border border-border p-4">
                <input type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-[hsl(138_36%_27%)]" {...register("autorizacion")} />
                <span className="text-sm text-foreground">
                  Confirmo que conozco y acepto las condiciones detalladas, y que la información proporcionada es verídica.
                </span>
              </label>
              {errors.autorizacion && <span className="block text-xs font-medium text-destructive">{errors.autorizacion.message}</span>}
              {serverError && (
                <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{serverError}</p>
              )}
            </div>
          )}

          {/* Navegación */}
          <div className="mt-8 flex items-center justify-between gap-4">
            {step > 0 ? (
              <button type="button" onClick={back} className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary transition hover:bg-secondary">
                <ArrowLeft className="h-4 w-4" />
                Atrás
              </button>
            ) : (
              <Link to="/" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-secondary">
                <ArrowLeft className="h-4 w-4" />
                Salir
              </Link>
            )}

            {!isLast ? (
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_28px_-12px_hsl(138_36%_27%/0.6)] transition hover:-translate-y-0.5"
              >
                Siguiente
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_28px_-12px_hsl(138_36%_27%/0.6)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Enviar inscripción
                    <Check className="h-4 w-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Inscripcion;
