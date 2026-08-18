import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { getPost, posts, formatDate } from "@/content/posts";
import { Breadcrumbs, FinalCta, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo({
          title: `${loaderData.post.title.slice(0, 55)} | XEVOLVEX`,
          description: loaderData.post.excerpt,
        })
      : {},
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="relative overflow-hidden border-b border-border bg-gradient-deep">
        <div className="pointer-events-none absolute inset-0 grid-mesh opacity-30" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 md:py-24">
          <Breadcrumbs
            trail={[
              { label: "Inicio", to: "/" },
              { label: "Blog", to: "/blog" },
              { label: post.category },
            ]}
          />
          <p className="eyebrow mt-6">{post.category}</p>
          <h1 className="mt-4 text-3xl leading-[1.1] font-semibold md:text-5xl">{post.title}</h1>
          <p className="mt-6 text-xs text-muted-foreground">
            {formatDate(post.date)} · {post.readingTime} de lectura
          </p>
        </div>
      </article>

      <Section className="border-t-0">
        <div className="mx-auto max-w-3xl space-y-6">
          {post.body.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <p className="eyebrow">Seguir leyendo</p>
        <div className="mt-8 grid gap-px border border-border bg-border lg:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group bg-background p-7 transition-colors hover:bg-accent/40"
            >
              <p className="eyebrow">{p.category}</p>
              <h2 className="mt-3 font-display text-base leading-snug font-semibold group-hover:text-signal-soft">
                {p.title}
              </h2>
            </Link>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
