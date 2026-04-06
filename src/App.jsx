export default function ConstruccionLandingPage() {
  const services = [
    {
      title: "Obra nueva",
      desc: "Proyectos residenciales y comerciales ejecutados con planificación precisa, control de costes y entregas realistas.",
      icon: "🏗️",
    },
    {
      title: "Reformas integrales",
      desc: "Transformamos viviendas, locales y oficinas con diseño funcional, acabados sólidos y una ejecución limpia.",
      icon: "🧱",
    },
    {
      title: "Mantenimiento técnico",
      desc: "Soluciones preventivas y correctivas para comunidades, naves y edificios que no pueden permitirse sorpresas.",
      icon: "🛠️",
    },
    {
      title: "Dirección de proyecto",
      desc: "Coordinación de gremios, seguimiento de hitos y comunicación clara para que todo avance sin caos de obra.",
      icon: "📐",
    },
  ];

  const projects = [
    {
      title: "Residencial Horizonte",
      category: "Vivienda",
      result: "+32 viviendas entregadas",
      image: "/proyecto1.jpeg",
    },
    {
      title: "Centro Logístico Delta",
      category: "Industrial",
      result: "Plazo optimizado un 18%",
      image: "/proyecto2.jpeg",
    },
    {
      title: "Oficinas Áurea",
      category: "Corporativo",
      result: "Reforma integral llave en mano",
      image: "/proyecto3.jpeg",
    },
  ];

  const stats = [
    { value: "+15", label: "Años construyendo" },
    { value: "+240", label: "Proyectos completados" },
    { value: "98%", label: "Clientes satisfechos" },
    { value: "24h", label: "Respuesta inicial" },
  ];

  const steps = [
    {
      title: "Escuchamos",
      desc: "Entendemos la necesidad real del cliente, no solo el plano bonito.",
    },
    {
      title: "Planificamos",
      desc: "Definimos fases, tiempos, materiales y presupuesto sin humo.",
    },
    {
      title: "Ejecutamos",
      desc: "Coordinamos la obra con seguimiento continuo y control de calidad.",
    },
    {
      title: "Entregamos",
      desc: "Cerramos con revisión final, documentación y soporte posterior.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <a
  href="https://wa.me/34642540901?text=Hola%20quiero%20información%20sobre%20una%20reforma"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition hover:scale-105"
>
  <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
    <path d="M19.11 17.41c-.28-.14-1.65-.82-1.91-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.17.19-.34.21-.62.07-.28-.14-1.17-.43-2.23-1.36-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.34.43-.51.14-.17.19-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2 3.06 4.86 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.65-.68 1.88-1.33.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.55-.33z"/>
    <path d="M16.02 3C9.39 3 4 8.39 4 15.02c0 2.65.87 5.09 2.34 7.07L4 29l7.1-2.32c1.9 1.04 4.08 1.64 6.32 1.64 6.63 0 12.02-5.39 12.02-12.02C29.44 8.39 24.05 3 17.42 3h-1.4zm0 21.54c-2.04 0-4.03-.55-5.76-1.6l-.41-.24-4.22 1.38 1.39-4.11-.27-.42a9.53 9.53 0 0 1-1.49-5.03c0-5.25 4.28-9.53 9.53-9.53 2.55 0 4.94.99 6.74 2.79 1.8 1.8 2.79 4.19 2.79 6.74 0 5.25-4.28 9.53-9.53 9.53z"/>
  </svg>
</a>
     <section className="relative min-h-[100svh] md:h-screen w-full overflow-hidden">
 <img
  src="/portada.jpg"
  className="absolute inset-0 h-full w-full object-cover"
  style={{ objectPosition: "center" }}
/>

  {/* degradado que fusiona con el fondo de la web */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-zinc-950" />

  <div className="relative z-10 flex h-full flex-col">
    <header className="flex items-center justify-between px-6 py-6 lg:px-12">
      <div className="text-lg font-semibold tracking-wide text-amber-400">
      
      </div>
    </header>

    <div className="flex flex-1 items-center justify-center">
      <div className="text-center px-6">
     <h1

  style={{
    background: "linear-gradient(180deg,#f5e6a8,#d4af37,#b8962e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: "350px",
    fontWeight: "700"
  }}
>
  Reformas con acabados profesionales
</h1>
       
      </div>
    </div>
  </div>
</section>

{/* botones debajo de la portada */}
<section className="relative z-20 bg-zinc-950 py-10">
  <div className="relative z-20 mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-6 -mt-60">

    <a
      href="#servicios"
      className="rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:scale-105"
    >
      Servicios
    </a>

    <a
      href="#proyectos"
      className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
    >
      Proyectos
    </a>

    <a
      href="#proceso"
      className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
    >
      Proceso
    </a>

    <a
      href="#contacto"
      className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
    >
      Contacto
    </a>

  </div>
</section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:px-8">

        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.3em] text-amber-400">Servicios</div>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Lo que hacemos y lo que hacemos bien</h2>
          <p className="mt-4 text-zinc-400">
            Nada de páginas que prometen de todo y luego parecen un folleto triste. Aquí el usuario entiende rápido qué ofreces, por qué confiar y qué paso dar después.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05]"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{service.desc}</p>
              <div className="mt-5 text-sm font-medium text-amber-400">Más información</div>
            </div>
          ))}
        </div>
      </section>

      <section id="proyectos" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.3em] text-amber-400">Proyectos</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Construcciones que venden confianza antes de la primera llamada</h2>
            </div>
            <a href="#contacto" className="text-sm font-medium text-zinc-300 transition hover:text-white">
              Hablar con un técnico →
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={project.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt="Proyecto construcción"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-200">
                    Caso {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-amber-400">{project.category}</div>
                  <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 text-zinc-400">
                    Proyecto ejecutado con foco en tiempos, seguridad, coordinación y acabados duraderos.
                  </p>
                  <div className="mt-5 rounded-2xl bg-white/5 p-4 text-sm text-zinc-200">{project.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-amber-400">Proceso</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Un flujo simple, claro y sin teatro corporativo</h2>
            <p className="mt-4 leading-8 text-zinc-400">
              La experiencia está pensada para que el usuario encuentre rápido la información clave: servicios, pruebas de confianza, proyectos y un formulario directo. Menos ruido, más conversión.
            </p>
          </div>

          <div className="grid gap-5">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 font-semibold text-zinc-950">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-zinc-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section id="contacto" className="border-t border-white/10 bg-zinc-900/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-amber-400">Contacto</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Cuéntanos tu proyecto</h2>
            <p className="mt-4 max-w-xl leading-8 text-zinc-400">
              Obra nueva, reforma, rehabilitación o mantenimiento. Escríbenos y te respondemos con una propuesta seria. Sin venderte castillos de hormigón en el aire.
            </p>
            <div className="mt-8 space-y-4 text-zinc-300">
              <div>📍 Madrid, España</div>
              <div>📞 +34 642 54 09 01</div>
              <div>✉️  jc4721336@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-zinc-950">
  <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

    <div className="grid gap-10 md:grid-cols-3">

      <div>
        <div className="text-lg font-semibold text-white">JC Reformas</div>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Empresa especializada en construcción y reformas integrales en Madrid.
          Trabajamos con planificación clara, materiales de calidad y una ejecución
          cuidada para lograr resultados duraderos.
        </p>
      </div>

      <div>
        <div className="text-sm font-semibold uppercase tracking-wider text-amber-400">Contacto</div>
        <div className="mt-4 space-y-2 text-sm text-zinc-400">
          <p>📍 Madrid, España</p>
          <p>📞 +34 642 54 09 01</p>
          <p>✉️  jc4721336@gmail.com</p>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold uppercase tracking-wider text-amber-400">Aviso legal</div>
        <div className="mt-4 space-y-2 text-sm text-zinc-400">
          <p>Titular del sitio web: JC Reformas</p>
          <p>Actividad: servicios de construcción y reformas</p>
          <p>Finalidad de la web: información sobre servicios profesionales</p>
          <p>No se recopilan datos personales mediante formularios</p>
          <p>El contacto se realiza por teléfono o WhatsApp</p>
        </div>
      </div>

    </div>

    <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
      © {new Date().getFullYear()} JC Reformas · Todos los derechos reservados
    </div>

  </div>
</footer>
    </div>
  );
}
