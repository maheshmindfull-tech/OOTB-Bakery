import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTitle } from "../useTitle";
import { Button, Container, Eyebrow, PageHero } from "../components/Ui";
import { industries, products } from "../data/site";

const mapSrc = "https://maps.google.com/maps?q=288%20Judson%20Street%20Unit%2016%20Etobicoke%20ON%20M8Z%205T6&z=15&output=embed";

export default function Contact() {
  useTitle("Request a Quote");
  const [params] = useSearchParams();
  const product = params.get("product") || "";
  const topic = params.get("topic") || "";
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const lines = [];
    data.forEach((value, key) => lines.push(`${key}: ${value}`));
    setSent(true);
    window.location.href = `mailto:info@ootbinc.com?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <>
      <PageHero crumb="Request a Quote" eyebrow="Request a quote" title="Tell us what you want to make.">
        The more you can tell us about the product, the format and the volume, the more useful the first reply will be. If you are not sure about some of it, send what you have and we will work it out together.
      </PageHero>

      <section className="bg-cream py-16 md:py-20">
        <Container className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={onSubmit} className="rounded-[28px] border border-line bg-paper p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-extrabold">Quote request</h2>
            <p className="mt-1 text-sm text-muted">Fields marked with an asterisk are required.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold">Name *
                <input name="Name" required className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
              </label>
              <label className="text-sm font-semibold">Company *
                <input name="Company" required className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
              </label>
              <label className="text-sm font-semibold">Email *
                <input name="Email" type="email" required className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
              </label>
              <label className="text-sm font-semibold">Phone *
                <input name="Phone" type="tel" required className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
              </label>
              <label className="text-sm font-semibold">Business type *
                <select name="Business type" required defaultValue={topic} key={topic} className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2.5 font-normal">
                  <option value="">Choose one</option>
                  {industries.map((item) => <option key={item.title}>{item.title}</option>)}
                  <option>Other</option>
                </select>
              </label>
              <label className="text-sm font-semibold">Product category *
                <select name="Product category" required defaultValue={product} key={product} className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2.5 font-normal">
                  <option value="">Choose one</option>
                  {products.map((item) => <option key={item.category}>{item.category}</option>)}
                  <option>Other / not on the list</option>
                </select>
              </label>
              <label className="text-sm font-semibold">Estimated volume
                <input name="Estimated volume" placeholder="For example, units or cases" className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
                <span className="mt-1 block text-xs font-normal text-muted">A rough range is fine. Say so if you do not know yet.</span>
              </label>
              <label className="text-sm font-semibold">Target launch date
                <input name="Target launch date" type="date" className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
                <span className="mt-1 block text-xs font-normal text-muted">Even an approximate date helps us plan.</span>
              </label>
            </div>
            <fieldset className="mt-4">
              <legend className="text-sm font-semibold">Do you need a nut-free product? *</legend>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                {["Yes", "No", "Not sure yet"].map((option) => (
                  <label key={option} className="inline-flex items-center gap-2 font-normal">
                    <input type="radio" name="Nut-free product" value={option} required /> {option}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="mt-4 block text-sm font-semibold">Tell us about the product *
              <textarea name="Product" required rows="5" placeholder="What is it, what format does it need to ship in, and what problem are you trying to solve? A reference product helps." className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
            </label>
            <p className="mt-4 text-sm text-muted">We use what you send here to answer your enquiry. See our <Link to="/privacy" className="font-semibold text-copper underline">privacy notice</Link>.</p>
            {sent && <p className="mt-4 rounded-2xl bg-cream px-4 py-3 text-sm">Your email app should open with this enquiry addressed to info@ootbinc.com. If it does not, send the same details there or call (905) 291-1013.</p>}
            <Button type="submit" className="mt-5">Send request <span aria-hidden="true">→</span></Button>
          </form>

          <aside>
            <Eyebrow>Or just call</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-tight">Talk to a person.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">If it is easier to explain than to type, call. You will reach someone who can answer questions about the line, not just take a message.</p>
            <dl className="mt-6 divide-y divide-line rounded-3xl border border-line bg-paper">
              {[
                ["Phone", <a href="tel:+19052911013" className="font-semibold text-copper">(905) 291-1013</a>],
                ["Email", <a href="mailto:info@ootbinc.com" className="font-semibold text-copper">info@ootbinc.com</a>],
                ["Bakery", "288 Judson St, Unit 16, Etobicoke, ON M8Z 5T6"],
                ["Visits", "Plant tours by appointment"],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[90px_1fr] gap-3 px-5 py-4 text-sm">
                  <dt className="text-muted">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 overflow-hidden rounded-3xl border border-line bg-[#efe8dc]">
              <iframe title="Map of OOTB Bakery" src={mapSrc} className="h-52 w-full border-0" loading="lazy" />
            </div>
            <h3 className="mt-6 font-bold">What to send if you have it</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {[
                "A photo of the product or a reference product",
                "The pack format you need",
                "Rough volume per run or per month",
                "Your target launch date",
                "Any certification your customer requires",
                "Whether the product must be nut-free",
              ].map((item) => <li key={item}><span className="mr-2 text-copper">•</span>{item}</li>)}
            </ul>
            <p className="mt-4 text-sm text-muted">Looking for a job rather than a quote? The <Link to="/careers" className="font-semibold text-copper underline">careers page</Link> has the application form.</p>
          </aside>
        </Container>
      </section>
    </>
  );
}
