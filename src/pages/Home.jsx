import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Icon, Media, TextLink } from "../components/Ui";
import { certs, clips } from "../data/site";

const offers = [
  {
    icon: "tag",
    title: "Private label",
    body: "Your brand on the pack, our bakery behind it. We bake, pack and label to your specification, so the bag, the label, the case and the pallet are handled by the same team that baked the product.",
    points: ["Your artwork and your pack format", "Retail-ready and club formats", "Bulk for further processing"],
    to: "/services#private-label",
  },
  {
    icon: "cookie",
    title: "Contract baking",
    body: "Your recipe, run on our equipment under our food safety program. You keep the formula. We run it, document it and ship it.",
    points: ["Formula stays yours", "Documented batch records", "Repeatable bake profiles"],
    to: "/services#contract-baking",
  },
  {
    icon: "swap",
    title: "Recipe transfer and scale-up",
    body: "Moving a kitchen recipe onto a production line changes it. We work through the changes with you before the first run, not after.",
    points: ["Bench to line translation", "Ingredient substitution where needed", "Trial runs before commitment"],
    to: "/services#recipe-transfer",
  },
  {
    icon: "box",
    title: "Packing in the same building",
    body: "Bagging, heat sealing, shrink wrapping, labelling, case packing and display pack assembly, done on site as soon as the product has cooled.",
    points: ["Automated bagging line", "Hand assembly for gift and display packs", "Case coding and pallet labelling"],
    to: "/services#packaging",
  },
  {
    icon: "flake",
    title: "Frozen dough and batters",
    body: "Frozen cookie dough and muffin, cupcake and brownie batter, made and portioned so your team or your customer bakes it off fresh.",
    points: ["Portioned frozen dough", "Batter in the format you need", "Held frozen until dispatch"],
    to: "/services#frozen",
  },
  {
    icon: "truck",
    title: "Storage and dispatch",
    body: "Finished goods held on site and shipped as your orders land, so product never moves between buildings before it reaches you.",
    points: ["Finished goods storage", "Pick and pack", "Case and pallet labelling"],
    to: "/services#storage",
  },
];

const buyers = [
  {
    icon: "chat",
    image: "/media/images/cookies.jpg",
    title: "Start-up food brands",
    body: "You have a product people like and no way to make it at volume. We take it from your recipe to a run you can sell, and tell you honestly what needs to change for it to work on a line.",
    to: "/industries#startups",
  },
  {
    icon: "target",
    image: "/media/images/plant.jpg",
    title: "Established food brands",
    body: "You need capacity, a second source or a nut-free option you cannot run in your own plant. We slot in as a co-manufacturer without you handing over the formula.",
    to: "/industries#established",
  },
  {
    icon: "cube",
    image: "/media/images/grocery.jpg",
    title: "Grocery and club retail",
    body: "You need private label baked goods with the documentation and audit trail your category team expects. We supply private label and co-packed product to national and regional grocery and club retailers.",
    to: "/industries#grocery",
  },
];

const steps = [
  ["01", "Brief and feasibility", "You tell us the product, the format and the volume you are planning. We tell you what the bakery can run today, what would need to change and whether we are the right fit. If we are not, we say so early."],
  ["02", "Sample and specification", "We bake a sample against your reference product and write the specification with you. Ingredients, piece weight, appearance, pack format and shelf life get settled here, not halfway through production."],
  ["03", "Scale-up trial", "The approved sample is run on production equipment. Recipes behave differently on a line than in a kitchen, so this is where mixing, forming and bake profiles are set and recorded."],
  ["04", "Food safety and documentation", "Ingredients are approved, allergen status is confirmed, the HACCP plan is checked against the product and the batch records are set up. Nothing runs until this is done."],
  ["05", "First production run", "We run, check and release the first batch with your specification in hand. Metal detection and checkweighing are challenged at the start of the run and at set points through it."],
  ["06", "Ongoing supply", "Repeat runs are scheduled against your forecast. Finished goods can be held on site and shipped as your orders land, from the same building that made them."],
];

const badges = ["Nut-free facility", "BRCGS and SQF", "CFIA licensed", "Kosher available"];

