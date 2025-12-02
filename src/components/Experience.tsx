import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Developer Trainee',
      company: 'Codetribe Digital Solutions (mLab Southern Africa)',
      period: '2025 – Present',
      description: [
        'Build digital solutions for real-world environments',
        'Participate in Agile/Scrum ceremonies',
        'Work in cross-functional teams',
        'Develop using JavaScript, TypeScript, React, Vanilla JavaScript, Tailwind CSS, PostgreSQL, and cloud tools',
        'Collaborate in UI/UX with Figma',
      ],
      image: '/mlab-team.jpg',
      imageAlt: 'Photo with mlab team',
    },
    {
      title: 'Computer Science Student',
      company: 'Tshwane University of Technology',
      period: '2022 – 2025',
      description: [
        'Focus on software development, algorithms, databases, system design',
        'Developed multiple full-stack university projects',
        'Strengthened Java, Python, and SQL fundamentals',
      ],
      image: '/tut-photo.jpg',
      imageAlt: 'Photo at Tshwane University of Technology',
    },
  ];

  return (
    <section
      id="experience"
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaBriefcase className="text-5xl md:text-6xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Experience
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
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-48 h-48 bg-blue-500 opacity-5 rounded-full blur-3xl"
                whileHover={{ opacity: 0.1, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-bold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="mt-4 md:mt-0 px-5 py-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-sm font-bold shadow-md">
                    {exp.period}
                  </span>
                </div>
                
                {/* Experience Photo */}
                {exp.image && (
                  <motion.div
                    className="mb-6 rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.img
                      src={exp.image}
                      alt={exp.imageAlt || `${exp.company} experience`}
                      className="w-full h-96 md:h-[500px] object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                )}
                
                <motion.ul
                  className="space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
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
                  {exp.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.4,
                          },
                        },
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1.5 text-xl font-bold">
                        •
                      </span>
                      <span className="text-base leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
