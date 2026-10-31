import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";
import { Button, HeroShell } from "../components/Ui";

const links = [
  ["About", "/about"],
  ["Products", "/products"],
  ["Services", "/services"],
  ["Machines", "/equipment"],
  ["Food safety", "/food-safety"],
  ["Industries", "/industries"],
  ["Facility", "/facilities"],
  ["FAQ", "/faq"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
  ["Privacy", "/privacy"],
];

export default function NotFound() {
  useTitle("404 Not Found");
  return (
    <HeroShell image="/media/images/cookies-hero.jpg" className="items-center text-center">
      <p className="text-[7rem] leading-none font-extrabold tracking-tight text-gold md:text-[9rem]">404</p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">That page came out of the oven empty.</h1>
      <p className="mx-auto mt-4 max-w-md text-white/65">The link is broken or the page has moved. Nothing more dramatic than that. Here is everything else on the site.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">Back to home <span aria-hidden="true">→</span></Button>
        <Button to="/contact" variant="ghost">Request a Quote</Button>
      </div>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
        {links.map(([label, to]) => (
          <Link key={to} to={to} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/40 hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </HeroShell>
  );
}
