import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./Ui";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/equipment", label: "Machines" },
  { to: "/food-safety", label: "Food safety" },
  { to: "/industries", label: "Industries" },
  { to: "/facilities", label: "Facility" },
  { to: "/faq", label: "FAQ" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-ink text-white transition-shadow duration-300 ${scrolled ? "shadow-[0_10px_30px_rgba(20,17,14,0.18)]" : ""}`}>
      <div className="h-[3px] bg-copper" />
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-5 py-2 md:px-6">
        <NavLink to="/" className="shrink-0" aria-label="OOTB Bakery home">
          <Logo />
        </NavLink>
        <nav className="ml-auto hidden items-center gap-1 xl:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-[13.5px] font-medium transition ${
                  isActive ? "bg-white/10 text-white" : "text-white/75 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto hidden xl:ml-3 xl:block">
          <Button to="/contact">Request a Quote</Button>
        </div>
        <button
          type="button"
          className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-white/15 xl:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-ink px-5 py-4 xl:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className="rounded-xl px-3 py-2.5 text-sm font-medium">
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-2">Request a Quote</Button>
          </div>
        </nav>
      )}
    </header>
  );
}
