'use client'

const tools = [
  {
    name: 'Next.js',
    category: 'Framework',
    color: 'from-back-500 to-grey-500',
    glow: 'rgba(6,182,212,0.2)',
    icon: 'devicon-nextjs-plain'
  },
  {
    name: 'Laravel',
    category: 'Framework',
    color: 'from-red-500 to-rose-500',
    glow: 'rgba(239,68,68,0.2)',
    icon: 'devicon-laravel-original'
  },
  {
    name: 'Bootstrap',
    category: 'Styling',
    color: 'from-purple-500 to-indigo-500',
    glow: 'rgba(99,102,241,0.2)',
    icon: 'devicon-bootstrap-plain'
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    color: 'from-cyan-400 to-teal-400',
    glow: 'rgba(45,212,191,0.2)',
    icon: 'devicon-tailwindcss-original'
  },
  {
    name: 'Arch Linux',
    category: 'OS',
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(23,147,209,0.25)',
    icon: 'devicon-archlinux-plain'
  },
  {
    name: 'MySQL',
    category: 'Database',
    color: 'from-blue-800 to-blue-800',
    glow: 'rgba(251,146,60,0.2)',
    icon: 'devicon-mysql-original'
  },
  {
    name: 'Git',
    category: 'VCS',
    color: 'from-orange-500 to-red-500',
    glow: 'rgba(249,115,22,0.2)',
    icon: 'devicon-git-plain'
  },
  {
    name: 'WordPress',
    category: 'CMS',
    color: 'from-blue-500 to-sky-600',
    glow: 'rgba(33,117,155,0.25)',
    icon: 'devicon-wordpress-plain'
  },
  {
    name: 'Figma',
    category: 'Design',
    color: 'from-[#F24E1E] via-[#A259FF] to-[#0ACF83]',
    glow: 'rgba(162,89,255,0.3)',
    icon: 'devicon-figma-plain'
  },
  {
    name: 'Java',
    category: 'Language',
    color: 'from-orange-500 to-red-600',
    glow: 'rgba(249,115,22,0.25)',
    icon: 'devicon-java-plain'
  },
  {
    name: 'C#',
    category: 'Language',
    color: 'from-[#9B4F96] to-[#68217A]',
    glow: 'rgba(104,33,122,0.3)',
    icon: 'devicon-csharp-plain'
  },
  {
    name: 'C++',
    category: 'Language',
    color: 'from-[#00599C] to-[#004482]',
    glow: 'rgba(0,89,156,0.3)',
    icon: 'devicon-cplusplus-plain'
  }
]

export default function TechStack() {
  return (
    <section id="stack" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-cyan-400/80 mb-4">
            Tools & Technologies
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Tech{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              Stack
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-5 transition-all duration-300 hover:-translate-y-0.5"
              style={{ '--glow': tool.glow } as React.CSSProperties}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(120px circle at center, ${tool.glow.replace('0.2', '0.08')}, transparent)`,
                }}
              />

              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-9 h-9 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white text-2xl shadow-lg shadow-black/10`}
                >
                  {(tool as any).icon ? (
                    <i className={`${(tool as any).icon}`}></i>
                  ) : (
                    <span className="text-sm font-bold">{tool.name[0]}</span>
                  )}
                </div>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {tool.category}
                </span>
              </div>

              <h3 className="text-base font-semibold text-white">
                {tool.name}
              </h3>

              <div
                className={`absolute inset-x-0 bottom-0 h-0.5 rounded-b-xl bg-gradient-to-r ${tool.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
