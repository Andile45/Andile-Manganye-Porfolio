import { motion } from 'framer-motion';
import profileImage from '../assets/Andile-Manganye-Image.png';

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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8 flex justify-center"
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
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Andile Manganye"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="mb-8" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-blue-600 dark:text-blue-400">
                Hi, I'm Andile Manganye
              </span>
            </h1>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-200 mb-4 font-semibold"
            variants={itemVariants}
          >
            Full-Stack Developer & Computer Science Student
          </motion.p>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Developer Trainee at{' '}
            <span className="font-bold text-blue-600 dark:text-blue-400 relative">
              Codetribe Digital Solutions
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            </span>
            {' '}(mLab Southern Africa)
          </motion.p>
          
          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I build real-world digital solutions, collaborate in agile teams, and
            contribute to systems that improve communities.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={itemVariants}
          >
            {['React + TypeScript', 'JavaScript', 'HTML5', 'Java Spring Boot', 'Python Flask', 'Firebase', 'PostgreSQL'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-5 py-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold shadow-md"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-xl"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                Let's Connect
                <motion.svg
                  className="w-5 h-5"
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
              className="px-8 py-4 border-2 border-blue-600 dark:border-purple-500 text-blue-600 dark:text-purple-400 rounded-xl font-bold text-lg shadow-lg"
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
