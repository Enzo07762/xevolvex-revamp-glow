import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { posts, formatDate } from "@/content/posts";
import { FinalCta, PageHero, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/blog/")({
  head: () =>
    seo({
      title: "Blog técnico de telemática y fatiga | XEVOLVEX",
      description:
        "Artículos del equipo de ingeniería sobre gestión de fatiga, video telemática con IA y gestión de flotas en operaciones críticas.",
    }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notas técnicas del equipo"
        lede="Lo que aprendemos operando fatiga, flotas y video en minería, puertos, carretera y campo."
        trail={[{ label: "Inicio", to: "/" }, { label: "Blog" }]}
      />

      <Section>
        <div className="grid gap-px border border-border bg-border">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group grid gap-4 bg-background p-8 transition-colors hover:bg-accent/40 md:grid-cols-[180px_1fr] md:p-10"
            >
              <div>
                <p className="eyebrow">{p.category}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {formatDate(p.date)} · {p.readingTime}
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl leading-snug font-semibold group-hover:text-signal-soft">
                  {p.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
