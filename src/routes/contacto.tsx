import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { site } from "@/content/site";
import { PageHero, Section } from "@/components/site/blocks";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/contacto")({
  head: () =>
    seo({
      title: "Contacto | XEVOLVEX Perú y USA",
      description:
        "Escríbanos o llámenos. Oficinas en Lima, Perú y Bakersfield, California. Le respondemos el mismo día hábil.",
    }),
  component: Contacto,
});

function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto comercial"
        title="Cotice su proyecto"
        lede="Este canal es exclusivamente comercial. Si ya es cliente y necesita asistencia técnica, use el Centro de Asistencia Técnica."
        trail={[{ label: "Inicio", to: "/" }, { label: "Contacto" }]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Teléfonos</p>
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
              <p className="eyebrow">Oficina HQ</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{site.hq}</p>
            </div>
            <div>
              <p className="eyebrow">Oficina Perú</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{site.lima}</p>
            </div>
            <div>
              <p className="eyebrow">Acceso clientes</p>
              <ul className="mt-3 space-y-2 text-sm">
                {site.platforms.map((p) => (
                  <li key={p.label}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-signal-soft hover:underline"
                    >
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>
    </>
  );
}
