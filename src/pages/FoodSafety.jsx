import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Media, PageHero } from "../components/Ui";
import { certs } from "../data/site";

const checkpoints = [
  {
    num: "01",
    title: "Ingredient intake",
    shortText: "Ingredients are received against the purchase order and checked before they are accepted.",
    fullText: "Ingredients are received against the purchase order and checked before they are accepted. Lot codes are recorded so every ingredient can be traced forward to the batches it went into. Allergen and nut-free status is confirmed on the specification for every ingredient, not assumed from the supplier name.",
    icon: "sack",
    details: [
      "Purchase order & seal verification on delivery",
      "Lot codes captured for complete forwards traceability",
      "Nut-free and allergen status confirmed against raw material specs",
      "Certificate of Analysis (COA) reviewed prior to intake release",
    ],
  },
  {
    num: "02",
    title: "Storage and segregation",
    shortText: "Ingredients are stored so lots stay separated and identified.",
    fullText: "Ingredients are stored so lots stay separated and identified. Because the site is nut-free, the hardest segregation problem in a bakery is removed at the door instead of managed with scheduling.",
    icon: "jar",
    details: [
      "Dedicated racked and temperature-appropriate zones",
      "Strict lot separation to eliminate cross-lot contamination",
      "Zero peanuts or tree nuts accepted into the building",
      "Clear visual labelling with intake date and batch clearance",
    ],
  },
  {
    num: "03",
    title: "Pre-operational sanitation",
    shortText: "Zones are cleaned, inspected and signed off before production starts.",
    fullText: "Zones are cleaned, inspected and signed off before production starts. Equipment, contact surfaces and the area around the line are all on the checklist. Production does not start on a zone that has not been released.",
    icon: "shieldCheck",
    details: [
      "Zone-by-zone pre-operational hygiene sign-offs",
      "ATP swab and allergen testing on food contact surfaces",
      "Chemical titration and sanitizer concentration checks",
      "Strict line clearance before any new formulation runs",
    ],
  },
  {
    num: "04",
    title: "Mixing and scaling",
    shortText: "Ingredients are scaled to the formula and mixed to a set time.",
    fullText: "Ingredients are scaled to the formula and mixed to a set time. Additions are weighed and recorded against the batch. Any deviation from the mix sheet stops the batch.",
    icon: "bowl",
    details: [
      "Calibrated precision scales for micro and macro additions",
      "Controlled mixing speeds, sequence and strict timers",
      "Dough temperature and specific gravity monitoring",
      "Two-operator verification on critical ingredients",
    ],
  },
  {
    num: "05",
    title: "Forming and bake",
    shortText: "Deposit weight and bake profile are held to the specification set during scale-up.",
    fullText: "Deposit weight and bake profile are held to the specification set during scale-up, and checked at intervals through the run. Product stays identified with its batch through the oven.",
    icon: "oven",
    details: [
      "Piece weight verified against target specifications",
      "Multi-zone oven temperature logging and belt-speed control",
      "Color, spread and bake profile spot checks every 30 minutes",
      "Batch identity maintained continuously across bake trays",
    ],
  },
  {
    num: "06",
    title: "Cooling",
    shortText: "Product is cooled to packing temperature before it is bagged.",
    fullText: "Product is cooled to packing temperature before it is bagged. Packing warm product traps moisture and shortens shelf life, so cooling is a released step, not a queue.",
    icon: "thermometer",
    details: [
      "Controlled ambient cooling to reach target packing temperature",
      "Moisture and water activity (aw) checks prior to wrapping",
      "Prevents condensation that would compromise shelf life",
      "Monitored airflow in filtered air cooling zones",
    ],
  },
  {
    num: "07",
    title: "Packing",
    shortText: "Packing is done as per the specification with proper weight check.",
    fullText: "Packing is done as per customer specification with inline weight and seal verification. Product passes an inline metal detector challenged with ferrous, non-ferrous and stainless test pieces. Rejects are held and reviewed, never returned to the line.",
    icon: "box",
    details: [
      "Inline checkweigher verifies every individual pack weight",
      "Hermetic seal integrity and gas flush checks (when specified)",
      "Multi-frequency metal detector challenged at shift start and mid-run",
      "Automated reject bin locked with strict quarantine procedures",
    ],
  },
  {
    num: "08",
    title: "Final quality check",
    shortText: "Products are checked for quality, weight and appearance.",
    fullText: "Products are checked for quality, weight, seal integrity and visual appearance against the signed reference standard. Case coding, best-before dates and carton barcodes are validated throughout the production run.",
    icon: "clipboardCheck",
    details: [
      "Visual appearance compared against golden reference standard",
      "Legibility and accuracy verification of best-before dates & lot codes",
      "Barcode scannability check on inner bags and master cases",
      "Case count and tape/glue seal inspection",
    ],
  },
  {
    num: "09",
    title: "Batch release",
    shortText: "The batch is released with all records and approvals.",
    fullText: "The batch is released with all records, QA sign-offs and regulatory approvals in hand. Production paperwork, checkweigher logs and metal detection audits are reviewed by quality assurance before product can leave the facility.",
    icon: "boxes",
    details: [
      "Comprehensive HACCP and GMP record verification",
      "QA supervisor sign-off on complete batch dossier",
      "Retain samples catalogued and archived for shelf-life tracking",
      "Quarantine status officially cleared in warehouse ERP",
    ],
  },
  {
    num: "10",
    title: "Dispatch",
    shortText: "Products are packed and dispatched as per schedule with complete documentation.",
    fullText: "Products are packed and dispatched as per schedule with complete documentation. Pallets are stretch-wrapped, edge-protected and labelled for 360-degree traceability. Carrier trailer inspection ensures temperature and cleanliness standards are met before loading.",
    icon: "truck",
    details: [
      "GS1-compliant pallet barcode labels for dual-direction traceability",
      "Outbound trailer cleanliness and temperature inspection",
      "Bill of Lading and Certificate of Conformance provided with shipment",
      "Prompt dispatch directly from our Etobicoke warehouse",
    ],
  },
];

