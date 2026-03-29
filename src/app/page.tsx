import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.profile.name,
    jobTitle: portfolioData.profile.role,
    description: portfolioData.seo.description,
    email: portfolioData.profile.email,
    url: portfolioData.siteUrl,
    sameAs: portfolioData.profile.socials.map((social) => social.href),
    knowsAbout: portfolioData.profile.skills.flatMap((group) => group.items),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar items={portfolioData.navItems} />

      <main className="flex-1">
        <HeroSection profile={portfolioData.profile} />
        <AboutSection profile={portfolioData.profile} />
        <ProjectsSection projects={portfolioData.projects} />
        <ServicesSection services={portfolioData.services} />
        <TestimonialsSection testimonials={portfolioData.testimonials} />
        <ContactSection
          contact={portfolioData.contact}
          socials={portfolioData.profile.socials}
        />
      </main>

      <Footer
        name={portfolioData.profile.name}
        navItems={portfolioData.navItems}
        socials={portfolioData.profile.socials}
      />
    </>
  );
}
