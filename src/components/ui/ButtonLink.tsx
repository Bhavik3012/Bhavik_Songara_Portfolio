import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]",
        variant === "primary"
          ? "bg-[var(--color-primary)] text-white shadow-[0_18px_40px_rgba(16,88,255,0.24)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-strong)]"
          : "border border-[var(--color-line)] bg-white/85 text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[color:var(--color-primary)] hover:bg-[var(--color-primary-soft)]",
        className,
      )}
      {...props}
    />
  );
}
