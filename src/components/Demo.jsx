import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section id="demo" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-indigo-400 font-semibold mb-3">
            Product Demo
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See Interview Coach in action.
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto">
            Watch how students can simulate real interview scenarios, answer
            AI-generated questions, and receive instant feedback.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="bg-slate-950 border border-slate-800 rounded-2xl p-4 shadow-2xl hover:border-indigo-500 transition"
        >
          <video
            controls
            className="w-full rounded-xl"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

      </div>
    </section>
  );
};

export default Demo;