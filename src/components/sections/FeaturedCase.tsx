import { useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect'
import { featuredProject } from '../../data/projects'
import { MagneticButton } from '../ui/MagneticButton'
import { SectionHeader } from '../ui/SectionHeader'

// A single deep-dive case study for the flagship project. The visual panel
// reveals via a clip-path wipe, and the headline metric counts up when it
// enters view — motion that reveals content rather than decorating it.
const metrics = [
  { value: 41, suffix: '%', label: 'Faster resolution' },
  { value: 3, suffix: '', label: 'Support orgs' },
  { value: 120, suffix: 'k', label: 'Queries / month' },
]

export function FeaturedCase() {
  const rootRef = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // Clip-path reveal for the visual.
        gsap.from('[data-case-visual]', {
          clipPath: 'inset(0 0 100% 0)',
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: { trigger: '[data-case-visual]', start: 'top 80%', once: true },
        })

        // Count-up metrics.
        gsap.utils.toArray<HTMLElement>('[data-metric]').forEach((el) => {
          const target = Number(el.dataset.metric)
          const obj = { v: 0 }
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            onUpdate: () => {
              el.firstChild!.textContent = String(Math.round(obj.v))
            },
          })
        })
      }, root)

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  const p = featuredProject

  return (
    <section
      ref={rootRef}
      className="relative mx-auto max-w-[1400px] px-6 py-36 md:px-10 md:py-56"
    >
      <SectionHeader index="FC" eyebrow="Featured Case" title={`${p.title} — case study`} />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Visual */}
        <div
          data-case-visual
          className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line bg-surface shadow-[var(--shadow-card)]"
        >
          <div className="absolute inset-0" aria-hidden>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(120% 120% at 20% 0%, var(--color-accent), transparent 45%)`,
              }}
            />
            {/* Placeholder "product" wireframe — TODO: replace with real shots */}
            <div className="absolute inset-8 rounded-sm border border-line-strong">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-faint" />
                <span className="h-2 w-2 rounded-full bg-faint" />
                <span className="h-2 w-2 rounded-full bg-faint" />
                <span className="ml-3 font-mono text-[10px] text-faint">
                  {p.title.toLowerCase()}.app
                </span>
              </div>
              <div className="space-y-3 p-5">
                <div className="h-2.5 w-1/3 rounded bg-line-strong" />
                <div className="h-2 w-2/3 rounded bg-line" />
                <div className="h-2 w-1/2 rounded bg-line" />
                <div className="mt-6 h-24 rounded-lg border border-line bg-surface-2" />
                <div className="flex gap-3">
                  <div className="h-16 flex-1 rounded-lg border border-line bg-surface-2" />
                  <div className="h-16 flex-1 rounded-lg border border-line bg-surface-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="flex flex-col justify-center">
          <p className="mono-label uppercase">{p.category}</p>
          <p className="mt-6 text-lead text-text">{p.description}</p>
          <p className="mt-4 text-muted">{p.outcome}</p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {metrics.map((m) => (
              <div key={m.label}>
                <dd className="font-display text-[clamp(2rem,4vw,3rem)] text-accent tabular-nums">
                  <span data-metric={m.value}>0</span>
                  {m.suffix}
                </dd>
                <dt className="mt-2 text-xs text-muted">{m.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <MagneticButton href={p.href ?? '#'} variant="outline">
              Read the full case study
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
