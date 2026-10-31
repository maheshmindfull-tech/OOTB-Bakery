import { useState } from "react";
import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Media, PageHero, Pill } from "../components/Ui";
import { products } from "../data/site";

const filters = [
  ["all", "All products"],
  ["retail", "Retail-ready"],
  ["bulk", "Bulk"],
  ["wrapped", "Individually wrapped"],
  ["frozen", "Frozen"],
];

export default function Products() {
  useTitle("Products");
  const [filter, setFilter] = useState("all");
  const visible = products.filter((product) => filter === "all" || product.tags.includes(filter));

  return (
    <>
      <PageHero full eyebrow="Products" title="What we bake, and how it ships." image="/media/images/cookies.jpg">
        Every product below can be made under your brand, in the format your channel actually needs. Formats are the part most brands underestimate, so they are listed for each product instead of buried in a quote.
      </PageHero>

      <section className="bg-cream py-10">
        <Container>
          <div className="flex flex-wrap gap-2">
            {filters.map(([value, label]) => (
              <Pill key={value} active={filter === value} onClick={() => setFilter(value)}>{label}</Pill>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">Filter by the pack format you need. Nut-free applies to everything on this page.</p>
        </Container>
      </section>

      <div className="bg-cream pb-8">
        {visible.map((product) => (
          <section key={product.id} id={product.id} className="border-t border-line/80 py-12">
            <Container className={`grid items-center gap-8 lg:grid-cols-2 ${product.flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Media image={product.image} alt={product.title} className="h-72 w-full md:h-[22rem]" />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-eyebrow uppercase">{product.group}</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{product.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{product.body}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">Formats</p>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      {product.formats.map((item) => <li key={item}><span className="mr-2 text-copper">–</span>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">Typical buyers</p>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      {product.buyers.map((item) => <li key={item}><span className="mr-2 text-copper">–</span>{item}</li>)}
                    </ul>
                  </div>
                </div>
                <Button to={`/contact?product=${encodeURIComponent(product.category)}`} variant="outline" className="mt-6">
                  Quote this product <span aria-hidden="true">→</span>
                </Button>
              </div>
            </Container>
          </section>
        ))}
        {visible.length === 0 && (
          <Container className="py-16 text-muted">Nothing in that format is listed. Ask us anyway if the product is baked and nut-free.</Container>
        )}
      </div>

      <section className="bg-cream-deep py-16 md:py-24">
        <Container>
          <Eyebrow>Not on the list</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">If it is baked, nut-free and you can describe it, ask.</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            The products above are what the bakery runs today. New products go through the same route as everything else: a brief, a sample, a scale-up trial and a documented first run. If it will not work on our equipment we tell you at the brief stage, before you have bought packaging.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/contact">Describe your product <span aria-hidden="true">→</span></Button>
            <Button to="/services" variant="outline">How co-manufacturing works</Button>
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