function CheckpointIcon({ name, className = "h-7 w-7" }) {
  const common = {
    viewBox: "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "sack":
      return (
        <svg {...common}>
          <path d="M9 4.5c1.5 1 4.5 1 6 0" />
          <path d="M8.5 6.5C6 8 5 11 5 16a4 4 0 004 4h6a4 4 0 004-4c0-5-1-8-3.5-9.5" />
          <path d="M12 11v6" />
          <path d="M10 13l2-2 2 2" />
          <path d="M10 16l2-2 2 2" />
        </svg>
      );
    case "jar":
      return (
        <svg {...common}>
          <rect x="7" y="3.5" width="10" height="2.8" rx="1" />
          <path d="M6 6.3h12a2 2 0 012 2v10a3 3 0 01-3 3H7a3 3 0 01-3-3v-10a2 2 0 012-2z" />
          <path d="M12 10.5a3 3 0 013 3c0 2-2 3.5-3 3.5s-3-1.5-3-3.5a3 3 0 013-3z" />
          <path d="M12 11.5v5" />
        </svg>
      );
    case "shieldCheck":
      return (
        <svg {...common}>
          <path d="M12 3.5s6.5 1.8 6.5 7.5c0 5-3.2 8-6.5 9.5-3.3-1.5-6.5-4.5-6.5-9.5 0-5.7 6.5-7.5 6.5-7.5z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "bowl":
      return (
        <svg {...common}>
          <path d="M4.5 11.5h15a7.5 7.5 0 01-15 0z" />
          <path d="M9 19h6" />
          <path d="M17.5 4.5l-6.5 7" />
        </svg>
      );
    case "oven":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2.5" />
          <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
          <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
          <line x1="10.5" y1="7.5" x2="13.5" y2="7.5" />
          <rect x="6.5" y="11" width="11" height="7" rx="1.5" />
          <path d="M9 14.5c.5-.4 1-.4 1.5 0s1 .4 1.5 0 1-.4 1.5 0" />
          <path d="M9 16.5c.5-.4 1-.4 1.5 0s1 .4 1.5 0 1-.4 1.5 0" />
        </svg>
      );
    case "thermometer":
      return (
        <svg {...common}>
          <path d="M14 14.8V5.5a2 2 0 10-4 0v9.3a4 4 0 104 0z" />
          <circle cx="12" cy="17" r="1.5" fill="currentColor" />
          <line x1="12" y1="11" x2="12" y2="15.5" />
          <line x1="16.5" y1="6" x2="18" y2="6" />
          <line x1="16.5" y1="9" x2="18" y2="9" />
          <line x1="16.5" y1="12" x2="17.5" y2="12" />
        </svg>
      );
    case "box":
      return (
        <svg {...common}>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
          <path d="M9 4.7l6 3.4" />
        </svg>
      );
    case "clipboardCheck":
      return (
        <svg {...common}>
          <rect x="6" y="5" width="12" height="15" rx="2" />
          <path d="M9 5V3.5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 3.5V5" />
          <path d="M9 9.8l1.2 1.2 2.2-2.2" />
          <line x1="13.5" y1="9.8" x2="15.5" y2="9.8" />
          <path d="M9 13.8l1.2 1.2 2.2-2.2" />
          <line x1="13.5" y1="13.8" x2="15.5" y2="13.8" />
          <path d="M9 17.8l1.2 1.2 2.2-2.2" />
          <line x1="13.5" y1="17.8" x2="15.5" y2="17.8" />
        </svg>
      );
    case "boxes":
      return (
        <svg {...common}>
          <path d="M12 3l4.5 2.5v5L12 13l-4.5-2.5v-5L12 3z" />
          <path d="M12 8v5M12 8L7.5 5.5M12 8l4.5-2.5" />
          <path d="M6.5 12l-4 2.2v4.5L6.5 21l4-2.3v-4.5L6.5 12z" />
          <path d="M17.5 12l-4 2.2v4.5l4 2.3 4-2.3v-4.5l-4-2.2z" />
        </svg>
      );
    case "truck":
    default:
      return (
        <svg {...common}>
          <path d="M3 7h11v9H3z" />
          <path d="M5 10h4" />
          <path d="M5 12.5h3" />
          <path d="M14 10h3.8l3.2 3v3H14v-6z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17.5" cy="18" r="2" />
        </svg>
      );
  }
}

