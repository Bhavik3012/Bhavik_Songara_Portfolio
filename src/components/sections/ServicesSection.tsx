import Image from "next/image";

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
            title="Services focused on useful products and real-world delivery."
            description="Each offering is presented with a stronger visual identity while keeping the layout clean, modern, and easy to scan."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <article className="flex h-full flex-col rounded-[1.9rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,248,255,0.90))] p-6 shadow-[0_20px_50px_rgba(15,49,112,0.08)]">
                <div className="flex items-start gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-white shadow-[0_12px_28px_rgba(15,49,112,0.06)]">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.imageAlt ?? service.title}
                        width={72}
                        height={72}
                        className="h-12 w-auto object-contain"
                      />
                    ) : null}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-[var(--color-line)] bg-white/88 px-4 py-3"
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
