import type { PortfolioData } from "@/types/portfolio";

// Centralized placeholder content keeps future edits focused on data instead of layout code.
export const portfolioData: PortfolioData = {
  siteUrl: "https://your-freelance-portfolio.vercel.app",
  seo: {
    title: "Bhavik Songara | AI Automation & Web Developer",
    description:
      "Bhavik Songara builds AI-powered automation systems, modern websites, and scalable digital products focused on speed, usability, and real business impact.",
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
      "I build AI-powered websites and automation systems that save time and generate revenue.",
    subheadline:
      "Helping startups and businesses launch faster with scalable web apps, chatbots, and smart workflows.",
    trustHighlights: [
      "AI-driven solutions",
      "Scalable web systems",
      "Production-ready builds",
    ],
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "10+", label: "Projects Built" },
      { value: "100%", label: "Client Satisfaction" },
    ],
    about: [
      "I build websites, applications, and AI systems that solve real business problems and improve efficiency.",
      "My focus is on clean execution, smart automation, and fast, scalable products that deliver practical value.",
    ],
    shortBio:
      "Focused on building AI automation systems and modern web products that are fast, practical, and built for real-world use.",
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
        "Official website for the entrepreneurship cell, designed with a modern interface and clear structure to showcase events and initiatives.",
      outcome:
        "Delivered a professional digital presence that improved visibility and engagement for the E-Cell community.",
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
        "Restaurant website designed to showcase the brand clearly with responsive layouts and polished frontend presentation.",
      outcome:
        "Delivered a modern website experience with clean UI and strong responsiveness.",
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
        "A clean and immersive web experience focused on storytelling, layout clarity, and smooth interaction design.",
      outcome:
        "Built a fast, visually refined website with a strong modern presentation.",
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
        "Custom chatbot solutions built to automate conversations, support workflows, and improve response time.",
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
        "AI-powered workflows that reduce manual effort and connect tools into efficient systems.",
      bullets: ["OpenAI integrations", "Prompt workflows", "Task automation"],
      icon: "engineering",
      image: "/images/ai logo.png",
      imageAlt: "AI automation service logo",
    },
    {
      title: "Website Development",
      description:
        "Modern responsive websites built with clean code, strong UI, and production-ready deployment.",
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
        "Web applications designed for real use cases with scalable frontend and backend architecture.",
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
      description: "Selected brand and product work included as part of the portfolio visual system.",
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
      "If you want to build a website, app, or AI-powered workflow, feel free to reach out.",
    responseTime: "Usually replies within 1 business day",
    subjectPrefix: "New portfolio inquiry",
  },
};
