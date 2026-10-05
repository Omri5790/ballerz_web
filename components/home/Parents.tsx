import Section from "@/components/ui/Section";
import MediaSlot from "@/components/ui/MediaSlot";
import Button from "@/components/ui/Button";
import { parents } from "@/data/community";
import { cta } from "@/data/site";
import { delay } from "@/lib/cn";

export default function Parents() {
  return (
    <Section id="parents" index="10" label="FOR PARENTS" meta="WHAT YOU SEE" tone="ink">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="display-he t-h1-he text-bone" data-reveal>
            {parents.hook}
            <br />
            <span className="text-flare">{parents.question}</span>
          </h2>

          <p className="body-he lead mt-6 max-w-xl text-bone/75" data-reveal style={delay(120)}>
            {parents.body}
          </p>

          <ul className="mt-10 grid gap-px bg-asphalt/30 sm:grid-cols-2">
            {parents.gives.map((g, i) => (
              <li key={g.en} className="bg-ink-2 p-6" data-reveal style={delay(60 * i)}>
                <span className="spec spec-sm text-flare">{g.en}</span>
                <h3 className="display-he mt-3 text-[1.05rem] text-bone">{g.he}</h3>
                <p className="body-he mt-1.5 text-sm text-asphalt-2">{g.line}</p>
              </li>
            ))}
          </ul>

          {/* הצהרה ישרה — זה מה שבונה אמון מול הורה */}
          <div
            className="mt-10 border-s-2 border-flare bg-ink-2 p-6 md:p-7"
            data-reveal
            style={delay(140)}
          >
            <span className="spec text-asphalt-2">WHAT WE DON&apos;T PROMISE</span>
            <p className="body-he mt-3 text-[0.98rem] text-bone/85">{parents.honest}</p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4" data-reveal>
            <Button href={cta.combine.href} variant="flare" size="lg">
              {cta.combine.label}
            </Button>
            <Button href="#faq" variant="bone" size="lg">
              שאלות ותשובות
            </Button>
          </div>
        </div>

        <div className="md:col-span-5" data-reveal style={delay(180)}>
          <MediaSlot
            slot={parents.mediaSlot}
            src={parents.image}
            alt="מאמן מסביר לשחקן באימון"
            index="PR1"
            ratio="4/5"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </Section>
  );
}
