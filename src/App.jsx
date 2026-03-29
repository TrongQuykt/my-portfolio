import Navbar from './components/Navbar.tsx';
import Hero from './sections/Hero.tsx';
import About from './sections/About.tsx';
import Awards from './sections/Awards.tsx';
import Experience from './sections/Experience.tsx';
import Skills from './sections/Skills.tsx';
import Projects from './sections/Projects.tsx';
import Contact from './sections/Contact.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div className="relative min-w-0 overflow-x-hidden selection:bg-secondary/30 selection:text-white">
      <Navbar />
      
      <main className="relative min-w-0 w-full max-w-full">
        {/* Ambient Background Glows */}
        <div className="absolute top-[-10%] left-[-15%] w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] ambient-aura rounded-full pointer-events-none"></div>
        <div className="absolute top-[15%] right-[-15%] w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] ambient-aura rounded-full bg-tertiary-container/10 pointer-events-none"></div>
        
        <Hero />
        <About />
        <Awards />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}