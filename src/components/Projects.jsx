import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const projects = [
  {
    title: 'Ledge',
    period: 'Apr 2026 – Present',
    description:
      'Personal finance platform that gives users a clear picture of where their money goes — live at ledgeflux.com.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Plaid', 'Upstash Redis'],
    achievements: [
      'Connects bank accounts via Plaid to automatically ingest and categorize transactions, with dashboards charting spending breakdowns and net savings over time',
      'Full production stack: NextAuth authentication, Prisma ORM, Upstash Redis rate limiting, and transactional email via Resend',
    ],
    links: [
      { label: 'ledgeflux.com', href: 'https://ledgeflux.com' },
      { label: 'github', href: 'https://github.com/alexwang9/ledge' },
    ],
    featured: true,
  },
  {
    title: 'Telepathy',
    period: 'Nov 2025 – Apr 2026',
    description:
      'Native macOS overlay that indexes Google Drive and Gmail into pgvector-powered embeddings, enabling semantic search and context-aware AI interactions across 20,000+ documents per user.',
    technologies: ['Swift', 'Supabase', 'PostgreSQL + pgvector', 'Claude API'],
    achievements: [
      'Voice profile generation with the Claude API analyzes user writing patterns and auto-injects personalized style guides into AI conversations',
      'Acquired 10 pilot customers and $1,500 in funding through direct outreach and product iteration',
    ],
    links: [
      { label: 'github', href: 'https://github.com/alexwang9/telepathy-macos' },
    ],
    featured: true,
  },
  {
    title: 'Collage',
    period: 'Apr 2024 – Apr 2025',
    description:
      'Social networking platform for college course selection with personalized recommendations, grown to 750+ users.',
    technologies: ['Next.js', 'Flask', 'MySQL', 'Stripe'],
    achievements: [
      'Scaled to 750+ users within 3 weeks of launch with Google OAuth, a social graph, schedule builder, and activity feed',
      'Integrated Stripe metered billing in under 3 days while leading a cross-functional team of 10',
    ],
    links: [
      { label: 'github', href: 'https://github.com/collage-us/collage-nextjs' },
    ],
    featured: true,
  },
  {
    title: 'Distributed Search Engine',
    period: 'Nov 2024',
    description:
      'Google-style search stack built from scratch: a five-stage MapReduce pipeline that parsed and indexed 150K Wikipedia pages with tf-idf and PageRank, serving top-10 results in <100ms median latency.',
    technologies: ['Python', 'Flask', 'MapReduce'],
  },
  {
    title: 'SwingSense',
    period: 'May 2024',
    description:
      'AI-powered tennis swing analysis that processes video footage at ~25 fps on CPU to provide form feedback, with 95% PCK landmark accuracy.',
    technologies: ['Python', 'FastAPI', 'MediaPipe', 'OpenCV'],
  },
  {
    title: 'Briefly News',
    period: 'May 2024',
    description:
      'Full-stack app that automates daily delivery of summarized New York Times content to registered users via email.',
    technologies: ['React', 'Node.js', 'MongoDB', 'NYT API'],
  },
  {
    title: 'Pomodoro Chrome Extension',
    period: 'Dec 2023 – Jan 2024',
    description:
      'Productivity extension with customizable work and break intervals and real-time data synchronization via Chrome APIs.',
    technologies: ['JavaScript', 'Chrome APIs'],
  },
  {
    title: 'Banking Transaction System',
    period: 'Nov 2023',
    description:
      'C++ transaction engine using hash sets for registration management and a priority queue for optimized processing.',
    technologies: ['C++', 'Unit Testing'],
  },
  {
    title: 'ML Movie Review Classification',
    period: 'Aug 2023',
    description:
      'Sentiment classifier with a sequential neural network, tested on IMDb reviews scraped with Beautiful Soup.',
    technologies: ['Python', 'TensorFlow', 'Pandas'],
  },
];

const TechList = ({ technologies }) => (
  <p className="font-mono text-xs text-stone-400">
    {technologies.join(' · ')}
  </p>
);

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="wrap-wide">
        <Reveal>
          <p className="section-label mb-4">03 — projects</p>
          <h2 className="section-heading mb-12">Selected work</h2>
        </Reveal>

        {/* Featured Projects */}
        <div className="mb-20">
          {featuredProjects.map((project) => (
            <Reveal key={project.title}>
              <div className="grid md:grid-cols-[170px,1fr] gap-2 md:gap-8 py-10 border-t border-stone-200">
                <p className="font-mono text-sm text-stone-400 pt-1">
                  {project.period}
                </p>
                <div>
                  <h3 className="font-serif text-2xl text-stone-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-4 max-w-2xl">
                    {project.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {(project.achievements ?? []).map((achievement, index) => (
                      <li
                        key={index}
                        className="text-sm text-stone-600 leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-stone-400 max-w-2xl"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <TechList technologies={project.technologies} />
                  {project.links && (
                    <div className="flex gap-6 mt-4">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-quiet inline-flex items-center gap-1 font-mono text-sm"
                        >
                          {link.label} <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Other Projects */}
        <Reveal>
          <p className="section-label mb-6">more projects</p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 75}>
              <div className="border border-stone-200 rounded-lg p-6 h-full transition-colors duration-200 hover:border-stone-400">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h4 className="font-medium text-stone-900">{project.title}</h4>
                  <span className="font-mono text-xs text-stone-400 whitespace-nowrap">
                    {project.period}
                  </span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <TechList technologies={project.technologies} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* GitHub link */}
        <Reveal>
          <div className="mt-16">
            <a
              href="https://github.com/alexwang9"
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet inline-flex items-center gap-1.5 font-medium"
            >
              more on github <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
