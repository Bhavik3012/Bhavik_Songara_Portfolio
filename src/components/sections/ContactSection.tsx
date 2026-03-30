import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContactDetails, SocialLink } from "@/types/portfolio";

type ContactSectionProps = {
  name: string;
  contact: ContactDetails;
  socials: SocialLink[];
};

export function ContactSection({
  name,
  contact,
  socials,
}: ContactSectionProps) {
  return (
    <section id="contact" data-section className="section-anchor py-24">
      <Container>
        <div className="grid gap-8 rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,247,255,0.92))] p-6 shadow-[0_28px_72px_rgba(15,49,112,0.12)] sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something useful."
              description={contact.intro}
            />

            <div className="space-y-4 rounded-[1.75rem] border border-[var(--color-line)] bg-white/88 p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  Direct email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-3 inline-block text-lg font-semibold text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
                >
                  {contact.email}
                </a>
              </div>
              <Pill>{contact.responseTime}</Pill>
              <div className="flex flex-wrap gap-3 pt-2">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition hover:border-[color:var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="rounded-[1.75rem] border border-[var(--color-line)] bg-white/88 p-6"
          >
            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-primary-soft)]/55 px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  Contact details
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white px-5 py-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Name
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">{name}</p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white px-5 py-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Phone
                </p>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="mt-2 inline-block text-lg font-semibold text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
                >
                  {contact.phone}
                </a>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white px-5 py-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 inline-block text-lg font-semibold text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
