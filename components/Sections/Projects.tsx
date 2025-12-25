import React, { useState } from 'react';
import { MY_PROJECTS } from '../../constants';
import { Project } from '../../types';
import { ExternalLink, Github, Code, Eye } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative h-[480px] rounded-xl overflow-hidden bg-[#112240] border border-cyber-dim hover:border-cyber-primary transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)] flex flex-col">
      
      {/* Image Section - 3/5 height (60%) */}
      <div className="relative h-[60%] w-full overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-cyber-black/40 group-hover:bg-transparent transition-all duration-500 z-10" />
        
        {/* Image */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
        />

        {/* Floating Tags on Image */}
        <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag.id} className="text-[10px] font-mono bg-cyber-black/80 text-cyber-primary px-2 py-1 rounded border border-cyber-primary/30 backdrop-blur-sm">
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section - 2/5 height (40%) */}
      <div className="relative h-[40%] p-6 flex flex-col justify-between bg-[#112240] group-hover:bg-[#162a4a] transition-colors duration-300">
        
        <div>
          <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-cyber-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <a 
            href={project.liveUrl || '#'} 
            target="_blank" 
            rel="noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
              project.liveUrl 
                ? 'bg-cyber-primary text-cyber-black hover:bg-white hover:text-black font-bold' 
                : 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50'
            }`}
            onClick={(e) => !project.liveUrl && e.preventDefault()}
          >
            <Eye size={16} />
            Live Demo
          </a>
          <a 
            href={project.href} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-cyber-primary text-cyber-primary font-mono text-sm hover:bg-cyber-primary/10 transition-all duration-300"
          >
            <Github size={16} />
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-cyber-black relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyber-primary/5 -skew-x-12 blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
            <span className="text-cyber-primary font-mono text-xl mb-2">04. Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-tech tracking-wide">
              PROJECT ARCHIVE
            </h2>
            <div className="w-24 h-1 bg-cyber-primary mt-4 shadow-[0_0_10px_#00ff41]" />
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {MY_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <a 
              href="https://github.com/hasanmehediii" 
              target="_blank" 
              rel="noreferrer" 
              className="group inline-flex items-center gap-3 px-8 py-4 border border-cyber-primary text-cyber-primary font-mono text-lg rounded hover:bg-cyber-primary hover:text-cyber-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]"
            >
              <Code size={20} className="group-hover:rotate-180 transition-transform duration-500" />
              View More on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;