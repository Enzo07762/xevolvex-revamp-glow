import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { services } from "@/content/services";
import { tripleFilter } from "@/content/site";
import { FinalCta, PageHero, Section, SectionHead } from "@/components/site/blocks";

export const Route = createFileRoute("/servicios/")({
  head: () =>
    seo({
      title: "Servicios de Telemática y Monitoreo | XEVOLVEX",
      description:
        "Gestión de fatiga, gestión de flotas, video telemática y soluciones aplicadas. Servicio llave en mano con monitoreo 24/7.",
    }),
  component: ServiciosHub,
});

function ServiciosHub() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicio llave en mano, de la ingeniería al monitoreo"
        lede="Elegimos la tecnología, la instalamos, la operamos y respondemos por lo que ocurre en su operación. Un solo responsable para todo el ciclo."
        trail={[{ label: "Inicio", to: "/" }, { label: "Servicios" }]}
      />

      <Section>
        <div className="grid gap-px border border-border bg-border lg:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/servicios/${s.slug}`}
              className="group bg-background p-8 transition-colors hover:bg-accent/40 md:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold">{s.name}</h2>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-signal-soft transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <ul className="mt-7 space-y-2 text-sm text-muted-foreground">
                {s.benefits.slice(0, 3).map((b) => (
                  <li key={b.title} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-signal" />
                    {b.title}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHead
          eyebrow="Cómo trabajamos"
          title="El monitoreo humano es parte del servicio, no un extra."
        />
        <ol className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">
          {tripleFilter.map((f) => (
            <li key={f.step} className="bg-background p-8">
              <span className="font-display text-4xl font-bold text-signal/25">{f.step}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <FinalCta />
    </>
  );
}
