import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "flare" | "bone" | "ink" | "ghost";

type Props = {
  href?: string;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "group relative inline-flex items-center justify-between gap-6 overflow-hidden " +
  "border font-medium leading-none transition-colors duration-500 " +
  "focus-visible:outline-2 focus-visible:outline-offset-3";

const variants: Record<Variant, string> = {
  flare: "border-flare bg-flare text-ink hover:text-bone",
  bone: "border-bone/35 bg-transparent text-bone hover:border-flare hover:text-ink",
  ink: "border-ink/25 bg-transparent text-ink hover:border-flare hover:text-bone",
  ghost: "border-transparent bg-transparent text-bone hover:text-flare",
};

const fills: Record<Variant, string> = {
  flare: "bg-ink",
  bone: "bg-flare",
  ink: "bg-flare",
  ghost: "bg-transparent",
};

const sizes = {
  md: "px-6 py-4 text-[0.9rem]",
  lg: "px-7 py-5 text-[0.95rem] md:text-base",
};

function Inner({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: Variant;
}) {
  return (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 origin-[left] scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100",
          fills[variant],
        )}
      />
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 24 12"
        className="relative z-10 h-2.5 w-6 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M24 6H1M7 1L1 6l6 5" />
      </svg>
    </>
  );
}

export default function Button({
  href,
  variant = "flare",
  size = "md",
  className,
  children,
  type = "button",
  disabled,
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        <Inner variant={variant}>{children}</Inner>
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={cn(cls, "disabled:opacity-40")}>
      <Inner variant={variant}>{children}</Inner>
    </button>
  );
}
