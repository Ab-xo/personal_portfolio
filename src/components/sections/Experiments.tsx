import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from '../../lib/gsap'
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect'
import { experiments } from '../../data/site'
import { SectionHeader } from '../ui/SectionHeader'

// Creative-technology experiments — a lighter, list-driven section. Rows reveal
// on scroll and lift the accent on hover.
export function Experiments() {
  const rootRef = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('[data-exp-row]').forEach((row) => {
          gsap.from(row, {
            y: 28,
            autoAlpha: 0,
            duration: 0.8,
            ease: 'expo.out',
            scrollTrigger: { trigger: row, start: 'top 90%', once: true },
          })
        })
      }, root)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <section
      id="experiments"
      ref={rootRef}
      className="relative mx-auto max-w-[1400px] px-6 py-36 md:px-10 md:py-56"
    >
      <SectionHeader index="06" eyebrow={experiments.eyebrow} title={experiments.title} />

      <p className="mt-12 max-w-2xl text-lead text-muted">{experiments.body}</p>

      <ul className="mt-16 border-t border-line">
        {experiments.items.map((item) => (
          <li key={item.name} data-exp-row>
            <a
              href="#"
              data-cursor="hover"
              className="group flex min-h-16 items-center justify-between gap-6 border-b border-line py-8 transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <span className="flex items-baseline gap-6">
                <span className="text-h3 font-display italic transition-transform duration-300 group-hover:translate-x-2 group-hover:text-accent">
                  {item.name}
                </span>
              </span>
              <span className="flex items-center gap-6">
                <span className="mono-label hidden uppercase sm:block">{item.tag}</span>
                <span className="font-mono text-xs text-faint">{item.year}</span>
                <ArrowUpRight
                  className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  strokeWidth={1.5}
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
