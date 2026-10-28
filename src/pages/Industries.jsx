import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Media, PageHero, TextLink } from "../components/Ui";
import { industries } from "../data/site";

export default function Industries() {
  useTitle("Industries");
  return (
    <>
      <PageHero crumb="Industries" eyebrow="Industries" title="Six kinds of buyer. Six different problems.">
        A co-packer that treats a start-up and a national retailer the same way is failing one of them. Find the description that sounds like you and see what we would actually do about it.
      </PageHero>

      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => (
            <article key={item.id} id={item.id} className="scroll-mt-28 overflow-hidden rounded-[22px] border border-line bg-paper">
              <Media image={item.image} alt={item.title} className="h-40 rounded-none" />
              <div className="p-6">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="mt-2 text-sm font-semibold text-copper">The problem: {item.problem}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {item.points.map((point) => (
                    <li key={point}><span className="mr-2 text-copper">–</span>{point}</li>
                  ))}
                </ul>
                <TextLink to={`/contact?topic=${encodeURIComponent(item.title)}`} className="mt-5">Talk about this</TextLink>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <Container>
          <Eyebrow>Common ground</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">What every one of them needs.</h2>
          <p className="mt-4 text-white/65">The problems differ. The underlying requirement does not.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["A product that repeats", "The second run has to match the first. That is set during scale-up, not negotiated afterwards."],
              ["Records that hold up", "Batch records, allergen statements and sanitation checks that survive an audit or a trace exercise."],
              ["A straight answer", "Including when the answer is that we cannot run it, or that something has to change first."],
              ["One building", "Baking, packing, storage and dispatch on one site, so nobody can point at somebody else."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="None of those quite describe you?"
        actions={
          <>
            <Button to="/contact">Request a Quote <span aria-hidden="true">→</span></Button>
            <Button to="/equipment" variant="ghost">See the line running</Button>
          </>
        }
      >
        Tell us the actual problem. Most of the interesting work comes from cases that did not fit a category on somebody's website.
      </CtaBand>
    </>
  );
}
