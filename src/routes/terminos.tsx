import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { site } from "@/content/site";
import { PageHero, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/terminos")({
  head: () =>
    seo({
      title: "Términos y condiciones | XEVOLVEX",
      description:
        "Condiciones de uso del sitio web de XEVOLVEX, alcance de la información publicada y marco de los servicios de telemática y monitoreo.",
    }),
  component: Terminos,
});

const blocks = [
  {
    title: "1. Aceptación",
    body: "El uso de este sitio implica la aceptación de estos términos. Si no está de acuerdo con ellos, le solicitamos no utilizar el sitio ni enviar información a través de sus formularios.",
  },
  {
    title: "2. Alcance de la información",
    body: "El contenido publicado es informativo y descriptivo de nuestros servicios. No constituye una oferta contractual. Todo alcance, precio, nivel de servicio y plazo se define en la propuesta y el contrato suscritos con cada cliente.",
  },
  {
    title: "3. Propiedad intelectual",
    body: "Las marcas, textos, imágenes y desarrollos de este sitio son propiedad de XEVOLVEX Inc. o de sus respectivos titulares. Las marcas de partners y fabricantes se muestran únicamente con fines identificatorios.",
  },
  {
    title: "4. Plataformas de clientes",
    body: "El acceso a las plataformas de gestión de flotas y de fatiga está restringido a usuarios autorizados. Las credenciales son personales e intransferibles y su uso indebido es responsabilidad del titular.",
  },
  {
    title: "5. Enlaces externos",
    body: "El sitio puede contener enlaces a sitios de terceros. No controlamos ni respondemos por su contenido, disponibilidad o políticas de privacidad.",
  },
  {
    title: "6. Ley aplicable",
    body: `Estas condiciones se rigen por la legislación aplicable en las jurisdicciones donde XEVOLVEX opera. Para cualquier consulta legal escriba a ${site.email}.`,
  },
];

function Terminos() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Términos y condiciones"
        trail={[{ label: "Inicio", to: "/" }, { label: "Términos y condiciones" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {blocks.map((b) => (
            <article key={b.title}>
              <h2 className="font-display text-xl font-semibold">{b.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{b.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
