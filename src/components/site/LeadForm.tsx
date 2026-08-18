import { useState } from "react";
import { toast } from "sonner";
import { industries } from "@/content/industries";
import { services } from "@/content/services";

type Mode = "comercial" | "soporte";

export function LeadForm({
  mode = "comercial",
  defaultIndustry,
  defaultService,
}: {
  mode?: Mode | undefined;
  defaultIndustry?: string | undefined;
  defaultService?: string | undefined;
}) {
  const [sending, setSending] = useState(false);

  return (
    <form
      className="grid gap-5 border border-border bg-card/70 p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        window.setTimeout(() => {
          setSending(false);
          (e.target as HTMLFormElement).reset();
          toast.success(
            mode === "soporte"
              ? "Ticket registrado. El Centro de Asistencia Técnica le responderá a la brevedad."
              : "Solicitud enviada. Un especialista le contactará el mismo día hábil.",
          );
        }, 700);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" name="nombre" required />
        <Field label="Apellido" name="apellido" required />
        <Field label="Empresa" name="empresa" required />
        <Field label="Cargo" name="cargo" />
        <Field label="Teléfono" name="telefono" type="tel" required />
        <Field label="Email corporativo" name="email" type="email" required />
        {mode === "comercial" ? (
          <>
            <Select label="Industria" name="industria" defaultValue={defaultIndustry}>
              {industries.map((i) => (
                <option key={i.slug} value={i.name}>
                  {i.name}
                </option>
              ))}
              <option value="Otra">Otra</option>
            </Select>
            <Field label="N° de unidades" name="unidades" type="number" min={1} />
          </>
        ) : (
          <>
            <Select label="Tipo de servicio" name="servicio" defaultValue={defaultService}>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Otro">Otro</option>
            </Select>
            <Select label="Prioridad" name="prioridad">
              <option value="Alta — operación detenida">Alta — operación detenida</option>
              <option value="Media — servicio degradado">Media — servicio degradado</option>
              <option value="Baja — consulta">Baja — consulta</option>
            </Select>
          </>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="mensaje" className="eyebrow">
          {mode === "soporte" ? "Descripción del problema" : "Mensaje"}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          placeholder={
            mode === "soporte"
              ? "Indique tipo de servicio, unidades afectadas y desde cuándo ocurre."
              : "Cuéntenos qué operación quiere controlar y qué resultado busca."
          }
          className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-signal"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="justify-self-start bg-gradient-signal px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-signal transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {sending ? "Enviando…" : mode === "soporte" ? "Enviar ticket" : "Enviar solicitud"}
      </button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Al enviar acepta nuestras políticas de privacidad. Usamos sus datos solo para atender esta
        consulta.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string | undefined;
  required?: boolean | undefined;
  min?: number | undefined;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="eyebrow">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        className="border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-signal"
      />
    </div>
  );
}

function Select({
  label,
  name,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  defaultValue?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="eyebrow">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-signal"
      >
        {children}
      </select>
    </div>
  );
}
