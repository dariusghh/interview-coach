import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-24 px-6 text-center overflow-hidden">
      
      {/* subtle glow background */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-indigo-400"></div>

      <div className="relative max-w-4xl mx-auto">
        
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Ready to practice your next interview?
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-indigo-100 mb-10 text-lg"
        >
          Start using Interview Coach today and improve your confidence before real job interviews.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          
          {/* WATCH DEMO */}
          <a
            href="#demo"
            className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition transform shadow-lg"
          >
            Watch Demo
          </a>

          {/* REQUEST DEMO */}
          <a
            href="mailto:interview-coach.team@gmail.com?subject=Request Demo Interview Coach&body=Hi, I would like to request a demo for Interview Coach."
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 hover:scale-105 transition transform"
          >
            Request Demo
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;