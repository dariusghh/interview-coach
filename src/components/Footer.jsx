import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        
        {/* LEFT */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-semibold tracking-wide">
            EduMock
          </h3>
          <p className="text-sm mt-1">
            AI-powered interview simulator for students.
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/anamariapanait10/InterviewSimulatorApp"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-105 transition transform"
          >
            GitHub
          </a>

          <a
            href="mailto:edumock.team@gmail.com"
            className="hover:text-white hover:scale-105 transition transform"
          >
            Contact
          </a>
        </div>

        {/* RIGHT */}
        <p className="text-xs text-center md:text-right text-slate-500">
          © {new Date().getFullYear()} EduMock. All rights reserved.
        </p>

      </motion.div>
    </footer>
  );
};

export default Footer;