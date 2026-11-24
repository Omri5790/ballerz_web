import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import MediaSlot from "@/components/ui/MediaSlot";
import RegisterBlock from "@/components/sections/RegisterBlock";
import Centers from "@/components/sections/Centers";
import Faq from "@/components/sections/Faq";
import Button from "@/components/ui/Button";
import { cta } from "@/data/site";

export const metadata: Metadata = {
  title: "הרשמה — אימוני כדורסל ופיתוח שחקנים",
  description:
    "השארת פרטים להצטרפות לתכנית BALLERZ: אימון Player Development שבועי, תכנית עבודה עצמאית, מעקב ומדידות. מרכזים במודיעין ובירושלים, מכיתה ז׳ ומעלה.",
  alternates: { canonical: "/join" },
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="JOIN BALLERZ"
        meta="NO PAYMENT ON THIS PAGE"
        titleEn={
          <>
            DO THE
            <br />
            WORK<span className="text-flare">.</span>
          </>
        }
        lead="משאירים פרטים בטופס הקצר, ואנחנו חוזרים אליכם בוואטסאפ עם כל המידע על המרכז, התכנית והחברות."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href={cta.combine.href} variant="flare" size="lg">
            {cta.combine.label}
          </Button>
          <span className="spec self-center text-asphalt-2">
            7 FIELDS · NO PAYMENT
          </span>
        </div>
      </PageHero>


      {/* רצועת תמונות — שוברת את הטופס */}
      <section className="bg-ink px-5 pb-16 md:px-8 md:pb-24" aria-label="אימון BALLERZ">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-asphalt/30 sm:grid-cols-3" data-reveal>
          <MediaSlot slot="DRIVE · B/W · 1:1" src="/media/play-drive.jpg" alt="שחקן פורץ לסל" index="J1" ratio="1/1" sizes="(max-width: 640px) 100vw, 32vw" />
          <MediaSlot slot="SHOT · B/W · 1:1" src="/media/play-shot.jpg" alt="שחקן בקליעה" index="J2" ratio="1/1" sizes="(max-width: 640px) 100vw, 32vw" />
          <MediaSlot slot="COACHING · B/W · 1:1" src="/media/coach-teaching.jpg" alt="מאמן מסביר לשחקן" index="J3" ratio="1/1" sizes="(max-width: 640px) 100vw, 32vw" />
        </div>
      </section>

      <RegisterBlock
        kind="player"
        index="01"
        label="PLAYER REGISTRATION"
        titleEn={
          <>
            SHORT FORM.
            <br />
            REAL CONVERSATION<span className="text-flare">.</span>
          </>
        }
        titleHe="השארת פרטים"
        lead="7 שדות בלבד. כל השאר נדבר בשיחה — לא בטופס."
        submitLabel="השארת פרטים"
        successTitle="WE GOT IT."
        successBody="קיבלנו את הפרטים. נחזור אליכם עם המידע המלא על המרכז, התכנית והשלב הבא."
      />

      <Centers index="02" showHeadline={false} />

      <Faq index="03" />
    </>
  );
}
