import Link from "next/link";
import { Container } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-ink pt-28">
      <div className="asphalt absolute inset-0" aria-hidden>
        <div className="grid-lab absolute inset-0 opacity-40" />
      </div>
      <Container className="relative">
        <span className="spec text-flare">404 — OUT OF BOUNDS</span>
        <h1 className="display t-h1 mt-5">
          WRONG COURT<span className="text-flare">.</span>
        </h1>
        <p className="body-he mt-6 max-w-md text-bone/70">
          העמוד שחיפשת לא קיים. אפשר לחזור לדף הבית ולהמשיך משם.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-4 border border-flare bg-flare px-6 py-4 text-sm font-medium text-ink transition-colors hover:bg-transparent hover:text-flare"
        >
          חזרה לדף הבית
        </Link>
      </Container>
    </section>
  );
}
