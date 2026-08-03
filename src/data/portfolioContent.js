export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Write', to: '/write' },
  { label: 'Code', to: '/code' },
  { label: 'Misc', to: '/misc' },
];

export const themeControls = {
  sun: { label: 'Use sun theme', title: 'Sun theme' },
  dark: { label: 'Use dark theme', title: 'Dark theme' },
};

export const homeContent = {
  contactHeading: 'Contact',
  name: 'Sakshi Mane',
  introduction: [
    'I am an engineering graduate exploring how technology creates value.',
    'I am currently working towards building impactful software, improving my engineering skills, and becoming someone who solves real problems.',
    'Outside engineering, I enjoy reading, practicing yoga, and watching sunrises and sunsets.',
  ],
  image: {
    alt: 'A sunlit bookshelf and study space',
    src: '/assests/images/image.png',
  },
  resume: {
    downloadLabel: 'Download Sakshi Mane resume',
    fileName: 'Sakshi-Mane.pdf',
    label: 'Resume',
    path: '/Sakshi-Mane.pdf',
  },
  experience: [
    {
      organisation: 'Primus Techsystems',
      path: '/experience/primus-techsystems',
      period: 'May 2026 – Present',
      role: 'Software Engineering Intern',
    },
    {
      organisation: 'Shabda Books & Library',
      role: 'Social Media Manager',
    },
  ],
  experienceHeading: 'Experience',
  contacts: [
    {
      icon: 'email',
      label: 'Email Sakshi Mane',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sakshimane.enfp@gmail.com',
    },
    {
      icon: 'github',
      label: 'GitHub',
      href: 'https://github.com/thesakshimane',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/thesakshimane',
    },
    {
      icon: 'medium',
      label: 'Medium',
      href: 'https://medium.com/@manesakshi1712',
    },
  ],
};

export const socialIconPaths = {
  email: 'M3.5 5.5h17A1.5 1.5 0 0 1 22 7v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17V7a1.5 1.5 0 0 1 1.5-1.5Zm0 2v.35l8.5 5.1 8.5-5.1V7.5l-8.5 5.1-8.5-5.1Z',
  github: 'M12 2.75a9.25 9.25 0 0 0-2.93 18.02c.46.08.63-.2.63-.44v-1.63c-2.57.56-3.11-1.09-3.11-1.09-.42-1.07-1.03-1.36-1.03-1.36-.84-.58.06-.57.06-.57.93.07 1.42.96 1.42.96.83 1.42 2.17 1.01 2.7.77.08-.6.32-1.01.59-1.25-2.05-.23-4.2-1.03-4.2-4.56 0-1.01.36-1.84.96-2.49-.1-.23-.42-1.17.09-2.44 0 0 .78-.25 2.55.95A8.84 8.84 0 0 1 12 7.35c.79 0 1.58.11 2.32.31 1.77-1.2 2.55-.95 2.55-.95.51 1.27.19 2.21.09 2.44.6.65.96 1.48.96 2.49 0 3.54-2.15 4.32-4.21 4.55.33.29.63.86.63 1.73v2.57c0 .24.16.52.64.44A9.25 9.25 0 0 0 12 2.75Z',
  linkedin: 'M5.2 8.4H2.3V21h2.9V8.4ZM3.75 3A1.75 1.75 0 1 0 3.8 6.5 1.75 1.75 0 0 0 3.75 3ZM21.7 13.77c0-3.8-2.03-5.57-4.74-5.57-2.18 0-3.16 1.2-3.7 2.04V8.4h-2.9V21h2.9v-6.24c0-1.64.31-3.23 2.34-3.23 2 0 2.03 1.87 2.03 3.34V21h2.9v-7.23Z',
  medium: 'M2.6 6.1a1.1 1.1 0 0 0-.37-.91L.43 3.02V2.7h5.58l4.32 9.48L14.13 2.7h5.32v.32l-1.54 1.48a.46.46 0 0 0-.18.44v10.89a.46.46 0 0 0 .18.44l1.5 1.48v.32h-7.55v-.32l1.55-1.52c.15-.15.15-.2.15-.44V6.98L9.25 18.02h-.58L3.63 6.98v7.41c-.04.32.07.65.29.89l2.02 2.45v.32H.21v-.32l2.02-2.45c.22-.24.32-.57.28-.89V6.1h.09Z',
};

export const writeContent = {
  description: 'Notes, experiences, and things I am learning.',
  heading: 'Write',
  posts: [
    {
      description: 'My journey exploring AR, VR, and HCI — insights, experiences, and learnings from the ACM India Summer School for Women.',
      image: 'blogs/images/acm-summer-school-thumbnail.jpg',
      path: 'blogs/acm-summer-school/index.html',
      title: 'ACM India Summer School 2025',
    },
  ],
};

export const codeContent = {
  description: 'coming soon.',
  heading: 'Code',
};

export const miscContent = {
  heading: 'Misc',
  leadership: [
    {
      details: 'Managed financial planning, budgeting, and expenditure tracking for 50+ technical events, overseeing budgets. Standardized workflows and documentation practices across organizing teams.',
      meta: 'Treasurer; previously Administrator · Pune, India',
      name: 'AISSMS IOIT ACM Student Chapter',
      period: '2024 – 2026',
    },
    {
      details: 'Active committee member across three student organizations for two consecutive years, including Treasurer of the Green Club and Department Coordinator for NSS.',
      name: 'Campus involvement',
      period: '2022 – 2026',
    },
  ],
  leadershipHeading: 'Leadership & Volunteering',
  programs: [
    {
      details: 'Selected among 40 participants from 291 applicants for a residential program covering ML systems, distributed ML, ML compilers, hardware acceleration, Edge AI, and Explainable AI.',
      focus: 'Systems for Machine Learning',
      location: 'VIT Vellore',
      name: 'ACM India Summer School 2026',
      period: 'June 2026',
    },
    {
      details: 'Explored AR, VR, HCI, and immersive computing through hands-on technical sessions, contributing to the Best Project Award-winning Time Travel AR/VR experience.',
      focus: 'Immersive Realities: Demystifying AR, VR, and HCI',
      location: 'FLAME University, Pune',
      name: 'ACM India Summer School 2025',
      period: '2025',
    },
    {
      details: 'Completed a 12-day residential program under CDAC’s National Supercomputing Mission, gaining hands-on exposure to OpenMP, MPI, CUDA, OpenACC, RAG, and deep learning systems.',
      focus: 'Accelerated Computing & Generative AI',
      location: 'Walchand College of Engineering, Sangli',
      name: 'Summer Training Program',
      period: '2025',
    },
  ],
  programsHeading: 'Programs I have attended',
};

export const primusExperience = {
  heading: 'Software Engineering Intern',
  meta: 'Primus Techsystems · Pune, India · March 2026 – Present',
  work: [
    'Engineered a dynamic role-based access control system for Design2Quote using React, .NET, and PostgreSQL, enabling administrators to manage page-level Read, Write, and Full Access permissions across 11+ roles.',
    'Co-built and launched Primus Labs, a product showcase platform featuring 16+ products, using React, Node.js, and PostgreSQL; contributed to product planning and feature prioritization as part of a 3-member team.',
    'Developing an MCP-powered chatbot using React, Python, Flask, and the Groq API, with custom toolsets defined through tools.yaml to enable interaction with project-specific capabilities.',
    'Developing a Master Data Governance application using SAP CAP, SAP HANA, and React; creating CDS data models, deploying services, and enabling data management through a React-based user interface.',
  ],
  workHeading: 'Work',
};
