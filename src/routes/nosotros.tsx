import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { partners, site, timeline, values, industriesServed } from "@/content/site";
import { FinalCta, PageHero, Section, SectionHead } from "@/components/site/blocks";
import nocImg from "@/assets/noc-hero.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () =>
    seo({
      title: "Nosotros | XEVOLVEX (antes GPS del Perú)",
      description:
        "Ingenieros especialistas en telemática desde 2007. Partners de Gurtam, Teltonika, Inmarsat y Cipia. Conozca nuestra historia y nuestro Centro de Monitoreo.",
    }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Parecemos nuevos. Estamos muy lejos de serlo."
        lede={`Antes conocidos como ${site.formerName}, somos una empresa de ingenieros y socios de los principales proveedores mundiales de tecnología. Aprovechamos experiencia internacional para entregar soluciones de clase mundial.`}
        trail={[{ label: "Inicio", to: "/" }, { label: "Nosotros" }]}
        image={nocImg}
        imageAlt="Centro de Monitoreo 24/7 de XEVOLVEX"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Misión</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Brindar servicios innovadores de telemática y gestión de flotas para mejorar la
              seguridad y la eficiencia en las operaciones de nuestros clientes, reduciendo la fatiga
              y la distracción del conductor y salvaguardando vidas y activos con inteligencia
              artificial, M2M, IoT y un equipo especializado.
            </p>
          </div>
          <div>
            <p className="eyebrow">Visión</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Liderar en telemática y gestión de flotas impulsando la seguridad y la eficiencia.
              Buscamos transformar la industria del transporte y sectores conexos con tecnología
              avanzada, maximizando la seguridad del operador y la rentabilidad de los activos.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHead
          eyebrow="Historia"
          title="De Seattle a Lima, de GPS del Perú a XEVOLVEX."
          body="Hemos evolucionado, y los fundadores somos Generación X. De ahí el nombre."
        />
        <ol className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-4">
          {timeline.map((t) => (
            <li key={t.year} className="bg-background p-7">
              <p className="font-display text-sm font-bold tracking-[0.14em] text-signal-soft">
                {t.year}
              </p>
              <h3 className="mt-3 font-display text-base font-semibold">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHead eyebrow="Valores" title="Siete criterios con los que decidimos." />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="bg-background p-7">
              <h3 className="font-display text-base font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Partners" title="Con quiénes integramos." />
            <ul className="mt-8 flex flex-wrap gap-3">
              {partners.map((p) => (
                <li
                  key={p}
                  className="border border-border px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead eyebrow="Industrias" title="Dónde operamos hoy." />
            <ul className="mt-8 flex flex-wrap gap-3">
              {industriesServed.map((i) => (
                <li key={i} className="border border-border px-4 py-2 text-sm text-muted-foreground">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Permítanos maximizar la eficiencia de sus operaciones"
        body="Nuestros clientes son líderes en minería, gas y petróleo, transporte multimodal, puertos, logística, financieras vehiculares, taxis y agroindustria. Confían su operación a quien responde por ella."
      />
    </>
  );
}
