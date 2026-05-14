export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan-400/80 mb-6 animate-fade-in">
          Full-Stack Web Developer
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white animate-fade-in-up">
          Make {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
            Life Easier
          </span>
          {' '}With Technology
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed text-balance animate-fade-in-up">
          I specialize in building modern web applications with{' '}
          <span className="text-slate-200 font-medium">Laravel</span>,{' '}
          <span className="text-slate-200 font-medium">PHP</span>, and{' '}
          <span className="text-slate-200 font-medium">Next.js</span>.
          I thrive in{' '}
          <span className="text-slate-200 font-medium">Linux-based</span>{' '}
          environments, writing performant and maintainable code
          from the terminal to the browser.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500 text-white text-sm font-medium transition-all duration-200 hover:bg-cyan-400 animate-glow-pulse"
          >
            View Projects
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-medium transition-all duration-200 hover:border-cyan-500/50 hover:text-cyan-400"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 text-slate-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
