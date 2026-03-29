import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/types/portfolio";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section id="clients" data-section className="section-anchor py-24">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Clients"
            title="Proof built around trust, clarity, and calm execution."
            description="These placeholder testimonials are shaped to show the kind of social proof that works especially well for experienced freelancers."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={`${testimonial.name}-${testimonial.company}`} delay={index * 80}>
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-[var(--color-line)] bg-white/88 p-6 shadow-[0_20px_50px_rgba(15,49,112,0.08)]">
                <blockquote className="flex-1 text-base leading-8 text-[var(--color-text)]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-[var(--color-line)] pt-5">
                  <p className="font-semibold text-[var(--color-text)]">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
