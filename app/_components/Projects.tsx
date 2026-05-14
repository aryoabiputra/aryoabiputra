'use client'

const projects = [
  {
    title: 'CariKos',
    description:
      'A map-integrated web application for searching and finding boarding houses with interactive location-based filtering and real-time availability tracking.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    accent: 'from-cyan-500 to-teal-500',
    glow: 'rgba(6,182,212,0.15)',
    href: '#',
  },
  {
    title: 'FinNote',
    description:
      'A web-based financial recording application that offers premium-tier features completely free, with intuitive expense tracking, budgeting tools, and insightful reports.',
    tags: ['HTML', 'CSS', 'Javascript'],
    accent: 'from-sky-400 to-blue-500',
    glow: 'rgba(56,189,248,0.15)',
    href: 'https://aryoabiputra.github.io/finnote/?v=1.2.4',
  },
  {
    title: 'CarikanDulu',
    description:
      'A custom search engine project built by applying theory of language and automata, implementing tokenization, parsing, and pattern matching from scratch.',
    tags: ['HTML', 'CSS', 'Javascript', 'express js', 'sqlite'],
    accent: 'from-indigo-400 to-purple-500',
    glow: 'rgba(129,140,248,0.15)',
    href: '#',
  },
  {
    title: 'GearGang',
    description:
      'A tech and photography blog featuring in-depth gear reviews, photography techniques, and tutorials for enthusiasts and professionals alike.',
    tags: ['Wordpress'],
    accent: 'from-teal-400 to-emerald-500',
    glow: 'rgba(45,212,191,0.15)',
    href: 'https://geargang.web.id/',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const isReversed = index % 2 !== 0

  return (
    <div
      className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_32px_var(--glow-color)]"
      style={{ '--glow-color': project.glow } as React.CSSProperties}
    >
      <div
        className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      >
        <div className="relative w-full md:w-[45%] min-h-[200px] md:min-h-[300px] bg-slate-800/50 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`text-6xl md:text-8xl font-bold bg-gradient-to-br ${project.accent} text-transparent bg-clip-text opacity-20 select-none`}
            >
              {project.title[0]}
            </span>
          </div>
          <div
            className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${project.accent} opacity-30`}
          />
        </div>

        <div className="flex flex-col justify-center flex-1 p-6 md:p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-3">
            <div className={`h-px w-8 bg-gradient-to-r ${project.accent}`} />
            <span className="text-xs font-medium tracking-widest uppercase text-slate-500">
              Project {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {project.title}
          </h3>

          <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 w-fit"
          >
            <span className="relative">
              View Project
              <span
                className={`absolute -bottom-px inset-x-0 h-px bg-gradient-to-r ${project.accent} scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-cyan-400/80 mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              Projects
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
