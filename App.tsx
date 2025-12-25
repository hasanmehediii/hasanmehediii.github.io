import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Education from './components/Sections/Education';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import MatrixBackground from './components/UI/MatrixBackground';
import Reveal from './components/UI/Reveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-black text-gray-300 selection:bg-cyber-primary selection:text-black overflow-x-hidden">
      {/* Background Effect */}
      <MatrixBackground />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col w-full">
        <Hero />
        
        <Reveal>
          <About />
        </Reveal>
        
        <Reveal>
          <Education />
        </Reveal>
        
        <Reveal>
          <Skills />
        </Reveal>
        
        <Reveal>
          <Projects />
        </Reveal>
        
        <Reveal>
          <Contact />
        </Reveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;