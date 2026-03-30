import type { PortfolioData } from "@/types/portfolio";

// Centralized placeholder content keeps future edits focused on data instead of layout code.
export const portfolioData: PortfolioData = {
  siteUrl: "https://your-freelance-portfolio.vercel.app",
  seo: {
    title: "Bhavik Songara | AI Automation & Web Developer",
    description:
      "Bhavik Songara builds AI automation systems, websites, and digital products.",
    keywords: [
      "Bhavik Songara",
      "AI automation developer",
      "Next.js developer",
      "React portfolio",
      "OpenAI APIs",
      "website development",
    ],
  },
  navItems: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  profile: {
    name: "Bhavik Songara",
    role: "AI Automation Developer & Web Product Builder",
    location: "Based in India, available for freelance work",
    availability: "Open to freelance projects",
    email: "bhaviksongara301205@gmail.com",
    image: "/images/profile-placeholder.png",
    imageAlt: "Portrait of Bhavik Songara",
    headline:
      "I build AI websites and automation systems that save time.",
    subheadline:
      "Web apps, chatbots, and smart workflows for startups and businesses.",
    trustHighlights: [
      "AI automation",
      "Web products",
      "Launch-ready builds",
    ],
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "10+", label: "Projects Built" },
      { value: "100%", label: "Client Satisfaction" },
    ],
    about: [
      "I build websites, apps, and AI systems that solve practical business problems.",
      "My focus is clean execution, smart automation, and scalable digital products.",
    ],
    shortBio:
      "Focused on AI automation and modern web products built for real use.",
    skills: [
      {
        title: "AI & ML",
        items: ["Python", "Scikit-learn", "NLP", "TF-IDF", "K-Means"],
      },
      {
        title: "Data Science",
        items: ["NumPy", "Pandas", "Matplotlib", "EDA"],
      },
      {
        title: "Generative AI",
        items: ["OpenAI APIs", "Prompt Engineering", "AI Agents"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express.js", "REST APIs"],
      },
      {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Database",
        items: ["MySQL", "MongoDB"],
      },
    ],
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/bhavik-songara-211156274/",
      },
      { label: "GitHub", href: "https://github.com/Bhavik3012" },
      { label: "X", href: "https://x.com/LearnWithBhavik" },
    ],
  },
  projects: [
    {
      title: "E-Cell IIIT Surat Website",
      description:
        "Official website for the entrepreneurship cell with a clear, modern interface.",
      outcome:
        "Built a stronger digital presence for the E-Cell community.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      href: "https://ecelliiitsurat.in/",
      linkLabel: "View project",
      image: "/images/ruminate.png",
      imageAlt: "Ruminate logo",
      featured: true,
    },
    {
      title: "Pop101 Website",
      description:
        "Restaurant website with polished UI and responsive layouts.",
      outcome:
        "Delivered a clean, modern, responsive website.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
      href: "https://pop101.com.au/",
      linkLabel: "Visit website",
      image: "/images/pop101.png",
      imageAlt: "Pop101 website logo",
      featured: true,
    },
    {
      title: "Truth Tunnel Website",
      description:
        "An immersive website focused on storytelling and clean interaction design.",
      outcome:
        "Built a fast website with a refined visual presentation.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      href: "https://truth-tunnel.vercel.app/",
      linkLabel: "Open website",
      image: "/images/truthtunnel.png",
      imageAlt: "Truth Tunnel website logo",
    },
  ],
  services: [
    {
      title: "WhatsApp Chatbot Development",
      description:
        "Custom chatbots that automate replies and support workflows.",
      bullets: [
        "Lead capture",
        "Automated replies",
        "Business workflow integration",
      ],
      icon: "strategy",
      image: "/images/whatsapp loog.png",
      imageAlt: "WhatsApp service logo",
    },
    {
      title: "AI Automation Workflows",
      description:
        "AI workflows that reduce manual work and connect tools.",
      bullets: ["OpenAI integrations", "Prompt workflows", "Task automation"],
      icon: "engineering",
      image: "/images/ai logo.png",
      imageAlt: "AI automation service logo",
    },
    {
      title: "Website Development",
      description:
        "Modern responsive websites built with clean code and strong UI.",
      bullets: [
        "Responsive design",
        "Next.js development",
        "Performance-focused builds",
      ],
      icon: "design",
      image: "/images/web dev logo.png",
      imageAlt: "Website development service logo",
    },
    {
      title: "Application Development",
      description:
        "Web applications built for real use cases with scalable architecture.",
      bullets: [
        "Frontend and backend integration",
        "REST APIs",
        "Real-world product flows",
      ],
      icon: "growth",
      image: "/images/google play store logo.png",
      imageAlt: "Application development service logo",
    },
  ],
  supportingLogos: [
    {
      title: "Additional Work",
      image: "/images/ruminate.png",
      imageAlt: "Ruminate brand logo",
      description: "Additional product and brand work.",
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
    phone: "+91 7048748363",
    email: "bhaviksongara301205@gmail.com",
    intro:
      "Need a website, app, or AI workflow? Let’s talk.",
    responseTime: "Usually replies within 1 business day",
    subjectPrefix: "New portfolio inquiry",
  },
};
