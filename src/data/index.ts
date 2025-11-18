import type { IAchievement, IExperience, IFunFact, INavLink, IProject, ISkill, ISocials, IStat } from "@/types";
import { Award, BookOpen, Briefcase, Code2, Globe, Laptop, Users } from "lucide-vue-next";

export const projects: IProject[] = [
  {
    title: 'Cars Marketplace (Vetura365)',
    description: 'Full-stack marketplace for buying and selling cars with dealer subscriptions, secure auth, and responsive UI.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Stripe',
      'Docker',
      'Google Cloud Build',
    ],
    live: 'https://vetura365.com'
  },
  {
    title: 'EDMA GmbH',
    description: 'Responsive React experience for a Swiss client with performance optimisations and modular UI kit.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Lazy Loading',
      'Reusable Components',
    ],
    live: 'https://a-telaku.netlify.app/'
  },
  {
    title: 'Movie TV Tracker',
    description: 'Streaming companion app that delivers dubbed Albanian content with secure auth and fast APIs.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'Responsive Design',
      'JWT Auth',
    ],
    repos: [
      { label: 'Frontend', url: 'https://github.com/AbedinTelaku/movie-tv-tracker' },
      { label: 'Backend', url: 'https://github.com/AbedinTelaku/movie-tv-tracker-backend' },
    ],
  },
  {
    title: 'Resume AI',
    description: 'AI-powered resume analysis platform with NLP insights, cloud-scale processing, and instant feedback.',
    technologies: [
      'Node.js',
      'Express',
      'NLP',
      'Cloud AI Services',
      'React',
    ],
    repos: [
      { label: 'Code', url: 'https://github.com/AbedinTelaku/ResumeAnalyzer' }
    ],
  },
  {
    title: 'DevLobby',
    description: 'Interactive puzzle hub with leaderboards that keeps developers engaged through gamified learning.',
    technologies: [
      'React',
      'Hooks',
      'State Management',
      'Responsive UI',
    ],
    // This repository is private — link added for reference
    github: 'https://github.com/AbedinTelaku/DevLobby',
  },
  {
    title: 'KS-PRESS',
    description: 'News management platform with secure admin workflows, CRUD tooling, and performance-focused PHP backend.',
    technologies: [
      'HTML',
      'CSS',
      'PHP',
      'MySQL',
      'Responsive Design',
    ],
    repos: [
      { label: 'Code', url: 'https://github.com/AbedinTelaku/ProjektiNeWeb' }
    ],
  }
];

export const experience: IExperience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Xpertt Technologies',
    period: 'January 2025 – Present',
    description: 'Scale .NET + React/Angular platforms, optimize SQL databases, automate CI/CD with GitHub Actions/Azure DevOps, and integrate REST APIs plus third-party services while mentoring cross-functional teams.',
  },
  {
    title: 'Junior React Developer',
    company: 'Kuma Digital',
    period: 'April 2024 – December 2024',
    description: 'Translated high-fidelity designs into pixel-perfect React + Tailwind UI, delivered responsive navigation and interactive modals, and collaborated remotely via Agile cadences, Zoom, and GitHub.',
  },
  {
    title: 'React Developer (Internship)',
    company: 'Starlabs',
    period: 'January 2023 – March 2023',
    description: 'Partnered with designers and backend engineers to ship reusable React components, coordinate via Slack/GitHub, and support code reviews for a production-ready UI system.',
  },
];

export const achievements: IAchievement[] = [
  {
    title: 'CI/CD Automation Lead',
    issuer: 'Xpertt Technologies',
    year: '2025',
    description: 'Implemented GitHub Actions/Azure DevOps pipelines that keep deployments fast, reliable, and observable.',
  },
  {
    title: 'Remote Delivery Champion',
    issuer: 'Kuma Digital',
    year: '2024',
    description: 'Recognized for consistently meeting sprint goals while collaborating across Swiss and Kosovo time zones.',
  },
  {
    title: 'High-Impact Internship',
    issuer: 'Starlabs',
    year: '2023',
    description: 'Delivered production-quality React components that sped up feature development by 20%.'
  },
];


export const navLinks: INavLink[] = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Contact',
    href: '#contact',
  }
]



