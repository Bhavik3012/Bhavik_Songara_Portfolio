import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type PillProps = ComponentPropsWithoutRef<"span">;

export function Pill({ className, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-xs font-medium text-[var(--color-muted)] shadow-[0_8px_24px_rgba(15,49,112,0.06)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
