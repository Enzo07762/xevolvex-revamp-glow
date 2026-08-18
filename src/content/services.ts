import fatigaImg from "@/assets/svc-fatiga.jpg";
import nocImg from "@/assets/noc-hero.jpg";
import multimodalImg from "@/assets/ind-multimodal.jpg";
import puertosImg from "@/assets/ind-puertos.jpg";

export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  image: string;
  imageAlt: string;
  intro: string[];
  benefits: { title: string; body: string }[];
  how: { step: string; title: string; body: string }[];
  components?: { title: string; body: string }[];
  blocks?: { id: string; title: string; body: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "gestion-de-fatiga",
    name: "Gestión de Fatiga",
    short:
      "IA en cabina más analistas 24/7 para eliminar microsueños, distracción y riesgo laboral del operador.",
    title: "Control de Fatiga y Distracción con IA | XEVOLVEX",
    description:
      "Sistemas DMS y ADAS con triple filtro IA + analista humano 24/7. Reduzca microsueños, distracciones e incidentes en su operación.",
    h1: "Gestión de fatiga y riesgo laboral",
    lede: "Cada alerta pasa por tres filtros —equipo, inteligencia artificial y analista humano— antes de llegar a su despachador. Ese es el servicio que ninguna plataforma sola le puede dar.",
    image: fatigaImg,
    imageAlt: "Cabina de camión de noche con cámara de monitoreo del operador",
    intro: [
      "Nuestro sistema de control de fatiga combina inteligencia artificial avanzada con un equipo profesional en el Centro de Monitoreo 24×7. El resultado es una gestión de fatiga y distracción que no depende únicamente del algoritmo ni de la buena voluntad del conductor.",
      "Aplicamos lo último en visión por computador y machine learning para generar alertas en tiempo real dirigidas tanto al operador en cabina como al despachador en base. Sobre eso agregamos el valor crítico: verificación humana permanente y trazabilidad completa de cada evento.",
    ],
    benefits: [
      {
        title: "Microsueño y somnolencia",
        body: "Detección de cierre de párpados, cabeceo y bostezos con alerta sonora inmediata en cabina.",
      },
      {
        title: "Distracción y celular",
        body: "Uso de teléfono, fumar, mirada fuera de la vía y ausencia del operador en el puesto.",
      },
      {
        title: "ADAS frontal",
        body: "Advertencia de colisión frontal, distancia de seguimiento y salida de carril.",
      },
      {
        title: "Coaching, no castigo",
        body: "Rankings por operador y clips de video para retroalimentación objetiva y capacitación.",
      },
      {
        title: "Evidencia auditable",
        body: "Video y metadatos de cada evento disponibles para SSOMA, seguros e investigaciones.",
      },
      {
        title: "Protocolos a su medida",
        body: "Definimos con usted a quién se llama, en qué orden y con qué severidad. Nosotros ejecutamos.",
      },
    ],
    how: [
      {
        step: "01",
        title: "Diagnóstico de la operación",
        body: "Levantamos turnos, rutas, tipos de unidad y puntos críticos de fatiga antes de proponer equipamiento.",
      },
      {
        step: "02",
        title: "Instalación y calibración",
        body: "Montaje del DMS/ADAS por nuestros técnicos, calibración por tipo de cabina y prueba de conectividad.",
      },
      {
        step: "03",
        title: "Monitoreo 24/7",
        body: "El Centro de Monitoreo asume la operación: validación, escalamiento y bitácora de cada alerta.",
      },
      {
        step: "04",
        title: "Reportería y mejora",
        body: "Informes periódicos con tendencias por operador, turno y ruta, y plan de acción con su equipo.",
      },
    ],
    faq: [
      {
        q: "¿Funciona con operadores que usan lentes o mascarilla?",
        a: "Sí. Los modelos infrarrojos operan de noche y con lentes; la calibración inicial ajusta el umbral por tipo de cabina y por operador.",
      },
      {
        q: "¿Cuántos falsos positivos llegan al despachador?",
        a: "Muy pocos: el segundo filtro de IA y la revisión humana descartan reflejos, sombras y gestos normales antes de escalar el evento.",
      },
      {
        q: "¿Se puede aplicar a maquinaria pesada además de vehículos?",
        a: "Sí. Instalamos en volquetes, cargadores, reach-stackers, montacargas, buses y camiones de carretera.",
      },
      {
        q: "¿El servicio incluye el personal de monitoreo?",
        a: "Sí, es un servicio llave en mano: equipos, conectividad, plataforma y analistas del Centro de Monitoreo 24/7.",
      },
    ],
  },
  {
    slug: "gestion-de-flotas",
    name: "Gestión de Flotas",
    short:
      "Visibilidad total de vehículos, maquinaria y personal de campo, con conectividad para cualquier locación.",
    title: "Software de Gestión de Flotas GPS | XEVOLVEX",
    description:
      "Monitoreo GPS, driver coaching, control de combustible y optimización de rutas. Conectividad celular, satelital y LoRaWAN.",
    h1: "Gestión de flotas y activos",
    lede: "Somos integradores con más de una década y media desplegando telemetría en operaciones que no perdonan: minas, puertos, carretera y campo.",
    image: multimodalImg,
    imageAlt: "Intercambio vial y patio ferroviario de noche con estelas de luz",
    intro: [
      "Diseñamos sistemas de gestión que se adaptan a flotas pequeñas, medianas y grandes sin cambiar de proveedor a medio camino. Unimos telemetría, sensores y plataforma de software para que cada activo reporte lo que su operación necesita medir.",
      "El objetivo no es ver puntos en un mapa: es cumplimiento de procedimiento, disponibilidad de equipos y costo por kilómetro o por hora-máquina bajo control.",
    ],
    benefits: [
      {
        title: "Posición y actividad",
        body: "Geocercas, horarios, velocidad, tiempos de motor encendido y detenciones no autorizadas.",
      },
      {
        title: "Rutas y despacho",
        body: "Planificación, cumplimiento de ruta y confirmación de puntos de entrega o de recojo.",
      },
      {
        title: "Conducción segura",
        body: "Frenadas, aceleraciones, curvas agresivas y exceso de velocidad por tramo, con puntaje por operador.",
      },
      {
        title: "Mantenimiento",
        body: "Alertas por horómetro, kilometraje y códigos de falla leídos del bus CAN.",
      },
      {
        title: "Activos sin motor",
        body: "Remolques, contenedores, motobombas, grupos electrógenos e instrumentos de alto valor.",
      },
      {
        title: "Integración",
        body: "API y conectores para ERP, CRM, SCM y TMS. Sus datos donde su gente ya trabaja.",
      },
    ],
    how: [
      {
        step: "01",
        title: "Definición de indicadores",
        body: "Acordamos qué se va a medir y qué decisión va a tomar con cada indicador.",
      },
      {
        step: "02",
        title: "Equipamiento y conectividad",
        body: "Elegimos telemetría y red —celular, satelital o LoRaWAN— según cobertura real de su operación.",
      },
      {
        step: "03",
        title: "Puesta en marcha",
        body: "Configuración de geocercas, alertas y perfiles de usuario, más capacitación a despacho y supervisión.",
      },
      {
        step: "04",
        title: "Acompañamiento",
        body: "Soporte técnico y revisión periódica de resultados con su equipo de operaciones.",
      },
    ],
    faq: [
      {
        q: "¿Puedo monitorear en zonas sin señal celular?",
        a: "Sí, con enlaces satelitales Inmarsat u Orbcomm y almacenamiento en el equipo para sincronizar al recuperar cobertura.",
      },
      {
        q: "¿Ofrecen leasing del hardware?",
        a: "Sí, contamos con opciones de leasing para proyectos de gran envergadura.",
      },
      {
        q: "¿Se integra con nuestro ERP?",
        a: "Sí. Trabajamos integraciones hacia SAP, Oracle y sistemas propios mediante API.",
      },
    ],
  },
  {
    slug: "video-telematica",
    name: "Video Telemática",
    short:
      "Telemetría + video + IA: dashcams, MDVR y cámaras PTZ con analítica en tiempo real.",
    title: "Video Telemática con IA: Dashcams y MDVR | XEVOLVEX",
    description:
      "Dashcams, cámaras PTZ y MDVR con análisis por IA en tiempo real. Detecte fatiga, uso de celular, robos y anomalías en su flota.",
    h1: "Video telemática con inteligencia artificial",
    lede: "Datos de telemetría + video + IA. La combinación que convierte una discusión sobre lo que pasó en un archivo de video con hora, posición y contexto.",
    image: puertosImg,
    imageAlt: "Terminal portuario de contenedores iluminado de noche",
    intro: [
      "La video telemática no es un término de moda: es la forma más directa de auditar lo que ocurre en su operación, dentro y fuera de la cabina, en cualquier parte del mundo.",
      "Integramos dashcams, MDVR multicanal, cámaras PTZ y analítica de IA sobre cámaras existentes. El video se enlaza con telemetría, de modo que cada evento queda ubicado en tiempo, lugar y condición de manejo.",
    ],
    benefits: [
      {
        title: "MDVR multicanal",
        body: "Hasta 8 canales por unidad: frontal, cabina, laterales y carga, con grabación continua.",
      },
      {
        title: "Streaming en vivo",
        body: "Visualización remota bajo demanda desde el Centro de Monitoreo o desde su escritorio.",
      },
      {
        title: "Analítica a bordo",
        body: "Detección de fatiga, distracción, puntos ciegos y peatones procesada en el equipo.",
      },
      {
        title: "Cámaras PTZ e IP",
        body: "Cobertura de patios, talleres y almacenes con seguimiento y presets de recorrido.",
      },
      {
        title: "Evidencia por evento",
        body: "Descarga automática del clip asociado a la alerta, sin depender de la unidad en patio.",
      },
      {
        title: "Puntos ciegos",
        body: "Radar y video para maquinaria pesada, reach-stackers, montacargas, buses y tráileres.",
      },
    ],
    how: [
      {
        step: "01",
        title: "Diseño de cobertura",
        body: "Definimos cuántas cámaras y qué ángulos requiere cada tipo de unidad o instalación.",
      },
      {
        step: "02",
        title: "Instalación certificada",
        body: "Montaje, cableado y prueba de grabación y transmisión por unidad.",
      },
      {
        step: "03",
        title: "Reglas de alerta",
        body: "Configuramos qué eventos disparan clip, a quién notifican y con qué prioridad.",
      },
      {
        step: "04",
        title: "Operación asistida",
        body: "Nuestros analistas verifican, clasifican y archivan la evidencia relevante.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto video se almacena?",
        a: "La grabación continua queda en el equipo según capacidad de disco; los eventos y clips se conservan en la nube según el plan acordado.",
      },
      {
        q: "¿Puedo usar mis cámaras actuales?",
        a: "Sí. En instalaciones fijas aplicamos analítica de IA sobre la red de cámaras existente.",
      },
      {
        q: "¿Consume mucho plan de datos?",
        a: "No. Se transmiten eventos y clips cortos; el video completo permanece en la unidad y se descarga solo cuando se solicita.",
      },
    ],
  },
  {
    slug: "soluciones-aplicadas",
    name: "Soluciones Aplicadas",
    short:
      "TPMS, sensores de temperatura, control de combustible, control de personal en campo y guardia virtual.",
    title: "TPMS, Combustible y Guardia Virtual | XEVOLVEX",
    description:
      "Control de presión de neumáticos, sensores de temperatura, control de combustible con RFID y videovigilancia perimetral con IA.",
    h1: "Soluciones aplicadas",
    lede: "Tecnología puesta a trabajar en un problema concreto de su operación. Somos ingenieros: si no existe en catálogo, lo diseñamos.",
    image: nocImg,
    imageAlt: "Centro de monitoreo con pantallas de telemetría y video",
    intro: [
      "Estas soluciones se despliegan solas o como complemento de la gestión de flotas y fatiga. Todas comparten la misma base: sensores confiables, comunicación adecuada al entorno y un centro de monitoreo que responde.",
    ],
    blocks: [
      {
        id: "tpms",
        title: "Control de presión de neumáticos (TPMS)",
        body: "Anticipe el mantenimiento de sus neumáticos monitoreando presión y temperatura para prevenir desgaste prematuro, maximizar el rendimiento de combustible y evitar accidentes. El sistema alerta al operador en cabina ante cualquier anomalía.",
      },
      {
        id: "temperatura-y-humedad",
        title: "Sensores de temperatura y humedad",
        body: "Reciba alertas en tiempo real ante cambios, alteraciones o fallas, y cumpla con los requerimientos de cadena de frío con registro histórico auditable.",
      },
      {
        id: "control-personal-campo",
        title: "Control de personal en campo",
        body: "Monitoree estado y desempeño de su personal mediante GPS y video telemática. Tecnología portable para controlar geoposición, actividad o video, con alertas de accidente, zonas restringidas y horarios laborales, más informes detallados.",
      },
      {
        id: "control-consumo",
        title: "Control de consumo de combustible",
        body: "Mediante RFID, sensores y tecnología hardware/software controlamos el flujo de combustible en toda la cadena: cisternas, surtidores, vehículos y maquinaria portátil. Controle flujos, horarios, llenados y caudales máximos, con integración a su ERP (SAP, Oracle) e informes de consumo y anomalías. El retorno de inversión se alcanza típicamente en pocos meses.",
      },
      {
        id: "guardia-virtual",
        title: "Guardia virtual: seguridad zonal remota vía video",
        body: "Nuestro servicio VIDEO AI convierte su red de cámaras —nueva o existente— en vigilancia permanente. La IA detecta anomalías en tiempo real y usted recibe la alerta al instante, respaldada por el Centro de Monitoreo 24×7: robo, incendio, vandalismo, actitudes sospechosas, control de multitudes e identificación de rostros. Además puede gobernar audio, luces y puertas de forma remota, en interiores y exteriores, en cualquier parte del mundo.",
      },
    ],
    benefits: [
      {
        title: "Integrable",
        body: "Todas las soluciones conviven en la misma plataforma y reportería.",
      },
      {
        title: "Diseño a medida",
        body: "Desarrollamos adaptaciones mecánicas y de firmware cuando el estándar no alcanza.",
      },
      {
        title: "ROI medible",
        body: "Definimos la línea base antes de instalar para poder demostrar el ahorro.",
      },
    ],
    how: [
      {
        step: "01",
        title: "Levantamiento en sitio",
        body: "Visitamos la operación para entender el entorno físico y de comunicaciones.",
      },
      {
        step: "02",
        title: "Prueba piloto",
        body: "Desplegamos en un grupo reducido y medimos contra la línea base.",
      },
      {
        step: "03",
        title: "Despliegue y monitoreo",
        body: "Escalamos al total de la operación con soporte y monitoreo permanente.",
      },
    ],
    faq: [
      {
        q: "¿Puedo empezar con una sola solución?",
        a: "Sí. Muchos clientes inician con TPMS o control de combustible y luego integran fatiga y flotas.",
      },
      {
        q: "¿La guardia virtual reemplaza al personal de vigilancia?",
        a: "Lo potencia: la IA vigila todas las cámaras en simultáneo y el analista confirma antes de activar el protocolo.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
