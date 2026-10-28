import { useState } from "react";
import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, PageHero } from "../components/Ui";
import { faqs } from "../data/site";

function Item({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line py-5">
      <button type="button" className="flex w-full items-start justify-between gap-4 text-left" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span className="font-bold">{item.q}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-copper text-white">{open ? "–" : "+"}</span>
      </button>
      {open && (
        <div className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
          {item.a.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  useTitle("FAQ");
  return (
    <>
      <PageHero crumb="FAQ" eyebrow="FAQ" title="The questions people actually ask.">
        Grouped by where you are in the process. Where the real answer depends on your product we say so, instead of publishing a number that would be wrong for most of the people reading it.
      </PageHero>
      <section className="bg-cream py-16 md:py-20">
        <Container className="max-w-3xl">
          {faqs.map((group) => (
            <div key={group.n} className="mb-12">
              <Eyebrow>{group.n}</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-tight">{group.title}</h2>
              <p className="mt-2 text-sm text-muted">{group.intro}</p>
              <div className="mt-4">
                {group.items.map((item) => <Item key={item.q} item={item} />)}
              </div>
            </div>
          ))}
        </Container>
      </section>
      <CtaBand
        title="Question not answered here?"
        actions={
          <>
            <Button to="/contact">Ask us directly <span aria-hidden="true">→</span></Button>
            <Button to="/food-safety" variant="ghost">Read about food safety</Button>
          </>
        }
      >
        Send it. We would rather answer a hard question early than have it come up after a production run.
      </CtaBand>
    </>
  );
}
