import { useEffect, useRef } from 'react';
import { TrendingUp, Target, Users, Award } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '8+', label: 'Years Experience', color: '#3b82f6' },
  { icon: Target, value: '120+', label: 'Projects Delivered', color: '#f59e0b' },
  { icon: Users, value: '40+', label: 'Stakeholders Managed', color: '#10b981' },
  { icon: Award, value: '15+', label: 'Certifications', color: '#8b5cf6' },
];

export default function About() {
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
    <section id="about" className="py-24 px-6 bg-[#0f172a]">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl font-bold text-white mt-2">Who I Am</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm <span className="text-white font-semibold">Diego</span>, a seasoned Business Analyst with over
              8 years of experience bridging the gap between business needs and technical solutions.
              I excel at requirements gathering, process mapping, and translating stakeholder
              visions into executable roadmaps.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My approach combines quantitative analysis with qualitative research to uncover hidden
              opportunities and eliminate inefficiencies. I've worked across finance, healthcare,
              and technology sectors, consistently delivering projects on time and within budget.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I hold a degree in Business Administration with a focus on Information Systems and
              hold multiple certifications including CBAP, PMI-PBA, and Lean Six Sigma Green Belt.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {['CBAP Certified', 'PMI-PBA', 'Lean Six Sigma', 'Agile/Scrum', 'TOGAF'].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-hover bg-[#1e293b] border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${stat.color}20` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
