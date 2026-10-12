// -----------------------------------------------------------------------------
// SITE CONTENT — realistic placeholders. TODO: replace with Abraham's real data.
// Everything user-facing lives in src/data/* so copy can be swapped without
// touching component code.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Abraham',
  // TODO: replace with your real last name / handle
  fullName: 'Abraham Tesfaye',
  role: 'AI + Software Engineer',
  location: 'Addis Ababa, ET',
  // TODO: real timezone label
  timezone: 'GMT+3',
  email: 'hello@abraham.dev', // TODO: real email
  availability: 'Open to select 2026 collaborations',

  // Hero headline is intentionally split into lines for the staggered reveal.
  heroLines: ['Engineering', 'intelligent', 'software.'],
  heroStatement:
    'I build production AI systems and the interfaces that make them feel effortless — where software engineering, machine learning, and design converge.',

  socials: [
    { label: 'GitHub', href: 'https://github.com/' }, // TODO
    { label: 'LinkedIn', href: 'https://linkedin.com/in/' }, // TODO
    { label: 'X', href: 'https://x.com/' }, // TODO
    { label: 'Email', href: 'mailto:hello@abraham.dev' }, // TODO
  ],
} as const

export const nav = [
  { label: 'Work', target: '#work' },
  { label: 'Capabilities', target: '#capabilities' },
  { label: 'Journey', target: '#journey' },
  { label: 'About', target: '#about' },
  { label: 'Contact', target: '#contact' },
] as const

// Short manifesto shown in the Intro section — line-by-line reveal on scroll.
export const introStatement = {
  eyebrow: 'Introduction',
  lines: [
    'I treat models as materials —',
    'shaping them into products people trust,',
    'and interfaces that disappear into the work.',
  ],
  body: "For the last few years I've worked across the full stack of intelligent software: training and serving models, designing the systems around them, and crafting the front-end experiences that make them usable. I care about latency you can feel, interfaces that respect attention, and code that survives contact with production.",
}

// AI + Software Engineering feature block
export const aiFocus = {
  eyebrow: 'AI Engineering',
  title: 'From model to product',
  body: 'I work end-to-end on applied AI — retrieval systems, evaluation harnesses, agentic workflows, and the latency-sensitive serving layer underneath. The interesting problems live where the model meets the product surface.',
  pillars: [
    {
      k: 'Applied ML',
      v: 'RAG pipelines, fine-tuning, evaluation-driven iteration, and inference optimization for real workloads.',
    },
    {
      k: 'Agentic systems',
      v: 'Tool-using agents with guardrails, deterministic fallbacks, and observability built in from day one.',
    },
    {
      k: 'Product surface',
      v: 'Streaming UIs, optimistic states, and interaction models that make probabilistic systems feel dependable.',
    },
  ],
}

// Creative-technology experiments — smaller, exploratory pieces.
export const experiments = {
  eyebrow: 'Experiments',
  title: 'Creative technology',
  body: 'Nights-and-weekends explorations in shaders, generative systems, and interaction design. Where I test ideas before they earn their way into real products.',
  items: [
    { name: 'Flow fields', tag: 'WebGL / GLSL', year: '2025' },
    { name: 'Latent atlas', tag: 'Embeddings / three.js', year: '2025' },
    { name: 'Type in motion', tag: 'GSAP / SVG', year: '2024' },
    { name: 'Signal synth', tag: 'Web Audio', year: '2024' },
  ],
}

export const about = {
  eyebrow: 'About',
  title: 'Abraham',
  paragraphs: [
    'I’m an AI and software engineer focused on the space between research and product. I like problems that need both a model that works and an interface that earns trust.',
    'My background spans backend systems, applied machine learning, and front-end craft — which means I can carry an idea from a data pipeline all the way to the pixels a user touches.',
    'When I’m not shipping, I’m usually deep in a shader experiment or rebuilding something just to understand how it really works.',
  ],
  // TODO: swap for real numbers
  stats: [
    { k: 'Years building', v: '5+' },
    { k: 'Products shipped', v: '20+' },
    { k: 'Models in prod', v: '12' },
    { k: 'Coffee : commits', v: '1 : 1' },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: "Let's build something",
  body: 'Have a product that needs intelligence, or an interface that needs craft? I take on a small number of collaborations each year.',
  cta: 'Start a conversation',
}
