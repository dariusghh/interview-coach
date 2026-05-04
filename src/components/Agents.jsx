import { motion } from "framer-motion";

const agents = [
  {
    title: "HR / Behavioral Agent",
    subtitle: "Soft skills and CV-based interview simulation",
    points: [
      "Analyzes the student’s CV",
      "Generates personalized HR questions",
      "Evaluates communication, confidence, and clarity",
      "Offers improvement suggestions after the interview",
    ],
  },
  {
    title: "Technical Evaluator Agent",
    subtitle: "Technical problem solving and performance scoring",
    points: [
      "Generates technical tasks or case studies",
      "Analyzes the student’s written solution",
      "Detects incomplete or incorrect answers",
      "Provides a performance score and feedback",
    ],
  },
];

const Agents = () => {
  return (
    <section id="agents" className="bg-slate-900 text-white py-20 px-6">
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
            AI Agents
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Two AI agents. One complete interview experience.
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto">
            EduMock combines behavioral and technical evaluation to help students
            prepare for the most important parts of a real job interview.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500 transition cursor-default"
            >
              
              {/* TOP */}
              <div className="mb-6">
                <span className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Agent {index + 1}
                </span>

                <h3 className="text-2xl font-bold mb-2">
                  {agent.title}
                </h3>

                <p className="text-slate-400">
                  {agent.subtitle}
                </p>
              </div>

              {/* LIST */}
              <ul className="space-y-4">
                {agent.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + pointIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex gap-3 text-slate-300"
                  >
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;