export default function Home() {
  useTitle("Home");
  const featured = [clips[0], clips[2], clips[3]];

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

      <section className="bg-cream py-12 md:py-16">
        <Container className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["100%", "Nut-free site", "Peanuts and tree nuts are not received at the bakery. Every ingredient is checked against its specification before it comes in."],
            ["7", "Core bakery products", "Cookies, biscotti, snowball cookies, meringues, mini loaves, frozen cookie dough and batters."],
            ["4", "Pack formats", "Bulk, retail-ready, individually wrapped and frozen, all packed in the same building."],
            ["10", "QA checkpoints", "From ingredient intake to dispatch, each one checked and recorded on every run."],
          ].map(([stat, title, body]) => (
            <article key={title} className="rounded-3xl border border-line bg-paper p-6">
              <p className="text-5xl font-extrabold tracking-tight">{stat}</p>
              <h2 className="mt-3 font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-cream-deep py-16 md:py-24">
        <Container>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="max-w-2xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">One partner from recipe to retail shelf.</h2>
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            Most brands end up managing a baker, a co-packer, a warehouse and a freight broker separately. We mix, bake, pack and dispatch in one building, under one food safety program, on one set of records.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((item) => (
              <article key={item.title} className="flex flex-col rounded-3xl border border-line bg-paper p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f8ece6] text-copper">
                  <Icon name={item.icon} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/80">
                  {item.points.map((point) => (
                    <li key={point}><span className="mr-2 text-copper">–</span>{point}</li>
                  ))}
                </ul>
                <TextLink to={item.to} className="mt-5">Read more</TextLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <Container>
          <Eyebrow>Machines in action</Eyebrow>
          <h2 className="max-w-2xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">See how your product would actually get made.</h2>
          <p className="mt-5 max-w-2xl text-white/65 leading-relaxed">
            Mixing and depositing, baking, multihead weighing and bagging, powder filling, flow wrapping, coding and inspection. See the equipment and short clips by process before you ever walk the floor.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featured.map((clip) => (
              <article key={clip.id} className="overflow-hidden rounded-[22px] bg-paper text-ink">
                <Link to={`/equipment#${clip.id}`} className="block">
                  <Media image={clip.image} alt={clip.title} label={clip.kicker} play className="h-44 rounded-none" />
                </Link>
                <div className="p-5">
                  <h3 className="font-bold">{clip.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{clip.summary}</p>
                  <TextLink to={`/equipment#${clip.id}`} className="mt-4 text-xs tracking-[0.12em] uppercase">Watch clip</TextLink>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/equipment" variant="ghost">Open the full library <span aria-hidden="true">→</span></Button>
            <Button to="/facilities#visit" variant="ghost">Book a plant tour</Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <Eyebrow>Certifications</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">The audit trail your buyer will ask for.</h2>
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            Retail and club buyers do not take your word for food safety, and neither should you. These are the schemes and licences behind the product we ship.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certs.map((cert) => (
              <article key={cert.title} className="flex gap-4 rounded-3xl border border-line bg-paper p-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink px-1 text-center text-[10px] leading-tight font-bold whitespace-pre-line text-white">{cert.short}</span>
                <div>
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{cert.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted">
            Current certificates are available on request. Certification is product specific, so ask for the scope that covers your product.
          </p>
        </Container>
      </section>

      <section className="bg-cream-deep py-16 md:py-24">
        <Container>
          <Eyebrow>Who we serve</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">Built for brands that have to ship, not just launch.</h2>
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            Private label for retail, co-packed product for distributors and repeat production for brands that have outgrown their own kitchen.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {buyers.map((buyer) => (
              <article key={buyer.title} className="overflow-hidden rounded-[22px] border border-line bg-paper">
                <Media image={buyer.image} alt={buyer.title} className="h-40 rounded-none" />
                <div className="p-5">
                  <h3 className="font-bold">{buyer.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{buyer.body}</p>
                  <TextLink to={buyer.to} className="mt-4">How we help</TextLink>
                </div>
              </article>
            ))}
          </div>
          <Button to="/industries" variant="outline" className="mt-8">All six buyer types <span aria-hidden="true">→</span></Button>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">Six steps from first call to repeat supply.</h2>
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            No stage gets skipped. The order matters, because most of the cost of a bad production run is decided long before the line starts.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map(([n, title, body]) => (
              <article key={n} className="rounded-3xl border border-line bg-paper p-6">
                <p className="text-sm font-bold text-copper">{n}</p>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-start gap-6 rounded-[28px] border border-line bg-paper p-6 md:flex-row md:items-center md:p-8">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-ink text-center text-[10px] leading-tight font-bold text-gold">Nut free site</span>
            <div className="flex-1">
              <h3 className="text-xl font-extrabold tracking-tight">Nut-free is a site decision, not a claim on a label.</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Peanuts and tree nuts do not come into the bakery. That removes the hardest allergen problem in baking at the door, instead of trying to manage it with scheduling and cleaning. If your retailer or your customer needs a nut-free supply chain, this is the reason to talk to us first.
              </p>
            </div>
            <Button to="/food-safety" variant="dark">Our food safety program <span aria-hidden="true">→</span></Button>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Tell us what you want to make."
        actions={
          <>
            <Button to="/contact">Request a Quote <span aria-hidden="true">→</span></Button>
            <Button to="/equipment" variant="ghost">See the line running</Button>
          </>
        }
      >
        Send the product, the format and the volume you are planning. We will tell you what we can run, what we would change and what we need from you to quote it.
      </CtaBand>
    </>
  );
}
