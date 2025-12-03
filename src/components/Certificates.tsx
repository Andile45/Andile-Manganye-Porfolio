import { motion } from 'framer-motion';
import { FaCertificate, FaDownload, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { SiDatacamp, SiFreecodecamp } from 'react-icons/si';

const Certificates = () => {
  const certificates = [
    {
      title: 'Database Design',
      issuer: 'DataCamp',
      icon: SiDatacamp,
      file: '/Cetificates/Data_Camp_Database Design.pdf',
      category: 'Database',
      color: 'yellow',
    },
    {
      title: 'Understanding Artificial Intelligence',
      issuer: 'DataCamp',
      icon: SiDatacamp,
      file: '/Cetificates/datacanmp_Understanding Artificial Intelligence.pdf',
      category: 'AI/ML',
      color: 'green',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      icon: SiFreecodecamp,
      file: '/Cetificates/freeCodeCamp_Legacy JavaScript Algorithms and Data Structures.pdf',
      category: 'Programming',
      color: 'purple',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      icon: SiFreecodecamp,
      file: '/Cetificates/freeCodeCamp_Legacy Responsive Web Design V8.pdf',
      category: 'Web Development',
      color: 'blue',
    },
  ];

  const getCategoryColor = (color: string) => {
    const colors: Record<string, { bg: string; text: string; badge: string; glow: string }> = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-950/20',
        text: 'text-blue-600 dark:text-blue-400',
        badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200',
        glow: 'bg-blue-500',
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-950/20',
        text: 'text-purple-600 dark:text-purple-400',
        badge: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200',
        glow: 'bg-purple-500',
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-950/20',
        text: 'text-green-600 dark:text-green-400',
        badge: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200',
        glow: 'bg-green-500',
      },
      yellow: {
        bg: 'bg-yellow-50 dark:bg-yellow-950/20',
        text: 'text-yellow-600 dark:text-yellow-400',
        badge: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200',
        glow: 'bg-yellow-500',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="certificates"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/10 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full"></div>
              <FaAward className="text-6xl md:text-7xl text-blue-600 dark:text-blue-400 relative z-10" />
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Certificates & <span className="text-blue-600 dark:text-blue-400">Achievements</span>
          </h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my commitment to continuous learning
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {certificates.map((cert, index) => {
            const CertIcon = cert.icon;
            const colors = getCategoryColor(cert.color);
            
            return (
              <motion.div
                key={index}
                className="group relative h-full"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      type: 'spring',
                      stiffness: 100,
                    },
                  },
                }}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-1 ${colors.glow} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
                />
                
                {/* Main card */}
                <div className={`relative ${colors.bg} rounded-3xl p-8 border-2 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-2xl group-hover:shadow-3xl transition-all duration-300 h-full flex flex-col`}>
                  {/* Decorative ribbon */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                    <div className={`absolute top-4 -right-8 w-32 ${colors.badge} transform rotate-45 text-center py-1 text-xs font-bold shadow-lg`}>
                      VERIFIED
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Header with icon */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className={`p-4 ${colors.bg} rounded-2xl shadow-lg border-2 border-gray-200/50 dark:border-gray-700/50 flex-shrink-0`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CertIcon className={`text-4xl ${colors.text}`} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <motion.h3
                          className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight line-clamp-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {cert.title}
                        </motion.h3>
                        <p className={`${colors.text} font-bold text-sm mb-3 flex items-center gap-2`}>
                          <FaCertificate className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{cert.issuer}</span>
                        </p>
                        <span className={`inline-block px-4 py-1.5 ${colors.badge} rounded-full text-xs font-bold uppercase tracking-wide shadow-md`}>
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className={`h-px ${colors.glow} opacity-30 mb-6 flex-shrink-0`}></div>

                    {/* Spacer to push buttons down */}
                    <div className="flex-1"></div>

                    {/* Action buttons */}
                    <div className="flex gap-3 flex-shrink-0">
                      <motion.a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 ${colors.text} ${colors.bg} rounded-xl font-bold text-sm shadow-lg border-2 border-gray-200/50 dark:border-gray-700/50 min-w-0`}
                        whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">View PDF</span>
                      </motion.a>
                      <motion.a
                        href={cert.file}
                        download
                        className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-bold text-sm shadow-lg border-2 border-gray-300 dark:border-gray-600 min-w-0`}
                        whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <FaDownload className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">Download</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Background decoration */}
                  <motion.div
                    className={`absolute bottom-0 right-0 w-40 h-40 ${colors.glow} opacity-5 rounded-full blur-3xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;



