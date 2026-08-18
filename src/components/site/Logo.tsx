import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-baseline gap-[0.1em] font-display text-lg font-bold tracking-[0.18em] text-foreground ${className}`}
      aria-label="XEVOLVEX — inicio"
    >
      <span>X</span>
      <span className="text-signal-soft">EVOLVE</span>
      <span>X</span>
      <span className="ml-1 h-1.5 w-1.5 translate-y-[-0.35em] rounded-full bg-ok transition-transform group-hover:scale-150" />
    </Link>
  );
}
