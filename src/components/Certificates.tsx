import { motion } from 'framer-motion';
import { FaCertificate, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: 'Database Design',
      issuer: 'DataCamp',
      file: '/Cetificates/Data_Camp_Database Design.pdf',
      category: 'Database',
    },
    {
      title: 'Understanding Artificial Intelligence',
      issuer: 'DataCamp',
      file: '/Cetificates/datacanmp_Understanding Artificial Intelligence.pdf',
      category: 'AI/ML',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      file: '/Cetificates/freeCodeCamp_Legacy JavaScript Algorithms and Data Structures.pdf',
      category: 'Programming',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      file: '/Cetificates/freeCodeCamp_Legacy Responsive Web Design V8.pdf',
      category: 'Web Development',
    },
  ];

  return (
    <section
      id="certificates"
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
            <FaCertificate className="text-5xl md:text-6xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Certificates
          </h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4">
            Professional certifications and achievements
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
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
              whileHover={{ scale: 1.02, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full blur-2xl"
                whileHover={{ opacity: 0.1, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                      whileHover={{ color: '#2563eb' }}
                      transition={{ duration: 0.2 }}
                    >
                      {cert.title}
                    </motion.h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {cert.issuer}
                    </p>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                      {cert.category}
                    </span>
                  </div>
                  <motion.div
                    className="ml-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaCertificate className="text-3xl text-blue-600 dark:text-blue-400" />
                  </motion.div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <motion.a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm shadow-md"
                    whileHover={{ scale: 1.05, backgroundColor: '#1d4ed8' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    View
                  </motion.a>
                  <motion.a
                    href={cert.file}
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold text-sm shadow-md"
                    whileHover={{ scale: 1.05, backgroundColor: '#d1d5db' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <FaDownload className="w-4 h-4" />
                    Download
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;

