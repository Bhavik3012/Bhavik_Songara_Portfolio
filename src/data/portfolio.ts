import type { PortfolioData } from "@/types/portfolio";

// Centralized placeholder content keeps future edits focused on data instead of layout code.
export const portfolioData: PortfolioData = {
  siteUrl: "https://your-freelance-portfolio.vercel.app",
  seo: {
    title: "Alex Carter | Freelance Frontend Engineer",
    description:
      "Conversion-focused freelancer portfolio for product teams that need polished UI, performant frontend engineering, and dependable delivery.",
    keywords: [
      "freelance frontend engineer",
      "next.js developer",
      "ui ux freelancer",
      "react developer portfolio",
      "tailwind css expert",
      "vercel deployment",
    ],
  },
  navItems: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ],
  profile: {
    name: "Alex Carter",
    role: "Freelance Frontend Engineer & UI Partner",
    location: "Available worldwide, based in GMT-friendly hours",
    availability: "Available for select projects in Q2",
    email: "alex@yourportfolio.dev",
    image: "/images/profile-placeholder.svg",
    imageAlt: "Placeholder portrait illustration for freelancer Alex Carter",
    headline: "I design and build fast, credible websites that help service businesses win better clients.",
    subheadline:
      "From positioning and UX to high-quality frontend delivery, I help teams ship polished digital experiences that feel premium and convert with confidence.",
    trustHighlights: [
      "Senior-level execution without agency overhead",
      "Clear communication from kickoff to launch",
      "Performance-minded builds ready for Vercel",
    ],
    stats: [
      { value: "8+ yrs", label: "shipping product interfaces" },
      { value: "40+", label: "marketing and product launches" },
      { value: "96%", label: "repeat or referral work" },
    ],
    about: [
      "I partner with founders, consultants, and in-house teams who need more than a pretty interface. The work has to feel strategic, trustworthy, and technically solid enough to support real business goals.",
      "My process blends product thinking, sharp UX, and careful frontend engineering so the final site is easier to trust, easier to maintain, and easier to ship.",
    ],
    shortBio:
      "Trusted by growing teams when the site needs to look premium, load fast, and support meaningful business conversations.",
    skills: [
      {
        title: "Core stack",
        items: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
      },
      {
        title: "Design systems",
        items: ["Figma handoff", "UI architecture", "Component libraries", "Accessibility"],
      },
      {
        title: "Performance",
        items: ["SEO foundations", "Core Web Vitals", "Image optimization", "Analytics readiness"],
      },
    ],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "X", href: "https://x.com/" },
    ],
  },
  projects: [
    {
      title: "B2B SaaS Positioning Site",
      description:
        "Reframed a technical product into a cleaner buyer journey with sharper messaging, modular landing pages, and stronger product proof.",
      outcome: "Lifted qualified demo requests after launch by simplifying the conversion path.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      href: "https://example.com",
      linkLabel: "View project",
      featured: true,
    },
    {
      title: "Consulting Brand Relaunch",
      description:
        "Built a premium one-page funnel for a boutique advisory business, combining trust signals, service framing, and a fast editorial workflow.",
      outcome: "Turned a generic brochure site into a focused lead-generation asset for higher-value engagements.",
      techStack: ["React", "App Router", "SEO", "Content strategy"],
      href: "https://example.com",
      linkLabel: "Open case study",
      featured: true,
    },
    {
      title: "Product Marketing Microsite",
      description:
        "Delivered a launch microsite with reusable campaign sections, subtle motion, and clean analytics hooks for the growth team.",
      outcome: "Enabled marketing to launch faster without sacrificing visual quality or performance.",
      techStack: ["Next.js", "Reusable components", "A11y", "Performance"],
      href: "https://example.com",
      linkLabel: "See launch page",
    },
  ],
  services: [
    {
      title: "Landing Pages That Convert",
      description:
        "Sharp messaging structure, confident visual design, and polished implementation for pages that need to win trust quickly.",
      bullets: ["Hero and CTA strategy", "Conversion-focused structure", "Responsive implementation"],
      icon: "strategy",
    },
    {
      title: "Frontend Delivery",
      description:
        "Modern, maintainable builds for teams that care about quality, performance, and smooth handoff after launch.",
      bullets: ["Next.js and React builds", "Reusable component systems", "Vercel-ready deployment"],
      icon: "engineering",
    },
    {
      title: "UI Refreshes",
      description:
        "Modernize dated interfaces into something clearer, more premium, and more aligned with how the business wants to be perceived.",
      bullets: ["Visual refinement", "Trust-building layouts", "Design cleanup without waste"],
      icon: "design",
    },
    {
      title: "Ongoing Optimization",
      description:
        "Support after launch to iterate on sections, campaigns, performance, and content without rebuilding from scratch.",
      bullets: ["Content and page updates", "Performance tuning", "Funnel iteration support"],
      icon: "growth",
    },
  ],
  testimonials: [
    {
      quote:
        "Alex brought senior-level clarity to both the messaging and the frontend build. The new site felt sharper immediately and gave our sales team something they were proud to send.",
      name: "Maya Lin",
      role: "Head of Growth",
      company: "Northstar Cloud",
    },
    {
      quote:
        "The project moved quickly, but never felt rushed. Every detail had intent, and the final result looked far more established than our previous agency work.",
      name: "Daniel Reed",
      role: "Founder",
      company: "Summit Advisory",
    },
    {
      quote:
        "Strong design judgment, clean communication, and solid engineering. We launched on time and the site finally matched the quality of the product behind it.",
      name: "Priya Sethi",
      role: "Product Marketing Lead",
      company: "FrameOps",
    },
  ],
  contact: {
    email: "alex@yourportfolio.dev",
    intro:
      "Tell me what you are building, what is not working yet, and what kind of support would help most.",
    responseTime: "Usually replies within 1 business day",
    subjectPrefix: "New portfolio inquiry",
  },
};
