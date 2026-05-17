export type SkillDetail = {
  summary: string;
  usedIn: string[];
};

export const skillDetails: Record<string, SkillDetail> = {
  React: {
    summary: 'Component-driven UIs with hooks, routing, and modern patterns.',
    usedIn: ['Bite X CMS', 'Thusa Chatbot', 'Weather App', 'Portfolio'],
  },
  'React Native': {
    summary: 'Cross-platform mobile apps with native navigation and APIs.',
    usedIn: ['Bite X Mobile', 'Onsite Mobile'],
  },
  HTML: {
    summary: 'Semantic markup and accessible document structure.',
    usedIn: ['All web projects', 'Portfolio'],
  },
  CSS: {
    summary: 'Layout, responsive design, and component styling.',
    usedIn: ['All web projects', 'Portfolio'],
  },
  JavaScript: {
    summary: 'ES6+, async flows, and full-stack scripting.',
    usedIn: ['Bite X', 'Thusa', 'Weather App', 'University projects'],
  },
  'Tailwind CSS': {
    summary: 'Utility-first styling with design tokens and responsive variants.',
    usedIn: ['Bite X CMS', 'Portfolio', 'Weather App'],
  },
  TypeScript: {
    summary: 'Typed components, safer APIs, and maintainable codebases.',
    usedIn: ['Bite X', 'Thusa', 'Portfolio', 'Onsite'],
  },
  'Node.js': {
    summary: 'Server runtimes, REST APIs, and backend tooling.',
    usedIn: ['Bite X', 'Thusa', 'University backends'],
  },
  Expo: {
    summary: 'Fast React Native builds, OTA updates, and device APIs.',
    usedIn: ['Bite X Mobile'],
  },
  Supabase: {
    summary: 'Postgres, auth, storage, and real-time subscriptions.',
    usedIn: ['Bite X'],
  },
  Firebase: {
    summary: 'Auth, Firestore, and cloud functions for mobile/web.',
    usedIn: ['Onsite Mobile', 'University projects'],
  },
  PostgreSQL: {
    summary: 'Relational modeling, queries, and production databases.',
    usedIn: ['Bite X', 'CodeTribe projects'],
  },
  SQL: {
    summary: 'Queries, joins, and schema design across RDBMS engines.',
    usedIn: ['TUT coursework', 'Bite X', 'Thusa'],
  },
  Java: {
    summary: 'OOP, Spring-style backends, and enterprise patterns.',
    usedIn: ['TUT diploma projects'],
  },
  Figma: {
    summary: 'Wireframes, UI kits, and developer handoff.',
    usedIn: ['Bite X', 'Portfolio', 'Mobile UI mockups'],
  },
  GitHub: {
    summary: 'Version control, PRs, and collaborative workflows.',
    usedIn: ['All shipped projects'],
  },
  Vercel: {
    summary: 'Frontend deployment, previews, and edge hosting.',
    usedIn: ['Thusa', 'Weather App', 'Portfolio'],
  },
  Railway: {
    summary: 'Simple backend and database hosting.',
    usedIn: ['Side projects', 'API prototypes'],
  },
  Render: {
    summary: 'Managed web services and background workers.',
    usedIn: ['Backend deployments'],
  },
  Shadcn: {
    summary: 'Accessible Radix primitives with Tailwind customization.',
    usedIn: ['Portfolio', 'Bite X CMS patterns'],
  },
  'VS Code': {
    summary: 'Primary editor for React, TypeScript, and debugging.',
    usedIn: ['Daily development'],
  },
  NetBeans: {
    summary: 'Java IDE for university and enterprise coursework.',
    usedIn: ['TUT Java projects'],
  },
};
