import { motion } from "framer-motion";

const agents = [
  {
    title: "Orchestrator Agent",
    subtitle: "Session setup, routing, and interview flow coordination",
    points: [
      "Collects and stores the resume and job description",
      "Routes the user to the right interview phase",
      "Keeps track of completed interview stages",
      "Coordinates handoffs between specialist agents",
    ],
  },
  {
    title: "Behavioral Agent",
    subtitle: "STAR-method soft skills interview simulation",
    points: [
      "Asks behavioral questions tailored to the candidate’s background",
      "Focuses on communication, clarity, and confidence",
      "Stores the candidate’s answers during the session",
      "Hands off to the technical interview phase when complete",
    ],
  },
  {
    title: "Technical Agent",
    subtitle: "Role-specific technical interview evaluation",
    points: [
      "Asks technical questions based on the resume and job description",
      "Evaluates problem-solving and technical reasoning",
      "Stores technical answers during the session",
      "Hands off to the final evaluation phase",
    ],
  },
  {
    title: "Summarizer Agent",
    subtitle: "Final assessment and improvement recommendations",
    points: [
      "Reviews the full interview session",
      "Summarizes strengths and weaknesses",
      "Evaluates behavioral and technical performance",
      "Provides concrete improvement suggestions",
    ],
  },
];

const Agents = () => {
  return (
    <section id="agents" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-indigo-400 font-semibold mb-3">
            AI Agent System
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Four AI agents working together for a complete interview flow.
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto">
            EduMock uses a multi-agent architecture that manages the interview
            journey from setup and behavioral questions to technical evaluation
            and final feedback.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500 transition cursor-default"
            >
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

              <ul className="space-y-4">
                {agent.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25 + pointIndex * 0.08,
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