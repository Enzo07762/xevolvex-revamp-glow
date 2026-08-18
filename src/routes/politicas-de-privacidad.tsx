import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { site } from "@/content/site";
import { PageHero, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/politicas-de-privacidad")({
  head: () =>
    seo({
      title: "Políticas de privacidad | XEVOLVEX",
      description:
        "Cómo XEVOLVEX recopila, usa y protege los datos personales enviados a través de este sitio y de nuestras plataformas de monitoreo.",
    }),
  component: Privacidad,
});

const blocks = [
  {
    title: "1. Datos que recopilamos",
    body: "Recopilamos los datos que usted envía voluntariamente en nuestros formularios de contacto y soporte: nombre, empresa, cargo, teléfono, correo corporativo, industria y el detalle de su consulta. Adicionalmente registramos datos técnicos de navegación (dirección IP, tipo de dispositivo y páginas visitadas) con fines estadísticos.",
  },
  {
    title: "2. Finalidad del tratamiento",
    body: "Utilizamos sus datos para atender su consulta, elaborar propuestas técnicas y comerciales, brindar soporte post-venta y enviarle información relacionada con los servicios que solicitó. No vendemos ni cedemos sus datos a terceros con fines publicitarios.",
  },
  {
    title: "3. Conservación y seguridad",
    body: "Conservamos los datos mientras exista relación comercial o interés legítimo en la consulta. Aplicamos medidas técnicas y organizativas razonables para proteger la información contra acceso, alteración o divulgación no autorizada.",
  },
  {
    title: "4. Datos de operación de nuestros clientes",
    body: "La información de telemetría, video y eventos generada por las plataformas contratadas pertenece al cliente. XEVOLVEX la procesa únicamente para prestar el servicio contratado y bajo los acuerdos de confidencialidad suscritos.",
  },
  {
    title: "5. Derechos del titular",
    body: "Puede solicitar acceso, rectificación, actualización, oposición o supresión de sus datos personales escribiendo a nuestro correo institucional. Atenderemos su solicitud en los plazos que establece la normativa aplicable.",
  },
  {
    title: "6. Cookies",
    body: "Usamos cookies propias y de terceros para recordar preferencias y medir el uso del sitio. Puede bloquearlas desde la configuración de su navegador; algunas funciones podrían verse afectadas.",
  },
];

function Privacidad() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Políticas de privacidad"
        lede={`Consultas sobre el tratamiento de datos: ${site.email}`}
        trail={[{ label: "Inicio", to: "/" }, { label: "Políticas de privacidad" }]}
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
