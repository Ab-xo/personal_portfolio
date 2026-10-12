import { about } from '../../data/site'
import { SectionHeader } from '../ui/SectionHeader'
import { SplitReveal } from '../ui/SplitReveal'

// About. Two-column editorial: narrative on the left, a compact stat readout on
// the right in HUD/mono language.
export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-[1400px] px-6 py-36 md:px-10 md:py-56"
    >
      <SectionHeader index="07" eyebrow={about.eyebrow} title={about.title} />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
        <div className="max-w-2xl">
          {about.paragraphs.map((para, i) => (
            <SplitReveal
              key={i}
              as="p"
              onScroll
              type="lines"
              delay={i * 0.05}
              className="mb-6 text-lead text-muted"
            >
              {para}
            </SplitReveal>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-sm border border-line bg-line lg:grid-cols-1">
          {about.stats.map((s) => (
            <div key={s.k} className="bg-bg p-6">
              <dd className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-accent tabular-nums">
                {s.v}
              </dd>
              <dt className="mt-1 mono-label uppercase">{s.k}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
