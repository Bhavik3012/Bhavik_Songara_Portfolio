import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project, SupportingLogo } from "@/types/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
  supportingLogos: SupportingLogo[];
};

export function ProjectsSection({
  projects,
}: ProjectsSectionProps) {
  return (
    <section id="projects" data-section className="section-anchor py-24">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected projects and live websites."
            description="A few recent builds with clear branding and direct access to the live work."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(243,249,255,0.92))] shadow-[0_22px_54px_rgba(15,49,112,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(15,49,112,0.16)]">
                <div className="border-b border-[var(--color-line)] p-4">
                  <div className="relative min-h-44 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(231,240,255,0.9),rgba(255,255,255,0.95))]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,88,255,0.14),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(125,180,255,0.20),transparent_32%)]" />
                    {project.image ? (
                      <div className="absolute inset-0 p-5 sm:p-6">
                        <Image
                          src={project.image}
                          alt={project.imageAlt ?? project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-contain object-center"
                        />
                      </div>
                    ) : (
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white text-2xl font-semibold text-[var(--color-primary)] shadow-[0_14px_34px_rgba(16,88,255,0.12)]">
                        {project.title
                          .split(" ")
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((part) => part[0]?.toUpperCase())
                          .join("")}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <Pill className="bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                      {project.featured ? "Featured build" : "Selected project"}
                    </Pill>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-6 flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)] sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {project.description}
                    </p>
                    <p className="mt-5 rounded-2xl border border-[var(--color-line)] bg-[var(--color-primary-soft)]/55 px-4 py-3 text-sm leading-7 text-[var(--color-text)]">
                      {project.outcome}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Pill key={`${project.title}-${tech}`}>{tech}</Pill>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:gap-3"
                  >
                    {project.linkLabel}
                    <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
