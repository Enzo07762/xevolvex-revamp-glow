import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/content/site";

const fleetPlatform = site.platforms[0]?.href ?? "https://track.gpsdelperu.com/";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="hidden border-b border-border/60 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-1.5 text-[11px] tracking-wide text-muted-foreground">
          <span className="pulse-dot font-display uppercase tracking-[0.18em] text-muted-foreground">
            Centro de Monitoreo activo 24/7
          </span>
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phonePeru.replace(/\D/g, "")}`} className="hover:text-foreground">
              Perú {site.phonePeru}
            </a>
            <a href={`tel:${site.phoneUsa.replace(/\D/g, "")}`} className="hover:text-foreground">
              USA {site.phoneUsa}
            </a>
            <a
              href={fleetPlatform}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-signal-soft hover:text-foreground"
            >
              Acceso clientes <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {nav.map((item) => (
            <div key={item.to} className="group relative">
              <Link
                to={item.to}
                className="inline-flex items-center rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              >
                {item.label}
              </Link>
              {(item.to === "/servicios" || item.to === "/industrias") && (
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="mt-1 border border-border bg-card p-2 shadow-panel">
                    {(item.to === "/servicios" ? services : industries).map((entry) => (
                      <li key={entry.slug}>
                        <Link
                          to={`${item.to}/${entry.slug}` as string}
                          className="block px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        >
                          {entry.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contacto"
            className="hidden bg-gradient-signal px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-signal transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Solicitar demo
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-6 py-4" aria-label="Navegación móvil">
            {nav.map((item) => (
              <div key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-base text-foreground"
                >
                  {item.label}
                </Link>
                {(item.to === "/servicios" || item.to === "/industrias") && (
                  <ul className="mb-2 ml-3 border-l border-border pl-4">
                    {(item.to === "/servicios" ? services : industries).map((entry) => (
                      <li key={entry.slug}>
                        <Link
                          to={`${item.to}/${entry.slug}` as string}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-muted-foreground"
                        >
                          {entry.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link
              to="/soporte-tecnico"
              onClick={() => setOpen(false)}
              className="block py-2 font-display text-base text-foreground"
            >
              Soporte técnico
            </Link>
            <a
              href={fleetPlatform}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-sm text-signal-soft"
            >
              Acceso clientes
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
