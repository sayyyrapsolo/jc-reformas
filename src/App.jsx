import { useEffect, useMemo } from "react";

export default function ConstruccionLandingPage() {
  const siteUrl = "https://www.jcreformasmadrid.com";
  const businessName = "JC Reformas";
  const businessPhone = "+34642540901";
  const businessEmail = "jc4721336@gmail.com";
  const businessAddress = "Madrid, España";

  const title =
    "Reformas en Madrid | Reformas integrales, obra nueva y mantenimiento | JC Reformas";
  const description =
    "Empresa de reformas en Madrid especializada en reformas integrales, obra nueva, rehabilitación y mantenimiento técnico. Presupuesto rápido por WhatsApp y atención directa.";
  const canonicalUrl = siteUrl;

  const sectionBadgeClass =
    "inline-flex items-center rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-amber-300 shadow-[0_0_24px_rgba(212,175,55,0.08)] md:text-base";

  const services = [
    {
      title: "Obra nueva en Madrid",
      desc: "Proyectos residenciales y comerciales con planificación precisa, control de costes y entregas realistas.",
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
      result: "+250 viviendas entregadas",
      image: "/proyecto1.jpeg",
      alt: "Reforma residencial terminada en Madrid por JC Reformas",
    },
    {
      title: "Centro Logístico Delta",
      category: "Industrial",
      result: "Plazo optimizado un 18%",
      image: "/proyecto2.jpeg",
      alt: "Proyecto industrial ejecutado en Madrid por JC Reformas",
    },
    {
      title: "Oficinas Áurea",
      category: "Corporativo",
      result: "Reforma integral llave en mano",
      image: "/proyecto3.jpeg",
      alt: "Reforma de oficinas en Madrid realizada por JC Reformas",
    },
  ];

  const steps = [
    {
      title: "Escuchamos",
      desc: "Entendemos la necesidad real del cliente, el tipo de reforma y el objetivo final del espacio.",
    },
    {
      title: "Planificamos",
      desc: "Definimos fases, tiempos, materiales y presupuesto sin humo ni improvisaciones de última hora.",
    },
    {
      title: "Ejecutamos",
      desc: "Coordinamos la obra con seguimiento continuo, control de calidad y comunicación clara durante todo el proceso.",
    },
    {
      title: "Entregamos",
      desc: "Cerramos con revisión final, documentación y soporte posterior para dejar el trabajo bien rematado.",
    },
  ];

  const faqs = [
    {
      question: "¿Hacéis reformas integrales en Madrid?",
      answer:
        "Sí. Realizamos reformas integrales de viviendas, locales y oficinas en Madrid con planificación, ejecución y seguimiento completo.",
    },
    {
      question: "¿También trabajáis obra nueva y rehabilitación?",
      answer:
        "Sí. Además de reformas, ejecutamos obra nueva, rehabilitación y mantenimiento técnico para clientes particulares y empresas.",
    },
    {
      question: "¿Cómo puedo pedir presupuesto?",
      answer:
        "Puedes pedir presupuesto por WhatsApp, teléfono o correo electrónico. Te respondemos con atención directa y una valoración inicial.",
    },
    {
      question: "¿En qué zonas trabajáis?",
      answer:
        "Trabajamos principalmente en Madrid y alrededores, estudiando cada proyecto según su alcance y necesidades técnicas.",
    },
  ];

  const seoSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          name: businessName,
          url: siteUrl,
          telephone: businessPhone,
          email: businessEmail,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Madrid",
            addressCountry: "ES",
          },
          areaServed: [
            {
              "@type": "City",
              name: "Madrid",
            },
          ],
          image: [`${siteUrl}/portada.jpg`],
          priceRange: "€€",
          description,
          makesOffer: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              areaServed: "Madrid",
            },
          })),
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          url: siteUrl,
          name: businessName,
          inLanguage: "es-ES",
        },
        {
          "@type": "FAQPage",
          "@id": `${siteUrl}/#faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    }),
    [businessEmail, businessName, businessPhone, description, faqs, services, siteUrl]
  );

  useEffect(() => {
    document.title = title;

    const upsertMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }

      Object.entries(attributes).forEach(([key, value]) => {
        element?.setAttribute(key, value);
      });
    };

    const upsertLink = (rel, href) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        document.head.appendChild(element);
      }

      element.href = href;
    };

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });
    upsertMeta('meta[name="theme-color"]', {
      name: "theme-color",
      content: "#09090b",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: `${siteUrl}/portada.jpg`,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertLink("canonical", canonicalUrl);
  }, [canonicalUrl, description, siteUrl, title]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />

      <div className="min-h-screen bg-zinc-950 text-white">
        <a
          href="https://wa.me/34642540901?text=Hola%20quiero%20información%20sobre%20una%20reforma"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp con JC Reformas"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition hover:scale-105 md:bottom-6 md:right-6"
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
            <path d="M19.11 17.41c-.28-.14-1.65-.82-1.91-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.17.19-.34.21-.62.07-.28-.14-1.17-.43-2.23-1.36-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.34.43-.51.14-.17.19-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2 3.06 4.86 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.65-.68 1.88-1.33.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.55-.33z" />
            <path d="M16.02 3C9.39 3 4 8.39 4 15.02c0 2.65.87 5.09 2.34 7.07L4 29l7.1-2.32c1.9 1.04 4.08 1.64 6.32 1.64 6.63 0 12.02-5.39 12.02-12.02C29.44 8.39 24.05 3 17.42 3h-1.4zm0 21.54c-2.04 0-4.03-.55-5.76-1.6l-.41-.24-4.22 1.38 1.39-4.11-.27-.42a9.53 9.53 0 0 1-1.49-5.03c0-5.25 4.28-9.53 9.53-9.53 2.55 0 4.94.99 6.74 2.79 1.8 1.8 2.79 4.19 2.79 6.74 0 5.25-4.28 9.53-9.53 9.53z" />
          </svg>
        </a>

        <header className="relative min-h-[100svh] w-full overflow-hidden">
          <img
            src="/portada.jpg"
            alt="JC Reformas, empresa de reformas integrales en Madrid"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 18%" }}
            fetchPriority="high"
            decoding="async"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-zinc-950" />

          <div className="relative z-10 flex min-h-[100svh] flex-col">
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-white lg:px-12">
              <a
                href="tel:+34642540901"
                className="font-medium text-white transition hover:text-amber-300"
              >
                <span className="text-amber-400">Telf:</span> +34 642 54 09 01
              </a>
              <a
                href={`mailto:${businessEmail}`}
                className="text-left font-medium text-white transition hover:text-amber-300 sm:text-right"
              >
                <span className="text-amber-400">Email:</span> {businessEmail}
              </a>
            </div>

            <div className="flex flex-1 items-end justify-center px-4 pb-8 text-center md:px-6 md:pb-10 lg:pb-12">
              <div className="flex w-full max-w-5xl flex-col items-center justify-end px-4 md:px-6">
                

                <nav
                  aria-label="Secciones principales"
                  className="mt-28 flex w-full max-w-4xl flex-wrap justify-center gap-4 px-4 md:mt-32 md:px-6 lg:mt-36"
                >
                  <a
                    href="#servicios"
                    className="flex-1 min-w-[140px] rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:scale-105 sm:flex-none"
                  >
                    Servicios
                  </a>
                  <a
                    href="#proyectos"
                    className="flex-1 min-w-[140px] rounded-2xl border border-zinc-700 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400 sm:flex-none"
                  >
                    Proyectos
                  </a>
                  <a
                    href="#proceso"
                    className="flex-1 min-w-[140px] rounded-2xl border border-zinc-700 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400 sm:flex-none"
                  >
                    Cómo trabajamos
                  </a>
                  <a
                    href="#contacto"
                    className="flex-1 min-w-[140px] rounded-2xl border border-zinc-700 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400 sm:flex-none"
                  >
                    Contacto
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section id="servicios" className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className={sectionBadgeClass}>Servicios</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Empresa de reformas en Madrid para viviendas, locales y oficinas
              </h2>
              <p className="mt-4 text-zinc-400">
                Ejecutamos reformas integrales, obra nueva, rehabilitación, mantenimiento técnico y
                dirección de proyecto en Madrid con foco en calidad, tiempos y comunicación clara.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05]"
                >
                  <div className="text-3xl" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{service.desc}</p>
                
                </article>
              ))}
            </div>
          </section>

          <section id="proyectos" className="border-y border-white/10 bg-white/[0.02]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <div className={sectionBadgeClass}>Proyectos</div>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Reformas y construcciones en Madrid pensadas para transmitir confianza
                </h2>
                <p className="mt-4 text-zinc-400">
                  Mostramos ejemplos de obra residencial, industrial y corporativa para que el cliente
                  entienda el nivel de ejecución y acabado que puede esperar.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <article
                    key={project.title}
                    className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900"
                  >
                    <div className="relative h-56 overflow-hidden bg-zinc-950">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
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
                      <div className="mt-5 rounded-2xl bg-white/5 p-4 text-sm text-zinc-200">
                        {project.result}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="proceso" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className={sectionBadgeClass}>Proceso</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Cómo trabajamos una reforma de principio a fin
              </h2>
              <p className="mt-4 leading-8 text-zinc-400">
                El proceso está pensado para facilitar la decisión del cliente y explicar con claridad
                cómo organizamos cada reforma o proyecto de construcción en Madrid.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="flex h-full gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 font-semibold text-zinc-950">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-zinc-400">{step.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="border-y border-white/10 bg-white/[0.02]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <div className={sectionBadgeClass}>Zonas de trabajo</div>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Trabajamos reformas en Madrid y alrededores
                </h2>
                <p className="mt-4 text-zinc-400">
                  Atendemos proyectos de reformas integrales, rehabilitación y mantenimiento técnico en
                  Madrid capital y zonas próximas, adaptando cada propuesta al tipo de inmueble y al alcance real de la obra.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-zinc-300">
                {[
                  "Madrid centro",
                  "Chamartín",
                  "Salamanca",
                  "Retiro",
                  "Chamberí",
                  "Pozuelo",
                  "Majadahonda",
                  "Las Rozas",
                ].map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" aria-labelledby="faq-title">
            <div className="mx-auto max-w-3xl text-center">
              <div className={sectionBadgeClass}>Preguntas frecuentes</div>
              <h2 id="faq-title" className="mt-4 text-3xl font-semibold md:text-4xl">
                Dudas habituales sobre reformas en Madrid
              </h2>
              <p className="mt-4 text-zinc-400">
                Esta sección ayuda al usuario a resolver dudas rápidas antes de pedir presupuesto y
                amplía el contenido útil de la página.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contacto"
            className="border-t border-white/10 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.10),_transparent_38%),linear-gradient(180deg,rgba(24,24,27,0.9),rgba(9,9,11,0.98))]"
          >
            <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
              <div className="mb-6 inline-flex items-center rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-amber-300 shadow-[0_0_24px_rgba(212,175,55,0.08)] md:text-base">
                Contacto
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                      Ubicación
                    </div>
                    <div className="mt-4 text-xl font-semibold text-white">{businessAddress}</div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Atendemos proyectos de reforma, obra nueva y mantenimiento técnico.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                      Respuesta
                    </div>
                    <div className="mt-4 text-xl font-semibold text-white">Atención directa</div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Presupuesto por WhatsApp, teléfono o correo según prefieras.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <a
                    href="https://wa.me/34642540901?text=Hola%20quiero%20información%20sobre%20una%20reforma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-amber-400/35 hover:bg-white/[0.06]"
                  >
                    <div>
                      <div className="text-sm font-medium text-amber-300">WhatsApp</div>
                      <div className="mt-1 text-lg font-semibold text-white">+34 642 54 09 01</div>
                    </div>
                    <div className="text-sm text-zinc-400">Abrir chat →</div>
                  </a>

                  <a
                    href="tel:+34642540901"
                    className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-amber-400/35 hover:bg-white/[0.06]"
                  >
                    <div>
                      <div className="text-sm font-medium text-amber-300">Teléfono</div>
                      <div className="mt-1 text-lg font-semibold text-white">+34 642 54 09 01</div>
                    </div>
                    <div className="text-sm text-zinc-400">Llamar →</div>
                  </a>

                  <a
                    href={`mailto:${businessEmail}`}
                    className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-amber-400/35 hover:bg-white/[0.06]"
                  >
                    <div>
                      <div className="text-sm font-medium text-amber-300">Correo electrónico</div>
                      <div className="mt-1 break-all text-lg font-semibold text-white">{businessEmail}</div>
                    </div>
                    <div className="text-sm text-zinc-400">Enviar email →</div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <div className="text-lg font-semibold text-white">JC Reformas</div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Empresa especializada en construcción, rehabilitación y reformas integrales en Madrid.
                  Trabajamos con planificación clara, materiales de calidad y una ejecución cuidada
                  para lograr resultados duraderos.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                  Contacto
                </div>
                <div className="mt-4 space-y-2 text-sm text-zinc-400">
                  <p>📍 {businessAddress}</p>
                  <p>📞 +34 642 54 09 01</p>
                  <p>✉️ {businessEmail}</p>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                  Aviso legal
                </div>
                <div className="mt-4 space-y-2 text-sm text-zinc-400">
                  <p>Titular del sitio web: JC Reformas</p>
                  <p>Actividad: servicios de construcción y reformas</p>
                  <p>Finalidad de la web: información sobre servicios profesionales</p>
                  <p>No se recopilan datos personales mediante formularios</p>
                  <p>El contacto se realiza por teléfono, correo o WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
              © {new Date().getFullYear()} JC Reformas · Todos los derechos reservados
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

