import React from 'react';
import { MY_PROJECTS } from '../../constants';
import { Project } from '../../types';
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  Radio,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const hasLiveDemo = Boolean(project.liveLink && project.liveLink !== '#');
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <article className="project-card group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#08110d] shadow-[0_24px_70px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 hover:border-cyber-primary/60 hover:shadow-[0_28px_80px_rgba(0,255,65,0.12)] focus-within:border-cyber-primary/70">
      <span className="project-corner project-corner--top" aria-hidden="true" />
      <span className="project-corner project-corner--bottom" aria-hidden="true" />

      <div className="relative aspect-[16/10] overflow-hidden bg-[#020806]">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 saturate-[0.8] transition-all duration-700 ease-out group-hover/card:scale-105 group-hover/card:opacity-100 group-hover/card:saturate-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08110d] via-transparent to-black/20" />
        <div className="project-grid absolute inset-0 opacity-25 transition-opacity duration-500 group-hover/card:opacity-10" />

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/65 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
          <Radio
            size={11}
            className={hasLiveDemo ? 'text-cyber-primary' : 'text-amber-400'}
            aria-hidden="true"
          />
          {hasLiveDemo ? 'Live system' : 'Source build'}
        </div>

        <span className="absolute right-4 top-3 font-tech text-4xl tracking-tighter text-white/20 transition-colors duration-300 group-hover/card:text-cyber-primary/40">
          {projectNumber}
        </span>

        {project.logo && (
          <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-black/70 p-1.5 shadow-lg backdrop-blur-md">
            <img
              src={project.logo}
              alt=""
              loading="lazy"
              onError={(event) => {
                event.currentTarget.parentElement?.classList.add('hidden');
              }}
              className="h-full w-full object-contain"
            />
          </div>
        )}
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.24em] text-cyber-primary/70">
              Project / {projectNumber}
            </p>
            <h3 className="font-tech text-2xl font-bold tracking-wide text-slate-100 transition-colors duration-300 group-hover/card:text-cyber-primary">
              {project.title}
            </h3>
          </div>
          <Code2
            size={20}
            className="mt-1 shrink-0 text-slate-600 transition-colors duration-300 group-hover/card:text-cyber-primary/70"
            aria-hidden="true"
          />
        </div>

        <p className="mb-5 line-clamp-3 font-mono text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        <ul className="mb-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li
              key={tag.id}
              className="rounded-md border border-cyber-primary/15 bg-cyber-primary/[0.05] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors duration-300 group-hover/card:border-cyber-primary/30 group-hover/card:text-cyber-primary"
            >
              {tag.name}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-3 border-t border-white/[0.07] pt-5">
          {hasLiveDemo ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live demo for ${project.title}`}
              className="project-action project-action--primary"
            >
              <ExternalLink size={15} aria-hidden="true" />
              Live demo
            </a>
          ) : (
            <span
              className="project-action cursor-not-allowed border-white/10 text-slate-600"
              aria-label={`No live demo available for ${project.title}`}
              title="Live demo not available"
            >
              <ExternalLink size={15} aria-hidden="true" />
              No demo
            </span>
          )}

          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="project-action border-white/10 text-slate-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
          >
            <Github size={15} aria-hidden="true" />
            Source
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-cyber-black py-24">
      <div className="pointer-events-none absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyber-primary/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 project-section-grid opacity-30" />

      <div className="container relative mx-auto px-6">
        <div className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block font-mono text-sm uppercase tracking-[0.3em] text-cyber-primary">
              04. Work
            </span>
            <h2 className="font-tech text-4xl font-bold tracking-wider text-white md:text-5xl">
              PROJECT_<span className="text-cyber-primary">ARCHIVE</span>
            </h2>
            <p className="mt-4 max-w-xl font-mono text-sm leading-6 text-slate-400">
              A selection of products, experiments, and course projects built to
              solve practical problems.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono backdrop-blur-sm">
            <span className="text-2xl font-bold text-cyber-primary">
              {String(MY_PROJECTS.length).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase leading-4 tracking-[0.2em] text-slate-500">
              Projects
              <br />
              indexed
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {MY_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/hasanmehediii"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-lg border border-cyber-primary/50 bg-cyber-primary/[0.06] px-6 py-3.5 font-mono text-sm font-bold text-cyber-primary transition-all duration-300 hover:border-cyber-primary hover:bg-cyber-primary hover:text-black hover:shadow-[0_0_30px_rgba(0,255,65,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary focus-visible:ring-offset-4 focus-visible:ring-offset-cyber-black"
          >
            Explore all repositories
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
