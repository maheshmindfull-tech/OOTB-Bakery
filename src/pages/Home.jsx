import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";
import { Button, Container, Eyebrow, Icon, Media, TextLink } from "../components/Ui";
import { certs, clips } from "../data/site";

const highlights = [
  { icon: "cookie", title: "Nut-free site", body: "Peanuts and tree nuts are not received at the bakery. Every ingredient is checked against its specification before it comes in." },
  { icon: "cookie", title: "Core bakery products", body: "Cookies, biscotti, snowball cookies, meringues, mini loaves, frozen cookie dough and batters." },
  { icon: "box", title: "Pack formats", body: "Bulk, retail-ready, individually wrapped and frozen, all packed in the same building." },
  { icon: "check", title: "QA checkpoints", body: "From ingredient intake to dispatch, each one checked and recorded on every run." },
];

const offers = [
  {
    icon: "tag",
    title: "Private label",
    image: "/media/images/cookies-stack.jpg",
    body: "Your brand on the pack, our bakery behind it. We bake, pack and label to your specification, so the bag, the label, the case and the pallet are handled by the same team that baked the product.",
    points: ["Your artwork and your pack format", "Retail-ready and club formats", "Bulk for further processing"],
    to: "/services#private-label",
  },
  {
    icon: "cookie",
    title: "Contract baking",
    image: "/media/images/home/mixer.jpg",
    body: "Your recipe, run on our equipment under our food safety program. You keep the formula. We run it, document it and ship it.",
    points: ["Formula stays yours", "Documented batch records", "Repeatable bake profiles"],
    to: "/services#contract-baking",
  },
  {
    icon: "swap",
    title: "Recipe transfer and scale-up",
    image: "/media/images/home/dough-line.jpg",
    body: "Moving a kitchen recipe onto a production line changes it. We work through the changes with you before the first run, not after.",
    points: ["Bench to line translation", "Ingredient substitution where needed", "Trial runs before commitment"],
    to: "/services#recipe-transfer",
  },
  {
    icon: "box",
    title: "Packing in the same building",
    image: "/media/images/home/packaging.jpg",
    body: "Bagging, heat sealing, shrink wrapping, labelling, case packing and display pack assembly, done on site as soon as the product has cooled.",
    points: ["Automated bagging line", "Hand assembly for gift and display packs", "Case coding and pallet labelling"],
    to: "/services#packaging",
  },
  {
    icon: "flake",
    title: "Frozen dough and batters",
    image: "/media/images/batter.jpg",
    body: "Frozen cookie dough and muffin, cupcake and brownie batter, made and portioned so your team or your customer bakes it off fresh.",
    points: ["Portioned frozen dough", "Batter in the format you need", "Held frozen until dispatch"],
    to: "/services#frozen",
  },
  {
    icon: "truck",
    title: "Storage and dispatch",
    image: "/media/images/warehouse.jpg",
    body: "Finished goods held on site and shipped as your orders land, so product never moves between buildings before it reaches you.",
    points: ["Finished goods storage", "Pick and pack", "Case and pallet labelling"],
    to: "/services#storage",
  },
];

const steps = [
  ["01", "Brief and feasibility", "chat", "/media/images/home/how/step-1.jpg", "You tell us the product, the format and the volume you are planning. We tell you what the bakery can run today, what would need to change and whether we are the right fit. If we are not, we say so early."],
  ["02", "Sample and specification", "clipboard", "/media/images/home/how/step-2.jpg", "We bake a sample against your reference product and write the specification with you. Ingredients, piece weight, appearance, pack format and shelf life get settled here, not halfway through production."],
  ["03", "Scale-up trial", "mixer", "/media/images/home/how/step-3.jpg", "The approved sample is run on production equipment. Recipes behave differently on a line than in a kitchen, so this is where mixing, forming and bake profiles are set and recorded."],
  ["04", "Food safety and documentation", "shield", "/media/images/home/how/step-4.jpg", "Ingredients are approved, allergen status is confirmed, the HACCP plan is checked against the product and the batch records are set up. Nothing runs until this is done."],
  ["05", "First production run", "factory", "/media/images/home/how/step-5.jpg", "We run, check and release the first batch with your specification in hand. Metal detection and checkweighing are challenged at the start of the run and at set points through it."],
  ["06", "Ongoing supply", "truck", "/media/images/home/how/step-6.jpg", "Repeat runs are scheduled against your forecast. Finished goods can be held on site and shipped as your orders land, from the same building that made them."],
];

