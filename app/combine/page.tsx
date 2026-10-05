import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import CombineSection from "@/components/sections/CombineSection";
import RegisterBlock from "@/components/sections/RegisterBlock";
import OpeningTraining from "@/components/sections/OpeningTraining";
import Faq from "@/components/sections/Faq";
import Button from "@/components/ui/Button";
import { combine } from "@/data/combine";
import { cta } from "@/data/site";
import { centers } from "@/data/centers";

export const metadata: Metadata = {
  title: "BALLERZ PLAYER COMBINE — אבחון וכניסה לתכנית",
  description:
    "ה-Combine של BALLERZ: מדידות קליעה, בדיקות Skill, מדדים אתלטיים, Player Profile ומשחק. יום אחד שבסופו אתה יודע איפה אתה נמצא ומה השלב הבא. הרשמה למודיעין ולירושלים.",
  alternates: { canonical: "/combine" },
};

export default function CombinePage() {
  return (
    <>
      <PageHero
        eyebrow="BALLERZ PLAYER COMBINE"
        meta="ENTRY EVENT · BASELINE"
        titleEn={
          <>
            KNOW WHERE
            <br />
            YOU ARE<span className="text-flare">.</span>
          </>
        }
        lead="ה-Combine הוא אירוע האבחון והכניסה של BALLERZ. במקום להתחיל מניחוש — מתחילים ממדידה."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="#register" variant="flare" size="lg">
            {cta.combine.label}
          </Button>
          <span className="spec self-center text-asphalt-2">
            {combine.date} · {combine.location} · {combine.time}
          </span>
        </div>
      </PageHero>

      <CombineSection index="01" showCta={false} />

      <RegisterBlock
        kind="combine"
        index="02"
        label="COMBINE REGISTRATION"
        titleEn={
          <>
            REGISTER FOR THE
            <br />
            COMBINE<span className="text-flare">.</span>
          </>
        }
        titleHe="הרשמה ל-Combine"
        lead="ממלאים 7 שדות, ואנחנו חוזרים אליכם בוואטסאפ עם האישור וכל הפרטים."
        submitLabel="להרשמה ל-Combine"
        successTitle="WE GOT IT."
        successBody="קיבלנו את הפרטים. נחזור אליכם עם אישור ההרשמה ל-Combine וכל מה שצריך להביא."
        payment={combine.payment.url ? combine.payment : undefined}
        facts={[
          { label: "DATE", value: combine.date },
          { label: "LOCATION", value: combine.location },
          { label: "TIME", value: combine.time },
          { label: "CENTERS", value: centers.map((c) => c.city).join(" · ") },
        ]}
      />

      <OpeningTraining index="03" />

      <Faq index="04" />
    </>
  );
}
