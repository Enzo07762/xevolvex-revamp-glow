import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { pillars, partners, site, stats, tripleFilter } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { posts, formatDate } from "@/content/posts";
import { CtaLink, Section, SectionHead, StatStrip } from "@/components/site/blocks";
import { LeadForm } from "@/components/site/LeadForm";
import nocHero from "@/assets/noc-hero.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Telemática y Gestión de Flotas con IA | XEVOLVEX",
      description:
        "Integramos IA, IoT y M2M con un Centro de Monitoreo 24/7 para reducir incidentes y optimizar sus operaciones. Desde 2007 en Perú y las Américas.",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO — split screen */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-deep">
        <div className="pointer-events-none absolute inset-0 grid-mesh opacity-[0.3]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div>
            <p className="pulse-dot font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-signal-soft">
              Centro de Monitoreo 24/7 · Perú · USA
            </p>
            <h1 className="mt-6 text-4xl leading-[1.02] font-semibold md:text-6xl xl:text-[4.4rem]">
              Sus operaciones,
              <br />
              <span className="text-gradient-signal">más seguras y eficientes.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Aplicamos inteligencia artificial, IoT y tecnología máquina a máquina sobre un centro
              de monitoreo con analistas propios. No vendemos equipos: respondemos por el resultado
              en campo.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink to="/contacto">Solicitar demo</CtaLink>
              <CtaLink to="/servicios" variant="ghost">
                Ver servicios
              </CtaLink>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7">
              <div>
                <dt className="text-xs text-muted-foreground">Operando desde</dt>
                <dd className="font-display text-xl font-semibold">2007</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Filtros por alerta</dt>
                <dd className="font-display text-xl font-semibold">3</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Cobertura</dt>
                <dd className="font-display text-xl font-semibold">24/7</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-signal opacity-20 blur-3xl" />
            <img
              src={nocHero}
              alt="Centro de Monitoreo de XEVOLVEX con muros de video de flotas y alertas"
              width={1600}
              height={1200}
              className="relative w-full border border-border object-cover shadow-panel"
            />
            <div className="relative -mt-px border border-t-0 border-border bg-card/80 px-5 py-4 backdrop-blur">
              <p className="eyebrow">En vivo</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Cada alerta de fatiga es verificada por un analista antes de llegar a su despachador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatStrip items={stats} />

      {/* INTEGRADORES + PILARES */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <SectionHead
            eyebrow="Qué hacemos"
            title="Somos integradores, no revendedores."
            body="Unimos hardware, software, comunicaciones y un centro de monitoreo A1 para llevar su operación a la máxima eficiencia. Seleccionamos lo más confiable del mercado en cloud, sensores, IA, IoT, M2M y comunicaciones inalámbricas, y lo adaptamos a su industria. Contamos con opciones de leasing para proyectos de gran envergadura."
          />
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="bg-background p-7">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DIFERENCIAL: TRIPLE FILTRO */}
      <Section className="relative overflow-hidden bg-surface/30">
        <div className="pointer-events-none absolute inset-0 grid-mesh opacity-25" />
        <div className="relative">
          <SectionHead
            eyebrow="El diferencial"
            title="Triple filtro: IA + IA + humano."
            body="La mayoría de proveedores le entrega una alerta cruda. Nosotros la procesamos tres veces antes de interrumpir su operación, y documentamos el cierre de cada evento."
          />
          <ol className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-3">
            {tripleFilter.map((f) => (
              <li key={f.step} className="relative bg-background p-8">
                <span className="font-display text-5xl font-bold text-signal/25">{f.step}</span>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* SERVICIOS */}
      <Section>
        <SectionHead eyebrow="Servicios" title="Cuatro frentes, un solo responsable." />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/servicios/${s.slug}`}
              className="group bg-background p-8 transition-colors hover:bg-accent/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-signal-soft transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* INDUSTRIAS */}
      <Section className="bg-surface/30">
        <SectionHead
          eyebrow="Industrias"
          title="Calibrado para su sector, no para el promedio."
          body="Cada industria tiene riesgos, turnos y regulaciones propias. Elija la suya y vea cómo desplegamos la solución."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link
              key={i.slug}
              to={`/industrias/${i.slug}`}
              className="group relative overflow-hidden border border-border"
            >
              <img
                src={i.image}
                alt={i.imageAlt}
                loading="lazy"
                width={1200}
                height={800}
                className="h-48 w-full object-cover opacity-55 transition-all duration-500 group-hover:scale-105 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="relative -mt-20 p-6">
                <h3 className="font-display text-lg font-semibold">{i.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* PARTNERS */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Partners tecnológicos"
            title="Integramos a los fabricantes que ya confía la industria."
          />
        </div>
        <div className="mt-10 overflow-hidden border-y border-border py-7">
          <div className="marquee-track flex w-max gap-14">
            {[...partners, ...partners].map((p, idx) => (
              <span
                key={p + idx}
                className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CASO DESTACADO */}
      <Section className="bg-surface/30">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Caso destacado</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold md:text-[2.4rem]">
              Gestión de fatiga para uno de los mayores operadores portuarios del mundo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Maquinaria de patio, turnos rotativos y operación continua. Desplegamos DMS a bordo,
              validación por IA y analistas 24/7 con protocolo de escalamiento acordado con el área
              de seguridad del cliente.
            </p>
            <div className="mt-8">
              <CtaLink to="/casos-de-exito" variant="ghost">
                Ver el caso completo
              </CtaLink>
            </div>
          </div>
          <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {[
              ["Turnos cubiertos", "24/7 los 365 días"],
              ["Alcance", "Maquinaria de patio y camiones"],
              ["Servicio", "Llave en mano con monitoreo propio"],
              ["Evidencia", "Video por evento, auditable"],
            ].map(([k, v]) => (
              <li key={k} className="bg-background p-7">
                <p className="eyebrow">{k}</p>
                <p className="mt-2 font-display text-base font-semibold">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* BLOG */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Blog" title="Lo último del equipo técnico." />
          <CtaLink to="/blog" variant="ghost">
            Ver todo
          </CtaLink>
        </div>
        <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group bg-background p-8 transition-colors hover:bg-accent/40"
            >
              <p className="eyebrow">{p.category}</p>
              <h3 className="mt-4 font-display text-lg leading-snug font-semibold group-hover:text-signal-soft">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <p className="mt-6 text-xs text-muted-foreground">
                {formatDate(p.date)} · {p.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA + FORM */}
      <Section id="contacto" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-mesh opacity-25" />
        <div className="relative grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">{site.tagline}</p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold md:text-[2.6rem]">
              Hablemos de su operación, no de nuestro catálogo.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Somos un equipo de ingenieros con trayectoria en operaciones críticas. Escríbanos y le
              respondemos el mismo día hábil.
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <p className="text-foreground">Perú · {site.phonePeru}</p>
              <p className="text-foreground">USA · {site.phoneUsa}</p>
              <a href={`mailto:${site.email}`} className="text-signal-soft hover:underline">
                {site.email}
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </Section>
    </>
  );
}
