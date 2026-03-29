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
    <div className="relative overflow-hidden selection:bg-secondary/30 selection:text-white">
      <Navbar />
      
      <main className="relative">
        {/* Ambient Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] ambient-aura rounded-full"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] ambient-aura rounded-full bg-tertiary-container/10"></div>
        
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