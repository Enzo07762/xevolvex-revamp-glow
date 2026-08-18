export type Post = {
  slug: string;
  title: string;
  category: "Gestión de Fatiga" | "Video Telemática" | "Noticias de la empresa";
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "xevolvex-gestion-de-fatiga-operador-portuario-global",
    title:
      "XEVOLVEX provee gestión de fatiga y distracción a uno de los mayores operadores portuarios del mundo",
    category: "Noticias de la empresa",
    date: "2026-06-18",
    readingTime: "4 min",
    excerpt:
      "El despliegue combina cámaras DMS en maquinaria de patio con validación de nuestro Centro de Monitoreo 24/7 en turnos rotativos continuos.",
    body: [
      "Un operador portuario presente en decenas de países seleccionó a XEVOLVEX para gestionar la fatiga y la distracción de los operadores de su maquinaria de patio. El alcance incluye instalación, conectividad, plataforma y —el componente decisivo— el servicio de analistas de nuestro Centro de Monitoreo 24×7.",
      "El reto en un terminal no es detectar un bostezo: es distinguir un evento real de un falso positivo en un entorno con reflejos, luces de sodio, polvo y maniobras constantes. Por eso cada alerta atraviesa tres filtros: el equipo a bordo, la validación por inteligencia artificial en la nube y la confirmación de un analista humano que revisa el video antes de escalar.",
      "El protocolo se diseñó junto al área de seguridad del cliente: a quién se notifica, en qué orden, con qué severidad y cómo se documenta el cierre de cada evento. La reportería mensual permite comparar turnos, sectores y operadores, y convertir los datos en capacitación en lugar de sanciones.",
      "Este tipo de despliegue confirma nuestra tesis de siempre: la tecnología sola no reduce incidentes. Lo que reduce incidentes es tecnología integrada, operada por gente que responde a cualquier hora.",
    ],
  },
  {
    slug: "que-sabemos-sobre-la-fatiga-de-operadores-y-conductores",
    title: "¿Qué sabemos hoy sobre la fatiga de operadores y conductores?",
    category: "Gestión de Fatiga",
    date: "2026-04-02",
    readingTime: "6 min",
    excerpt:
      "La fatiga no avisa. Aparece como microsueños de dos a tres segundos que el propio operador no recuerda. Qué la causa y qué se puede medir.",
    body: [
      "La fatiga es un estado fisiológico, no una falta de voluntad. Se acumula por horas de vigilia, calidad de sueño, ritmo circadiano, carga física y monotonía de la tarea. Un operador puede estar convencido de que está alerta y sufrir microsueños de dos o tres segundos que no recordará después.",
      "A 60 km/h, tres segundos son 50 metros recorridos sin control. En un patio de maniobras o en una rampa de mina, son suficientes para un incidente grave.",
      "Lo relevante para una operación es que la fatiga sí es medible en tiempo real: apertura palpebral, frecuencia de parpadeo, cabeceo, dirección de la mirada y patrón de conducción son señales objetivas que un sistema de visión detecta antes de que el evento ocurra.",
      "El error frecuente es quedarse en la detección. Sin un protocolo de respuesta —quién llama, qué se le dice al operador, cuándo se detiene la unidad, cómo se registra— el sistema solo genera reportes que nadie lee. La gestión de fatiga es un proceso operativo con soporte tecnológico, y en ese orden.",
      "Nuestra recomendación al iniciar: fije una línea base de eventos por cada mil horas de operación, comunique con transparencia al personal que el objetivo es prevención y no vigilancia punitiva, y revise resultados por turno cada mes.",
    ],
  },
  {
    slug: "ia-y-video-telematica-tendencias",
    title: "IA y video telemática: qué cambió realmente en la cabina",
    category: "Video Telemática",
    date: "2026-02-11",
    readingTime: "5 min",
    excerpt:
      "El procesamiento en el borde volvió práctico lo que antes exigía enviar todo el video a la nube. Consecuencias concretas para su flota.",
    body: [
      "Durante años la video telemática fue, en la práctica, un grabador con GPS: el video servía para reconstruir lo ocurrido después del hecho. El cambio de fondo es el procesamiento en el borde: hoy la analítica corre en el propio equipo de la unidad.",
      "Eso tiene tres consecuencias prácticas. La alerta llega al operador mientras el riesgo existe. El plan de datos se dedica a eventos y clips cortos, no a video continuo. Y el video completo permanece disponible en el equipo para cuando de verdad se necesita.",
      "La segunda tendencia es la fusión de fuentes: telemetría del bus CAN, video, sensores de neumáticos y radar de puntos ciegos correlacionados en un mismo evento. Un frenado brusco deja de ser un dato aislado y pasa a tener causa visible.",
      "La tercera es menos técnica y más organizacional: la evidencia en video cambió la conversación con las aseguradoras y con los comités de seguridad. Discutir con archivo, hora y posición es distinto a discutir con versiones.",
      "Lo que no cambió: la analítica genera hipótesis, no verdades. Alguien tiene que revisar, clasificar y decidir. Ese sigue siendo trabajo humano, y por eso nuestro Centro de Monitoreo es parte del servicio y no un extra opcional.",
    ],
  },
  {
    slug: "navegando-el-camino-hacia-la-seguridad",
    title:
      "Navegando el camino hacia la seguridad: la evolución de la gestión de flotas",
    category: "Gestión de Fatiga",
    date: "2025-11-20",
    readingTime: "5 min",
    excerpt:
      "De los puntos en el mapa a la prevención asistida por IA: cómo maduró la telemática y qué debería exigirle hoy a un proveedor.",
    body: [
      "La primera generación de gestión de flotas respondía una sola pregunta: dónde está la unidad. Fue un avance enorme para el control de rutas y ya no es un diferencial: es una función básica que cualquier proveedor cumple.",
      "La segunda generación agregó comportamiento: velocidad por tramo, frenadas, aceleraciones, tiempos de ralentí, consumo. Ahí aparecieron los primeros programas de conducción segura y los indicadores de costo por kilómetro.",
      "La generación actual incorpora percepción. El vehículo entiende su entorno y el estado de quien lo opera, y actúa antes del incidente. La telemetría dejó de ser un registro histórico para volverse un sistema de prevención.",
      "¿Qué debería exigirle hoy a un integrador? Que responda por el resultado y no solo por el equipo: hardware homologado, conectividad garantizada en su geografía, integración con sus sistemas, monitoreo humano permanente y reportería que su gerencia pueda leer sin traducción.",
      "En XEVOLVEX ese paquete completo es el servicio. Somos ingenieros integradores: elegimos la tecnología, la instalamos, la operamos y respondemos por lo que ocurre en su operación.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
