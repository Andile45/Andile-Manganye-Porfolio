import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUser, FaCode } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section
      id="about"
      className="py-section-sm sm:py-section px-4 sm:px-6 lg:px-8 xl:px-12 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaUser className="text-3xl sm:text-4xl md:text-5xl text-blue-600 dark:text-blue-400" />
            <FaCode className="text-3xl sm:text-4xl md:text-5xl text-purple-600 dark:text-purple-400" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
            About Me
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
          ref={ref}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 sm:space-y-6 border border-gray-200 dark:border-gray-700"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
          transition={{ duration: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 lg:whitespace-nowrap">
              Full-Stack Developer | Problem solver | Life-long learner
            </h3>
          </motion.div>

          <ul className="list-disc list-outside pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <motion.li
              className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed"
              variants={itemVariants}
            >
              Completed my Computer Science diploma at Tshwane University of Technology (TUT)
            </motion.li>
            <motion.li
              className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed"
              variants={itemVariants}
            >
              Working as a Developer Trainee at CodeTribe Academy (mLab Southern Africa), contributing to digital product development and participating in Scrum ceremonies.
            </motion.li>
          </ul>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            I am always eager to learn and grow, embracing new challenges and technologies with enthusiasm. Whether it's mastering a new framework, understanding a complex system, or adapting to different team workflows, I approach every opportunity as a chance to expand my knowledge and contribute more effectively.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
