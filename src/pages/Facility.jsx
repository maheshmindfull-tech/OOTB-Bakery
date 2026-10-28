import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Media, PageHero } from "../components/Ui";

const stages = [
  ["01", "Receiving", "Ingredients arrive at the dock and are checked against the purchase order and their specification before they are accepted. Lot codes are recorded at this point, which is where traceability starts."],
  ["02", "Mixing", "Ingredients are scaled to the formula and mixed to a set time. Mix records are kept against the batch."],
  ["03", "Depositing and forming", "Dough and batter are deposited or formed to a target weight, and checked at intervals through the run."],
  ["04", "Baking and cooling", "Product is baked to the profile set during scale-up, then cooled to packing temperature before it is touched again."],
  ["05", "Packing and inspection", "Product passes metal detection and checkweighing, then is bagged, wrapped or hand packed, coded, cased and palletised."],
  ["06", "Storage and dispatch", "Finished pallets go into storage in the same building and ship as orders land, labelled so every load can be traced back to its batch."],
];

const mapSrc = "https://maps.google.com/maps?q=288%20Judson%20Street%20Unit%2016%20Etobicoke%20ON%20M8Z%205T6&z=15&output=embed";

export default function Facility() {
  useTitle("Our Facility");
  return (
    <>
      <PageHero crumb="Facility" eyebrow="Our facility" title="One nut-free site at 288 Judson Street.">
        Ingredients come in one door and finished pallets leave by another. Mixing, forming, baking, cooling, packing, storage and dispatch all happen in the same building, under the same food safety program.
      </PageHero>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Media image="/media/images/plant.jpg" alt="Bakers working dough in a production bakery" className="h-72 md:h-80" />
            <div>
              <Eyebrow>The bakery</Eyebrow>
              <h2 className="text-4xl font-extrabold tracking-[-0.03em]">288 Judson Street, Etobicoke.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink">
                288 Judson St, Unit 16
                <br />
                Etobicoke, ON M8Z 5T6
              </p>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
                <p>This is where everything happens. The site runs nut-free: peanuts and tree nuts are not received here, so there is no nut changeover to validate and no residual risk carried by a cleaning procedure.</p>
                <p>It sits inside the Greater Toronto Area, within easy reach of the major highways, the region's grocery and club distribution centres, and most of the ingredient suppliers a bakery depends on.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/contact">Book a plant tour <span aria-hidden="true">→</span></Button>
                <Button to="/equipment" variant="outline">See the line running</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-[28px] border border-line bg-[#efe8dc]">
            <iframe title="Map of OOTB Bakery at 288 Judson Street, Etobicoke" src={mapSrc} className="h-80 w-full border-0" loading="lazy" />
          </div>
        </Container>
      </section>

      <section className="bg-cream-deep py-16 md:py-24">
        <Container>
          <Eyebrow>How product moves through the building</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">From the receiving dock to the truck.</h2>
          <p className="mt-4 max-w-3xl text-muted">Six stages, one building, one set of records. Product is identified with its batch at every step, so any finished pack can be traced back to the ingredient lots and the run it came from.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stages.map(([n, title, body]) => (
              <article key={n} className="rounded-3xl border border-line bg-paper p-6">
                <p className="text-sm font-bold text-copper">{n}</p>
                <h3 className="mt-2 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="visit" className="scroll-mt-24 bg-cream py-16 md:py-24">
        <Container>
          <Eyebrow>Visiting</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">What a plant tour actually covers.</h2>
          <p className="mt-4 max-w-2xl text-muted">If you are evaluating us as a supplier, come and walk the floor. Bring your quality person. Ask hard questions.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Before you arrive", "We send the visitor GMP requirements in advance: clothing, jewellery, footwear, and what you can and cannot bring onto the floor. Sign-in and a short briefing happen on arrival."],
              ["On the floor", "You see the flow from receiving to dispatch, the metal detection and checkweighing points, and the sanitation and zoning setup. Ask to see records, not just equipment."],
              ["Afterwards", "We go through your product, the format you need, the volume you are planning and what a trial run would involve. You leave knowing whether this is a fit."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-line bg-paper p-6">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
          <Button to="/contact" className="mt-8">Arrange a visit <span aria-hidden="true">→</span></Button>
        </Container>
      </section>

      <CtaBand
        title="Want to see it before you commit?"
        actions={
          <>
            <Button to="/contact">Book a plant tour <span aria-hidden="true">→</span></Button>
            <Button to="/equipment" variant="ghost">Watch the clips instead</Button>
          </>
        }
      >
        Tell us roughly what you are planning and we will set up a tour of the bakery with the people who would actually run your product.
      </CtaBand>
    </>
  );
}
