import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Integradores de telemática, IA e IoT. Antes {site.formerName}, operando desde{" "}
              {site.foundedPeru} en Perú y las Américas.
            </p>
            <div className="mt-6 space-y-1 text-sm text-muted-foreground">
              <p className="text-foreground">Perú · {site.phonePeru}</p>
              <p className="text-foreground">USA · {site.phoneUsa}</p>
              <a href={`mailto:${site.email}`} className="text-signal-soft hover:underline">
                {site.email}
              </a>
            </div>
          </div>

          <FooterCol title="Servicios">
            {services.map((s) => (
              <FooterLink key={s.slug} to={`/servicios/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Industrias">
            {industries.map((i) => (
              <FooterLink key={i.slug} to={`/industrias/${i.slug}`}>
                {i.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Compañía">
            <FooterLink to="/nosotros">Nosotros</FooterLink>
            <FooterLink to="/casos-de-exito">Casos de éxito</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/contacto">Contacto</FooterLink>
            <FooterLink to="/soporte-tecnico">Soporte técnico</FooterLink>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                YouTube
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="mt-14 grid gap-6 border-t border-border pt-8 text-sm text-muted-foreground sm:grid-cols-2">
          <p>
            <span className="eyebrow block">Oficina HQ</span>
            {site.hq}
          </p>
          <p>
            <span className="eyebrow block">Oficina Perú</span>
            {site.lima}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link to="/politicas-de-privacidad" className="hover:text-foreground">
              Políticas de privacidad
            </Link>
            <Link to="/terminos" className="hover:text-foreground">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="eyebrow">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </Link>
    </li>
  );
}
