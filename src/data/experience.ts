// -----------------------------------------------------------------------------
// EXPERIENCE / LEARNING JOURNEY — a real sequence, so numbered markers are
// justified here. TODO: replace with Abraham's real timeline.
// -----------------------------------------------------------------------------

export type Milestone = {
  index: string
  period: string
  title: string
  org: string
  detail: string
}

export const journey = {
  eyebrow: 'Journey',
  title: 'The path so far',
  milestones: [
    {
      index: '01',
      period: '2021',
      title: 'Started building for the web',
      org: 'Self-taught → first products',
      detail:
        'Fell for the loop of idea → code → something real people use. Shipped my first full-stack apps and never looked back.',
    },
    {
      index: '02',
      period: '2022',
      title: 'Went deep on backend systems',
      org: 'Software Engineer',
      detail:
        'Learned to make things reliable — databases, queues, APIs, and the discipline of code that survives production.',
    },
    {
      index: '03',
      period: '2023',
      title: 'Crossed into applied ML',
      org: 'AI Engineer',
      detail:
        'Moved from consuming models to building around them: retrieval, evaluation, and serving pipelines for real workloads.',
    },
    {
      index: '04',
      period: '2024',
      title: 'Agentic systems & tooling',
      org: 'Founding / Lead Engineer',
      detail:
        'Built tool-using agents with guardrails and the developer tooling to keep them observable and trustworthy.',
    },
    {
      index: '05',
      period: '2025 →',
      title: 'Product-grade AI, end to end',
      org: 'Independent',
      detail:
        'Now I take intelligent products from data pipeline to pixel — the full arc, with craft at every layer.',
    },
  ] satisfies Milestone[],
}
