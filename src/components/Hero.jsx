import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 bg-slate-950 text-white flex items-center px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-indigo-400 font-semibold mb-4"
          >
            AI-Powered Interview Practice
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Practice interviews with AI before the real one.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-lg mb-8"
          >
            Interview Coach helps students prepare for HR and technical interviews through
            realistic AI simulations, personalized questions, and instant feedback.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#demo"
              className="bg-indigo-500 hover:bg-indigo-600 hover:scale-105 text-white px-6 py-3 rounded-xl font-semibold text-center transition transform"
            >
              Watch Demo
            </a>

            <a
              href="mailto:interview-coach.team@gmail.com?subject=Request Demo Interview Coach&body=Hi, I would like to request a demo for Interview Coach."
              className="border border-slate-600 hover:border-indigo-400 hover:scale-105 px-6 py-3 rounded-xl font-semibold text-center transition transform"
            >
              Request Demo
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - MOCK INTERVIEW UI */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-slate-800 rounded-xl p-4 mb-4"
          >
            <p className="text-sm text-slate-400 mb-2">AI Interviewer</p>
            <p>
              Tell me about a challenging project you worked on and how you handled it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-indigo-500/20 border border-indigo-500/30 rounded-xl p-4 mb-4"
          >
            <p className="text-sm text-indigo-300 mb-2">Student Answer</p>
            <p>
              I worked on a web application where I had to collaborate with a team and solve backend issues.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-4"
          >
            <p className="text-sm text-emerald-300 mb-2">AI Feedback</p>
            <p>
              Good structure. Add more details about your role, the problem, and the final result.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;