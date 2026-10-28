import { Link } from "react-router-dom";
import Logo from "./Logo";

const explore = [
  ["About", "/about"],
  ["Products", "/products"],
  ["Services", "/services"],
  ["Machines", "/equipment"],
];

const more = [
  ["Food safety", "/food-safety"],
  ["Industries", "/industries"],
  ["Facility", "/facilities"],
  ["FAQ", "/faq"],
  ["Careers", "/careers"],
];

function Col({ title, items }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.16em] text-white/45 uppercase">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map(([label, to]) => (
          <li key={to}>
            <Link to={to} className="text-sm text-white/75 hover:text-white">
              <span className="mr-2 text-white/35">•</span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 md:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Certified nut-free contract bakery and private label manufacturer at 288 Judson Street in Etobicoke, Ontario. Recipe to retail shelf, under one roof.
          </p>
        </div>
        <Col title="Explore" items={explore} />
        <Col title="More" items={more} />
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-white/45 uppercase">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="tel:+19052911013" className="text-white/80 hover:text-white">
                <span className="mr-2 text-copper">☎</span>(905) 291-1013
              </a>
            </li>
            <li>
              <a href="mailto:info@ootbinc.com" className="text-white/80 hover:text-white">
                <span className="mr-2 text-copper">✉</span>info@ootbinc.com
              </a>
            </li>
          </ul>
          <p className="mt-6 text-[11px] font-semibold tracking-[0.16em] text-white/45 uppercase">Bakery</p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            288 Judson St, Unit 16
            <br />
            Etobicoke, ON M8Z 5T6
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3 border-t border-white/10 px-5 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2026 OOTB Bakery. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/contact" className="hover:text-white">Request a Quote</Link>
          <Link to="/faq" className="hover:text-white">FAQ</Link>
          <Link to="/careers" className="hover:text-white">Careers</Link>
        </div>
      </div>
    </footer>
  );
}
