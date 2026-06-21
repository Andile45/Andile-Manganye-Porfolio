export type ProjectIconKey = 'utensils' | 'bot' | 'building' | 'cloud' | 'scale';

export type ProjectLink = {
  label: string;
  href: string;
  download?: boolean;
};

export type DemoCredential = {
  role: string;
  email: string;
  password: string;
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  role: string;
  span: string;
  icon: ProjectIconKey;
  thumbnail?: string;
  thumbnailAlt?: string;
  /** mobile = portrait screenshot; desktop = web UI; mockup = device/promo image with background */
  thumbnailVariant?: 'mobile' | 'desktop' | 'mockup';
  links?: ProjectLink[];
  credentials?: DemoCredential[];
};

export const projects: Project[] = [
  {
    title: 'Bite X',
    tagline: 'Restaurant App',
    description:
      'Full-stack restaurant platform — mobile app for customers and a web CMS for staff, managers, and admins.',
    stack: [
      'React Native',
      'Expo',
      'React 19',
      'Vite',
      'Tailwind v4',
      'Supabase',
      'Paystack',
      'Redux Toolkit',
    ],
    features: [
      'Auth — sign up, log in, forgot password',
      'Menu — browse categories and food items',
      'Cart & orders — track from cart to delivery',
      'Profile & Paystack payments',
      'Web CMS — dashboard, menu, users, settings',
    ],
    role: 'Built the Expo mobile app (Redux Toolkit) and React 19 CMS (Vite, Tailwind v4, React Router v7); Supabase auth, RLS, order flow, and Paystack on both clients.',
    span: 'md:col-span-2 md:row-span-2',
    icon: 'utensils',
    thumbnail: '/images/projects/bite-x-mobile.png',
    thumbnailAlt:
      'Bite X mobile app home screen with menu categories and recommended food items',
    links: [
      {
        label: 'Live CMS',
        href: 'https://restaurant-app-azure-theta.vercel.app/',
      },
      {
        label: 'Download APK',
        href: '/Mobile%20Apps/Bite%20X.apk',
        download: true,
      },
    ],
    credentials: [
      { role: 'Admin', email: 'admin@bitex.com', password: 'BiteX@45' },
      { role: 'Manager', email: 'manager@bitex.com', password: 'BiteX@45' },
      { role: 'Staff', email: 'staff@bitex.com', password: 'BiteX@45' },
    ],
  },
  {
    title: 'Mabotja Thabo Attorneys Inc.',
    tagline: 'SEO · AEO · Backend',
    description:
      'Marketing website for a Polokwane-based law firm (team project). I owned technical SEO, AI discoverability (AEO), App Router folder structure, and backend — not the visual UI.',
    stack: [
      'Next.js 16',
      'TypeScript',
      'App Router',
      'Zod',
      'Formspree',
      'JSON-LD',
      'Vercel',
    ],
    features: [
      'App Router and src/data folder structure for routes and content modules',
      'Per-page metadata, dynamic sitemap.ts and robots.ts',
      'JSON-LD schema (LegalService, FAQs) and SEO keyword helpers',
      'AEO — public llms.txt and plain-text firm summary for AI crawlers',
      'Contact API route (/api/contact) with Zod validation → Formspree',
    ],
    role: 'Backend and discoverability only (not UI): route and data-layer architecture, /api/contact with Formspree, metadata and schema helpers, sitemap/robots, and llms.txt for answer-engine optimization.',
    span: 'md:col-span-2',
    icon: 'scale',
    thumbnail: '/images/projects/mabotja.png',
    thumbnailAlt:
      'Mabotja Thabo Attorneys Inc. mobile homepage showing Polokwane attorneys headline and consultation CTA',
    thumbnailVariant: 'mockup',
    links: [
      {
        label: 'Live site',
        href: 'https://www.mabotjatinc.com',
      },
    ],
  },
  {
    title: 'A&TY Trade & Services',
    tagline: 'Cleaning & Trade Website',
    description:
      'Marketing website for A&TY Trade & Services (Pty) Ltd — professional cleaning, mobile car wash, hygiene supplies, and trade solutions across Polokwane, Giyani, and Pretoria.',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind v4',
      'React Hook Form',
      'Lucide',
      'JSON-LD',
      'Vercel',
    ],
    features: [
      'Multi-page site — home, about, services, products, quote, and contact',
      '11 service detail routes from a shared services data module',
      'Quote and contact forms with React Hook Form',
      'Gallery, testimonials, and WhatsApp CTA',
      'JSON-LD structured data and local SEO for Limpopo & Gauteng',
      'Centralised brand config, image registry, and product categories',
    ],
    role: 'Full-stack marketing site: Next.js App Router pages, services/products content architecture, forms, JSON-LD schema, and Vercel deployment to atytradeservices.co.za.',
    span: 'md:col-span-2',
    icon: 'building',
    thumbnail: '/images/projects/aty-trade-services.png',
    thumbnailAlt:
      'A&TY Trade & Services website homepage with hero, services, and cleaning team photo',
    thumbnailVariant: 'mockup',
    links: [
      {
        label: 'Live site',
        href: 'https://www.atytradeservices.co.za/',
      },
    ],
  },
  {
    title: 'Thusa',
    tagline: 'TUT Student Assistant',
    description:
      'AI-powered student support assistant for Tshwane University of Technology — grounded chat with hybrid FAQ retrieval.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Node.js',
      'Express',
      'Supabase',
      'OpenAI',
      'Vercel AI SDK',
    ],
    features: [
      'Streaming chat with database-grounded answers',
      'Hybrid FAQ search across programmes & admissions',
      'Conversation memory (recent turns, relevance-filtered)',
      'Scheduled agent for weekly TUT updates',
    ],
    role: 'Full-stack: student chat UI, chat API & retrieval services, Supabase schema/seed SQL, and prompt rules to prevent hallucinations.',
    span: 'md:col-span-1',
    icon: 'bot',
    thumbnail: '/images/projects/thusa.png',
    thumbnailAlt:
      'Thusa TUT AI chatbot with FAQ sidebar, quick-start prompts, and chat input',
    links: [
      {
        label: 'Live demo',
        href: 'https://thusa-tut-ai-chatbot.vercel.app/',
      },
    ],
  },
  {
    title: 'OnSite',
    tagline: 'Municipality Maintenance',
    description:
      'AI-powered maintenance and employment system with incident reporting, classification, and worker assignment.',
    stack: [
      'React',
      'Flutter',
      'Firebase Auth',
      'Firestore',
      'Cloud Functions',
      'Vision API',
      'Figma',
    ],
    features: [
      'Image-based incident reporting',
      'AI classification & fraud detection (EXIF, GPS)',
      'Worker assignment algorithm',
      'Worker mobile app & admin dashboard',
      'Event-driven Cloud Functions',
    ],
    role: 'Full-stack features, Flutter mobile workflows, Firebase integration, Figma prototyping, and classification/notification pipelines.',
    span: 'md:col-span-1',
    icon: 'building',
    thumbnail: '/images/projects/onsite.png',
    thumbnailAlt:
      'OnSite mobile app home screen for reporting and tracking maintenance issues',
    links: [
      {
        label: 'Download APK',
        href: '/Mobile%20Apps/Onsite_Mobile.apk',
        download: true,
      },
    ],
  },
  {
    title: 'Weather App',
    tagline: 'OpenWeatherMap',
    description:
      'Real-time weather for any city — temperature, humidity, conditions, and responsive icons.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API'],
    features: [
      'Search weather by city',
      'Temperature, humidity & conditions',
      'Weather icon visualization',
      'Responsive layout',
    ],
    role: 'Vanilla JavaScript app with OpenWeatherMap integration and responsive UI.',
    span: 'md:col-span-2',
    icon: 'cloud',
    thumbnail: '/images/projects/weather.png',
    thumbnailAlt:
      'Weather app UI showing Polokwane forecast with temperature, humidity, and wind speed',
    links: [
      {
        label: 'Live demo',
        href: 'https://weather-app-zeta-navy-82.vercel.app/',
      },
    ],
  },
];
