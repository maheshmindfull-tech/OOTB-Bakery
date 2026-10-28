import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Media, PageHero } from "../components/Ui";
import { roles } from "../data/site";

function Role({ role }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="rounded-[24px] border border-line bg-paper p-6">
      <button type="button" className="flex w-full items-start justify-between gap-4 text-left" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span>
          <h3 className="text-lg font-bold">{role.title}</h3>
          <span className="mt-3 flex flex-wrap gap-2">
            {role.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-cream px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-ink/70 uppercase">
                <span className="mr-1.5 text-copper">•</span>{tag}
              </span>
            ))}
          </span>
        </span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-copper text-lg leading-none text-white">{open ? "–" : "+"}</span>
      </button>
      {open && (
        <div className="mt-5">
          <p className="text-sm leading-relaxed text-muted">{role.summary}</p>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-eyebrow uppercase">What you would do</p>
              <ul className="mt-3 space-y-2 text-sm">{role.do.map((item) => <li key={item}><span className="mr-2 text-copper">–</span>{item}</li>)}</ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-eyebrow uppercase">What we look for</p>
              <ul className="mt-3 space-y-2 text-sm">{role.look.map((item) => <li key={item}><span className="mr-2 text-copper">–</span>{item}</li>)}</ul>
            </div>
          </div>
          <Button to={`/careers?role=${encodeURIComponent(role.value)}#apply`} className="mt-6">Apply for this role <span aria-hidden="true">→</span></Button>
        </div>
      )}
    </article>
  );
}

export default function Careers() {
  useTitle("Careers");
  const [params] = useSearchParams();
  const role = params.get("role") || "";
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
    data.forEach((value, key) => {
      if (value instanceof File) {
        if (value.name) lines.push(`${key}: ${value.name} (attach this file to the email)`);
        return;
      }
      lines.push(`${key}: ${value}`);
    });
    setSent(true);
    window.location.href = `mailto:info@ootbinc.com?subject=${encodeURIComponent("Job application")}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <>
      <PageHero crumb="Careers" eyebrow="Careers" title="Work where the process is actually followed.">
        A food plant is a good place to work when the standard is real and a bad one when it is decorative. We run pre-operational sanitation by zone, we complete batch records as the run happens, and we expect people to stop a line when something is wrong.
      </PageHero>

      <section className="bg-cream py-16 md:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Media image="/media/images/plant.jpg" alt="Bakery crew on the production floor" className="h-72 md:h-96" />
          <div>
            <Eyebrow>Why work here</Eyebrow>
            <h2 className="text-4xl font-extrabold tracking-[-0.03em]">What you can expect from us.</h2>
            <p className="mt-4 text-muted">We are not going to list perks. Here is what actually shapes the day.</p>
            <h3 className="mt-6 font-bold">The honest version</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {[
                "A written standard that gets followed, not filed",
                "Training on the process before you are expected to run it",
                "Permission to stop the line when something is wrong",
                "A nut-free site, which removes a whole category of risk",
                "One site, so you see the whole operation from mixing to dispatch",
                "Shift work in a food manufacturing environment",
              ].map((item) => <li key={item}><span className="mr-2 text-copper">•</span>{item}</li>)}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Pay, hours, benefits and scheduling are discussed directly during hiring. We do not publish them here because they vary by role and shift, and we would rather tell you the real numbers than a range you cannot rely on.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream-deep py-16 md:py-24">
        <Container>
          <Eyebrow>Sample roles</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">The kinds of jobs this plant runs on.</h2>
          <p className="mt-4 max-w-2xl text-muted">These describe the work, not a specific open posting. If one sounds like you, apply and tell us which. Open positions change, so it is worth applying even if nothing is posted.</p>
          <div className="mt-8 space-y-4">
            {roles.map((roleItem) => <Role key={roleItem.title} role={roleItem} />)}
          </div>
        </Container>
      </section>

      <section id="apply" className="scroll-mt-24 bg-cream py-16 md:py-24">
        <Container className="max-w-3xl">
          <Eyebrow>Apply</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em]">Send us your resume.</h2>
          <p className="mt-4 text-muted">Tell us which kind of role you are after and which shifts you can work. If nothing is open now, we keep applications on file.</p>
          <form onSubmit={onSubmit} className="mt-8 rounded-[28px] border border-line bg-paper p-6 md:p-8" noValidate={false}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold">Full name *
                <input name="Full name" required className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
              </label>
              <label className="text-sm font-semibold">Email *
                <input name="Email" type="email" required className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
              </label>
              <label className="text-sm font-semibold">Phone *
                <input name="Phone" type="tel" required className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
              </label>
              <label className="text-sm font-semibold">Role you are interested in *
                <select name="Role" required defaultValue={role} key={role} className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2.5 font-normal">
                  <option value="">Choose a role</option>
                  {roles.map((item) => <option key={item.value}>{item.value}</option>)}
                  <option>Other</option>
                </select>
              </label>
              <label className="text-sm font-semibold md:col-span-2">Shifts you can work
                <select name="Shifts" defaultValue="No preference" className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2.5 font-normal">
                  <option>No preference</option>
                  <option>Days</option>
                  <option>Afternoons</option>
                  <option>Nights</option>
                  <option>Weekends</option>
                </select>
              </label>
              <label className="text-sm font-semibold md:col-span-2">Resume *
                <input name="Resume" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword" required className="mt-1 w-full rounded-xl border border-line bg-cream px-3 py-2 text-sm font-normal" />
                <span className="mt-1 block text-xs font-normal text-muted">PDF or Word document.</span>
              </label>
              <label className="text-sm font-semibold md:col-span-2">Anything else we should know
                <textarea name="Notes" rows="4" placeholder="Previous food production experience, certifications, notice period, anything relevant." className="mt-1 w-full rounded-xl border border-line px-3 py-2.5 font-normal" />
              </label>
            </div>
            <p className="mt-4 text-sm text-muted">By sending this you agree we can keep your application on file. See our <a href="/privacy" className="font-semibold text-copper underline">privacy notice</a>.</p>
            {sent && <p className="mt-4 rounded-2xl bg-cream px-4 py-3 text-sm" tabIndex={-1}>Your email app should open with this application addressed to info@ootbinc.com. Attach the resume there. If it does not open, send the same details to that address. We keep applications on file.</p>}
            <Button type="submit" className="mt-5">Send application <span aria-hidden="true">→</span></Button>
          </form>
        </Container>
      </section>

      <CtaBand
        title="Not a job enquiry?"
        actions={
          <>
            <Button to="/contact">Request a Quote <span aria-hidden="true">→</span></Button>
            <Button to="/products" variant="ghost">See what we make</Button>
          </>
        }
      >
        If you are here about production rather than employment, the quote form is the right place to start.
      </CtaBand>
    </>
  );
}
