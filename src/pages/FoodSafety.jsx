import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Media, PageHero } from "../components/Ui";
import { certs } from "../data/site";

const checks = [
  ["01", "Ingredient intake", "Ingredients are received against the purchase order and checked before they are accepted. Lot codes are recorded so every ingredient can be traced forward to the batches it went into. Allergen and nut-free status is confirmed on the specification for every ingredient, not assumed from the supplier name."],
  ["02", "Storage and segregation", "Ingredients are stored so lots stay separated and identified. Because the site is nut-free, the hardest segregation problem in a bakery is removed at the door instead of managed with scheduling."],
  ["03", "Pre-operational sanitation", "Zones are cleaned, inspected and signed off before production starts. Equipment, contact surfaces and the area around the line are all on the checklist. Production does not start on a zone that has not been released."],
  ["04", "Mixing and scaling", "Ingredients are scaled to the formula and mixed to a set time. Additions are weighed and recorded against the batch. Any deviation from the mix sheet stops the batch."],
  ["05", "Forming and bake", "Deposit weight and bake profile are held to the specification set during scale-up, and checked at intervals through the run. Product stays identified with its batch through the oven."],
  ["06", "Cooling", "Product is cooled to packing temperature before it is bagged. Packing warm product traps moisture and shortens shelf life, so cooling is a released step, not a queue."],
  ["07", "Metal detection", "Product passes an inline metal detector. The unit is challenged with test pieces at the start of the run and at set points through it, and the results are recorded. Rejects are held and reviewed, never returned to the line."],
  ["08", "Checkweighing", "Finished packs are weighed in line so weight problems are caught while the run is live. Checkweigher performance is verified on the same schedule as metal detection."],
  ["09", "Packing and coding", "Labels, best-before coding and case counts are verified at the start of the run and at set points through it. Line clearance between customers is written down and signed."],
  ["10", "Release and dispatch", "Product is released against its batch record, then palletised and labelled so the load can be traced in both directions. Held and rejected product is dispositioned, never quietly reworked."],
];

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
  return (
    <>
      <PageHero crumb="Food Safety" eyebrow="Food safety" title="Nut-free, audited, and written down.">
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
              <article key={cert.title} className="flex gap-4 rounded-3xl border border-line bg-paper p-5">
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

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <Eyebrow>QA checkpoints</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">From ingredient intake to dispatch.</h2>
          <p className="mt-4 max-w-2xl text-muted">Ten points where product is checked, held or released. None of it is exotic. What matters is that it happens on every run and that there is a record afterwards.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {checks.map(([n, title, body]) => (
              <article key={n} className="rounded-3xl border border-line bg-paper p-6">
                <p className="text-sm font-bold text-copper">{n}</p>
                <h3 className="mt-2 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <Container>
          <Eyebrow>Traceability and recall readiness</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">The question you should ask every co-packer.</h2>
          <p className="mt-4 max-w-2xl text-white/65">Not whether they have ever had a recall. Whether they could run one properly tomorrow.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trace.map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
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
            <Button to="/contact">Request documents <span aria-hidden="true">→</span></Button>
            <Button to="/faq" variant="ghost">Read the FAQ</Button>
          </>
        }
      >
        Tell us what your supplier approval process needs and we will send what we can: certificates, the nut-free policy, ingredient specifications and an outline of the HACCP plan for the products you are interested in.
      </CtaBand>
    </>
  );
}
