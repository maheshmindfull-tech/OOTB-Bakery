import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Media, PageHero } from "../components/Ui";
import { services } from "../data/site";

export default function Services() {
  useTitle("Private Label & Co-Manufacturing");
  const { hash } = useLocation();
  const [tab, setTab] = useState(services[0].id);

  useEffect(() => {
    const id = hash.replace("#", "");
    if (services.some((service) => service.id === id)) setTab(id);
  }, [hash]);

  const current = services.find((service) => service.id === tab) || services[0];

  return (
    <>
      <PageHero crumb="Services" eyebrow="Private label and co-manufacturing" title="Six ways to use the bakery.">
        Most customers use more than one of these. They sit under one roof because a baked product almost never stops at the oven, and every extra supplier between the oven and the shelf is another place your launch date can slip.
      </PageHero>

      <section className="bg-cream py-12 md:py-16">
        <Container>
          <div className="flex gap-6 overflow-x-auto border-b border-line" role="tablist">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={tab === service.id}
                onClick={() => setTab(service.id)}
                className={`shrink-0 border-b-2 pb-3 text-sm font-semibold ${tab === service.id ? "border-copper text-ink" : "border-transparent text-muted"}`}
              >
                {service.tab}
              </button>
            ))}
          </div>

          <article id={current.id} className="grid items-start gap-8 py-10 lg:grid-cols-2">
            <div>
              <Eyebrow>{current.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">{current.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted md:text-base">
                {current.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/contact">Request a Quote <span aria-hidden="true">→</span></Button>
                <Button to="/equipment" variant="outline">See the equipment</Button>
              </div>
            </div>
            <div className="space-y-4">
              <Media key={current.id} image={current.image} video={current.video} label={current.eyebrow} alt={current.tab} className="h-64" />
              <div className="rounded-3xl bg-[#f3ece3] p-6">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-eyebrow uppercase">What is included</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {current.included.map((item) => (
                    <li key={item}><span className="mr-2 text-copper">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <Container>
          <Eyebrow>Why it sits under one roof</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">Fewer handoffs, fewer places to lose a week.</h2>
          <p className="mt-5 max-w-2xl text-white/65 leading-relaxed">
            A typical baked goods launch involves a baker, a co-packer, a label printer, a warehouse and a freight broker. Each one has a different lead time, a different contact and a different idea of whose fault a delay is.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["One specification", "The document that describes your product is the same document the bake, the pack, the label and the case are built from. Nothing gets retyped between suppliers."],
              ["One set of records", "Batch records, allergen statements, sanitation checks and shipping records all sit in one place, so tracing a problem does not mean emailing four companies."],
              ["One point of contact", "When something changes, and it will, you are talking to the people who can change all of it, not one link in a chain."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Which of these do you actually need?"
        actions={
          <>
            <Button to="/contact">Request a Quote <span aria-hidden="true">→</span></Button>
            <Button to="/equipment" variant="ghost">See the line running</Button>
          </>
        }
      >
        You may not know yet, and that is fine. Describe the product and the problem, and we will tell you which route fits and what it would take to run it.
      </CtaBand>
    </>
  );
}
