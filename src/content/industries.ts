import mineriaImg from "@/assets/ind-mineria.jpg";
import puertosImg from "@/assets/ind-puertos.jpg";
import multimodalImg from "@/assets/ind-multimodal.jpg";
import nocImg from "@/assets/noc-hero.jpg";
import fatigaImg from "@/assets/svc-fatiga.jpg";

export type Industry = {
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
  focus: { title: string; body: string; to?: string }[];
  risks: string[];
};

export const industries: Industry[] = [
  {
    slug: "terminales-portuarios",
    name: "Terminales portuarios",
    short:
      "Soluciones llave en mano calibradas para puertos: fatiga, puntos ciegos y gestión de flota en patio 24/7.",
    title: "Telemática para Puertos y Terminales | XEVOLVEX",
    description:
      "Control de fatiga y flotas llave en mano para terminales portuarios. Detección de puntos ciegos en reach-stackers y montacargas.",
    h1: "Terminales portuarios y de contenedores",
    lede: "Operación continua, patio congestionado y maquinaria conviviendo con personal a pie. El margen de error es cero.",
    image: puertosImg,
    imageAlt: "Grúas y contenedores en un terminal portuario de noche",
    intro: [
      "Damos servicio llave en mano de gestión de flota y fatiga a terminales portuarios en varios países de las Américas. Conocemos el detalle de sus retos: turnos rotativos, 24 horas al día, todos los días del año, y una métrica de productividad que se mide en movimientos por hora.",
      "Nuestro caso más representativo es la gestión de fatiga y distracción para una de las compañías operadoras de puertos más grandes del mundo.",
    ],
    focus: [
      {
        title: "Fatiga en turno nocturno",
        body: "Detección de microsueño en operadores de reach-stacker, grúa móvil y camión de patio, con validación humana antes de escalar al supervisor de turno.",
        to: "/servicios/gestion-de-fatiga",
      },
      {
        title: "Puntos ciegos y atropellos",
        body: "Radar y video de 360° en maquinaria de patio para eliminar colisiones con personal, apiladores y estructuras.",
        to: "/servicios/soluciones-aplicadas",
      },
      {
        title: "Visibilidad del patio",
        body: "Posición y actividad de cada equipo, cumplimiento de procedimiento y control del personal de campo.",
        to: "/servicios/gestion-de-flotas",
      },
      {
        title: "Cadena de frío en reefers",
        body: "Sensores de temperatura y humedad con alerta temprana ante fallas de contenedor refrigerado.",
        to: "/servicios/soluciones-aplicadas",
      },
    ],
    risks: [
      "Atropellos en patio",
      "Colisiones con contenedores",
      "Microsueño en turno noche",
      "Pérdida de carga refrigerada",
    ],
  },
  {
    slug: "mineria",
    name: "Minería",
    short:
      "Fatiga, flotas y combustible en operaciones remotas, con comunicación satelital donde no llega el celular.",
    title: "Gestión de Flotas para Minería | XEVOLVEX",
    description:
      "Monitoreo de fatiga, flotas y combustible en operaciones mineras remotas. Comunicación satelital y celular para cualquier campamento.",
    h1: "Minería",
    lede: "Empezamos dando gestión de flotas a mineras de categoría mundial. Ahí aprendimos que en minería la telemetría se juzga por su comportamiento en el peor sitio, no en el mejor.",
    image: mineriaImg,
    imageAlt: "Camiones mineros en tajo abierto al anochecer",
    intro: [
      "Acompañamos operaciones mineras en seguridad, control y monitoreo, incluyendo los retos únicos de comunicaciones en locaciones remotas y de gran altitud.",
      "Monitoreamos y localizamos maquinaria, personal, vehículos ligeros e instrumentos de alto valor, independientemente del tamaño del campamento y del área de operación.",
    ],
    focus: [
      {
        title: "Fatiga en jornadas extendidas",
        body: "Régimen de días en campamento, altura y turnos de 12 horas: monitoreamos microsueño y distracción en volquetes, cargadores y buses de personal.",
        to: "/servicios/gestion-de-fatiga",
      },
      {
        title: "Control de combustible",
        body: "Trazabilidad desde la cisterna hasta la maquinaria, con RFID y sensores integrados a su ERP para cerrar el balance de consumo.",
        to: "/servicios/soluciones-aplicadas",
      },
      {
        title: "Comunicaciones sin cobertura",
        body: "Enlaces satelitales y almacenamiento a bordo para no perder eventos en zonas sin señal celular.",
        to: "/servicios/gestion-de-flotas",
      },
      {
        title: "Seguridad perimetral",
        body: "Guardia virtual con IA sobre cámaras de acceso, polvorines, talleres y almacenes.",
        to: "/servicios/soluciones-aplicadas",
      },
    ],
    risks: [
      "Microsueño en volquetes",
      "Merma de combustible",
      "Zonas restringidas",
      "Indisponibilidad de maquinaria",
    ],
  },
  {
    slug: "agricultura",
    name: "Agricultura",
    short:
      "Telemetría agrícola, sensores IoT de riego y clima, y seguridad perimetral en fundos extensos.",
    title: "Telemetría Agrícola y Sensores IoT | XEVOLVEX",
    description:
      "Sensores de temperatura, humedad y caudal, control de motobombas y seguridad perimetral con IA para corporaciones agrícolas.",
    h1: "Agricultura",
    lede: "Un fundo es una operación distribuida: hectáreas sin cobertura, activos móviles de bajo costo y ventanas de cosecha que no se repiten.",
    image: multimodalImg,
    imageAlt: "Vista aérea nocturna de vías de transporte de carga",
    intro: [
      "Tenemos amplia experiencia con la industria agrícola: desde seguridad, control y monitoreo de flota y personal, hasta siembra, cultivo y cosecha. Resolvemos los retos de comunicaciones con distintas tecnologías inalámbricas, incluyendo LoRaWAN para sensores dispersos.",
      "Conocemos bien la industria agrícola y sus desafíos propios: estacionalidad, mano de obra temporal y presión de costo por hectárea.",
    ],
    focus: [
      {
        title: "Sensores remotos inalámbricos",
        body: "Temperatura, humedad, flujo y volúmenes de líquidos aplicados a telemetría agrícola. Desarrollamos nuevos sensores mes a mes.",
        to: "/servicios/soluciones-aplicadas",
      },
      {
        title: "Flota, maquinaria y motobombas",
        body: "Visibilidad de tractores, cosechadoras, personal, motobombas e instrumentos de valor, con software para controlar siembra, abonado y cosecha.",
        to: "/servicios/gestion-de-flotas",
      },
      {
        title: "Seguridad perimetral",
        body: "Detecte robo y vandalismo en cualquier clima y en zonas remotas de sus sembríos con analítica de video por IA.",
        to: "/servicios/soluciones-aplicadas",
      },
      {
        title: "Combustible de punta a punta",
        body: "Desde el distribuidor mayorista y las cisternas hasta la motobomba más pequeña en el campo.",
        to: "/servicios/soluciones-aplicadas",
      },
    ],
    risks: [
      "Robo de cosecha",
      "Fallas de riego",
      "Consumo de combustible sin control",
      "Personal temporal sin trazabilidad",
    ],
  },
  {
    slug: "transporte-multimodal",
    name: "Transporte multimodal",
    short:
      "Carretera, vía férrea, aire y mar en una sola operación de monitoreo y control de carga.",
    title: "Monitoreo de Carga Multimodal | XEVOLVEX",
    description:
      "Visibilidad total de carga por carretera, vía férrea, aire y mar. Candados de contenedor, sensores de apertura y control de despachos.",
    h1: "Transporte multimodal",
    lede: "Cuando la carga cambia de modo, se pierde la visibilidad. Nuestro trabajo es que no se corte la cadena de datos.",
    image: multimodalImg,
    imageAlt: "Intercambio vial y ferroviario iluminado de noche",
    intro: [
      "Enlace sus modalidades de transporte en una sola operación integral de monitoreo y control: carretera, vía férrea, aérea, fluvial y marítima. Resolvemos los retos de comunicaciones con satelital (Orbcomm, Inmarsat), celular 2G/3G/4G y LoRaWAN.",
    ],
    focus: [
      {
        title: "Sensores de carga",
        body: "Movimiento, temperatura, humedad, aperturas no autorizadas y candados electrónicos de contenedor.",
        to: "/servicios/soluciones-aplicadas",
      },
      {
        title: "Despacho y cumplimiento",
        body: "Visibilidad de vehículos, locomotoras, maquinaria, contenedores y carga, con software de despacho y monitoreo de ruta.",
        to: "/servicios/gestion-de-flotas",
      },
      {
        title: "Conducción en carretera",
        body: "ADAS, fatiga y video de cabina para las etapas de carretera, donde ocurre el mayor riesgo de siniestro.",
        to: "/servicios/gestion-de-fatiga",
      },
      {
        title: "Patios y talleres",
        body: "Seguridad perimetral remota en almacenes, talleres y patios, en cualquier país donde opere.",
        to: "/servicios/soluciones-aplicadas",
      },
    ],
    risks: [
      "Robo en tránsito",
      "Apertura no autorizada",
      "Siniestros en carretera",
      "Quiebre de cadena de frío",
    ],
  },
  {
    slug: "industrias-pesadas",
    name: "Industrias pesadas",
    short:
      "Petroquímica, siderurgia, cemento, construcción y energía: telemática robusta para entornos exigentes.",
    title: "Telemática para Industria Pesada | XEVOLVEX",
    description:
      "IoT y gestión de flotas para petroquímica, siderurgia, cemento, construcción y energía. Análisis predictivo y control de riesgos.",
    h1: "Industrias pesadas",
    lede: "Donde el entorno castiga los equipos y un incidente detiene toda la planta, la telemetría tiene que ser aburridamente confiable.",
    image: nocImg,
    imageAlt: "Centro de monitoreo 24/7 con pantallas de operación",
    intro: [
      "La industria pesada es única: petroquímica —gas y petróleo—, siderurgia, cemento, construcción y generación de energía. La gestión de flotas con IoT optimiza el uso de equipos, reduce paradas y sostiene los estándares de seguridad del sector.",
    ],
    focus: [
      {
        title: "Seguridad laboral y ATEX",
        body: "Detección de puntos ciegos, control de accesos a zonas restringidas y monitoreo de personal en planta.",
        to: "/servicios/soluciones-aplicadas",
      },
      {
        title: "Disponibilidad de equipos",
        body: "Horómetros, códigos de falla y mantenimiento predictivo sobre maquinaria crítica.",
        to: "/servicios/gestion-de-flotas",
      },
      {
        title: "Fatiga en operación continua",
        body: "Monitoreo de operadores en plantas de tres turnos y en transporte interno de materiales.",
        to: "/servicios/gestion-de-fatiga",
      },
      {
        title: "Video con IA en planta",
        body: "Analítica sobre cámaras existentes para detectar anomalías, incendios incipientes e intrusiones.",
        to: "/servicios/video-telematica",
      },
    ],
    risks: [
      "Paradas no planificadas",
      "Accesos indebidos",
      "Colisiones en planta",
      "Incumplimiento de estándares",
    ],
  },
  {
    slug: "gestion-de-residuos",
    name: "Gestión de residuos",
    short:
      "Rutas de recolección calle por calle, control de volúmenes y reportes para municipalidades y operadores.",
    title: "Gestión de Flotas de Recolección | XEVOLVEX",
    description:
      "Optimice rutas de recolección calle por calle, controle volúmenes y cumpla regulaciones. Para municipalidades y operadores de residuos.",
    h1: "Gestión de residuos",
    lede: "El servicio se juzga en la calle: cuadra recorrida, contenedor vaciado y vecino atendido. Eso es exactamente lo que medimos.",
    image: fatigaImg,
    imageAlt: "Cabina de vehículo de recolección en operación nocturna",
    intro: [
      "Conocemos el detalle de su operación diaria: rutas repetitivas en zonas urbanas, personal expuesto en el estribo, maniobras en reversa y una obligación de reporte ante la autoridad.",
      "Ayudamos a optimizar la operación de su flota y personal reduciendo riesgos laborales y accidentes, y dando visibilidad y control verificable del servicio.",
    ],
    focus: [
      {
        title: "Cumplimiento de ruta",
        body: "Cobertura calle por calle, cuadras omitidas, tiempos por sector y evidencia para el municipio o el cliente.",
        to: "/servicios/gestion-de-flotas",
      },
      {
        title: "Maniobras y personal",
        body: "Cámaras de reversa, detección de puntos ciegos y control del personal que trabaja junto a la unidad.",
        to: "/servicios/video-telematica",
      },
      {
        title: "Fatiga en turnos de madrugada",
        body: "Monitoreo de somnolencia y distracción en los turnos de mayor riesgo del servicio.",
        to: "/servicios/gestion-de-fatiga",
      },
      {
        title: "Combustible y disposición final",
        body: "Consumo por ruta y verificación de descargas en planta o relleno sanitario autorizado.",
        to: "/servicios/soluciones-aplicadas",
      },
    ],
    risks: [
      "Cuadras no atendidas",
      "Accidentes del personal de estribo",
      "Descargas no autorizadas",
      "Reclamos vecinales sin evidencia",
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
