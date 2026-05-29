import { useEffect, useRef } from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import type { Experience as ExperienceType } from '@/types';

const experiences: ExperienceType[] = [
  {
    role: 'Senior Business Analyst',
    company: 'FinTech Solutions Inc.',
    period: '2021 — Present',
    description:
      'Lead end-to-end business analysis for digital transformation initiatives across multiple product lines.',
    highlights: [
      'Reduced onboarding time by 35% through process re-engineering',
      'Defined requirements for a $4M core banking upgrade',
      'Facilitated 200+ stakeholder workshops',
      'Implemented Agile BA practices across 3 teams',
    ],
  },
  {
    role: 'Business Analyst',
    company: 'HealthCare Digital Group',
    period: '2018 — 2021',
    description:
      'Worked on EHR system implementations and patient portal improvements for regional hospital networks.',
    highlights: [
      'Delivered HIPAA-compliant requirements documentation',
      'Reduced patient wait time analytics by 22%',
      'Managed UAT for 6 major system releases',
      'Created standardized BA templates adopted company-wide',
    ],
  },
  {
    role: 'Junior Business Analyst',
    company: 'Nexus Consulting Group',
    period: '2016 — 2018',
    description:
      'Supported senior analysts on strategic consulting projects across retail and logistics clients.',
    highlights: [
      'Assisted in gap analysis for 10+ enterprise clients',
      'Developed process flow diagrams and BRDs',
      'Supported data migration validation efforts',
      'Earned recognition for exceptional client communication',
    ],
  },
];

export default function Experience() {
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
    <section id="experience" className="py-24 px-6 bg-[#0f172a]">
      <div ref={ref} className="section-fade max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Career</span>
          <h2 className="text-4xl font-bold text-white mt-2">Work Experience</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative pl-12">
          <div className="timeline-line" />
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative mb-10 last:mb-0">
              {/* Dot */}
              <div className="absolute -left-12 top-1 w-10 h-10 rounded-full bg-blue-600 border-4 border-[#0f172a] flex items-center justify-center shadow-lg shadow-blue-600/30">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <div className="card-hover bg-[#1e293b] border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                  </div>
                  <span className="text-slate-500 text-sm bg-slate-800 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
