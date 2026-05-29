import { useEffect, useRef, useState } from 'react';
import type { Skill } from '@/types';

const skills: Skill[] = [
  { name: 'Requirements Analysis', level: 95, category: 'Core BA' },
  { name: 'Process Mapping & BPM', level: 92, category: 'Core BA' },
  { name: 'Stakeholder Management', level: 90, category: 'Core BA' },
  { name: 'Data Analysis & Reporting', level: 88, category: 'Analytics' },
  { name: 'SQL & Data Querying', level: 80, category: 'Analytics' },
  { name: 'Power BI / Tableau', level: 83, category: 'Analytics' },
  { name: 'Agile / Scrum', level: 87, category: 'Methodology' },
  { name: 'JIRA & Confluence', level: 85, category: 'Tools' },
  { name: 'User Story Writing', level: 91, category: 'Core BA' },
  { name: 'Risk Analysis', level: 82, category: 'Core BA' },
  { name: 'Excel & VBA', level: 79, category: 'Tools' },
  { name: 'Business Case Development', level: 88, category: 'Strategy' },
];

const categories = ['All', 'Core BA', 'Analytics', 'Methodology', 'Tools', 'Strategy'];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 bg-[#1e293b]">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl font-bold text-white mt-2">Skills & Competencies</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-[#0f172a] text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#0f172a] border border-slate-700/50 rounded-xl p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-200 font-medium text-sm">{skill.name}</span>
                <span className="text-blue-400 font-bold text-sm">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: animated ? `${skill.level}%` : '0%' }}
                />
              </div>
              <span className="text-xs text-slate-600">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
