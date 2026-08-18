import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { industries } from "@/content/industries";
import { industriesServed } from "@/content/site";
import { FinalCta, PageHero, Section, SectionHead } from "@/components/site/blocks";

export const Route = createFileRoute("/industrias/")({
  head: () =>
    seo({
      title: "Soluciones por Industria | XEVOLVEX",
      description:
        "Telemática especializada para minería, puertos, agricultura, transporte multimodal, industria pesada y gestión de residuos.",
    }),
  component: IndustriasHub,
});

function IndustriasHub() {
  return (
    <>
      <PageHero
        eyebrow="Industrias"
        title="La misma tecnología no sirve para todos"
        lede="Un puerto, una mina y un fundo agrícola tienen riesgos, turnos y regulaciones distintas. Diseñamos el despliegue a partir de esa diferencia."
        trail={[{ label: "Inicio", to: "/" }, { label: "Industrias" }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {industries.map((i) => (
            <Link key={i.slug} to={`/industrias/${i.slug}`} className="group border border-border">
              <div className="relative overflow-hidden">
                <img
                  src={i.image}
                  alt={i.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-56 w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-xl font-semibold">{i.name}</h2>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-signal-soft transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{i.short}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {i.risks.slice(0, 3).map((r) => (
                    <li
                      key={r}
                      className="border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHead
          eyebrow="También atendemos"
          title="Sectores donde ya tenemos despliegues activos."
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {industriesServed.map((i) => (
            <li key={i} className="border border-border px-4 py-2 text-sm text-muted-foreground">
              {i}
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
