import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-eyebrow uppercase ${className}`}>
      <span className="h-px w-7 bg-current" />
      {children}
    </p>
  );
}

const buttonStyles = {
  primary: "bg-copper text-white hover:bg-copper-deep",
  ghost: "border border-white/30 bg-transparent text-white hover:border-white/60",
  outline: "border border-ink/12 bg-paper text-ink hover:border-ink/30",
  dark: "bg-ink text-white hover:bg-black",
};

export function Button({ to, href, children, variant = "primary", className = "", type = "button", onClick }) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${buttonStyles[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function TextLink({ to, children, className = "" }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-copper transition hover:text-copper-deep ${className}`}>
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </Link>
  );
}

const icons = {
  tag: "M4 10l6-6h6v6l-6 6H4v-6zm8-2.5a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z",
  cookie: "M12 4a8 8 0 108 8 3 3 0 01-3-3 3 3 0 01-3-3 3 3 0 01-2-2zM8 10h.01M9 14h.01M13 15h.01M15 11h.01",
  swap: "M7 7h11M15 4l3 3-3 3M17 17H6M9 14l-3 3 3 3",
  box: "M3 8l9-4 9 4-9 4-9-4zM3 8v8l9 4 9-4V8M12 12v8",
  flake: "M12 3v18M5 7l14 10M19 7L5 17M6 12h12",
  truck: "M3 7h11v8H3zM14 10h4l3 3v2h-7V10zM7 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM17 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3z",
  mixer: "M12 3v4M8 7h8M7 11h10v2a5 5 0 01-10 0v-2zM9 20h6",
  deposit: "M5 5h14v3H5zM8 8v3h8V8M10 11v7h4v-7M7 18h10",
  check: "M5 12l4 4 10-10M4 17h16",
  building: "M4 20V6l8-3 8 3v14M9 20v-4h6v4M9 9h.01M12 9h.01M15 9h.01M9 13h.01M12 13h.01M15 13h.01",
  chat: "M5 6h14v9H8l-3 3V6z",
  target: "M12 12m-7 0a7 7 0 1014 0 7 7 0 10-14 0M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0M12 5V3M12 21v-2M5 12H3M21 12h-2",
  cube: "M4 8l8-4 8 4v8l-8 4-8-4V8zM12 12l8-4M12 12v8M12 12L4 8",
  people: "M8 11a3 3 0 100-6 3 3 0 000 6zM16 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM3 19c.5-2.5 2.4-4 5-4s4.5 1.5 5 4M13 15.2c1.4-.4 2.8-.2 4 .7 1 1.2 1.4 2.4 1.6 3.1",
  grid: "M4 5h7v6H4zM13 5h7v6h-7zM4 13h16v6H4zM6 19v2M18 19v2",
  loaf: "M4 14c0-4 3-7 8-7s8 3 8 7v3H4v-3zM7 14v3M12 14v3M17 14v3",
  cup: "M7 6h8l-1 10H8L7 6zM15 8h2a2 2 0 010 4h-2M6 20h12",
  star: "M12 3l1.6 5H19l-4.4 3.2L16.2 17 12 13.8 7.8 17l1.6-5.8L5 8h5.4L12 3z",
};

export function Icon({ name = "mixer", className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d={icons[name] || icons.mixer} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function Media({ icon = "mixer", label, play = false, image, video, alt = "", className = "" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [video]);

  return (
    <div className={`group relative overflow-hidden rounded-[22px] bg-[#24160f] ${className}`}>
      {video && !play ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          src={video}
          poster={image}
          muted
          loop
          playsInline
          autoPlay
        />
      ) : image ? (
        <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(214,140,70,0.55),transparent_42%),radial-gradient(circle_at_78%_82%,rgba(70,24,10,0.75),transparent_46%),linear-gradient(160deg,#3a2418,#1a100c)]" />
          <svg viewBox="0 0 24 24" className="absolute inset-0 m-auto h-24 w-24 text-white/30" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d={icons[icon] || icons.mixer} strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </>
      )}
      {label && (
        <span className="absolute top-4 left-4 z-10 rounded-full bg-black/45 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-white uppercase">
          {label}
        </span>
      )}
      {play && (
        <span className="absolute inset-0 z-10 grid place-items-center bg-black/15">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-ink shadow-lg transition duration-300 group-hover:scale-110">
            <svg viewBox="0 0 18 18" className="ml-0.5 h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M6 3.5v11l9-5.5-9-5.5z" />
            </svg>
          </span>
        </span>
      )}
    </div>
  );
}

export function CtaBand({ eyebrow = "Next step", title, children, actions }) {
  return (
    <section className="bg-cream px-5 py-6 md:px-8 md:py-8">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-ink px-6 py-10 text-white md:px-12 md:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(186,78,32,0.55),transparent_42%)]" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] md:text-[2.6rem] md:leading-[1.05]">{title}</h2>
            {children && <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{children}</p>}
          </div>
          <div className="flex flex-wrap gap-3">{actions}</div>
        </div>
      </div>
    </section>
  );
}

export function HeroShell({ image = "/media/images/cookies-hero.jpg", className = "", full = false, children }) {
  return (
    <section className={`hero relative flex flex-col items-start justify-start overflow-hidden bg-ink text-white ${full ? "min-h-[calc(100svh-87px)]" : ""}`}>
      <img src={image} alt="" className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[52%] object-cover lg:block" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#14110e_0%,#14110e_46%,rgba(20,17,14,0.72)_68%,rgba(20,17,14,0.28)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_88%_42%,rgba(176,78,28,0.28),transparent_58%)]" />
      <Container className={`hero-copy relative w-full ${full ? "pt-12 pb-16 md:pt-16 md:pb-24" : "pt-16 pb-20 md:pt-24 md:pb-28"} ${className}`}>
        {children}
      </Container>
    </section>
  );
}

export function PageHero({ eyebrow, title, image, full = false, children }) {
  return (
    <HeroShell image={image} full={full}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="max-w-3xl text-[3rem] leading-[0.98] font-extrabold tracking-[-0.04em] md:text-[4.6rem]">{title}</h1>
      <div className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">{children}</div>
    </HeroShell>
  );
}

export function Pill({ children, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
        active ? "bg-ink text-white" : "border border-line bg-paper text-ink hover:border-ink/20"
      }`}
    >
      {children}
    </button>
  );
}
