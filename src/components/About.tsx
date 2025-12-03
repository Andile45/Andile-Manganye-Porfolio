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
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
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
            <FaUser className="text-4xl md:text-5xl text-blue-600 dark:text-blue-400" />
            <FaCode className="text-4xl md:text-5xl text-purple-600 dark:text-purple-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
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
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 space-y-6 border border-gray-200 dark:border-gray-700"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            I am a South African full-stack developer with a strong passion for
            solving real problems through software. Currently completing my Computer
            Science diploma at{' '}
            <span className="font-bold text-blue-600 dark:text-blue-400 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 rounded">
              Tshwane University of Technology (TUT)
            </span>{' '}
            and working as a Developer Trainee at{' '}
            <span className="font-bold text-purple-600 dark:text-purple-400 px-2 py-1 bg-purple-50 dark:bg-purple-900/30 rounded">
              CodeTribe Academy (mLab Southern Africa)
            </span>
            , contributing to digital product development and participating in Scrum
            ceremonies.
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
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
