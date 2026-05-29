import { ArrowDown, Download, Linkedin, Mail } from 'lucide-react';

const AVATAR_URL =
  'https://fdqhburcgueiqvdinqcf.supabase.co/storage/v1/object/public/prompt-images/build-images/1780055367849-pexels-silverkblack-36766672.jpg';

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
      />
      <div
        className="absolute bottom-20 left-10 w-56 h-56 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center pt-16">
        {/* Text side */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Available for new opportunities</span>
          </div>

          <div>
            <p className="text-slate-400 text-lg mb-1">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
              Diego
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold gradient-text">
              Business Analyst
            </h2>
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
            I transform complex business challenges into clear, actionable insights.
            Specializing in data-driven decision making, process optimization, and
            strategic planning to drive measurable organizational growth.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </button>
            <a
              href="#"
              className="flex items-center gap-2 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700 hover:border-blue-400 hover:text-blue-400 text-slate-400 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:diego@example.com"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700 hover:border-blue-400 hover:text-blue-400 text-slate-400 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <div className="h-px flex-1 bg-slate-800" />
            <span className="text-slate-600 text-xs">diego@example.com</span>
          </div>
        </div>

        {/* Avatar side */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Outer ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #93c5fd, #3b82f6)',
                padding: '3px',
                borderRadius: '9999px',
                zIndex: 0,
              }}
            />
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: '0 0 60px rgba(59,130,246,0.4)',
                borderRadius: '9999px',
              }}
            />
            <div
              className="relative rounded-full overflow-hidden border-4 border-[#0f172a]"
              style={{ width: '340px', height: '340px', zIndex: 1 }}
            >
              <img
                src={AVATAR_URL}
                alt="Diego - Business Analyst"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1e293b] border border-slate-700 rounded-full px-5 py-2 flex items-center gap-2 shadow-xl"
              style={{ zIndex: 2 }}
            >
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-slate-300 text-xs font-medium">Top Rated Analyst</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
      >
        <span className="text-xs">Scroll down</span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
}
