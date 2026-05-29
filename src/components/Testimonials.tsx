import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'VP of Product',
    company: 'FinTech Solutions Inc.',
    text:
      'Diego has an exceptional ability to translate complex business needs into clear technical requirements. His stakeholder management skills are unmatched — he brings everyone into alignment effortlessly.',
  },
  {
    name: 'Carlos Rivera',
    role: 'CTO',
    company: 'HealthCare Digital Group',
    text:
      'Working with Diego was a game-changer for our EHR implementation. He identified gaps our team had missed for months and delivered a requirements document that our developers called the most comprehensive they'd ever seen.',
  },
  {
    name: 'Amanda Chen',
    role: 'Project Director',
    company: 'Nexus Consulting Group',
    text:
      'Diego's attention to detail, structured thinking, and ability to ask the right questions make him an invaluable analyst. Every project he touches delivers measurable ROI.',
  },
];

export default function Testimonials() {
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
    <section id="testimonials" className="py-24 px-6 bg-[#0f172a]">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl font-bold text-white mt-2">What People Say</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card-hover bg-[#1e293b] border border-slate-700/50 rounded-2xl p-7 flex flex-col gap-5 relative"
            >
              <Quote
                className="absolute top-6 right-6 w-8 h-8 text-blue-500/20"
              />
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-700/50">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
