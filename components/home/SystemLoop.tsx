import Section from "@/components/ui/Section";
import { systemLoop } from "@/data/system";
import { delay } from "@/lib/cn";

export default function SystemLoop() {
  return (
    <Section id="system" index="04" label="THE SYSTEM" meta="TRAIN · APPLY · COMPETE · TRACK" tone="ink2">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <h2 className="display t-h1" data-reveal>
            THE BALLERZ
            <br />
            SYSTEM<span className="text-flare">.</span>
          </h2>
          <p className="body-he mt-6 max-w-sm text-bone/70" data-reveal style={delay(120)}>
            פיתוח שחקן הוא לא אימון בודד. זו לולאה שחוזרת על עצמה לאורך עונה שלמה —
            וכל שלב בה קיים בגלל השלב שאחריו.
          </p>

          {/* לוח אימון קטן */}
          <div className="mt-10 hidden border border-asphalt/40 bg-ink p-5 md:block" data-reveal style={delay(220)}>
            <div className="flex items-center justify-between border-b border-asphalt/35 pb-3">
              <span className="spec spec-sm text-asphalt-2">SESSION LOG</span>
              <span className="spec spec-sm text-flare">SAMPLE</span>
            </div>
            <ul className="mt-3 space-y-2">
              {[
                ["BLOCK", "01 / 04"],
                ["FOCUS", "BALL HANDLING"],
                ["GROUP", "SMALL"],
                ["TRANSFER", "1V1 LIVE"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center justify-between">
                  <span className="spec spec-sm text-asphalt-2">{k}</span>
                  <span aria-hidden className="mx-3 h-px flex-1 bg-asphalt/25" />
                  <span className="spec spec-sm text-bone">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* הלולאה */}
        <div className="relative md:col-span-7">
          {/* קו הלולאה החוזר */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -start-8 top-6 hidden h-[calc(100%-3rem)] w-8 text-flare/50 md:block"
            preserveAspectRatio="none"
            viewBox="0 0 40 100"
            fill="none"
            stroke="currentColor"
          >
            <path d="M36 2C10 8 4 30 4 50s6 42 32 48" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
            <path d="M36 2l-9 1.5 6 5z" fill="currentColor" stroke="none" />
          </svg>
          <span className="spine-label spec spec-sm absolute -start-8 top-1/2 hidden -translate-y-1/2 text-flare md:block">
            REPEAT
          </span>

          <ol>
            {systemLoop.map((s, i) => (
              <li key={s.index} data-reveal style={delay(90 * i)}>
                <div className="group relative border-b border-asphalt/30 py-7 first:border-t first:border-asphalt/30">
                  <div className="flex items-start gap-5 md:gap-8">
                    <span className="spec pt-2 text-flare">{s.index}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="display t-h2 leading-none text-bone transition-colors duration-500 group-hover:text-flare">
                          {s.en}
                        </h3>
                        <span className="spec spec-sm text-asphalt-2">{s.spec}</span>
                      </div>
                      <p className="body-he mt-3 max-w-lg text-[0.95rem] text-bone/70">
                        {s.body}
                      </p>
                    </div>
                  </div>

                  {i < systemLoop.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute bottom-0 start-[0.35rem] block h-3 w-px translate-y-1/2 bg-flare"
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
