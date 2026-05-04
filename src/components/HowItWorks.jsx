import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Upload your CV",
    description:
      "Start by uploading your resume so the HR agent can understand your background and experience.",
  },
  {
    number: "02",
    title: "Start the AI interview",
    description:
      "Choose between a behavioral interview, a technical challenge, or a complete interview simulation.",
  },
  {
    number: "03",
    title: "Get instant feedback",
    description:
      "Receive a performance score, detailed feedback, and suggestions to improve before the real interview.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-indigo-400 font-semibold mb-3">
            How It Works
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            From CV to interview feedback in minutes.
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto">
            EduMock makes interview preparation simple, structured, and accessible
            for students who want to improve before applying for jobs.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500 transition cursor-default"
            >
              
              {/* NUMBER */}
              <div className="mb-4">
                <span className="text-indigo-400 text-sm font-bold bg-indigo-500/10 px-3 py-1 rounded-lg">
                  {step.number}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-400">
                {step.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;