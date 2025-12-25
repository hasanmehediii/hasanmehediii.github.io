import React from 'react';
import { SKILLS } from '../../constants';
import { Code2, Layout, Server, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  // Helper to get generic icons based on category if specific logo logic isn't implemented
  const getIcon = (category: string) => {
    switch (category) {
      case 'frontend': return <Layout className="w-8 h-8" />;
      case 'backend': return <Server className="w-8 h-8" />;
      case 'tool': return <Cpu className="w-8 h-8" />;
      default: return <Code2 className="w-8 h-8" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-cyber-dark/50">
      <div className="container mx-auto px-6">
         <div className="flex items-center mb-12">
            <span className="text-cyber-primary font-mono text-xl mr-4">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Tech Arsenal
            </h2>
         </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={index}
              className="group bg-[#111] border border-gray-800 p-6 rounded-lg flex flex-col items-center justify-center gap-4 hover:border-cyber-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-cyber-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-gray-400 group-hover:text-cyber-primary transition-colors duration-300 transform group-hover:scale-110">
                {getIcon(skill.category)}
              </div>
              <span className="font-mono text-sm font-bold text-gray-300 group-hover:text-white z-10">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;