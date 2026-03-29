import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import type { Profile } from "@/types/portfolio";

type HeroSectionProps = {
  profile: Profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="top" className="relative overflow-hidden pt-8 sm:pt-12" aria-label="Introduction">
      <Container>
        <div className="grid gap-14 rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,248,255,0.92))] px-6 py-8 shadow-[0_32px_80px_rgba(15,49,112,0.10)] sm:px-10 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12">
          <Reveal className="space-y-8">
            <Pill className="bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
              {profile.availability}
            </Pill>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
                {profile.role}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                {profile.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                {profile.subheadline}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact">Hire Me</ButtonLink>
              <ButtonLink href="#projects" variant="secondary">
                View Projects
              </ButtonLink>
            </div>

            <ul className="grid gap-3 sm:grid-cols-3">
              {profile.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-3xl border border-[var(--color-line)] bg-white/85 px-5 py-4"
                >
                  <p className="text-2xl font-semibold text-[var(--color-text)]">{stat.value}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{stat.label}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 translate-x-4 translate-y-6 rounded-[2rem] bg-[linear-gradient(135deg,rgba(16,88,255,0.16),rgba(125,180,255,0.26))] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white/88 p-5 shadow-[0_24px_60px_rgba(15,49,112,0.12)]">
                <div className="absolute right-4 top-4 rounded-full border border-[var(--color-line)] bg-white/90 px-3 py-1 text-xs font-medium text-[var(--color-muted)]">
                  Vercel-ready delivery
                </div>
                <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,#eaf3ff,#fdfefe)]">
                  <Image
                    src={profile.image}
                    alt={profile.imageAlt}
                    width={960}
                    height={1120}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {profile.trustHighlights.map((highlight) => (
                    <Pill key={highlight}>{highlight}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
