import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string | undefined;
  id?: string | undefined;
}) {
  return (
    <section id={id} className={`border-t border-border/60 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-[1.1] font-semibold md:text-[2.6rem]">{title}</h2>
      {body && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{body}</p>}
    </div>
  );
}

export function CtaLink({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | undefined;
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.16em] transition-all";
  const styles =
    variant === "solid"
      ? "bg-gradient-signal text-primary-foreground shadow-signal hover:-translate-y-0.5"
      : "border border-border text-foreground hover:border-signal hover:text-signal-soft";
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
      {trail.map((item, i) => (
        <span key={item.label} className="inline-flex items-center gap-1">
          {i > 0 && <ChevronRight className="h-3 w-3 opacity-60" />}
          {item.to ? (
            <Link to={item.to} className="hover:text-foreground">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  trail,
  image,
  imageAlt,
  aside,
}: {
  eyebrow: string;
  title: string;
  lede?: string | undefined;
  trail?: { label: string; to?: string }[];
  image?: string | undefined;
  imageAlt?: string | undefined;
  aside?: ReactNode | undefined;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-deep">
      <div className="pointer-events-none absolute inset-0 grid-mesh opacity-[0.35]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          {trail && <Breadcrumbs trail={trail} />}
          <p className="eyebrow mt-6">{eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold md:text-6xl">{title}</h1>
          {lede && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{lede}</p>
          )}
          {aside && <div className="mt-8">{aside}</div>}
        </div>
        {image && (
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-signal opacity-15 blur-2xl" />
            <img
              src={image}
              alt={imageAlt ?? ""}
              loading="lazy"
              width={1200}
              height={800}
              className="relative w-full border border-border object-cover shadow-panel"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function StatStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid divide-border border-y border-border sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.value + item.label} className="px-6 py-8">
          <p className="font-display text-2xl font-semibold text-foreground">{item.value}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function FinalCta({
  title = "Permítanos maximizar la eficiencia de sus operaciones",
  body = "Cuéntenos qué necesita controlar y le proponemos la arquitectura completa: equipos, conectividad, plataforma y monitoreo humano 24/7.",
}: {
  title?: string | undefined;
  body?: string | undefined;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-0 grid-mesh opacity-30" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Siguiente paso</p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold md:text-[2.6rem]">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CtaLink to="/contacto">Solicitar demo</CtaLink>
          <CtaLink to="/casos-de-exito" variant="ghost">
            Ver casos
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
