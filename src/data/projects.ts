// -----------------------------------------------------------------------------
// PROJECTS — realistic placeholders. TODO: replace with Abraham's real work.
// `featured` projects get a full case-study treatment; all appear in the
// horizontal Selected Work gallery.
// -----------------------------------------------------------------------------

export type Project = {
  id: string
  index: string // shown as mono readout, e.g. "01"
  title: string
  category: string
  year: string
  role: string
  description: string
  tech: string[]
  outcome: string
  href?: string // TODO: real case-study / live link
  featured?: boolean
  // Placeholder visual: a deterministic accent gradient angle for the panel.
  hue: number
}

export const projects: Project[] = [
  {
    id: 'helix',
    index: '01',
    title: 'Helix',
    category: 'Applied AI · Platform',
    year: '2025',
    role: 'Lead Engineer',
    description:
      'A retrieval and reasoning platform that turns scattered internal knowledge into a single, citable answer surface for support teams.',
    tech: ['TypeScript', 'Python', 'pgvector', 'React', 'GSAP'],
    outcome: 'Cut median resolution time by 41% across 3 support orgs.',
    href: '#', // TODO
    featured: true,
    hue: 42,
  },
  {
    id: 'atlas',
    index: '02',
    title: 'Atlas',
    category: 'Agentic Systems',
    year: '2025',
    role: 'Founding Engineer',
    description:
      'An agent runtime that plans, calls tools, and self-checks its work — with deterministic fallbacks when confidence drops.',
    tech: ['Python', 'LangGraph', 'Redis', 'Next.js'],
    outcome: 'Automated 60% of a manual ops workflow with full audit trails.',
    href: '#', // TODO
    featured: true,
    hue: 38,
  },
  {
    id: 'prism',
    index: '03',
    title: 'Prism',
    category: 'Data Visualization',
    year: '2024',
    role: 'Design Engineer',
    description:
      'A real-time analytics canvas that renders millions of points at 60fps and lets teams query by dragging on the chart itself.',
    tech: ['WebGL', 'three.js', 'DuckDB', 'React'],
    outcome: 'Shipped as the default dashboard for 8k+ daily users.',
    href: '#', // TODO
    hue: 46,
  },
  {
    id: 'cadence',
    index: '04',
    title: 'Cadence',
    category: 'Developer Tooling',
    year: '2024',
    role: 'Creator',
    description:
      'A CLI and daemon that watches your codebase and drafts context-aware commits, tests, and docs from your diffs.',
    tech: ['Rust', 'TypeScript', 'Local LLM'],
    outcome: 'Adopted by 1.2k developers in the first quarter.',
    href: '#', // TODO
    hue: 34,
  },
]

export const featuredProject = projects.find((p) => p.featured) as Project
