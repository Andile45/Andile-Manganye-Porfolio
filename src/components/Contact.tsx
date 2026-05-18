import { motion } from 'framer-motion';
import { Download } from './icons';
import PrimaryButton from './ui/PrimaryButton';
import { CalBookingEmbed } from './ui/CalBookingEmbed';

const Contact = () => {
  return (
    <section id="contact" className="section-padding overflow-x-hidden">
      <motion.div
        className="mx-auto w-full min-w-0 max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-700">Contact</p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-3xl md:text-4xl">
            Let&apos;s build something meaningful
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-600 sm:text-base">
            Open to internships, junior roles, collaborations, and freelance work. Pick a time
            below for a 30-minute call.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-zinc-900" aria-hidden />
            Schedule a 30-minute call below
          </p>
          <CalBookingEmbed />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-center gap-3 border-t border-zinc-200 pt-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-center text-sm text-zinc-600">
            Prefer a PDF? Download my résumé for recruiters and hiring managers.
          </p>
          <PrimaryButton
            href="/Andile_Manganye_CV.pdf"
            download="Andile-Manganye-CV.pdf"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download CV
          </PrimaryButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