export const introText = `I'm Abedin Telaku, a Kosovo-based software developer building reliable products across React, .NET, and cloud-native stacks.`;

export const aboutText = `I hold a B.Sc. in Computer Science & Engineering from UBT and deliver end-to-end solutions
          for European clients. My day-to-day includes architecting frontends in React or Angular,
          shipping secure APIs with Node.js/.NET, and keeping deployments automated through modern DevOps tooling.`


export const contactText = `Let's connect if you need a hands-on engineer who can own the full stack—from product discovery to deployment—and collaborate seamlessly with distributed teams.`;






export const skills: ISkill[] = [
  {
    name: 'TypeScript',
    level: 90,
    category: 'Languages'
  },
  {
    name: 'JavaScript',
    level: 90,
    category: 'Languages'
  },
  {
    name: 'C#',
    level: 85,
    category: 'Languages'
  },
  {
    name: 'Java',
    level: 75,
    category: 'Languages'
  },
  {
    name: 'Python',
    level: 70,
    category: 'Languages'
  },
  {
    name: 'React',
    level: 92,
    category: 'Frameworks'
  },
  {
    name: 'Vue',
    level: 78,
    category: 'Frameworks'
  },
  {
    name: 'Angular',
    level: 80,
    category: 'Frameworks'
  },
  {
    name: '.NET',
    level: 85,
    category: 'Frameworks'
  },
  {
    name: 'Next.js',
    level: 78,
    category: 'Frameworks'
  },
  {
    name: 'Git',
    level: 90,
    category: 'Tools'
  },
  {
    name: 'Docker',
    level: 85,
    category: 'Tools'
  },
  {
    name: 'Kubernetes',
    level: 70,
    category: 'Tools'
  },
  {
    name: 'Figma',
    level: 82,
    category: 'Tools'
  },
  {
    name: 'Postman',
    level: 85,
    category: 'Tools'
  },
  {
    name: 'SQL Server',
    level: 85,
    category: 'Databases'
  },
  {
    name: 'PostgreSQL',
    level: 78,
    category: 'Databases'
  },
  {
    name: 'MongoDB',
    level: 82,
    category: 'Databases'
  },
  {
    name: 'MySQL',
    level: 80,
    category: 'Databases'
  },
  {
    name: 'Firebase',
    level: 70,
    category: 'Databases'
  },
];




export const allSocials: Record<'github' | 'linkedin' | 'email', ISocials> = {
  github: {
    name: "Github",
    link: "https://github.com/AbedinTelaku",
  },
  linkedin: {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/abedintelaku",
  },
  email: {
    name: "Email",
    link: "abedintelaku1@gmail.com",
  },
}

// Local avatar (prefer this over GitHub avatar). Place your image at `public/img/avatar.svg` or `public/img/avatar.png`.
// Use uploaded custom avatar in public/img (falls back to GitHub avatar if absent)
// Local avatar path (place your image in `public/img/` with this filename)
export const avatar = '/img/openart-60356aa07dd242a99c82091c2fe007d2_raw.jpg'




export const funFacts: IFunFact[] = [
  {
    icon: Globe,
    title: 'Remote-First Mindset',
    description: 'Thrives in remote Swiss/Kosovo collaborations, keeping communication crisp across time zones.',
    color: 'from-sky-500/20 to-blue-500/20'
  },
  {
    icon: Users,
    title: 'Collaborative Builder',
    description: 'Loves pairing with designers, backend devs, and DevOps to ship polished features faster.',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    icon: BookOpen,
    title: 'Applied Researcher',
    description: 'UBT thesis focuses on software engineering practices that improve product delivery.',
    color: 'from-indigo-500/20 to-purple-500/20'
  },
  {
    icon: Laptop,
    title: 'Mentor at Heart',
    description: 'Enjoys helping interns adopt React best practices and write maintainable components.',
    color: 'from-amber-500/20 to-orange-500/20'
  },
];


export const stats: IStat[] = [
  { number: '3+', label: 'Years Building Products', icon: Code2 },
  { number: '12+', label: 'End-to-end Projects', icon: Briefcase },
  { number: '4', label: 'Remote Teams Supported', icon: Users },
  { number: '2', label: 'Cloud Platforms Delivered', icon: Award },
];
