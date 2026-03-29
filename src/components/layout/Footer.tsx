import Link from "next/link";

import { Container } from "@/components/ui/Container";
import type { NavItem, SocialLink } from "@/types/portfolio";

type FooterProps = {
  name: string;
  navItems: NavItem[];
  socials: SocialLink[];
};

export function Footer({ name, navItems, socials }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-line)] pb-10 pt-8">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-[var(--color-text)]">{name}</p>
          <p className="mt-2 max-w-md text-sm leading-7 text-[var(--color-muted)]">
            Designed to be easy to customize: update the data file, swap your assets, and deploy to Vercel.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[var(--color-muted)] sm:items-end">
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--color-primary)]">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--color-primary)]"
              >
                {social.label}
              </Link>
            ))}
          </div>
          <p>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
