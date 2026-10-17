export const business = {
  name: "JC Reformas",
  phone: "+34642540901",
  phoneDisplay: "642 54 09 01",
  whatsapp: "34642540901",
  email: "jc4721336@gmail.com",
  city: "Madrid",
};

export const whatsappLink = (text = "Hola, quiero información sobre una reforma") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

export const services = [
  {
    title: "Reformas integrales",
    desc: "Pisos, locales y oficinas de principio a fin: demolición, instalaciones, albañilería, suelos, carpintería y pintura, con un único interlocutor.",
  },
  {
    title: "Carpintería y revestimientos de madera",
    desc: "Paredes en espiga, celosías de listones, tarimas y puertas. El detalle en madera es donde más se nota un buen remate.",
  },
  {
    title: "Fontanería e instalaciones",
    desc: "Renovación de tuberías y saneamientos antes de cerrar paredes y suelos, para no tener que volver a levantar nada.",
  },
  {
    title: "Obra nueva y rehabilitación",
    desc: "Proyectos residenciales y comerciales con planificación de fases, control de costes y plazos realistas.",
  },
  {
    title: "Mantenimiento técnico",
    desc: "Reparaciones preventivas y correctivas para comunidades, naves y edificios.",
  },
  {
    title: "Dirección de obra",
    desc: "Coordinamos los gremios y te mantenemos informado de cada avance, sin que tengas que perseguir a nadie.",
  },
];

export const works = [
  { id: 1, title: "Pared revestida en madera en espiga", tag: "Carpintería", w: 720, h: 1280 },
  { id: 2, title: "Pasillo con celosía de listones de madera", tag: "Carpintería", w: 1400, h: 1867 },
  { id: 3, title: "Celosía de listones sobre suelo de madera", tag: "Carpintería", w: 1400, h: 1867 },
  { id: 7, title: "Suelo de ducha en tarima de madera", tag: "Baños", w: 960, h: 1280 },
  { id: 6, title: "Oficina con suelo laminado en tono nogal", tag: "Oficinas", w: 1400, h: 1050 },
  { id: 4, title: "Puertas y pintura interior en fase de remates", tag: "Interiores", w: 1200, h: 1600 },
  { id: 5, title: "Pasillo con puertas lacadas en blanco", tag: "Interiores", w: 1200, h: 1600 },
  { id: 8, title: "Nueva instalación de fontanería bajo el suelo", tag: "Instalaciones", w: 1368, h: 1824 },
  { id: 9, title: "Tuberías renovadas antes de cerrar la pared", tag: "Instalaciones", w: 1368, h: 1824 },
];

export const workSrc = (id, size) => `/img/trabajo-${id}-${id === 1 ? 720 : size}.webp`;

export const steps = [
  {
    title: "Nos cuentas la obra",
    desc: "Por WhatsApp, teléfono o en una visita. Nos interesa qué quieres conseguir, no solo qué hay que tirar.",
  },
  {
    title: "Presupuesto claro",
    desc: "Fases, materiales y plazos por escrito, para que sepas qué incluye cada partida antes de empezar.",
  },
  {
    title: "Ejecución con seguimiento",
    desc: "Coordinamos a todos los gremios y te contamos los avances durante la obra.",
  },
  {
    title: "Entrega revisada",
    desc: "Repasamos contigo cada remate antes de dar la obra por terminada.",
  },
];

export const areas = [
  "Madrid centro",
  "Chamartín",
  "Salamanca",
  "Retiro",
  "Chamberí",
  "Pozuelo de Alarcón",
  "Majadahonda",
  "Las Rozas",
];

export const faqs = [
  {
    q: "¿Hacéis reformas integrales en Madrid?",
    a: "Sí. Reformamos viviendas, locales y oficinas en Madrid, desde la planificación hasta la entrega, coordinando todos los gremios.",
  },
  {
    q: "¿También trabajáis obra nueva y rehabilitación?",
    a: "Sí. Además de reformas, hacemos obra nueva, rehabilitación y mantenimiento técnico para particulares y empresas.",
  },
  {
    q: "¿Cómo pido presupuesto?",
    a: "Escríbenos por WhatsApp con una descripción y, si puedes, algunas fotos del espacio. También puedes llamarnos o enviarnos un correo.",
  },
  {
    q: "¿En qué zonas trabajáis?",
    a: "Principalmente en Madrid capital y municipios cercanos. Si tu obra está algo más lejos, cuéntanos y lo valoramos.",
  },
];

export const workTypes = [
  "Reforma integral de vivienda",
  "Cocina o baño",
  "Carpintería o revestimiento de madera",
  "Fontanería o instalaciones",
  "Local u oficina",
  "Otro trabajo",
];
