import { motion } from 'framer-motion';
import profileImage from '../assets/Andile-Manganye-Image.png';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5,
  SiFirebase,
  SiPostgresql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  // Icon mapping for tech stack
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    if (techLower.includes('react') || techLower.includes('typescript')) {
      // For "React + TypeScript", show React icon
      if (techLower.includes('react')) return SiReact;
      return SiTypescript;
    }
    if (techLower.includes('javascript')) return SiJavascript;
    if (techLower.includes('html5') || techLower.includes('html')) return SiHtml5;
    if (techLower.includes('java') || techLower.includes('spring boot')) return FaJava;
    if (techLower.includes('firebase')) return SiFirebase;
    if (techLower.includes('postgresql') || techLower.includes('postgres')) return SiPostgresql;
    
    return null;
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 sm:pt-24 md:pt-28 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto max-w-7xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="mb-6 sm:mb-8 md:mb-10 flex justify-center"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Andile Manganye"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 sm:mb-4 md:mb-6 leading-tight px-2 sm:px-4">
              <span className="text-blue-600 dark:text-blue-400">
                Hi, I'm Andile Manganye
              </span>
            </h1>
            <motion.div
              className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 mb-2 sm:mb-3 md:mb-4 font-semibold px-4 sm:px-6"
            variants={itemVariants}
          >
            Full-Stack Developer & Computer Science Student
          </motion.p>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed"
            variants={itemVariants}
          >
            Developer Trainee at{' '}
            <span className="font-bold text-blue-600 dark:text-blue-400 relative">
              CodeTribe Academy
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            </span>
            {' '}(mLab Southern Africa)
          </motion.p>
          
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6"
            variants={itemVariants}
          >
            I'm a builder at heart. I take complex digital ideas and turn them into solutions that help communities thrive. I thrive in agile environments where collaboration is the secret sauce to building better systems.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6"
            variants={itemVariants}
          >
            {['React + TypeScript', 'JavaScript', 'HTML5', 'Java Spring Boot', 'Firebase', 'PostgreSQL'].map((tech, index) => {
              const TechIcon = getTechIcon(tech);
              return (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm md:text-base font-semibold shadow-md flex items-center gap-1.5 sm:gap-2"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {TechIcon && <TechIcon className="text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0" />}
                  <span className="whitespace-nowrap">{tech}</span>
                </motion.span>
              );
            })}
          </motion.div>
          
          <motion.div
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-6"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="group w-full xs:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 bg-blue-600 text-white rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-xl text-center min-w-[200px]"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                Let's Connect
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.a>
            <motion.a
              href="#projects"
              className="w-full xs:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 border-2 border-blue-600 dark:border-purple-500 text-blue-600 dark:text-purple-400 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg text-center min-w-[200px]"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
