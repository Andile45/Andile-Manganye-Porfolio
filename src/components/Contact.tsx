import { motion } from 'framer-motion';
import { FaEnvelope, FaDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
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
            <FaEnvelope className="text-5xl md:text-6xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Contact
          </h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            I'm open to internships, junior roles, collaborations, and freelance work.
          </p>
        </motion.div>
        
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
            <motion.a
              href="mailto:manganyeandile@gmail.com"
              className="group flex flex-col items-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>
              <span className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                Email
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 text-center break-all">
                manganyeandile@gmail.com
              </span>
            </motion.a>
            
            <motion.a
              href="https://github.com/Andile45"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border-2 border-gray-200 dark:border-gray-600 shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              <span className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                GitHub
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
                @Andile45
              </span>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/andile-manganye-a27591319"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.div>
              <span className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                LinkedIn
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
                andile-manganye
              </span>
            </motion.a>
          </motion.div>
          
          {/* CV Download Section */}
          <motion.div
            className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Download My CV
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get a copy of my resume for your records
              </p>
            </div>
            <motion.a
              href="/ANDILE MANGANYE CV Final .pdf"
              download
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-xl mx-auto max-w-md"
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaDownload className="w-5 h-5" />
              <span>Download CV (PDF)</span>
            </motion.a>
          </motion.div>
          
          <motion.div
            className="mt-8 text-center pt-8 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.p
              className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Let's build something meaningful.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
