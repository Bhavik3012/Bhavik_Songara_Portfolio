import Link from "next/link";

import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContactDetails, SocialLink } from "@/types/portfolio";

type ContactSectionProps = {
  contact: ContactDetails;
  socials: SocialLink[];
};

export function ContactSection({ contact, socials }: ContactSectionProps) {
  return (
    <section id="contact" data-section className="section-anchor py-24">
      <Container>
        <div className="grid gap-8 rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,247,255,0.92))] p-6 shadow-[0_28px_72px_rgba(15,49,112,0.12)] sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Ready to make your site feel more credible and conversion-focused?"
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

          <Reveal delay={120} className="rounded-[1.75rem] border border-[var(--color-line)] bg-white/88 p-6">
            <ContactForm email={contact.email} subjectPrefix={contact.subjectPrefix} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
