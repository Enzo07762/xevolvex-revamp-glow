import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-5xl font-semibold text-foreground">Página no encontrada</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          La página que busca no existe o fue movida durante la renovación del sitio.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gradient-signal px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página no cargó
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocurrió un problema de nuestro lado. Puede intentar de nuevo o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-gradient-signal px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "XEVOLVEX | Telemática, IA e IoT para operaciones críticas" },
      {
        name: "description",
        content:
          "Integradores de telemática, gestión de fatiga y flotas con IA, IoT y Centro de Monitoreo 24/7 en Perú y las Américas.",
      },
      { name: "author", content: "XEVOLVEX" },
      { name: "theme-color", content: "#0a0a1a" },
      { property: "og:site_name", content: "XEVOLVEX" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "XEVOLVEX | Telemática, IA e IoT para operaciones críticas" },
      { name: "twitter:title", content: "XEVOLVEX | Telemática, IA e IoT para operaciones críticas" },
      { property: "og:description", content: "Integradores de telemática, gestión de fatiga y flotas con IA, IoT y Centro de Monitoreo 24/7 en Perú y las Américas." },
      { name: "twitter:description", content: "Integradores de telemática, gestión de fatiga y flotas con IA, IoT y Centro de Monitoreo 24/7 en Perú y las Américas." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/25038323d8e2cf93914ee1ca114798fb/id-preview-6e725c70--75d8886f-dca8-41a6-860c-ac870323c185.lovable.app-1787028286889.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/25038323d8e2cf93914ee1ca114798fb/id-preview-6e725c70--75d8886f-dca8-41a6-860c-ac870323c185.lovable.app-1787028286889.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,400&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <Footer />
      </div>
      <WhatsAppFab />
      <Toaster />
    </QueryClientProvider>
  );
}
