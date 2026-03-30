export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  outcome: string;
  techStack: string[];
  href: string;
  linkLabel: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
};

export type ServiceIcon = "strategy" | "design" | "engineering" | "growth";

export type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: ServiceIcon;
  image?: string;
  imageAlt?: string;
};

export type SupportingLogo = {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  image: string;
  imageAlt: string;
  headline: string;
  subheadline: string;
  trustHighlights: string[];
  stats: Stat[];
  about: string[];
  shortBio: string;
  skills: SkillGroup[];
  socials: SocialLink[];
};

export type ContactDetails = {
  phone: string;
  email: string;
  intro: string;
  responseTime: string;
  subjectPrefix: string;
};

export type PortfolioData = {
  siteUrl: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  navItems: NavItem[];
  profile: Profile;
  projects: Project[];
  services: Service[];
  supportingLogos: SupportingLogo[];
  testimonials: Testimonial[];
  contact: ContactDetails;
};
