import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Media, PageHero } from "../components/Ui";

export default function Careers() {
  useTitle("Careers");

  return (
    <>
      <PageHero eyebrow="Careers" title="Work where the process is actually followed." image="/media/images/mixing.jpg">
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
