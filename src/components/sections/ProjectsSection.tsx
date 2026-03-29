import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/types/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" data-section className="section-anchor py-24">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work built to feel credible, clear, and conversion-ready."
            description="Use these as polished placeholders for your real portfolio pieces. The layout is designed so swapping titles, copy, and links later stays fast."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <article className="flex h-full flex-col rounded-[1.75rem] border border-[var(--color-line)] bg-white/82 p-6 shadow-[0_20px_50px_rgba(15,49,112,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,49,112,0.14)]">
                <div className="flex items-center justify-between gap-3">
                  <Pill className="bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                    {project.featured ? "Featured build" : "Selected project"}
                  </Pill>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 flex-1">
                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
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
                  <span aria-hidden>→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
