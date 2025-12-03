import { motion } from 'framer-motion';
import { FaRocket, FaExternalLinkAlt, FaDownload, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Hotel Booking App & Backend API',
      tech: 'React + TypeScript (Vercel), Node.js/Express backend (Railway), PostgreSQL (Supabase)',
      description:
        'Multi-branch hotel booking system with role-based access control and payment integration.',
      features: [
        'Hotel CRUD operations',
        'Pagination + filtering',
        'Authentication',
        'PayPal integration',
        'PDF receipt generation',
        'Role-based access control',
      ],
      role: 'Built backend with Node.js/Express, implemented role-based access control, booking flows, PayPal integration, and RESTful API endpoints',
      github: 'https://github.com/MondliWentandane/Backend',
    },
    {
      title: 'OnSite — AI-Powered Municipality Maintenance & Employment System',
      tech: 'React, Flutter + Dart, Firebase Auth, Firestore, Cloud Storage, Cloud Functions, Google Cloud Vision API',
      description:
        'Comprehensive maintenance system with AI-powered incident classification and worker assignment.',
      features: [
        'Image-based incident reporting',
        'AI classification (Vision API)',
        'Fraud detection (EXIF, GPS, duplicate scanning)',
        'Worker assignment algorithm',
        'Worker mobile app & admin dashboard',
        'Event-driven architecture via Cloud Functions',
      ],
      role: 'Full-stack feature development, Flutter mobile workflows, Firebase integration, UI/UX prototyping in Figma, implemented classification pipelines & notifications',
      apk: '/Mobile Apps/Onsite_Mobile.apk',
    },
    {
      title: 'Weather App',
      tech: 'HTML5, CSS3, JavaScript (ES6), OpenWeatherMap API',
      description:
        'Simple weather application that provides real-time weather updates for any city.',
      features: [
        'Search weather by city name',
        'Temperature, humidity & weather condition display',
        'Weather icons visualization',
        'Responsive design',
      ],
      role: 'Built with vanilla JavaScript, integrated OpenWeatherMap API for real-time weather data, implemented responsive UI design',
      link: 'https://weather-app-zeta-navy-82.vercel.app/',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto max-w-7xl">
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
            <FaRocket className="text-5xl md:text-6xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Projects
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col relative overflow-hidden"
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
                className="absolute top-0 right-0 w-40 h-40 bg-blue-500 opacity-5 rounded-full blur-3xl"
                whileHover={{ opacity: 0.1, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10 flex flex-col flex-grow">
                <motion.h3
                  className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
                  whileHover={{ color: '#2563eb' }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-semibold">
                  {project.tech}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 5, color: '#111827' }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    <span className="font-bold text-gray-900 dark:text-white">My Role:</span> {project.role}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold shadow-md"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        View Live App
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-xs font-semibold shadow-md"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <FaGithub className="w-3 h-3" />
                        View Code
                      </motion.a>
                    )}
                    {project.apk && (
                      <motion.a
                        href={project.apk}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-xs font-semibold shadow-md"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <FaDownload className="w-3 h-3" />
                        Download APK
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
