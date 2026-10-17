import { useEffect, useRef, useState } from "react";
import {
  areas,
  business,
  faqs,
  services,
  steps,
  whatsappLink,
  workSrc,
  workTypes,
  works,
} from "./content.js";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 32 32" className={`${className} fill-current`} aria-hidden="true">
      <path d="M19.11 17.41c-.28-.14-1.65-.82-1.91-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.17.19-.34.21-.62.07-.28-.14-1.17-.43-2.23-1.36-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.34.43-.51.14-.17.19-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2 3.06 4.86 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.65-.68 1.88-1.33.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.55-.33z" />
      <path d="M16.02 3C9.39 3 4 8.39 4 15.02c0 2.65.87 5.09 2.34 7.07L4 29l7.1-2.32c1.9 1.04 4.08 1.64 6.32 1.64 6.63 0 12.02-5.39 12.02-12.02C29.44 8.39 24.05 3 17.42 3h-1.4zm0 21.54c-2.04 0-4.03-.55-5.76-1.6l-.41-.24-4.22 1.38 1.39-4.11-.27-.42a9.53 9.53 0 0 1-1.49-5.03c0-5.25 4.28-9.53 9.53-9.53 2.55 0 4.94.99 6.74 2.79 1.8 1.8 2.79 4.19 2.79 6.74 0 5.25-4.28 9.53-9.53 9.53z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-nogal/95 text-yeso backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="JC Reformas, ir al inicio">
          <img src="/img/logo-jc.png" alt="" width="40" height="40" className="h-10 w-10" />
          <span className="heading text-xl">JC Reformas</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 text-[15px] md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-yeso/80 transition-colors hover:text-laton-claro">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${business.phone}`}
            className="hidden items-center gap-2 rounded-full border border-laton/60 px-4 py-2 text-sm font-semibold text-laton-claro transition-colors hover:bg-laton hover:text-nogal sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-yeso md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-white/10 px-4 pb-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-lg text-yeso/90"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-nogal text-yeso">
      <div className="listones pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 lg:block" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-14 sm:px-6 md:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="flex flex-col justify-center">
          <p className="text-[15px] text-laton-claro">Empresa de reformas en Madrid</p>
          <h1 className="display mt-4 text-[clamp(3rem,9vw,6.75rem)]">
            Reformas que se notan en los remates
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-yeso/80">
            Reformas integrales de pisos, locales y oficinas, con especial cuidado en la carpintería
            y los acabados en madera. Un solo equipo coordina toda la obra.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hola, quiero pedir presupuesto para una reforma")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-laton px-7 py-4 text-base font-semibold text-nogal transition-colors hover:bg-laton-claro"
            >
              <WhatsAppIcon />
              Pedir presupuesto por WhatsApp
            </a>
            <a
              href="#trabajos"
              className="inline-flex items-center justify-center rounded-full border border-yeso/30 px-7 py-4 text-base font-semibold text-yeso transition-colors hover:border-yeso"
            >
              Ver trabajos
            </a>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-[15px] text-yeso/75 sm:grid-cols-3">
            <li className="border-l-2 border-laton pl-3">Presupuesto por escrito</li>
            <li className="border-l-2 border-laton pl-3">Trato directo, sin intermediarios</li>
            <li className="border-l-2 border-laton pl-3">Madrid y alrededores</li>
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <img
            src={workSrc(2, 1400)}
            srcSet={`${workSrc(2, 720)} 720w, ${workSrc(2, 1400)} 1400w`}
            sizes="(min-width: 1024px) 38vw, 90vw"
            width="1400"
            height="1867"
            alt="Pasillo reformado con celosía de listones de madera"
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-[2px] object-cover shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)]"
          />
          <figcaption className="mt-3 text-sm text-yeso/60">
            Celosía de listones de madera en un pasillo reformado por nuestro equipo.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="display text-5xl md:text-6xl">Qué hacemos</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-piedra">
            Trabajamos en viviendas, locales y oficinas. Puedes encargarnos la reforma completa o
            solo la parte que necesites.
          </p>
        </div>
        <ul className="divide-y divide-grafito/15 border-y border-grafito/15">
          {services.map((s) => (
            <li key={s.title} className="grid gap-2 py-6 sm:grid-cols-[1fr_1.3fr] sm:gap-8">
              <h3 className="heading text-2xl">{s.title}</h3>
              <p className="leading-relaxed text-piedra">{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Works() {
  const dialogRef = useRef(null);
  const [current, setCurrent] = useState(null);

  const open = (index) => {
    setCurrent(index);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const move = (delta) => setCurrent((i) => (i + delta + works.length) % works.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    dialog.addEventListener("keydown", onKey);
    return () => dialog.removeEventListener("keydown", onKey);
  }, []);

  const item = current !== null ? works[current] : null;

  return (
    <section id="trabajos" className="bg-yeso-2">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="display text-5xl md:text-6xl">Trabajos reales</h2>
          <p className="max-w-md leading-relaxed text-piedra">
            Fotos de nuestras obras, algunas terminadas y otras a mitad de camino, porque lo que no
            se ve también cuenta.
          </p>
        </div>

        <ul className="mt-12 columns-2 gap-4 md:columns-3 md:gap-6">
          {works.map((w, i) => (
            <li key={w.id} className="mb-4 break-inside-avoid md:mb-6">
              <button
                type="button"
                onClick={() => open(i)}
                className="group block w-full text-left"
                aria-label={`Ampliar foto: ${w.title}`}
              >
                <img
                  src={workSrc(w.id, 720)}
                  width={w.w}
                  height={w.h}
                  alt={w.title}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-[2px] transition-[filter] group-hover:brightness-90"
                />
                <span className="mt-2 block text-sm text-piedra">{w.tag}</span>
                <span className="block text-[15px] font-medium leading-snug">{w.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setCurrent(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-auto max-h-[92vh] w-[min(92vw,960px)] bg-transparent p-0 text-yeso"
        aria-label="Visor de fotos"
      >
        {item && (
          <figure className="flex flex-col items-center">
            <img
              src={workSrc(item.id, 1400)}
              alt={item.title}
              className="max-h-[78vh] w-auto rounded-[2px] object-contain"
            />
            <figcaption className="mt-3 flex w-full items-center justify-between gap-3">
              <button type="button" onClick={() => move(-1)} className="rounded-full border border-yeso/30 px-4 py-2 text-sm hover:border-yeso">
                Anterior
              </button>
              <span className="text-center text-sm text-yeso/85">{item.title}</span>
              <button type="button" onClick={() => move(1)} className="rounded-full border border-yeso/30 px-4 py-2 text-sm hover:border-yeso">
                Siguiente
              </button>
            </figcaption>
          </figure>
        )}
        <button
          type="button"
          onClick={close}
          className="fixed top-4 right-4 rounded-full bg-yeso px-4 py-2 text-sm font-semibold text-nogal"
        >
          Cerrar
        </button>
      </dialog>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <h2 className="display max-w-2xl text-5xl md:text-6xl">Cómo trabajamos una reforma</h2>
      <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t-2 border-grafito pt-5">
            <span className="display text-4xl text-laton">{i + 1}</span>
            <h3 className="heading mt-3 text-2xl">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-piedra">{s.desc}</p>
          </li>
        ))}
      </ol>

      <div className="mt-20 grid gap-6 border-t border-grafito/15 pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <h3 className="heading text-3xl">Dónde trabajamos</h3>
        <div>
          <p className="leading-relaxed text-piedra">
            Madrid capital y municipios cercanos. Estas son algunas de las zonas donde hacemos obras
            con más frecuencia:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {areas.map((a) => (
              <li key={a} className="rounded-full border border-grafito/20 px-3.5 py-1.5 text-[15px]">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-yeso-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <h2 id="faq-title" className="display text-5xl md:text-6xl">
          Preguntas frecuentes
        </h2>
        <div className="border-t border-grafito/15">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-grafito/15">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-semibold">
                {f.q}
                <span className="faq-icon text-2xl leading-none text-laton transition-transform" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-[60ch] pb-6 leading-relaxed text-piedra">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const tipo = data.get("tipo");
    const zona = String(data.get("zona") || "").trim();
    const detalle = String(data.get("detalle") || "").trim();
    const nombre = String(data.get("nombre") || "").trim();

    if (!detalle) {
      setError("Escribe una breve descripción de la obra para poder valorarla.");
      return;
    }
    setError("");

    const lines = [
      `Hola, soy ${nombre || "un cliente"} y quiero pedir presupuesto.`,
      `Tipo de trabajo: ${tipo}`,
      zona && `Zona: ${zona}`,
      `Descripción: ${detalle}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const field =
    "mt-1.5 w-full rounded-[3px] border border-yeso/25 bg-nogal-2 px-4 py-3 text-base text-yeso placeholder:text-yeso/40 focus:border-laton focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-[15px] text-yeso/85">
          Tipo de trabajo
          <select name="tipo" className={field} defaultValue={workTypes[0]}>
            {workTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block text-[15px] text-yeso/85">
          Barrio o municipio
          <input name="zona" type="text" autoComplete="address-level2" placeholder="Por ejemplo, Chamberí" className={field} />
        </label>
      </div>
      <label className="block text-[15px] text-yeso/85">
        Cuéntanos la obra
        <textarea
          name="detalle"
          rows={4}
          placeholder="Metros aproximados, qué quieres cambiar, plazos..."
          className={field}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "form-error" : undefined}
        />
      </label>
      <label className="block text-[15px] text-yeso/85">
        Tu nombre (opcional)
        <input name="nombre" type="text" autoComplete="given-name" className={field} />
      </label>

      {error && (
        <p id="form-error" role="alert" className="text-[15px] text-laton-claro">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-laton px-7 py-4 text-base font-semibold text-nogal transition-colors hover:bg-laton-claro"
        >
          <WhatsAppIcon />
          Enviar por WhatsApp
        </button>
        <p className="text-sm text-yeso/55">Se abre WhatsApp con tu mensaje listo. No guardamos tus datos en la web.</p>
      </div>
    </form>
  );
}

function Contact() {
  const links = [
    { href: whatsappLink(), label: "WhatsApp", value: business.phoneDisplay, Icon: WhatsAppIcon, external: true },
    { href: `tel:${business.phone}`, label: "Teléfono", value: business.phoneDisplay, Icon: PhoneIcon },
    { href: `mailto:${business.email}`, label: "Correo", value: business.email, Icon: MailIcon },
  ];

  return (
    <section id="contacto" className="bg-nogal text-yeso">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-8">
        <div>
          <h2 className="display text-5xl md:text-6xl">Pide tu presupuesto</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-yeso/75">
            Cuéntanos qué quieres hacer y te respondemos con una primera valoración. Si puedes,
            añade fotos del espacio en el chat.
          </p>
          <div className="mt-10">
            <QuoteForm />
          </div>
        </div>

        <div className="lg:pt-4">
          <h3 className="heading text-2xl">También puedes contactarnos directamente</h3>
          <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {links.map(({ href, label, value, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 py-5 transition-colors hover:text-laton-claro"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-laton/50 text-laton-claro">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-sm text-yeso/60">{label}</span>
                    <span className="block break-all text-lg font-semibold">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-yeso/60">Trabajamos en {business.city} y alrededores.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-nogal pb-24 text-yeso/65 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex items-start gap-3">
          <img src="/img/logo-jc.png" alt="" width="36" height="36" className="h-9 w-9" loading="lazy" />
          <p className="leading-relaxed">
            <span className="block font-semibold text-yeso">JC Reformas</span>
            Reformas integrales, carpintería y obra en Madrid.
          </p>
        </div>
        <div className="space-y-1.5">
          <p className="font-semibold text-yeso">Aviso legal</p>
          <p>Titular del sitio web: JC Reformas</p>
          <p>Actividad: servicios de construcción y reformas</p>
          <p>Esta web no recoge datos personales mediante formularios. El contacto se realiza por teléfono, correo o WhatsApp.</p>
        </div>
        <div className="space-y-1.5 md:text-right">
          <p>
            <a href={`tel:${business.phone}`} className="hover:text-laton-claro">{business.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${business.email}`} className="hover:text-laton-claro">{business.email}</a>
          </p>
          <p>© {new Date().getFullYear()} JC Reformas</p>
        </div>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-nogal/95 p-3 backdrop-blur md:hidden">
      <a
        href={`tel:${business.phone}`}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-yeso/30 py-3 font-semibold text-yeso"
      >
        <PhoneIcon /> Llamar
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 font-semibold text-white"
      >
        <WhatsAppIcon /> WhatsApp
      </a>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a JC Reformas por WhatsApp"
      className="fixed right-6 bottom-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgb(0_0_0/0.3)] transition-transform hover:scale-105 md:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

export default function App() {
  return (
    <>
      <a href="#servicios" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-laton focus:px-4 focus:py-2 focus:text-nogal">
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <FloatingWhatsApp />
    </>
  );
}
