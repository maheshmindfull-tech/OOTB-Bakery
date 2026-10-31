import { useTitle } from "../useTitle";
import { Container, PageHero } from "../components/Ui";

export default function Privacy() {
  useTitle("Privacy Notice");
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy notice." image="/media/images/cookies-hero.jpg">
        What we collect through this website, why we collect it and what we do with it. Written to be read, not survived.
      </PageHero>
      <section className="bg-cream py-16">
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed text-muted md:text-base">
          <p className="inline-block rounded-full bg-paper px-4 py-2 text-sm text-ink">Last updated September 2026.</p>
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Who this applies to</h2>
            <p className="mt-3">This notice covers this website and the forms on it. In this notice, "we" and "us" mean OOTB Bakery, 288 Judson St, Unit 16, Etobicoke, Ontario M8Z 5T6.</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink">What we collect</h2>
            <p className="mt-3">We only collect what you send us. That means:</p>
            <ul className="mt-3 space-y-3">
              <li><strong className="text-ink">Quote requests.</strong> Your name, company, email address, phone number, business type, product category, estimated volume, target launch date, whether you need a nut-free product, and whatever you write in the message field.</li>
              <li><strong className="text-ink">Job applications.</strong> Your name, email address, phone number, the role and shifts you are interested in, your resume and anything else you choose to tell us.</li>
              <li><strong className="text-ink">Direct contact.</strong> Anything you send us by email or tell us on the phone.</li>
            </ul>
            <p className="mt-3">We do not ask for payment details, government identification or health information through this website. Please do not send them.</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Why we collect it</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>To answer your enquiry and prepare a quote</li>
              <li>To assess a job application and keep it on file for future openings</li>
              <li>To keep records of business communications, which a regulated food business is required to do</li>
            </ul>
            <p className="mt-3">We do not sell your information. We do not share it with anyone outside our business, except where we need a service provider to run the website or our email, or where the law requires it.</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink">How long we keep it</h2>
            <p className="mt-3">Quote requests are kept as business records. Job applications are kept on file so we can consider you for later openings. If you want your information removed, ask us and we will remove it unless we are required to keep it.</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Cookies and analytics</h2>
            <p className="mt-3">This site does not set advertising cookies and does not run third-party tracking. If analytics are added later, this notice will be updated before they go live.</p>
            <p className="mt-3">Photographs and video clips are part of this site. The map on the facility and contact pages is embedded from Google Maps. That provider may see your IP address when the map loads, and it is subject to its own privacy policy.</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Where your information is stored</h2>
            <p className="mt-3">We are a Canadian business and our records are held in Canada. Some service providers we use may store or process data outside Canada. Where that happens, the information is subject to the laws of the country it is held in.</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Your rights</h2>
            <p className="mt-3">Under Canadian privacy law you can ask us what personal information we hold about you, ask us to correct it, and ask us to delete it where we are not required to keep it. You can also withdraw consent for us to contact you.</p>
            <p className="mt-3">To make any of those requests, email <a className="font-semibold text-copper" href="mailto:info@ootbinc.com">info@ootbinc.com</a> or call <a className="font-semibold text-copper" href="tel:+19052911013">(905) 291-1013</a>.</p>
            <p className="mt-3">If you are not satisfied with how we handle a request, you can raise it with the Office of the Privacy Commissioner of Canada.</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Security</h2>
            <p className="mt-3">We take reasonable steps to protect the information you send us. No website or email system is completely secure, so please do not send anything highly sensitive through a web form.</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Changes to this notice</h2>
            <p className="mt-3">If we change this notice we will update the date at the top of the page. Material changes will be flagged on the page, not made quietly.</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Contact</h2>
            <p className="mt-3 text-ink">
              OOTB Bakery
              <br />
              288 Judson St, Unit 16, Etobicoke, Ontario M8Z 5T6
              <br />
              <a className="font-semibold text-copper" href="tel:+19052911013">(905) 291-1013</a>
              <br />
              <a className="font-semibold text-copper" href="mailto:info@ootbinc.com">info@ootbinc.com</a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
