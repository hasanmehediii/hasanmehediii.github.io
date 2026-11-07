import React from 'react';
import {
  Braces,
  Database,
  LayoutTemplate,
  ServerCog,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { SKILLS } from '../../constants';
import { SkillItem } from '../../types';

type SkillCategory = SkillItem['category'];

interface CategoryConfig {
  id: SkillCategory;
  label: string;
  caption: string;
  icon: LucideIcon;
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: 'language',
    label: 'Languages',
    caption: 'Core programming',
    icon: Braces,
  },
  {
    id: 'frontend',
    label: 'Frontend',
    caption: 'Web interfaces',
    icon: LayoutTemplate,
  },
  {
    id: 'mobile',
    label: 'Mobile',
    caption: 'Cross-platform apps',
    icon: Smartphone,
  },
  {
    id: 'backend',
    label: 'Backend',
    caption: 'APIs and services',
    icon: ServerCog,
  },
  {
    id: 'database',
    label: 'Databases',
    caption: 'Storage and caching',
    icon: Database,
  },
  {
    id: 'tool',
    label: 'Tools',
    caption: 'Workflow and delivery',
    icon: Wrench,
  },
];

const getMonogram = (name: string) => {
  const parts = name.split(/[\s.-]+/).filter(Boolean);

  if (parts.length > 1) {
    return parts.map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  }

  return name.slice(0, 2).toUpperCase();
};

const SkillBadge: React.FC<{ skill: SkillItem }> = ({ skill }) => (
  <li className="skill-badge group/skill inline-flex min-h-11 max-w-full items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 transition-colors duration-200 hover:border-cyber-primary/35 hover:bg-cyber-primary/[0.05]">
    <div className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded bg-[#e8eeea] p-1">
      {skill.icon ? (
        <img
          src={skill.icon}
          alt=""
          loading="lazy"
          onError={(event) => {
            event.currentTarget.classList.add('hidden');
            event.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
          className="h-full w-full object-contain"
        />
      ) : null}
      <span
        className={`${skill.icon ? 'hidden' : ''} font-tech text-[11px] font-bold text-[#07110c]`}
        aria-hidden="true"
      >
        {getMonogram(skill.name)}
      </span>
    </div>

    <span className="min-w-0 break-words font-mono text-xs leading-5 text-slate-300 transition-colors duration-200 group-hover/skill:text-white">
      {skill.name}
    </span>
  </li>
);

const SkillGroup: React.FC<{ category: CategoryConfig; index: number }> = ({
  category,
  index,
}) => {
  const categorySkills = SKILLS.filter((skill) => skill.category === category.id);
  const CategoryIcon = category.icon;

  return (
    <article className="grid min-w-0 gap-5 px-5 py-6 sm:px-7 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-center lg:gap-8 lg:py-7">
      <div className="flex items-center gap-3.5">
        <span className="hidden font-mono text-[10px] text-slate-600 sm:block" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyber-primary/15 bg-cyber-primary/[0.045] text-cyber-primary/80">
          <CategoryIcon size={19} strokeWidth={1.6} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 id={`skill-category-${category.id}`} className="font-tech text-lg font-bold tracking-wide text-slate-100">
            {category.label}
          </h3>
          <p className="mt-0.5 font-mono text-[11px] leading-5 text-slate-400">{category.caption}</p>
        </div>
      </div>

      <ul className="flex min-w-0 flex-wrap gap-2" aria-labelledby={`skill-category-${category.id}`}>
        {categorySkills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </ul>
    </article>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative scroll-mt-20 overflow-hidden bg-[#070c09] py-20 md:py-24">
      <div className="skill-section-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="container relative mx-auto px-6">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <span className="mb-3 block font-mono text-sm uppercase tracking-[0.3em] text-cyber-primary">
              03. Capabilities
            </span>
            <h2 id="skills-heading" className="font-tech text-3xl font-bold tracking-wide text-white sm:text-4xl md:text-5xl">
              TECH_<wbr /><span className="text-cyber-primary">ARSENAL</span>
            </h2>
            <p className="mt-4 max-w-xl font-mono text-sm leading-6 text-slate-400">
              Technologies I use to design, build, ship, and maintain complete
              software products.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-slate-400">
            <span><span className="mr-2 text-slate-100">{String(SKILLS.length).padStart(2, '0')}</span>technologies</span>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <span><span className="mr-2 text-slate-100">{String(CATEGORIES.length).padStart(2, '0')}</span>categories</span>
          </div>
        </div>

        <div className="relative divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/10 bg-[#0a110d]/95 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          {CATEGORIES.map((category, index) => (
            <SkillGroup key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
