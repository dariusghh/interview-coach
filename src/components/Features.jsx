import { motion } from "framer-motion";

const features = [
  {
    title: "AI Interview Simulation",
    description:
      "Practice realistic interview conversations powered by AI, directly from your browser.",
  },
  {
    title: "CV-Based Questions",
    description:
      "The HR agent analyzes the student’s CV and generates personalized behavioral questions.",
  },
  {
    title: "Technical Evaluation",
    description:
      "The technical agent gives coding or case-study challenges and evaluates written answers.",
  },
  {
    title: "Instant Feedback",
    description:
      "Receive clear feedback, performance scores, and improvement suggestions after each session.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-indigo-400 font-semibold mb-3">
            Core Features
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything students need to prepare smarter.
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto">
            Interview Coach combines AI interview agents, personalized questions,
            and instant evaluation into one simple platform for students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500 transition cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold mb-5">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;