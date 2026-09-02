import Section from "@/components/ui/Section";
import { standard } from "@/data/system";
import { delay } from "@/lib/cn";

export default function Standard() {
  return (
    <Section id="standard" index="07" label="THE STANDARD" meta="CULTURE" tone="ink">
      <div className="grid gap-12 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <h2 className="display t-h1" data-reveal>
            THE
            <br />
            STANDARD<span className="text-flare">.</span>
          </h2>

          {/* המעבר */}
          <div className="mt-10 border border-asphalt/40 bg-ink-2" data-reveal style={delay(140)}>
            <div className="border-b border-asphalt/30 p-5">
              <span className="spec spec-sm text-asphalt-2">FROM</span>
              <p className="body-he mt-2 text-bone/55">״אני מגיע לאימוני כדורסל.״</p>
            </div>
            <div className="p-5">
              <span className="spec spec-sm text-flare">TO</span>
              <p className="body-he mt-2 text-bone">״אני מנהל תהליך התפתחות.״</p>
            </div>
          </div>

          <p className="body-he mt-6 text-sm text-asphalt-2" data-reveal style={delay(200)}>
            זה ההבדל בין שחקן שמשתתף לשחקן שמתפתח. הוא לא מתחיל ביכולת — הוא מתחיל בהרגלים.
          </p>
        </div>

        <ol className="md:col-span-7">
          {standard.map((s, i) => (
            <li key={s.en} data-reveal style={delay(80 * i)}>
              <div className="group flex items-baseline gap-5 border-b border-asphalt/30 py-6 first:border-t first:border-asphalt/30 md:gap-10">
                <span className="spec w-8 shrink-0 text-asphalt-2 transition-colors duration-500 group-hover:text-flare">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display t-h2 w-[42%] shrink-0 leading-none text-bone transition-colors duration-500 group-hover:text-flare">
                  {s.en}
                </h3>
                <p className="body-he text-[0.92rem] text-bone/65 md:text-[0.98rem]">{s.he}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
