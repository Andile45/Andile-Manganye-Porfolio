import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';
import { FaPalette, FaCog, FaDatabase, FaCloud, FaTools, FaRocket } from 'react-icons/fa';
import { 
  SiReact, 
  SiTypescript, 
  SiVite, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiFlutter, 
  SiDart,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiSpring,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiVercel,
  SiRailway,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiPycharm,
  SiFigma
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      Icon: FaPalette,
      skills: [
        'React (Hooks, Context API)',
        'TypeScript',
        'Vite',
        'TailwindCSS',
        'HTML5, CSS3, JavaScript (ES6+)',
        'Flutter + Dart (Clean Architecture)',
      ],
      color: 'blue',
    },
    {
      title: 'Backend',
      Icon: FaCog,
      skills: [
        'Node.js + Express.js',
        'Python Flask (raw SQL)',
        'Java Spring Boot (REST APIs, WebSockets)',
        'Firebase Cloud Functions',
      ],
      color: 'purple',
      gradient: 'blue-500',
    },
    {
      title: 'Databases',
      Icon: FaDatabase,
      skills: [
        'PostgreSQL',
        'MySQL',
        'Supabase (DB + Auth + Storage)',
        'Firestore',
        'Firebase Realtime Database',
        'Flyway migrations',
      ],
      color: 'green',
      gradient: 'blue-500',
    },
    {
      title: 'Cloud & Hosting',
      Icon: FaCloud,
      skills: [
        'Vercel (frontend)',
        'Railway (backend)',
        'Supabase (DB + Auth)',
        'Google Cloud (Vision API, Cloud Functions)',
      ],
      color: 'yellow',
      gradient: 'blue-500',
    },
    {
      title: 'Tools & Platforms',
      Icon: FaTools,
      skills: [
        'Git & GitHub',
        'IntelliJ IDEA',
        'VS Code',
        'PyCharm',
        'NetBeans',
        'Figma (UI/UX)',
      ],
      color: 'blue',
      gradient: 'blue-500',
    },
    {
      title: 'Other Skills',
      Icon: FaRocket,
      skills: [
        'Web scraping (BeautifulSoup)',
        'Agile/Scrum teamwork',
        'Debugging & problem solving',
        'System design & architecture thinking',
      ],
      color: 'indigo',
      gradient: 'blue-500',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-700',
    purple:
      'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-700',
    green:
      'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-300 dark:border-green-700',
    yellow:
      'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700',
    pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 border-pink-300 dark:border-pink-700',
    indigo:
      'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700',
  };

  // Icon mapping for tech stack
  const getSkillIcon = (skill: string) => {
    const skillLower = skill.toLowerCase();
    
    // Frontend
    if (skillLower.includes('react')) return SiReact;
    if (skillLower.includes('typescript')) return SiTypescript;
    if (skillLower.includes('vite')) return SiVite;
    if (skillLower.includes('tailwind')) return SiTailwindcss;
    if (skillLower.includes('html5') || skillLower.includes('html')) return SiHtml5;
    if (skillLower.includes('css3') || skillLower.includes('css')) return SiCss3;
    if (skillLower.includes('javascript') || skillLower.includes('js')) return SiJavascript;
    if (skillLower.includes('flutter')) return SiFlutter;
    if (skillLower.includes('dart')) return SiDart;
    
    // Backend
    if (skillLower.includes('node.js') || skillLower.includes('nodejs')) return SiNodedotjs;
    if (skillLower.includes('express')) return SiExpress;
    if (skillLower.includes('python')) return SiPython;
    if (skillLower.includes('flask')) return SiFlask;
    if (skillLower.includes('java')) return FaJava;
    if (skillLower.includes('spring boot') || skillLower.includes('spring')) return SiSpring;
    if (skillLower.includes('firebase')) return SiFirebase;
    
    // Databases
    if (skillLower.includes('postgresql') || skillLower.includes('postgres')) return SiPostgresql;
    if (skillLower.includes('mysql')) return SiMysql;
    if (skillLower.includes('supabase')) return SiSupabase;
    if (skillLower.includes('firestore')) return SiFirebase;
    
    // Cloud & Hosting
    if (skillLower.includes('vercel')) return SiVercel;
    if (skillLower.includes('railway')) return SiRailway;
    if (skillLower.includes('google cloud') || skillLower.includes('gcp')) return SiGooglecloud;
    
    // Tools
    if (skillLower.includes('git') && !skillLower.includes('github')) return SiGit;
    if (skillLower.includes('github')) return SiGithub;
    if (skillLower.includes('intellij')) return SiIntellijidea;
    if (skillLower.includes('vs code') || skillLower.includes('vscode')) return FaCode;
    if (skillLower.includes('pycharm')) return SiPycharm;
    if (skillLower.includes('netbeans')) return FaCode;
    if (skillLower.includes('figma')) return SiFigma;
    
    return null;
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaBrain className="text-5xl md:text-6xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Skills
          </h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skillCategories.map((category) => {
            const IconComponent = category.Icon;
            return (
              <motion.div
                key={category.title}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  },
                }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-2xl"
                  whileHover={{ opacity: 0.2, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 rounded-xl bg-blue-500 text-white shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="text-2xl" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = getSkillIcon(skill);
                      return (
                        <motion.li
                          key={skill}
                          className={`px-3 py-2 rounded-lg text-sm font-medium border flex items-center gap-2 ${colorClasses[category.color as keyof typeof colorClasses]}`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05, x: 5 }}
                        >
                          {SkillIcon && (
                            <SkillIcon className="text-lg flex-shrink-0" />
                          )}
                          <span>{skill}</span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
