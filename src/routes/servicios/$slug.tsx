import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { seo } from "@/lib/seo";
import { getService, services } from "@/content/services";
import { industries } from "@/content/industries";
import { FinalCta, PageHero, Section, SectionHead } from "@/components/site/blocks";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo({ title: loaderData.service.title, description: loaderData.service.description })
      : {},
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Servicio"
        title={service.h1}
        lede={service.lede}
        trail={[
          { label: "Inicio", to: "/" },
          { label: "Servicios", to: "/servicios" },
          { label: service.name },
        ]}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="eyebrow">En qué consiste</p>
            {service.intro.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="grid gap-px self-start border border-border bg-border">
            {service.how.map((h) => (
              <div key={h.step} className="bg-background p-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm font-bold text-signal-soft">{h.step}</span>
                  <h3 className="font-display text-base font-semibold">{h.title}</h3>
                </div>
                <p className="mt-2 pl-9 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHead eyebrow="Capacidades" title="Qué obtiene con este servicio." />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((b) => (
            <div key={b.title} className="bg-background p-7">
              <h3 className="font-display text-base font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {service.blocks && (
        <Section>
          <SectionHead eyebrow="Catálogo" title="Soluciones disponibles." />
          <div className="mt-12 space-y-px border border-border bg-border">
            {service.blocks.map((b) => (
              <article key={b.id} id={b.id} className="scroll-mt-32 bg-background p-8 md:p-10">
                <h3 className="font-display text-xl font-semibold">{b.title}</h3>
                <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section className="bg-surface/30">
        <SectionHead eyebrow="Aplicación" title="Industrias donde lo desplegamos." />
        <div className="mt-10 flex flex-wrap gap-3">
          {industries.map((i) => (
            <Link
              key={i.slug}
              to="/industrias/$slug" params={{ slug: i.slug }}
              className="border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-signal hover:text-foreground"
            >
              {i.name}
            </Link>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-3">
          {services
            .filter((s) => s.slug !== service.slug)
            .map((s) => (
              <Link
                key={s.slug}
                to="/servicios/$slug" params={{ slug: s.slug }}
                className="border border-border px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal hover:text-foreground"
              >
                {s.name}
              </Link>
            ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHead eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos." />
            <Accordion type="single" collapsible className="mt-8">
              {service.faq.map((f, idx) => (
                <AccordionItem key={f.q} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-display text-base">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <p className="eyebrow">Solicitar una demo</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
