import { useState } from "react";
import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, PageHero, Pill } from "../components/Ui";
import { faqs } from "../data/site";

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group rounded-[20px] border border-line bg-paper px-6 py-5 transition-colors duration-200 hover:border-copper/50">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
        aria-expanded={open}
        onClick={() => setOpen((val) => !val)}
      >
        <span className="text-base font-bold text-ink leading-snug transition-colors group-hover:text-copper sm:text-[17px]">
          {item.q}
        </span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#fceddf] text-copper transition-transform duration-200 ${
            open ? "rotate-45 bg-copper text-white" : ""
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M8 3.5v9M3.5 8h9" />
          </svg>
        </span>
      </button>

      <div
        inert={open ? undefined : true}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-4 border-t border-line/60 pt-4 space-y-3 text-sm sm:text-[14.5px] leading-[1.65] text-muted">
            {item.a.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Faq() {
  useTitle("FAQ");
  const [filter, setFilter] = useState("all");

  const visibleGroups = faqs.filter((group) => {
    if (filter === "all") return true;
    return group.n === filter;
  });

  return (
    <>
      <PageHero full eyebrow="FAQ" title="The questions people actually ask." image="/media/images/biscotti.jpg">
        Grouped by where you are in the process. Where the real answer depends on your product we say so, instead of publishing a number that would be wrong for most of the people reading it.
      </PageHero>

      {/* Filter Category Pills */}
      <section className="border-b border-line/60 bg-cream py-6">
        <Container>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <Pill active={filter === "all"} onClick={() => setFilter("all")}>
              All questions
            </Pill>
            {faqs.map((group) => (
              <Pill
                key={group.n}
                active={filter === group.n}
                onClick={() => setFilter(group.n)}
              >
                {group.n}. {group.title}
              </Pill>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Groups in Balanced 2-Column Alignment */}
      <section className="bg-cream py-14 md:py-20">
        <Container className="space-y-16 md:space-y-24">
          {visibleGroups.map((group) => (
            <div
              key={group.n}
              id={`group-${group.n}`}
              className="grid items-start gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[340px_minmax(0,1fr)]"
            >
              {/* Left Column: Group Header & Intro (Sticky on desktop) */}
              <div className="lg:sticky lg:top-24">
                <Eyebrow>Category {group.n}</Eyebrow>
                <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-[32px] leading-tight">
                  {group.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {group.intro}
                </p>
                <div className="mt-6 hidden lg:block">
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-semibold text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                    {group.items.length} questions answered
                  </span>
                </div>
              </div>

              {/* Right Column: Beautiful Accordion Cards */}
              <div className="space-y-3.5 sm:space-y-4">
                {group.items.map((item) => (
                  <FaqItem key={item.q} item={item} />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Question not answered here?"
        actions={
          <>
            <Button to="/contact">Ask us directly</Button>
            <Button to="/food-safety" variant="ghost">Read about food safety</Button>
          </>
        }
      >
        Send it. We would rather answer a hard question early than have it come up after a production run.
      </CtaBand>
    </>
  );
}
