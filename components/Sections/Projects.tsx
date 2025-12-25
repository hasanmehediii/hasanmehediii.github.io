import React from 'react';
import { MY_PROJECTS } from '../../constants';
import { Project } from '../../types';
import { Github, Code, Eye } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative h-[480px] rounded-xl overflow-hidden bg-[#0a192f] border-2 border-cyber-primary/20 hover:border-cyber-primary transition-all duration-300 [transform-style:preserve-3d] hover:[transform:rotateY(10deg)_rotateX(5deg)]">
      
      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-repeat bg-center [background-image:repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(0,255,65,0.1)_2px)] opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none animate-scanline" />

      {/* Glitch and Image Container */}
      <div className="relative h-[60%] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cyber-black/50 group-hover:bg-transparent transition-all duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out group-hover:opacity-75 group-hover:saturate-150"
        />
        {/* Glitch Effect */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center glitch-image" style={{ backgroundImage: `url(${project.image})` }} />
        <div className="absolute inset-0 w-full h-full bg-cover bg-center glitch-image" style={{ backgroundImage: `url(${project.image})` }} />
        <div className="absolute inset-0 w-full h-full bg-cover bg-center glitch-image" style={{ backgroundImage: `url(${project.image})` }} />

        <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag.id} className="text-xs font-mono bg-black/80 text-cyber-secondary px-3 py-1 rounded border border-cyber-secondary/30 backdrop-blur-sm">
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <div className="relative h-[40%] p-6 flex flex-col justify-between bg-[#0a192f] border-t-2 border-cyber-primary/20">
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-2 font-tech group-hover:text-cyber-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed font-mono">
            {project.description}
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={project.liveLink || '#'}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md font-mono text-sm transition-all duration-300 border-2 border-cyber-primary/50 text-cyber-primary hover:bg-cyber-primary hover:text-black hover:shadow-[0_0_20px_#00ff41] font-bold"
          >
            <Eye size={16} />
            Live Demo
          </a>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md border-2 border-slate-600 text-slate-400 font-mono text-sm hover:border-slate-400 hover:text-white transition-all duration-300"
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
    <>
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        .animate-scanline {
          animation: scanline 10s linear infinite;
        }

        .glitch-image {
          display: none;
        }

        .group:hover .glitch-image {
          display: block;
          animation: glitch 1.5s infinite;
        }

        .group:hover .glitch-image:nth-of-type(1) {
          animation-delay: 0.1s;
          opacity: 0.5;
        }

        .group:hover .glitch-image:nth-of-type(2) {
          animation-delay: 0.2s;
          opacity: 0.5;
        }
        
        .group:hover .glitch-image:nth-of-type(3) {
          animation-delay: 0.3s;
          opacity: 0.5;
        }

        @keyframes glitch {
          0% {
            clip-path: inset(10% 0 80% 0);
            transform: translate(-10px, -5px);
          }
          10% {
            clip-path: inset(90% 0 5% 0);
            transform: translate(10px, 5px);
          }
          30% {
            clip-path: inset(40% 0 40% 0);
            transform: translate(-5px, 0px);
          }
          50% {
            clip-path: inset(70% 0 10% 0);
            transform: translate(5px, -5px);
          }
          70% {
            clip-path: inset(20% 0 70% 0);
            transform: translate(-10px, 5px);
          }
          90% {
            clip-path: inset(50% 0 30% 0);
            transform: translate(10px, -5px);
          }
          100% {
            clip-path: inset(10% 0 80% 0);
            transform: translate(-10px, -5px);
          }
        }
      `}</style>
      <section id="projects" className="py-24 bg-cyber-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyber-primary/5 -skew-x-12 blur-3xl -z-10 pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <span className="text-cyber-primary font-mono text-xl mb-2">04. Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-tech tracking-wider">
              PROJECT_ARCHIVE
            </h2>
            <div className="w-24 h-1 bg-cyber-primary mt-4 shadow-[0_0_10px_#00ff41]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-1000">
            {MY_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="https://github.com/hasanmehediii"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-cyber-primary text-cyber-primary font-mono text-lg rounded hover:bg-cyber-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:shadow-[0_0_35px_rgba(0,255,65,0.6)]"
            >
              <Code size={20} className="group-hover:animate-[spin_2s_linear_infinite]" />
              View_More_On_GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;