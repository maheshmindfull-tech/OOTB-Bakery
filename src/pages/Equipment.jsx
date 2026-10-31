import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../useTitle";
import { Button, Container, CtaBand, Eyebrow, Media, PageHero, Pill } from "../components/Ui";
import { clips, equipmentGroups } from "../data/site";

const filters = [
  ["all", "All processes"],
  ["mixing", "Mixing and blending"],
  ["depositing", "Depositing and portioning"],
  ["coding", "Coding and inspection"],
  ["end", "End of line"],
];

export default function Equipment() {
  useTitle("Machines in Action");
  const { hash } = useLocation();
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const [photo, setPhoto] = useState(null);
  const visible = clips.filter((clip) => filter === "all" || clip.tags === filter);

  useEffect(() => {
    const id = hash.replace("#", "");
    const clip = clips.find((item) => item.id === id);
    if (clip) setOpen(clip);
  }, [hash]);

  useEffect(() => {
    if (!photo) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setPhoto(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [photo]);

  return (
    <>
      <PageHero full eyebrow="Machines in action" title="What runs on the floor." image="/media/images/machines/cookie-depositor.jpg">
        The equipment at 288 Judson Street, grouped by the job it does. Below it, short clips by process. Click any clip to open it full size.
      </PageHero>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <Eyebrow>Equipment</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">Grouped by the job it does.</h2>
          <p className="mt-4 max-w-2xl text-muted">Machines are listed by what they do rather than by brand, because the control around a machine matters more to your product than the name on it.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {equipmentGroups.map((group) => (
              <article key={group.n} className="flex h-full flex-col rounded-3xl border border-line bg-paper p-6">
                <p className="text-sm font-bold text-copper">{group.n}</p>
                <h3 className="mt-1 text-lg font-bold">{group.title}</h3>
                <ul className="mt-4 divide-y divide-line">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3 py-3">
                      <button
                        type="button"
                        onClick={() => setPhoto(item)}
                        className="group shrink-0 overflow-hidden rounded-2xl"
                        aria-label={`View ${item.name}`}
                      >
                        <img
                          src={item.image}
                          alt=""
                          width="72"
                          height="72"
                          loading="lazy"
                          className="h-[72px] w-[72px] object-cover transition duration-500 group-hover:scale-105"
                        />
                      </button>
                      <div className="min-w-0">
                        <p className="text-sm font-bold">{item.name}</p>
                        <p className="mt-1 text-sm text-muted">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-muted">
            Line capacity depends on the product and the pack format, so we quote it against your specification rather than as a headline number.
          </p>
        </Container>
      </section>

      <section className="bg-cream-deep py-16 md:py-24">
        <Container>
          <Eyebrow>In action</Eyebrow>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">Short clips, by process.</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map(([value, label]) => (
              <Pill key={value} active={filter === value} onClick={() => setFilter(value)}>{label}</Pill>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-sm text-muted">
            6 clips. Clips play without sound and pause when they scroll out of view. Captions describe the process, not a specific machine model.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((clip) => (
              <article key={clip.id} id={clip.id} className="flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-paper">
                <button type="button" className="block w-full text-left" onClick={() => setOpen(clip)}>
                  <Media image={clip.image} alt={clip.title} label={clip.kicker} play className="h-48 rounded-none" />
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold">{clip.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{clip.summary}</p>
                  <button type="button" onClick={() => setOpen(clip)} className="group mt-auto pt-4 text-left text-xs font-semibold tracking-[0.12em] text-copper uppercase">
                    Watch clip <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-6 rounded-[28px] border border-[#eadfce] bg-[#fbf6ee] p-6 md:flex-row md:items-center md:p-8">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-ink text-center text-xs leading-tight font-bold text-gold">See it live</span>
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Clips are useful. Standing on the floor is better.</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              If you are seriously evaluating the bakery, come and walk it. You will learn more in twenty minutes on the floor than from any amount of video, and we would rather you saw it before you commit to a run.
            </p>
          </div>
          <Button to="/facilities#visit" variant="dark">Book a plant tour <span aria-hidden="true">→</span></Button>
        </div>
      </section>

      <CtaBand
        title="Seen enough to talk specifics?"
        actions={
          <>
            <Button to="/contact">Request a Quote <span aria-hidden="true">→</span></Button>
            <Button to="/equipment" variant="ghost">See the line running</Button>
          </>
        }
      >
        Send the product, the format and the volume. We will tell you whether it runs on this equipment and what we would need to change.
      </CtaBand>

      {photo && (
        <div
          className="overlay-in fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={photo.name}
          onClick={() => setPhoto(null)}
        >
          <img
            src={photo.image}
            alt={photo.name}
            className="pop-in aspect-square w-full max-w-[min(90vw,32rem)] rounded-[28px] object-cover shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      {open && (
        <div className="overlay-in fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-labelledby="clip-title">
          <div className="pop-in max-h-[90vh] w-full max-w-lg overflow-auto rounded-[28px] bg-paper shadow-2xl">
            <video
              key={open.id}
              src={open.video}
              poster={open.image}
              className="h-64 w-full bg-black object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <div className="p-6">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-eyebrow uppercase">{open.kicker}</p>
              <h2 id="clip-title" className="mt-2 text-2xl font-extrabold">{open.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{open.body}</p>
              <p className="mt-3 text-xs text-muted">Captions describe the process, not a specific machine model.</p>
              <button type="button" onClick={() => setOpen(null)} className="mt-5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
