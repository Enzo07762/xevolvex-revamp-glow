import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { site } from "@/content/site";
import { PageHero, Section } from "@/components/site/blocks";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/soporte-tecnico")({
  head: () =>
    seo({
      title: "Soporte Técnico 24/7 | XEVOLVEX",
      description:
        "Centro de Asistencia Técnica. Reporte su incidencia indicando servicio y detalle del problema. Atención rápida y trazable.",
    }),
  component: Soporte,
});

function Soporte() {
  return (
    <>
      <PageHero
        eyebrow="Centro de Asistencia Técnica"
        title="Soporte técnico"
        lede="Envíe su consulta técnica por este medio o llame a nuestra central. Sea lo más detallado posible: tipo de servicio, unidades afectadas y desde cuándo ocurre."
        trail={[{ label: "Inicio", to: "/" }, { label: "Soporte técnico" }]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Central telefónica</p>
              <p className="mt-3 text-base text-foreground">Perú · {site.phonePeru}</p>
              <p className="text-base text-foreground">USA · {site.phoneUsa}</p>
            </div>
            <div>
              <p className="eyebrow">Correo</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-block text-base text-signal-soft hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow">Monitoreo</p>
              <p className="pulse-dot mt-3 text-sm text-muted-foreground">
                Centro de Monitoreo operativo 24×7, los 365 días del año.
              </p>
            </div>
            <div className="border border-border p-6">
              <p className="eyebrow">¿Busca cotizar?</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Este canal es post-venta. Para propuestas comerciales use el formulario de contacto:
                así su solicitud llega directo al equipo comercial.
              </p>
            </div>
          </div>
          <LeadForm mode="soporte" />
        </div>
      </Section>
    </>
  );
}
