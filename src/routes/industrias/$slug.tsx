import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { getIndustry, industries } from "@/content/industries";
import { FinalCta, PageHero, Section, SectionHead } from "@/components/site/blocks";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/industrias/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo({ title: loaderData.industry.title, description: loaderData.industry.description })
      : {},
  component: IndustryPage,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Industria"
        title={industry.h1}
        lede={industry.lede}
        trail={[
          { label: "Inicio", to: "/" },
          { label: "Industrias", to: "/industrias" },
          { label: industry.name },
        ]}
        image={industry.image}
        imageAlt={industry.imageAlt}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="eyebrow">Contexto del sector</p>
            {industry.intro.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div>
            <p className="eyebrow">Riesgos que atacamos</p>
            <ul className="mt-6 grid gap-px border border-border bg-border">
              {industry.risks.map((r) => (
                <li key={r} className="bg-background px-6 py-4 text-sm text-foreground">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHead eyebrow="Nuestra solución" title="Qué desplegamos en su operación." />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
          {industry.focus.map((f) => {
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  {f.to && (
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-signal-soft transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </>
            );
            return f.to ? (
              <Link
                key={f.title}
                to={f.to}
                className="group bg-background p-8 transition-colors hover:bg-accent/40"
              >
                {content}
              </Link>
            ) : (
              <div key={f.title} className="bg-background p-8">
                {content}
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHead
              eyebrow="Conversemos"
              title={`Cotice para ${industry.name.toLowerCase()}.`}
              body="Le respondemos el mismo día hábil con una propuesta técnica y comercial concreta."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {industries
                .filter((i) => i.slug !== industry.slug)
                .map((i) => (
                  <Link
                    key={i.slug}
                    to={`/industrias/${i.slug}`}
                    className="border border-border px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-signal hover:text-foreground"
                  >
                    {i.name}
                  </Link>
                ))}
            </div>
          </div>
          <LeadForm defaultIndustry={industry.name} />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
