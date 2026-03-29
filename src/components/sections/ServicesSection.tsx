import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/types/portfolio";

type ServicesSectionProps = {
  services: Service[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" data-section className="section-anchor py-24">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Flexible support across strategy, design polish, and frontend delivery."
            description="Structured for founders and teams that want experienced execution without managing a large agency process."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(241,248,255,0.9))] p-6 shadow-[0_20px_50px_rgba(15,49,112,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-[var(--color-line)] bg-white/80 px-4 py-3"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
