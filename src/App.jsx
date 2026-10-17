import { useEffect, useRef, useState } from "react";
import {
  areas,
  business,
  faqs,
  heroSlides,
  services,
  steps,
  whatsappLink,
  workSrc,
  workTypes,
  works,
} from "./content.js";

const nav = [
  { href: "#estudio", label: "Estudio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

/* ---------- Iconos ---------- */

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
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
    </svg>
  );
}

function Arrow({ dir = "right", className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      {dir === "right" ? <path d="M4 12h15m-6-6 6 6-6 6" /> : <path d="M20 12H5m6-6-6 6 6 6" />}
    </svg>
  );
}

/* ---------- Animaciones al hacer scroll (un solo observador para toda la página) ---------- */

function useScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );
    document.querySelectorAll(".reveal, .reveal-img").forEach((el) => io.observe(el));

    const words = [...document.querySelectorAll(".words")];
    const parallax = [...document.querySelectorAll("[data-parallax]")];
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      words.forEach((block) => {
        const r = block.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.25)));
        const list = block.querySelectorAll(".word");
        const lit = Math.round(progress * list.length);
        list.forEach((w, i) => w.classList.toggle("is-lit", i < lit));
      });
      if (!reduce) {
        parallax.forEach((el) => {
          const r = el.parentElement.getBoundingClientRect();
          const offset = (r.top + r.height / 2 - vh / 2) * Number(el.dataset.parallax);
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.12)`;
        });
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
}

function Words({ text, className = "" }) {
  return (
    <p className={`words ${className}`}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="word">
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

/* ---------- Cabecera ---------- */

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = solid || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-lino transition-[background-color,border-color] duration-500 ${
        dark ? "border-b border-white/10 bg-espresso/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10">
        <a href="#inicio" className="flex items-center gap-3" aria-label="JC Reformas, ir al inicio">
          <img src="/img/logo-jc.png" alt="" width="40" height="40" className="h-10 w-10" />
          <span className="serif text-[1.35rem] tracking-[-0.01em]">JC Reformas</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 text-[15px] lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-lino/75 transition-colors hover:text-lino">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink("Hola, quiero pedir presupuesto para una reforma")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-lino/40 px-5 py-2.5 text-sm tracking-wide transition-colors hover:border-roble-claro hover:bg-roble-claro hover:text-espresso sm:inline-flex"
          >
            Pedir presupuesto
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 8h18M3 16h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="h-[calc(100svh-4.5rem)] px-5 pt-6 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="serif block border-b border-white/10 py-5 text-4xl"
            >
              {item.label}
            </a>
          ))}
          <a href={`tel:${business.phone}`} className="mt-8 inline-flex items-center gap-3 text-lg text-roble-claro">
            <PhoneIcon /> {business.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, [active]);

  return (
    <section id="inicio" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-espresso text-lino">
      {heroSlides.map((s, i) => (
        <div key={s.id} className="hero-slide absolute inset-0" data-active={i === active} aria-hidden={i !== active}>
          <img
            src={workSrc(s.id, 1400)}
            srcSet={`${workSrc(s.id, 720)} 720w, ${workSrc(s.id, 1400)} 1400w`}
            sizes="100vw"
            alt=""
            className="h-full w-full object-cover"
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(21_17_13/0.55)_0%,rgb(21_17_13/0.25)_30%,rgb(21_17_13/0.6)_55%,rgb(21_17_13/0.95)_100%)] md:bg-[linear-gradient(180deg,rgb(21_17_13/0.55)_0%,rgb(21_17_13/0.15)_35%,rgb(21_17_13/0.35)_60%,rgb(21_17_13/0.92)_100%)]" />

      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-28 md:px-10 md:pb-14">
        <p className="hero-fade mb-6 text-[15px] text-lino/80">Reformas e interiores en Madrid</p>
        <h1 className="serif text-[clamp(3.1rem,10.5vw,10rem)]">
          <span className="hero-line"><span>Espacios hechos</span></span>
          <span className="hero-line"><span>con oficio,</span></span>
          <span className="hero-line"><span>remate a remate</span></span>
        </h1>

        <div className="hero-fade mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hola, quiero pedir presupuesto para una reforma")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-lino px-7 py-4 text-[15px] font-medium text-espresso transition-colors hover:bg-roble-claro"
            >
              <WhatsAppIcon /> Pedir presupuesto
            </a>
            <a
              href="#trabajos"
              className="inline-flex items-center justify-center border border-lino/40 px-7 py-4 text-[15px] transition-colors hover:border-lino"
            >
              Ver trabajos
            </a>
          </div>

          <div className="hidden min-w-[300px] md:mr-20 md:block">
            <p className="text-sm text-lino/70" aria-live="polite">
              {heroSlides[active].caption}
            </p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className="slide-progress relative h-6"
                  data-active={i === active}
                  aria-label={`Ver foto: ${s.caption}`}
                >
                  <span className="absolute inset-x-0 top-1/2 block h-px origin-left bg-lino" style={{ transform: i < active ? "scaleX(1)" : "scaleX(0)" }} />
                  <span className="absolute inset-x-0 top-1/2 block h-px bg-lino/25" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Estudio / manifiesto ---------- */

function Studio() {
  return (
    <section id="estudio" className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-40">
      <div className="grid gap-14 lg:grid-cols-12">
        <p className="reveal text-[15px] text-humo lg:col-span-3">El estudio</p>
        <div className="lg:col-span-9">
          <Words
            className="serif text-[clamp(2rem,4.4vw,4.25rem)] leading-[1.08]"
            text="Reformamos viviendas, locales y oficinas en Madrid con un mismo equipo de principio a fin. Cuidamos lo que se ve, la madera, los encuentros, la luz, y también lo que queda oculto detrás de cada pared."
          />
          <div className="mt-14 grid gap-10 border-t border-grafito/15 pt-10 sm:grid-cols-3">
            {[
              ["Un solo interlocutor", "Coordinamos todos los gremios. Tú hablas con una persona."],
              ["Presupuesto por escrito", "Partidas, materiales y plazos claros antes de empezar."],
              ["Acabados en madera", "Espiga, listones, tarima: el detalle que distingue una obra."],
            ].map(([t, d], i) => (
              <div key={t} className="reveal" style={{ "--delay": `${i * 0.1}s` }}>
                <h3 className="text-lg font-medium">{t}</h3>
                <p className="mt-2 leading-relaxed text-humo">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Destacado: la madera ---------- */

function Feature() {
  return (
    <section className="bg-lino-2">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-28 md:px-10 md:py-36 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-7">
          <div className="reveal-img relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <img
              data-parallax="0.08"
              src={workSrc(3, 1400)}
              alt="Celosía de listones de madera sobre suelo de madera"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
            />
          </div>
          <div className="reveal-img absolute -right-2 -bottom-14 hidden w-[38%] overflow-hidden border-[10px] border-lino-2 md:block lg:-right-16">
            <img src={workSrc(1, 720)} alt="Revestimiento de pared en madera en espiga" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="reveal text-[15px] text-humo">Nuestro sello</p>
          <h2 className="reveal serif mt-5 text-[clamp(2.6rem,5vw,4.75rem)]">La madera, bien rematada</h2>
          <p className="reveal mt-7 text-lg leading-relaxed text-humo">
            Celosías de listones que separan sin cerrar, paredes revestidas en espiga, tarimas que
            entran hasta la ducha. Son los trabajos que más nos piden y donde mejor se ve la
            diferencia entre montar y rematar.
          </p>
          <a href="#trabajos" className="reveal group mt-10 inline-flex items-center gap-3 border-b border-grafito pb-1.5 text-[15px] font-medium">
            Ver más trabajos
            <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Servicios con vista previa de foto ---------- */

function Services() {
  const [hover, setHover] = useState(null);
  const previewRef = useRef(null);

  const onMove = (e) => {
    const el = previewRef.current;
    if (el) el.style.transform = `translate3d(${e.clientX + 70}px, ${e.clientY - 140}px, 0)`;
  };

  return (
    <section id="servicios" className="relative bg-espresso text-lino">
      <div className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36">
        <div className="grid gap-8 lg:grid-cols-12">
          <p className="reveal text-[15px] text-lino/60 lg:col-span-3">Servicios</p>
          <h2 className="reveal serif text-[clamp(2.6rem,5.5vw,5.5rem)] lg:col-span-9">
            Todo lo que necesita una reforma, con un mismo equipo
          </h2>
        </div>

        <ul className="mt-16 border-t border-white/15 md:mt-24" onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
          {services.map((s, i) => (
            <li
              key={s.title}
              onMouseEnter={() => setHover(i)}
              className="reveal group grid gap-3 border-b border-white/15 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
            >
              <h3 className="serif text-[clamp(2rem,3.6vw,3.4rem)] transition-[color,transform] duration-500 group-hover:translate-x-3 group-hover:text-roble-claro md:col-span-6 lg:col-span-5 lg:col-start-4">
                {s.title}
              </h3>
              <p className="max-w-md leading-relaxed text-lino/65 md:col-span-6 lg:col-span-4">{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-30 hidden h-[280px] w-[220px] overflow-hidden lg:block"
        style={{ transform: "translate3d(-999px,-999px,0)" }}
      >
        {services.map((s, i) => (
          <img
            key={s.img}
            src={workSrc(s.img, 720)}
            alt=""
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 ${
              hover === i ? "scale-100 opacity-100" : "scale-110 opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------- Trabajos: carril horizontal + visor ---------- */

function Works() {
  const railRef = useRef(null);
  const dialogRef = useRef(null);
  const drag = useRef({ down: false, moved: false, x: 0, left: 0 });
  const [current, setCurrent] = useState(null);

  const scrollBy = (dir) => {
    const rail = railRef.current;
    if (rail) rail.scrollBy({ left: dir * rail.clientWidth * 0.7, behavior: "smooth" });
  };

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    const rail = railRef.current;
    drag.current = { down: true, moved: false, x: e.clientX, left: rail.scrollLeft };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 5) {
      d.moved = true;
      railRef.current.classList.add("is-dragging");
    }
    railRef.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
    railRef.current?.classList.remove("is-dragging");
  };

  const open = (i) => {
    if (drag.current.moved) {
      drag.current.moved = false;
      return;
    }
    setCurrent(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const move = (delta) => setCurrent((i) => (i + delta + works.length) % works.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    const onKey = (e) => {
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    dialog?.addEventListener("keydown", onKey);
    return () => dialog?.removeEventListener("keydown", onKey);
  }, []);

  const item = current !== null ? works[current] : null;

  return (
    <section id="trabajos" className="overflow-hidden py-28 md:py-36">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="reveal text-[15px] text-humo">Trabajos</p>
          <h2 className="reveal serif mt-5 text-[clamp(2.6rem,5.5vw,5.5rem)]">Obras reales, sin retoques</h2>
        </div>
        <div className="reveal flex items-center gap-6">
          <p className="max-w-xs text-humo">Algunas terminadas y otras a mitad de camino. Arrastra para ver más.</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollBy(-1)} aria-label="Trabajos anteriores" className="flex h-12 w-12 items-center justify-center border border-grafito/25 transition-colors hover:bg-grafito hover:text-lino">
              <Arrow dir="left" />
            </button>
            <button type="button" onClick={() => scrollBy(1)} aria-label="Más trabajos" className="flex h-12 w-12 items-center justify-center border border-grafito/25 transition-colors hover:bg-grafito hover:text-lino">
              <Arrow />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={railRef}
        className="rail mt-14 flex gap-5 overflow-x-auto px-5 select-none md:gap-8 md:px-10 xl:px-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {works.map((w, i) => (
          <li key={w.id} className={`shrink-0 ${w.w > w.h ? "w-[85vw] md:w-[58vw] lg:w-[46vw]" : "w-[72vw] md:w-[34vw] lg:w-[27vw]"}`}>
            <button type="button" onClick={() => open(i)} className="group block w-full text-left" aria-label={`Ampliar foto: ${w.title}`}>
              <div className="h-[58vh] max-h-[640px] min-h-[380px] overflow-hidden bg-lino-2">
                <img
                  src={workSrc(w.id, 1400)}
                  srcSet={`${workSrc(w.id, 720)} 720w, ${workSrc(w.id, 1400)} 1400w`}
                  sizes="(min-width: 1024px) 46vw, 85vw"
                  alt={w.title}
                  loading="lazy"
                  draggable="false"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-suave)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-[15px] font-medium leading-snug">{w.title}</span>
                <span className="shrink-0 text-sm text-humo">{w.tag}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setCurrent(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-auto max-h-[94vh] w-[min(94vw,1100px)] bg-transparent p-0 text-lino"
        aria-label="Visor de fotos"
      >
        {item && (
          <figure className="flex flex-col items-center">
            <img src={workSrc(item.id, 1400)} alt={item.title} className="max-h-[80vh] w-auto object-contain" />
            <figcaption className="mt-4 flex w-full items-center justify-between gap-4">
              <button type="button" onClick={() => move(-1)} className="flex h-11 w-11 items-center justify-center border border-lino/30 hover:border-lino" aria-label="Foto anterior">
                <Arrow dir="left" />
              </button>
              <span className="text-center text-sm text-lino/85">{item.title}</span>
              <button type="button" onClick={() => move(1)} className="flex h-11 w-11 items-center justify-center border border-lino/30 hover:border-lino" aria-label="Foto siguiente">
                <Arrow />
              </button>
            </figcaption>
          </figure>
        )}
        <button type="button" onClick={close} className="fixed top-5 right-5 border border-lino/40 px-4 py-2 text-sm text-lino hover:bg-lino hover:text-espresso">
          Cerrar
        </button>
      </dialog>
    </section>
  );
}

/* ---------- Proceso y lo que no se ve ---------- */

function Process() {
  return (
    <section id="proceso" className="bg-nogal text-lino">
      <div className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="reveal text-[15px] text-lino/60">Proceso</p>
            <h2 className="reveal serif mt-5 text-[clamp(2.6rem,5vw,4.75rem)]">Lo que no se ve también se hace bien</h2>
            <p className="reveal mt-7 max-w-md text-lg leading-relaxed text-lino/70">
              Antes de la madera y la pintura están las tuberías, los desagües y la instalación
              eléctrica. Las renovamos mientras la pared está abierta, para que no tengas que volver
              a levantar nada.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-4">
              {[8, 9].map((id, i) => (
                <div key={id} className="reveal-img overflow-hidden" style={{ transitionDelay: `${i * 0.15}s` }}>
                  <img
                    src={workSrc(id, 720)}
                    alt={id === 8 ? "Nueva instalación de fontanería bajo el suelo" : "Tuberías renovadas antes de cerrar la pared"}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7 lg:pt-20">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal grid grid-cols-[4.5rem_1fr] gap-4 border-t border-white/15 py-9 md:grid-cols-[6rem_1fr]">
                <span className="serif text-5xl text-roble-claro md:text-6xl">{i + 1}</span>
                <div>
                  <h3 className="serif text-3xl md:text-[2.4rem]">{s.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-lino/65">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Zonas ---------- */

function Areas() {
  const row = [...areas, ...areas];
  return (
    <section aria-labelledby="zonas-title" className="overflow-hidden border-b border-grafito/10 py-16 md:py-20">
      <h2 id="zonas-title" className="mx-auto max-w-[1440px] px-5 text-[15px] text-humo md:px-10">
        Dónde trabajamos: Madrid capital y alrededores
      </h2>
      <div className="mt-8 flex" aria-hidden="true">
        <div className="marquee">
          {row.map((a, i) => (
            <span key={i} className="serif flex items-center px-6 text-[clamp(2.2rem,5vw,4.5rem)] whitespace-nowrap md:px-10">
              {a}
              <span className="ml-12 inline-block h-2 w-2 rotate-45 bg-roble md:ml-20" />
            </span>
          ))}
        </div>
      </div>
      <ul className="sr-only">
        {areas.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Preguntas frecuentes ---------- */

function Faq() {
  return (
    <section aria-labelledby="faq-title" className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12">
        <h2 id="faq-title" className="reveal serif text-[clamp(2.6rem,5vw,4.75rem)] lg:col-span-4">
          Preguntas frecuentes
        </h2>
        <div className="border-t border-grafito/15 lg:col-span-7 lg:col-start-6">
          {faqs.map((f) => (
            <details key={f.q} className="reveal group border-b border-grafito/15">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-7 text-xl font-medium md:text-2xl">
                {f.q}
                <span className="faq-icon text-3xl leading-none font-light text-roble transition-transform duration-300" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-[60ch] pb-8 text-lg leading-relaxed text-humo">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contacto ---------- */

function QuoteForm() {
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
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
      `Tipo de trabajo: ${data.get("tipo")}`,
      zona && `Zona: ${zona}`,
      `Descripción: ${detalle}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const field =
    "mt-2 w-full border-0 border-b border-lino/30 bg-transparent px-0 py-3 text-lg text-lino placeholder:text-lino/35 focus:border-roble-claro focus:ring-0 focus:outline-none";
  const label = "block text-sm text-lino/60";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className={label}>
          Tipo de trabajo
          <select name="tipo" className={`${field} [&>option]:bg-espresso`} defaultValue={workTypes[0]}>
            {workTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className={label}>
          Barrio o municipio
          <input name="zona" type="text" autoComplete="address-level2" placeholder="Chamberí, Pozuelo..." className={field} />
        </label>
      </div>
      <label className={label}>
        Cuéntanos la obra
        <textarea
          name="detalle"
          rows={3}
          placeholder="Metros aproximados, qué quieres cambiar, cuándo te gustaría empezar"
          className={`${field} resize-none`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "form-error" : undefined}
        />
      </label>
      <label className={label}>
        Tu nombre (opcional)
        <input name="nombre" type="text" autoComplete="given-name" className={field} />
      </label>

      {error && (
        <p id="form-error" role="alert" className="text-roble-claro">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 bg-lino px-8 py-4 text-[15px] font-medium text-espresso transition-colors hover:bg-roble-claro"
        >
          <WhatsAppIcon /> Enviar por WhatsApp
        </button>
        <p className="max-w-xs text-sm text-lino/50">Se abre WhatsApp con tu mensaje escrito. La web no guarda tus datos.</p>
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
    <section id="contacto" className="relative overflow-hidden bg-espresso text-lino">
      <img
        src={workSrc(2, 1400)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-y-0 right-0 hidden h-full w-[34%] object-cover opacity-30 lg:block"
      />
      <div className="absolute inset-y-0 right-0 hidden w-[34%] bg-gradient-to-r from-espresso to-transparent lg:block" />

      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-5 py-28 md:px-10 md:py-36 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="reveal text-[15px] text-lino/60">Contacto</p>
          <h2 className="reveal serif mt-5 text-[clamp(3rem,7vw,7rem)]">Hablemos de tu espacio</h2>
          <p className="reveal mt-7 max-w-lg text-lg leading-relaxed text-lino/70">
            Cuéntanos qué quieres hacer y te respondemos con una primera valoración. Si puedes,
            añade fotos del espacio en el chat.
          </p>
          <div className="reveal mt-14">
            <QuoteForm />
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
          <ul className="border-t border-white/15">
            {links.map(({ href, label, value, Icon, external }) => (
              <li key={label} className="reveal">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-5 border-b border-white/15 py-6"
                >
                  <Icon className="h-5 w-5 shrink-0 text-roble-claro" />
                  <span className="min-w-0">
                    <span className="block text-sm text-lino/55">{label}</span>
                    <span className="block text-lg break-all transition-colors group-hover:text-roble-claro">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pie ---------- */

function Footer() {
  return (
    <footer className="overflow-hidden bg-espresso pb-24 text-lino/60 md:pb-0">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-10 border-t border-white/10 py-14 text-sm md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-lino">JC Reformas</p>
            <p className="mt-2 leading-relaxed">Reformas integrales, carpintería e interiores en Madrid.</p>
          </div>
          <div className="space-y-1.5 md:col-span-5">
            <p className="text-lino">Aviso legal</p>
            <p>Titular del sitio web: JC Reformas. Actividad: servicios de construcción y reformas.</p>
            <p>Esta web no recoge datos personales mediante formularios. El contacto se realiza por teléfono, correo o WhatsApp.</p>
          </div>
          <div className="space-y-1.5 md:col-span-3 md:text-right">
            <p>
              <a href={`tel:${business.phone}`} className="hover:text-lino">{business.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${business.email}`} className="hover:text-lino">{business.email}</a>
            </p>
            <p>© {new Date().getFullYear()} JC Reformas</p>
          </div>
        </div>
        <p className="serif pointer-events-none -mb-[0.18em] text-center text-[clamp(4rem,17vw,16rem)] leading-none text-lino/[0.07] select-none" aria-hidden="true">
          JC Reformas
        </p>
      </div>
    </footer>
  );
}

/* ---------- Accesos rápidos ---------- */

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-espresso/95 p-3 backdrop-blur md:hidden">
      <a href={`tel:${business.phone}`} className="inline-flex items-center justify-center gap-2 border border-lino/30 py-3.5 text-[15px] text-lino">
        <PhoneIcon /> Llamar
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-whatsapp py-3.5 text-[15px] font-medium text-white"
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
      className="fixed right-7 bottom-7 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_rgb(0_0_0/0.3)] transition-transform hover:scale-105 md:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

export default function App() {
  useScrollEffects();
  return (
    <>
      <a href="#estudio" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-lino focus:px-4 focus:py-2 focus:text-espresso">
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Studio />
        <Feature />
        <Services />
        <Works />
        <Process />
        <Areas />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <FloatingWhatsApp />
    </>
  );
}