const trace = [
  ["Trace forward", "From an ingredient lot, we can identify the batches it went into and the finished pallets those batches produced. That lets you narrow a problem instead of pulling everything."],
  ["Trace back", "From a finished pack code, we can identify the batch, the run conditions and the ingredient lots behind it. Batch and sanitation records for that run are kept."],
  ["Hold and disposition", "Product that fails a check is held and dispositioned with a record, never quietly reworked into the run. Metal detection rejects are reviewed, not returned to the line."],
  ["Glass and brittle plastics", "Glass and brittle plastic items on and around the line are on a register and inspected on schedule. A breakage triggers a defined response, not a judgement call."],
  ["GMP program", "Written good manufacturing practice covers handling, personal hygiene, clothing, jewellery and movement between zones. It applies to visitors and contractors as well as staff."],
  ["Mock recall", "Ask us when the last traceability exercise was run and what the recovery was. Ask every co-packer you are considering. The answer tells you more than a certificate does."],
];

export default function FoodSafety() {
  useTitle("Food Safety");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      } else if (event.key === "ArrowLeft") {
        const idx = checkpoints.findIndex((c) => c.num === selected.num);
        if (idx > 0) setSelected(checkpoints[idx - 1]);
      } else if (event.key === "ArrowRight") {
        const idx = checkpoints.findIndex((c) => c.num === selected.num);
        if (idx < checkpoints.length - 1) setSelected(checkpoints[idx + 1]);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <>
      <PageHero full eyebrow="Food safety" title="Nut-free, audited, and written down." image="/media/images/kitchen.jpg">
        Food safety is the part of a co-manufacturing relationship that only matters on the worst day. These are the schemes we work to, the nut-free program behind the claim, and the checks between a bag of flour arriving and a pallet leaving.
      </PageHero>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <Eyebrow>Certifications</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">Schemes, licences and what each one covers.</h2>
          <p className="mt-5 max-w-2xl text-muted">
            Rather than a row of logos, here is what each one actually means. Current certificates are available on request, and scope is product specific, so ask for the one that covers yours.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certs.map((cert) => (
              <article key={cert.title} className="flex h-full gap-4 rounded-3xl border border-line bg-paper p-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink px-1 text-center text-[10px] leading-tight font-bold whitespace-pre-line text-white">{cert.short}</span>
                <div>
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{cert.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-deep py-16 md:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <Media image="/media/images/kitchen.jpg" alt="Commercial bakery kitchen" className="h-72 md:h-96" />
          <div>
            <Eyebrow>Nut-free program</Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-[-0.03em]">The strongest version of a nut-free claim.</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted md:text-base">
              <p>There are two ways to make a nut-free product. You can run nuts in the plant and manage them with scheduling, dedicated equipment, cleaning and validation. Or you can keep them out of the building entirely.</p>
              <p>We do the second. Peanuts and tree nuts are not received at the bakery, so there is no in-plant cross contact to control, no nut changeover to validate and no residual risk carried by a cleaning procedure.</p>
              <p>The control that still matters is upstream. Every ingredient is approved against its specification before it is accepted, and nut-free status is confirmed on that specification, not assumed. If a supplier cannot support the claim, the ingredient does not come in.</p>
            </div>
            <div className="mt-6 rounded-3xl bg-paper p-6">
              <h3 className="font-bold">What that means in practice</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>No peanuts or tree nuts received at the site</li>
                <li>Ingredient specifications reviewed and approved before acceptance</li>
                <li>Allergen status confirmed per ingredient lot, not per supplier</li>
                <li>Written policy available for your supplier approval file</li>
              </ul>
              <p className="mt-4 text-sm text-muted">Ask us for the written nut-free policy and our supplier controls before you put a nut-free claim on your pack. You are the one who owns that claim to your customer.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* QA Checkpoints Section matching exact design */}
      <section className="relative overflow-hidden bg-[#faf6f0] py-16 md:py-24">
        {/* Soft atmospheric gradient accents */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#f6ebd9]/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#fceddf]/60 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-copper" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-copper uppercase">QA Checkpoints</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl md:text-[46px] leading-[1.08]">
              From ingredient intake to dispatch.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#685e54] sm:text-base">
              Ten points where product is checked, held or released. None of it is exotic. What matters is that it happens on every run and that there is a record afterwards.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {checkpoints.slice(0, 9).map((item) => (
              <article
                key={item.num}
                onClick={() => setSelected(item)}
                className="group relative flex items-center gap-4.5 rounded-[22px] border border-[#f0eae1] bg-white p-4.5 sm:p-5 transition-colors duration-200 hover:border-copper/60 cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(item);
                  }
                }}
                aria-label={`Open details for checkpoint ${item.num}: ${item.title}`}
              >
                {/* Icon circular badge */}
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#fceddf] text-copper transition-colors duration-200 group-hover:bg-[#f8e4d2]">
                  <CheckpointIcon name={item.icon} className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold tracking-wider text-copper uppercase">{item.num}</span>
                  <h3 className="text-base font-bold text-ink leading-snug tracking-tight transition-colors group-hover:text-copper sm:text-[17px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#736b63] line-clamp-2">
                    {item.shortText}
                  </p>
                </div>
              </article>
            ))}

            {/* Card 10: Dispatch (exact match to design) */}
            <article
              onClick={() => setSelected(checkpoints[9])}
              className="group relative col-span-1 sm:col-span-2 lg:col-span-3 flex min-h-[110px] items-center overflow-hidden rounded-[22px] border border-[#f0eae1] bg-[#f8e9d6] transition-colors duration-200 hover:border-copper/60 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(checkpoints[9]);
                }
              }}
              aria-label="Open details for checkpoint 10: Dispatch"
            >
              {/* Right side exact bread wave artwork */}
              <img
                src="/media/images/card10-bread-wave.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 bottom-0 h-full w-auto max-w-[55%] md:max-w-[50%] object-cover object-right select-none"
              />

              {/* Left content block */}
              <div className="relative z-10 flex w-full max-w-[85%] sm:max-w-[62%] md:max-w-[58%] items-center gap-4.5 sm:gap-6 px-5 py-4 sm:px-7 sm:py-5">
                {/* Truck icon circle */}
                <div className="grid h-14 w-14 sm:h-16 sm:w-16 shrink-0 place-items-center rounded-full bg-[#faede2] text-copper transition-colors duration-200 group-hover:bg-[#f6e4d4]">
                  <CheckpointIcon name="truck" className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                {/* Vertical separator line */}
                <div className="h-11 sm:h-12 w-px bg-copper/30 shrink-0" />

                {/* Text details */}
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold tracking-wider text-copper uppercase leading-none">
                    10
                  </span>
                  <h3 className="mt-1 text-lg font-extrabold text-ink leading-tight tracking-tight transition-colors group-hover:text-copper sm:text-xl md:text-[22px]">
                    Dispatch
                  </h3>
                  <p className="mt-1 text-xs text-[#695f55] leading-normal sm:text-[13px]">
                    Products are packed and dispatched as per schedule with complete documentation.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-chocolate py-16 text-white md:py-24">
        <Container>
          <Eyebrow>Traceability and recall readiness</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">The question you should ask every co-packer.</h2>
          <p className="mt-4 max-w-2xl text-white/65">Not whether they have ever had a recall. Whether they could run one properly tomorrow.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trace.map(([title, body]) => (
              <article key={title} className="h-full rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Want the documents before the conversation?"
        actions={
          <>
            <Button to="/contact">Request documents</Button>
            <Button to="/faq" variant="ghost">Read the FAQ</Button>
          </>
        }
      >
        Tell us what your supplier approval process needs and we will send what we can: certificates, the nut-free policy, ingredient specifications and an outline of the HACCP plan for the products you are interested in.
      </CtaBand>

      {/* Detailed Modal Window for Full Text - Rendered directly to body via portal */}
      {selected && typeof document !== "undefined" && createPortal(
        <div
          className="overlay-in fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.num} ${selected.title}`}
          onClick={() => setSelected(null)}
        >
          <article
            className="pop-in relative my-auto flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-[26px] border border-line bg-paper shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative border-b border-line/70 bg-[#faf5ee] px-6 py-5 sm:px-8">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-stone-200/80 text-ink transition hover:bg-stone-300"
                aria-label="Close"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
                </svg>
              </button>
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#fceddf] text-copper shadow-sm">
                  <CheckpointIcon name={selected.icon} className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-copper uppercase">
                    Checkpoint {selected.num} of 10
                  </span>
                  <h3 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl leading-tight">
                    {selected.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              <span className="text-[11px] font-bold tracking-wider text-copper uppercase">
                Full QA Procedure
              </span>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink/90 font-normal">
                {selected.fullText}
              </p>

              {selected.details && (
                <div className="mt-6 rounded-2xl border border-line/70 bg-cream/60 p-4 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/75">
                    Key Verification Standards
                  </p>
                  <ul className="mt-3 space-y-2">
                    {selected.details.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer with navigation */}
            <div className="flex items-center justify-between border-t border-line/70 bg-[#faf5ee] px-6 py-4 sm:px-8">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={parseInt(selected.num, 10) === 1}
                  onClick={() => {
                    const idx = checkpoints.findIndex((c) => c.num === selected.num);
                    if (idx > 0) setSelected(checkpoints[idx - 1]);
                  }}
                  className="inline-flex items-center rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink transition hover:border-ink disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={parseInt(selected.num, 10) === 10}
                  onClick={() => {
                    const idx = checkpoints.findIndex((c) => c.num === selected.num);
                    if (idx < checkpoints.length - 1) setSelected(checkpoints[idx + 1]);
                  }}
                  className="inline-flex items-center rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink transition hover:border-ink disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-black"
              >
                Close
              </button>
            </div>
          </article>
        </div>,
        document.body
      )}
    </>
  );
}
