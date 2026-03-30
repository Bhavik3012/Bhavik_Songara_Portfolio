import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Profile } from "@/types/portfolio";

type AboutSectionProps = {
  profile: Profile;
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" data-section className="section-anchor py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="About"
              title="Modern web and AI products, built to be useful."
              description={profile.shortBio}
            />

            <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-white/82 p-6 shadow-[0_20px_50px_rgba(15,49,112,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                Focus areas
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
                <li>Responsive frontend development.</li>
                <li>AI automations and chatbots.</li>
                <li>Production-ready builds.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-8">
            <div className="space-y-5 rounded-[1.75rem] border border-[var(--color-line)] bg-white/78 p-7 shadow-[0_20px_50px_rgba(15,49,112,0.08)]">
              {profile.about.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-[var(--color-muted)]">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-3 border-t border-[var(--color-line)] pt-5 text-sm text-[var(--color-muted)]">
                <span>{profile.location}</span>
                <span className="text-[var(--color-line)]">&bull;</span>
                <a href={`mailto:${profile.email}`} className="break-all transition hover:text-[var(--color-primary)] sm:break-normal">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {profile.skills.map((group, index) => (
                <div
                  key={group.title}
                  className="rounded-[1.75rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,249,255,0.92))] p-6"
                >
                  <p className="text-sm font-semibold text-[var(--color-text)]">{group.title}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Pill key={`${group.title}-${item}-${index}`}>{item}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
