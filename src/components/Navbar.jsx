const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          Interview Coach
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-slate-300 text-sm">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#agents" className="hover:text-white transition">
            AI Agents
          </a>
          <a href="#demo" className="hover:text-white transition">
            Demo
          </a>
        </div>

        {/* CTA */}
        <a
          href="mailto:interview-coach.team@gmail.com?subject=Request Demo Interview Coach"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
        >
          Request Demo
        </a>

      </div>
    </nav>
  );
};

export default Navbar;