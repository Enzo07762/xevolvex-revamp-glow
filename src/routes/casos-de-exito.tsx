import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { FinalCta, PageHero, Section, SectionHead } from "@/components/site/blocks";
import puertosImg from "@/assets/ind-puertos.jpg";
import mineriaImg from "@/assets/ind-mineria.jpg";

const cases = [
  {
    sector: "Terminales portuarios",
    title: "Gestión de fatiga y distracción para un operador portuario global",
    image: puertosImg,
    alt: "Terminal portuario de contenedores de noche",
    body: "Una de las compañías operadoras de puertos más grandes del mundo nos confió la gestión de fatiga de su maquinaria de patio. Desplegamos DMS a bordo, validación por IA y analistas 24/7, con protocolo de escalamiento definido junto al área de seguridad del cliente.",
    facts: [
      ["Alcance", "Maquinaria de patio y camiones"],
      ["Cobertura", "24/7, turnos rotativos"],
      ["Entregable", "Evidencia en video por evento"],
      ["Modelo", "Servicio llave en mano"],
    ],
  },
  {
    sector: "Minería",
    title: "Flotas y combustible en operación minera remota",
    image: mineriaImg,
    alt: "Camiones mineros en tajo abierto",
    body: "Integración de telemetría satelital y celular con control de combustible por RFID desde cisterna hasta maquinaria, con reportería conciliada contra el ERP del cliente y monitoreo de fatiga en volquetes y buses de personal.",
    facts: [
      ["Alcance", "Volquetes, cargadores y livianos"],
      ["Conectividad", "Satelital + celular"],
      ["Integración", "ERP corporativo"],
      ["Resultado", "Balance de consumo cerrado"],
    ],
  },
];

export const Route = createFileRoute("/casos-de-exito")({
  head: () =>
    seo({
      title: "Casos de éxito | XEVOLVEX",
      description:
        "Despliegues reales de gestión de fatiga, flotas y video telemática en puertos y minería, con monitoreo 24/7 y evidencia auditable.",
    }),
  component: Casos,
});

function Casos() {
  return (
    <>
      <PageHero
        eyebrow="Casos de éxito"
        title="Operaciones reales, no testimonios de catálogo"
        lede="Publicamos únicamente despliegues verificables. Estamos gestionando con nuestros clientes la autorización para nombrar marcas y cifras de resultado."
        trail={[{ label: "Inicio", to: "/" }, { label: "Casos de éxito" }]}
      />

      <Section>
        <div className="space-y-20">
          {cases.map((c) => (
            <article key={c.title} className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-signal opacity-15 blur-2xl" />
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="relative w-full border border-border object-cover"
                />
              </div>
              <div>
                <p className="eyebrow">{c.sector}</p>
                <h2 className="mt-4 text-2xl leading-tight font-semibold md:text-3xl">{c.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.body}</p>
                <dl className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
                  {c.facts.map(([k, v]) => (
                    <div key={k} className="bg-background p-5">
                      <dt className="eyebrow">{k}</dt>
                      <dd className="mt-1.5 font-display text-sm font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHead
          eyebrow="Transparencia"
          title="Por qué no verá testimonios genéricos aquí."
          body="Preferimos una página corta y verificable a una llena de frases sin firma. Si necesita referencias directas, las coordinamos con clientes de su mismo sector bajo acuerdo previo."
        />
      </Section>

      <FinalCta />
    </>
  );
}
