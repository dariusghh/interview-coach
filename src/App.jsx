import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Agents from "./components/Agents";
import HowItWorks from "./components/HowItWorks";
import Demo from "./components/Demo";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pt-20">
      <Navbar />
      <Hero />
      <Features />
      <Agents />
      <HowItWorks />
      <Demo />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;