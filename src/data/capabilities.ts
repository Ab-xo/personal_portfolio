// -----------------------------------------------------------------------------
// CAPABILITIES — grouped skills. TODO: tune to Abraham's real stack.
// Shown as an editorial index, not a logo soup.
// -----------------------------------------------------------------------------

export type Capability = {
  index: string
  area: string
  summary: string
  stack: string[]
}

export const capabilities = {
  eyebrow: 'Capabilities',
  title: 'What I bring to the table',
  groups: [
    {
      index: '01',
      area: 'AI & Machine Learning',
      summary:
        'Building and shipping applied ML — from retrieval and evaluation to agentic workflows and inference at scale.',
      stack: ['PyTorch', 'Transformers', 'RAG', 'LangGraph', 'Evals', 'Vector DBs'],
    },
    {
      index: '02',
      area: 'Software Engineering',
      summary:
        'Designing resilient backends and APIs with a bias for clarity, observability, and boring reliability.',
      stack: ['TypeScript', 'Python', 'Rust', 'PostgreSQL', 'Redis', 'gRPC'],
    },
    {
      index: '03',
      area: 'Frontend & Interaction',
      summary:
        'Crafting fast, accessible interfaces with motion that clarifies rather than decorates.',
      stack: ['React', 'Vite', 'Tailwind', 'GSAP', 'WebGL', 'Framer'],
    },
    {
      index: '04',
      area: 'Systems & Delivery',
      summary:
        'Owning the path to production — infra, CI, and the feedback loops that keep quality high.',
      stack: ['Docker', 'AWS', 'Terraform', 'GitHub Actions', 'Observability'],
    },
  ] satisfies Capability[],
}
