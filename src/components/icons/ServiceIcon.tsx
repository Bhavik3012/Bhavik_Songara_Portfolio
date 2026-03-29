import type { ServiceIcon as ServiceIconName } from "@/types/portfolio";

type ServiceIconProps = {
  name: ServiceIconName;
  className?: string;
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const commonProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "strategy":
      return (
        <svg {...commonProps}>
          <path d="M4 20h16" />
          <path d="M6 16V8l6-4 6 4v8" />
          <path d="M9 20v-5h6v5" />
        </svg>
      );
    case "design":
      return (
        <svg {...commonProps}>
          <path d="M4.5 12.5 12 5l7.5 7.5L12 20Z" />
          <path d="M8 16h8" />
          <path d="M9 9.5h6" />
        </svg>
      );
    case "engineering":
      return (
        <svg {...commonProps}>
          <path d="M12 3v4" />
          <path d="m18.36 6.64-2.83 2.83" />
          <path d="M21 12h-4" />
          <path d="m18.36 17.36-2.83-2.83" />
          <path d="M12 21v-4" />
          <path d="m8.47 14.53-2.83 2.83" />
          <path d="M7 12H3" />
          <path d="m8.47 9.47-2.83-2.83" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case "growth":
      return (
        <svg {...commonProps}>
          <path d="M5 18V9" />
          <path d="M12 18V5" />
          <path d="M19 18v-7" />
          <path d="m15 8 4 3 3-5" />
        </svg>
      );
  }
}