function StepIcon({ name }) {
  const common = { viewBox: "0 0 24 24", className: "h-[22px] w-[22px]", fill: "none", stroke: "currentColor", strokeWidth: 1.35, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (name === "chat") {
    return (
      <svg {...common}>
        <path d="M5.2 6.2h13.6a1 1 0 011 1V14a1 1 0 01-1 1H9.2L5.2 18.2V7.2a1 1 0 011-1z" />
        <circle cx="9" cy="10.6" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="12" cy="10.6" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10.6" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "clipboard") {
    return (
      <svg {...common}>
        <rect x="7" y="5.2" width="10" height="14.2" rx="1.5" />
        <path d="M9.4 5.4V4.4a1.1 1.1 0 011.1-1.1h3a1.1 1.1 0 011.1 1.1v1" />
        <path d="M9.6 10h4.8M9.6 13h4.8M9.6 16h3" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 2.8l7.2 2.5v6.2c0 4.1-3 6.7-7.2 8.7-4.2-2-7.2-4.6-7.2-8.7V5.3L12 2.8z" />
      </svg>
    );
  }
  if (name === "factory") {
    return (
      <svg {...common}>
        <path d="M3.5 20V11.2L8 14v-2.8l4.4 2.8V9.2H20.5V20H3.5z" />
        <path d="M16.2 9.2V5.6M15.2 6.2c.5-.9 1.5-.7 1.8.2" />
        <path d="M6.4 16.4h1.6M10.2 16.4h1.6M14.6 16.4h1.6" />
      </svg>
    );
  }
  if (name === "truck") {
    return (
      <svg {...common}>
        <path d="M3 8.2h10.2V16H3z" />
        <path d="M13.2 10.4h3.8l2.8 3.1V16h-6.6" />
        <circle cx="7" cy="17.4" r="1.35" />
        <circle cx="16.6" cy="17.4" r="1.35" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M8.2 19.6h7.6" />
      <path d="M9.4 19.6v-2.1h5.2v2.1" />
      <path d="M10 17.5c0-2.4 1.1-4 2.6-4h1.6" />
      <path d="M14.2 7.2v5.2" />
      <path d="M14.2 7.2h3.1a1.55 1.55 0 010 3.1h-1.2" />
      <path d="M7.4 14.4c.5 2.2 2 3.4 4.2 3.4 1.5 0 2.6-.6 3.2-1.5" />
    </svg>
  );
}

const clipFilms = {
  "clip-batch-mixing": { src: "/media/videos/ten/batch-mixing.mp4", length: "0:10" },
  "clip-portioned-dough": { src: "/media/videos/ten/portioned-dough.mp4", length: "0:10" },
  "clip-line-inspection": { src: "/media/videos/ten/line-inspection.mp4", length: "0:10" },
};

const featuredClips = ["clip-batch-mixing", "clip-portioned-dough", "clip-line-inspection"].map((id) => {
  const clip = clips.find((item) => item.id === id);
  return { ...clip, video: clipFilms[id].src, length: clipFilms[id].length };
});

const badges = ["Nut-free facility", "BRCGS and SQF", "CFIA licensed", "Kosher available"];

const buyers = [
  ["Start-up food brands", "/industries#startups", "chat"],
  ["Established food brands", "/industries#established", "target"],
  ["Grocery and club retail", "/industries#grocery", "cube"],
  ["Foodservice and cafe chains", "/industries#foodservice", "cup"],
];

export default function Home() {
  useTitle("Home");
  const [detail, setDetail] = useState(null);
  const [clip, setClip] = useState(null);

  useEffect(() => {
    if (!detail && !clip) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setDetail(null);
        setClip(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [detail, clip]);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <img src="/media/images/cookies-hero.jpg" alt="" className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[52%] object-cover lg:block" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#14110e_0%,#14110e_46%,rgba(20,17,14,0.72)_68%,rgba(20,17,14,0.28)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_88%_42%,rgba(176,78,28,0.28),transparent_58%)]" />
        <Container className="relative pt-16 pb-20 md:pt-24 md:pb-28">
          <Eyebrow>Nut-free contract bakery in Etobicoke, Ontario</Eyebrow>
          <h1 className="max-w-3xl text-[3rem] leading-[0.98] font-extrabold tracking-[-0.04em] md:text-[4.6rem]">
            Nut-free baking at private label scale.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            OOTB Bakery is a certified nut-free contract bakery and private label manufacturer in the Greater Toronto Area. Bring us a recipe or a brief. We mix, bake, pack and ship it from one site at 288 Judson Street.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact">Request a Quote <span aria-hidden="true">→</span></Button>
            <Button to="/equipment" variant="ghost">See the line running</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white/80 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                {badge}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-12">
          {highlights.map((item, index) => (
            <div key={item.title} className={`flex flex-col items-start gap-3 md:items-center md:text-center ${index ? "md:border-l md:border-line md:pl-4" : ""}`}>
              <Icon name={item.icon} className="h-7 w-7 text-copper" />
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{item.body}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(210px,260px)_minmax(0,1fr)] lg:gap-10">
            <div>
              <p className="text-[12px] font-bold tracking-[0.14em] text-copper uppercase">What we do</p>
              <h2 className="mt-3 text-[1.85rem] leading-[1.08] font-extrabold tracking-[-0.03em] md:text-[2.15rem]">One partner from recipe to retail shelf.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Most brands end up managing a baker, a co-packer, a warehouse and a freight broker separately. We mix, bake, pack and dispatch in one building, under one food safety program, on one set of records.
              </p>
              <TextLink to="/services" className="mt-5">Read more</TextLink>
            </div>
            <div className={`line-marquee ${detail ? "is-paused" : ""}`}>
              <div className="line-track">
                {[0, 1].map((copy) => (
                  <div className="line-set" key={copy} aria-hidden={copy === 1 || undefined} inert={copy === 1 ? true : undefined}>
                    {offers.map((item) => (
                      <button
                        key={`${item.title}-${copy}`}
                        type="button"
                        className="line-card group relative block overflow-hidden rounded-[18px] text-left"
                        onClick={() => setDetail(item)}
                      >
                        <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                        <span className="absolute right-3 bottom-3 left-3 text-[13px] leading-snug font-semibold text-white">
                          {item.title} <span aria-hidden="true">→</span>
                        </span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        {detail && (
          <div className="overlay-in fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label={detail.title} onClick={() => setDetail(null)}>
            <article className="pop-in grid max-h-[92vh] w-[min(920px,calc(100vw-2rem))] overflow-hidden bg-paper shadow-2xl sm:h-[min(520px,86vh)] sm:grid-cols-2" onClick={(event) => event.stopPropagation()}>
              <img src={detail.image} alt="" className="h-40 w-full object-cover sm:h-full" />
              <div className="flex flex-col justify-center overflow-hidden px-5 py-5 sm:h-full sm:px-8 sm:py-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f8ece6] text-copper">
                  <Icon name={detail.icon} />
                </span>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight">{detail.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{detail.body}</p>
                {detail.points && (
                  <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
                    {detail.points.map((point) => (
                      <li key={point}><span className="mr-2 text-copper">–</span>{point}</li>
                    ))}
                  </ul>
                )}
                <TextLink to={detail.to} className="mt-5">{detail.link || "Read more"}</TextLink>
              </div>
            </article>
          </div>
        )}
      </section>

      <section className="bg-[#3a261c] py-16 text-white md:py-20">
        <Container>
          <Eyebrow>Machines in action</Eyebrow>
          <h2 className="max-w-xl text-[2.15rem] leading-[1.05] font-extrabold tracking-[-0.03em] md:text-[2.75rem]">See how your product would actually get made.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            Mixing and depositing, baking, multihead weighing and bagging, powder filling, flow wrapping, coding and inspection. See the equipment and short clips by process before you ever walk the floor.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredClips.map((item) => (
              <article key={item.id} className="flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-paper text-ink">
                <button type="button" className="block w-full text-left" onClick={() => setClip(item)} aria-label={`Watch ${item.title}`}>
                  <Media image={item.image} alt="" label={item.kicker} play className="h-44 rounded-none" />
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
                  <button type="button" onClick={() => setClip(item)} className="mt-auto pt-4 text-left text-xs font-semibold tracking-[0.12em] text-copper uppercase">
                    Watch clip <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/equipment" variant="outline">Open the full library <span aria-hidden="true">→</span></Button>
            <Button to="/facilities#visit" variant="outline">Book a plant tour</Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] lg:gap-12">
            <div className={`line-marquee order-2 lg:order-1 ${detail ? "is-paused" : ""}`}>
              <div className="line-track">
                {[0, 1].map((copy) => (
                  <div className="line-set" key={copy} aria-hidden={copy === 1 || undefined} inert={copy === 1 ? true : undefined}>
                    {certs.map((cert) => (
                      <article key={`${cert.title}-${copy}`} className="cert-card flex h-full flex-col rounded-[22px] border border-line bg-paper p-5 md:p-6">
                        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink px-1 text-center text-[10px] leading-tight font-bold whitespace-pre-line text-white">{cert.short}</span>
                        <span className="mt-4 h-0.5 w-8 rounded-full bg-copper" aria-hidden="true" />
                        <h3 className="mt-4 text-lg leading-snug font-extrabold tracking-[-0.02em]">{cert.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{cert.body}</p>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[12px] font-bold tracking-[0.14em] text-copper uppercase">Certifications</p>
              <h2 className="mt-3 text-[1.85rem] leading-[1.08] font-extrabold tracking-[-0.03em] md:text-[2.15rem]">The audit trail your buyer will ask for.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Retail and club buyers do not take your word for food safety, and neither should you. These are the schemes and licences behind the product we ship.
              </p>
              <TextLink to="/food-safety" className="mt-5">Our food safety program</TextLink>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Current certificates are available on request. Certification is product specific, so ask for the scope that covers your product.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#efe6d8] text-ink">
        <div className="grid lg:grid-cols-2">
          <img src="/media/images/home/line.jpg" alt="Baker watching cookies on the production line" className="h-80 w-full object-cover lg:h-full lg:min-h-[520px]" />
          <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 lg:py-16">
            <div className="max-w-xl">
              <Eyebrow>Who we serve</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">Built for brands that have to ship, not just launch.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                Private label for retail, co-packed product for distributors and repeat production for brands that have outgrown their own kitchen.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Nut-free is a site decision, not a claim on a label. Peanuts and tree nuts do not come into the bakery. That removes the hardest allergen problem in baking at the door, instead of trying to manage it with scheduling and cleaning. If your retailer or your customer needs a nut-free supply chain, this is the reason to talk to us first.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {buyers.map(([title, to, icon]) => (
                  <Link key={title} to={to} className="text-center">
                    <Icon name={icon} className="mx-auto h-6 w-6 text-copper" />
                    <p className="mt-2 text-xs font-semibold leading-snug">{title}</p>
                  </Link>
                ))}
              </div>
              <Button to="/industries" className="mt-8 self-start">All six buyer types <span aria-hidden="true">→</span></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative overflow-hidden bg-[#1f1106] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[390px] lg:h-[420px]">
          <img src="/media/images/home/how/hero.jpg" alt="" className="absolute top-0 right-0 h-full w-full object-cover object-[78%_28%] lg:w-[72%]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#1f1106_0%,#1f1106_30%,rgba(31,17,6,0.62)_44%,rgba(31,17,6,0.16)_62%,rgba(31,17,6,0)_80%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,17,6,0)_0%,rgba(31,17,6,0)_42%,rgba(31,17,6,0.72)_70%,#1f1106_88%,#1f1106_100%)]" />
        </div>
        <Container className="relative pt-12 pb-12 md:pt-16 md:pb-16">
          <div className="max-w-[34rem]">
            <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#e4c48a] uppercase">
              <span className="h-px w-8 bg-[#e4c48a]" />
              How it works
            </p>
            <h2 className="font-serif text-[2.15rem] leading-[1.05] font-semibold tracking-[-0.02em] text-[#f6f1ea] sm:text-[2.7rem] lg:text-[3.05rem]">
              Six steps from first call
              <span className="mt-1 block text-[#e0b56a]">to repeat supply.</span>
            </h2>
            <p className="mt-4 max-w-[32rem] text-[14.5px] leading-relaxed text-white/75 md:text-[15px]">
              No stage gets skipped. The order matters, because most of the cost of a bad production run is decided long before the line starts.
            </p>
          </div>
          <ol className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-6 lg:gap-x-[1.15rem]">
            {steps.map(([n, title, icon, image, body], index) => (
              <li key={n} className="relative min-w-0">
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute top-[46px] left-[calc(50%+26px)] z-0 hidden w-[calc(100%+1.15rem-52px)] -translate-y-1/2 items-center lg:flex" aria-hidden="true">
                    <span className="h-px flex-1 bg-[#e6d3b0]" />
                    <svg viewBox="0 0 10 12" className="mx-0.5 h-2.5 w-2.5 shrink-0 text-[#e6d3b0]">
                      <path d="M2.2 1.4L7.4 6 2.2 10.6" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="h-px flex-1 bg-[#e6d3b0]" />
                  </div>
                )}
                <div className="relative text-center">
                  <p className="text-[12px] font-medium tracking-[0.12em] text-[#ead9c0]">{n}</p>
                  <div className="relative mx-auto mt-2 h-[52px] w-[52px]">
                    <span className="relative z-10 grid h-[52px] w-[52px] place-items-center rounded-full border border-[#e7d4b4] bg-[#1f1106] text-[#f3e7d6]">
                      <StepIcon name={icon} />
                    </span>
                  </div>
                </div>
                <div className="relative z-10 mt-4 bg-[#1f1106]">
                  <img src={image} alt="" className="aspect-[2.05/1] w-full rounded-[7px] object-cover" />
                  <h3 className="mt-3 text-[14.5px] leading-snug font-bold tracking-[-0.01em] text-white">{title}</h3>
                  <p className="mt-1.5 text-[12px] leading-[1.45] text-[#d7cfc6]">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-paper px-5 pt-10 pb-16 md:px-8">
        <div className="relative mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-6 overflow-hidden rounded-[28px] px-6 py-8 md:flex-row md:items-center md:px-10">
          <img src="/media/images/cookies-hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#3a261c]/88" />
          <div className="relative max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-white md:text-4xl">Tell us what you want to make.</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
              Send the product, the format and the volume you are planning. We will tell you what we can run, what we would change and what we need from you to quote it.
            </p>
          </div>
          <Button to="/contact" className="relative shrink-0">Request a Quote <span aria-hidden="true">→</span></Button>
        </div>
      </section>

      {clip && (
        <div className="overlay-in fixed inset-0 z-50 grid place-items-center bg-[#100c09]/80 p-4 backdrop-blur-[2px]" role="dialog" aria-modal="true" aria-labelledby="home-clip-title" onClick={() => setClip(null)}>
          <article className="pop-in max-h-[92vh] w-full max-w-3xl overflow-auto rounded-[28px] bg-paper text-ink shadow-[0_30px_80px_rgba(0,0,0,0.45)]" onClick={(event) => event.stopPropagation()}>
            <div className="relative bg-black">
              <video
                key={clip.id}
                className="aspect-video w-full bg-black object-cover"
                src={clip.video}
                poster={clip.image}
                autoPlay
                muted
                playsInline
                controls
                preload="auto"
              />
              <button
                type="button"
                onClick={() => setClip(null)}
                className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/80"
                aria-label="Close"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" strokeLinecap="round" />
                </svg>
              </button>
              <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
                {clip.length}
              </span>
            </div>
            <div className="px-6 py-6 md:px-8">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-eyebrow uppercase">{clip.kicker}</p>
              <h2 id="home-clip-title" className="mt-2 text-2xl font-extrabold tracking-[-0.03em] md:text-[1.75rem]">{clip.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-[15px]">{clip.body}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button to="/equipment">Open the full library <span aria-hidden="true">→</span></Button>
                <button type="button" onClick={() => setClip(null)} className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition hover:border-ink/30">Close</button>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
