import { BarChart2, Linkedin, Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <BarChart2 className="w-5 h-5" style={{ color: '#3b82f6' }} />
          <span className="gradient-text">Diego</span>
          <span className="text-slate-600 text-sm font-normal ml-1">· Business Analyst</span>
        </div>

        <p className="text-slate-600 text-sm text-center">
          © {new Date().getFullYear()} Diego. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-700 hover:border-blue-400 text-slate-500 hover:text-blue-400 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-700 hover:border-blue-400 text-slate-500 hover:text-blue-400 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:diego@example.com"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-700 hover:border-blue-400 text-slate-500 hover:text-blue-400 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
