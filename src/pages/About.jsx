import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Media, PageHero } from "../components/Ui";

const rows = [
  ["Address", "288 Judson St, Unit 16, Etobicoke, ON M8Z 5T6"],
  ["What happens here", "Ingredient receiving, mixing, depositing and forming, baking, cooling, packing, storage and dispatch"],
  ["Allergen status", "Nut-free site. No peanuts or tree nuts are received."],
  ["Food safety", "GMP program, pre-operational sanitation by zone, metal detection, checkweighing, glass and brittle plastics control"],
  ["Certifications", "BRCGS, SQF, HACCP, Kosher and CFIA licensed. Current certificates on request."],
  ["Who we make for", "Start-up and established food brands, grocery and club retailers, distributors, foodservice and cafe chains, meal kit and gifting companies"],
  ["Visits", "Plant tours by appointment"],
];

export default function About() {
  useTitle("About");
  return (
    <>
      <PageHero crumb="About" eyebrow="About us" title="A nut-free bakery built for private label.">
        OOTB Bakery makes baked goods for other people's brands, and runs the whole job in one building at 288 Judson Street in Etobicoke: mixing, baking, cooling, packing, storage and dispatch.
      </PageHero>

      <section className="bg-cream py-16 md:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Media image="/media/images/mixing.jpg" alt="Baker sheeting dough on a production bench" className="h-72 md:h-96" />
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">Everything between the recipe and the pallet, under one roof.</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted md:text-base">
              <p>Most contract bakeries stop at the oven. You then find someone to bag it, someone to label it, someone to store it and someone to ship it. Every handoff is a place where your order can slip, and a place where nobody owns the problem.</p>
              <p>We do all of it at 288 Judson Street. For you that means one specification, one set of batch records and one person to call when something needs to change.</p>
              <p>The site runs nut-free. Peanuts and tree nuts do not come into the building, which takes the hardest allergen problem in baking off the table instead of managing it with cleaning schedules.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact">Request a Quote <span aria-hidden="true">→</span></Button>
              <Button to="/facilities" variant="outline">See our facility</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white md:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Media image="/media/images/plant.jpg" video="/media/videos/bakery-line.mp4" label="Inside the plant" alt="Bakery production line" className="h-72 md:h-80" />
          <div>
            <h2 className="text-2xl font-bold">The short version</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/70">
              <p>Ingredients are received, checked and recorded against their lot. Dry and wet ingredients are scaled to the formula. Dough or batter is mixed to a set time, formed or deposited to a target weight, baked to a set profile and cooled to packing temperature.</p>
              <p>Cooled product runs through metal detection and checkweighing before it is packed, labelled, cased and palletised. Pre-operational sanitation is signed off by zone before any of that starts.</p>
              <p>None of it is unusual. What matters is that it happens the same way every run, and that there is a record to show it.</p>
            </div>
            <Button to="/equipment" variant="ghost" className="mt-6">Watch each stage <span aria-hidden="true">→</span></Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <Eyebrow>What sets us apart</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">Four things you will not get from a bakery alone.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ["Say what we can actually run", "The quickest way to waste your money is to agree to a product the line cannot hold. We would rather tell you no, or tell you what has to change, before you have bought packaging."],
              ["Keep the paperwork straight", "Batch records, ingredient approvals, allergen statements and sanitation checks are done because they are how you trace a problem later. They are not an audit exercise."],
              ["Nut-free by design", "Keeping peanuts and tree nuts out of the building is a harder commitment than managing them with cleaning and scheduling. It is also the only version a buyer can rely on."],
              ["One building, one set of records", "Baking, packing, storage and dispatch happen on one site under one food safety program. Fewer handoffs means fewer places for your order to stall, and fewer people to chase when it does."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-line bg-paper p-6">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-deep py-16 md:py-24">
        <Container>
          <Eyebrow>At a glance</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">The site, in one table.</h2>
          <p className="mt-4 text-muted">What a supplier approval file usually asks for first.</p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-paper">
            {rows.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-line px-5 py-4 last:border-b-0 md:grid-cols-[220px_1fr] md:px-6">
                <p className="text-sm font-bold">{label}</p>
                <p className="text-sm leading-relaxed text-muted">{value}</p>
              </div>
            ))}
          </div>
          <Button to="/facilities" variant="outline" className="mt-6">Facility detail and map <span aria-hidden="true">→</span></Button>
        </Container>
      </section>

      <CtaBand
        title="Bring us the product you cannot make yet."
        actions={
          <>
            <Button to="/contact">Request a Quote <span aria-hidden="true">→</span></Button>
            <Button to="/equipment" variant="ghost">See the line running</Button>
          </>
        }
      >
        Tell us what it is, what format it needs to ship in and roughly what volume you are planning. We will tell you whether the bakery can run it and what it would take.
      </CtaBand>
    </>
  );
}
