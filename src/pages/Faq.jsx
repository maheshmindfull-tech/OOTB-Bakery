import { useState } from "react";
import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, PageHero, Pill } from "../components/Ui";
import { faqs } from "../data/site";

function FaqItem({ item, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`group rounded-2xl border transition-colors duration-200 bg-white ${
        open ? "border-copper/40 shadow-sm" : "border-line/80 hover:border-copper/40"
      }`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 p-4.5 sm:p-5 text-left cursor-pointer"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-[15px] sm:text-base font-semibold text-ink leading-snug transition-colors group-hover:text-copper">
          {item.q}
        </span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-200 ${
            open
              ? "border-copper bg-copper text-white"
              : "border-line bg-cream text-muted group-hover:border-copper/60 group-hover:text-copper"
          }`}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
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
          <div className="border-t border-line/60 px-4.5 pb-5 pt-3.5 sm:px-5 sm:pb-5 space-y-2.5 text-sm leading-relaxed text-[#685e54]">
            {item.a.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  useTitle("FAQ");
  const [activeCategory, setActiveCategory] = useState("all");

  const filterTabs = [
    { id: "all", label: "All questions" },
    ...faqs.map((group) => ({ id: group.n, label: group.title })),
  ];

  const visibleGroups =
    activeCategory === "all"
      ? faqs
      : faqs.filter((group) => group.n === activeCategory);

  return (
    <>
      <PageHero eyebrow="FAQ" title="The questions people actually ask." image="/media/images/biscotti.jpg">
        Grouped by where you are in the process. Where the real answer depends on your product we say so, instead of publishing a number that would be wrong for most of the people reading it.
      </PageHero>

      <section className="bg-cream py-12 md:py-16">
        <Container>
          {/* Quick Filter Tabs */}
          <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-line pb-6">
            {filterTabs.map((tab) => (
              <Pill
                key={tab.id}
                active={activeCategory === tab.id}
                onClick={() => setActiveCategory(tab.id)}
              >
                {tab.label}
              </Pill>
            ))}
          </div>

          {/* FAQ Groups: Clean 2-column layout */}
          <div className="space-y-12 md:space-y-16">
            {visibleGroups.map((group) => (
              <div
                key={group.n}
                className="grid gap-6 lg:grid-cols-12 lg:gap-10 border-b border-line pb-12 last:border-b-0 last:pb-0"
              >
                {/* Left Column: Category Header (Sticky on desktop) */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28">
                    <span className="text-[11px] font-bold tracking-[0.18em] text-copper uppercase">
                      {group.n} / Category
                    </span>
                    <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-[26px]">
                      {group.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {group.intro}
                    </p>
                  </div>
                </div>

                {/* Right Column: Clean Light Accordion Cards */}
                <div className="lg:col-span-8 space-y-3">
                  {group.items.map((item, idx) => (
                    <FaqItem
                      key={item.q}
                      item={item}
                      defaultOpen={idx === 0 && activeCategory !== "all"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
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
