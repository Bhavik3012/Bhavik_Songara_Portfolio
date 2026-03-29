"use client";

import Link from "next/link";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/portfolio";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(items[0]?.href.slice(1) ?? "");

  const handleSectionChange = useEffectEvent((id: string) => {
    startTransition(() => setActiveSection(id));
  });

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    if (!sections.length) {
      return;
    }

    // Observe sections instead of scroll events so the active nav remains lightweight.
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          handleSectionChange(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[color:var(--color-background)]/82 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="#top" className="flex items-center gap-3 font-semibold text-[var(--color-text)]">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-primary),#7db4ff)] text-sm font-bold text-white shadow-[0_18px_30px_rgba(16,88,255,0.26)]">
            AC
          </span>
          <span className="hidden text-sm tracking-[0.16em] text-[var(--color-muted)] sm:inline">
            Freelance Frontend
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/78 p-1 shadow-[0_16px_36px_rgba(15,49,112,0.08)] md:flex">
          {items.map((item) => {
            const id = item.href.slice(1);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-text)]",
                  activeSection === id && "bg-[var(--color-primary-soft)] text-[var(--color-primary)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#contact">Hire Me</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-text)] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <path d="M6 6 18 18" />
                <path d="M18 6 6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-[var(--color-line)] bg-white/95 transition-[max-height] duration-300 md:hidden",
          menuOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-2 py-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-primary-soft)]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="#contact" className="mt-2" onClick={() => setMenuOpen(false)}>
            Hire Me
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
