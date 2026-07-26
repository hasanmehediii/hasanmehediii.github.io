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
  code: string;
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: 'language',
    label: 'Languages',
    caption: 'Core programming',
    icon: Braces,
    code: 'LANG',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    caption: 'Web interfaces',
    icon: LayoutTemplate,
    code: 'WEB',
  },
  {
    id: 'mobile',
    label: 'Mobile',
    caption: 'Cross-platform apps',
    icon: Smartphone,
    code: 'APP',
  },
  {
    id: 'backend',
    label: 'Backend',
    caption: 'APIs and services',
    icon: ServerCog,
    code: 'API',
  },
  {
    id: 'database',
    label: 'Data',
    caption: 'Storage and caching',
    icon: Database,
    code: 'DB',
  },
  {
    id: 'tool',
    label: 'Tools',
    caption: 'Workflow and delivery',
    icon: Wrench,
    code: 'OPS',
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
  <li className="skill-badge group/skill relative flex min-h-[68px] items-center gap-3 overflow-hidden rounded-xl border border-white/[0.07] bg-black/20 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-primary/40 hover:bg-cyber-primary/[0.055] hover:shadow-[0_12px_30px_rgba(0,255,65,0.08)]">
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.92] p-2 shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
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
        className={`${skill.icon ? 'hidden' : ''} font-tech text-sm font-bold text-[#07110c]`}
        aria-hidden="true"
      >
        {getMonogram(skill.name)}
      </span>
    </div>

    <div className="min-w-0">
      <p className="truncate font-mono text-sm font-bold text-slate-200 transition-colors duration-300 group-hover/skill:text-white">
        {skill.name}
      </p>
      <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600 transition-colors duration-300 group-hover/skill:text-cyber-primary/70">
        Ready
      </p>
    </div>

    <span
      className="absolute bottom-0 left-0 h-px w-0 bg-cyber-primary transition-all duration-500 group-hover/skill:w-full"
      aria-hidden="true"
    />
  </li>
);

const SkillGroup: React.FC<{ category: CategoryConfig; index: number }> = ({
  category,
  index,
}) => {
  const categorySkills = SKILLS.filter((skill) => skill.category === category.id);
  const CategoryIcon = category.icon;

  return (
    <article
      className={`skill-group relative overflow-hidden rounded-2xl border border-white/10 bg-[#08110d]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-6 ${
        category.id === 'language' || category.id === 'backend'
          ? 'lg:col-span-2'
          : ''
      }`}
    >
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyber-primary/25 bg-cyber-primary/[0.07] text-cyber-primary">
            <CategoryIcon size={20} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-tech text-lg font-bold uppercase tracking-wider text-white">
              {category.label}
            </h3>
            <p className="font-mono text-[10px] text-slate-500">{category.caption}</p>
          </div>
        </div>

        <div className="text-right font-mono">
          <p className="text-[10px] tracking-[0.2em] text-cyber-primary/60">
            {category.code}_{String(index + 1).padStart(2, '0')}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {String(categorySkills.length).padStart(2, '0')} modules
          </p>
        </div>
      </div>

      <ul
        className={`grid grid-cols-1 gap-3 ${
          category.id === 'language' || category.id === 'backend'
            ? 'sm:grid-cols-2 lg:grid-cols-3'
            : 'sm:grid-cols-2'
        }`}
      >
        {categorySkills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </ul>
    </article>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#070c09] py-24">
      <div className="skill-section-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-cyber-primary/[0.06] blur-[120px]" />

      <div className="container relative mx-auto px-6">
        <div className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block font-mono text-sm uppercase tracking-[0.3em] text-cyber-primary">
              03. Capabilities
            </span>
            <h2 className="font-tech text-4xl font-bold tracking-wider text-white md:text-5xl">
              TECH_<span className="text-cyber-primary">ARSENAL</span>
            </h2>
            <p className="mt-4 max-w-xl font-mono text-sm leading-6 text-slate-400">
              Technologies I use to design, build, ship, and maintain complete
              software products.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono backdrop-blur-sm">
            <span className="text-2xl font-bold text-cyber-primary">
              {String(SKILLS.length).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase leading-4 tracking-[0.2em] text-slate-500">
              Technologies
              <br />
              online
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {CATEGORIES.map((category, index) => (
            <SkillGroup key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
