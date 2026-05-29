import { useEffect, useRef } from 'react';
import { BarChart2, Database, GitBranch, PieChart, FileText, TrendingUp } from 'lucide-react';
import type { Project } from '@/types';

const iconMap: Record<string, any> = {
  BarChart2,
  Database,
  GitBranch,
  PieChart,
  FileText,
  TrendingUp,
};

const projects: Project[] = [
  {
    title: 'Digital Banking Transformation',
    description:
      'Led requirements definition and stakeholder management for a full-scale core banking modernization, migrating 500k+ customer records.',
    tags: ['Requirements', 'BPM', 'Agile', 'Finance'],
    icon: 'Database',
    outcome: '$2.3M cost savings',
  },
  {
    title: 'Executive KPI Dashboard',
    description:
      'Designed and deployed a real-time Power BI dashboard suite for C-level executives, consolidating 12 data sources into unified views.',
    tags: ['Power BI', 'SQL', 'Data Analysis', 'Reporting'],
    icon: 'BarChart2',
    outcome: '40% faster decisions',
  },
  {
    title: 'Patient Journey Optimization',
    description:
      'Mapped end-to-end patient workflows in a 3-hospital network, identifying bottlenecks and proposing system improvements.',
    tags: ['Process Mapping', 'Healthcare', 'BPMN', 'UAT'],
    icon: 'GitBranch',
    outcome: '22% wait time reduction',
  },
  {
    title: 'Market Segmentation Analysis',
    description:
      'Conducted comprehensive market segmentation study using customer data, driving targeted campaign strategy for a retail brand.',
    tags: ['Data Analysis', 'Excel', 'Segmentation', 'Strategy'],
    icon: 'PieChart',
    outcome: '18% revenue increase',
  },
  {
    title: 'Compliance Requirements Framework',
    description:
      'Developed a reusable compliance requirements framework for GDPR/HIPAA projects, reducing documentation effort by 60%.',
    tags: ['Compliance', 'GDPR', 'HIPAA', 'Documentation'],
    icon: 'FileText',
    outcome: '60% faster compliance',
  },
  {
    title: 'Supply Chain Analytics Platform',
    description:
      'Defined requirements and performed gap analysis for a predictive analytics platform across a global supply chain operation.',
    tags: ['Analytics', 'Supply Chain', 'Requirements', 'Agile'],
    icon: 'TrendingUp',
    outcome: '15% efficiency gain',
  },
];

const tagColors: Record<string, string> = {
  Requirements: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  BPM: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  Agile: 'bg-green-500/10 text-green-300 border-green-500/20',
  Finance: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
  default: 'bg-slate-700/50 text-slate-300 border-slate-600/30',
};

function getTagClass(tag: string): string {
  return tagColors[tag] || tagColors['default'];
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-[#1e293b]">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl font-bold text-white mt-2">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const IconComp = iconMap[project.icon] || BarChart2;
            return (
              <div
                key={project.title}
                className="card-hover bg-[#0f172a] border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <IconComp className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-green-400 text-xs font-bold bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full">
                    {project.outcome}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-2 py-1 rounded-md border ${getTagClass(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
