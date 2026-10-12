import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect'
import { projects } from '../../data/projects'
import { HudGrid } from '../ui/HudGrid'

// Selected Work: on desktop this pins and scrolls horizontally — the scroll
// wheel drives lateral travel through large editorial project panels. This is
// where horizontal scroll genuinely aids storytelling (a "reel" of work).
// On mobile/reduced-motion it degrades to a normal vertical stack.
export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const mm = gsap.matchMedia()

    // Horizontal pin only on larger, motion-friendly viewports.
    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const getScrollAmount = () => track.scrollWidth - window.innerWidth

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      return () => tween.kill()
    })

    return () => {
      mm.revert()
      ScrollTrigger.refresh()
    }
  }, [])

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden">
      <HudGrid className="opacity-60" />

      {/* Header rail */}
      <div className="mx-auto flex max-w-[1400px] items-end justify-between px-6 pt-24 md:px-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-accent">SW</span>
            <span className="mono-label uppercase">Selected Work</span>
          </div>
          <h2 className="max-w-[14ch] text-h2 font-display">A reel of recent work</h2>
        </div>
        <span className="mono-label hidden uppercase md:block">
          {projects.length.toString().padStart(2, '0')} projects · scroll →
        </span>
      </div>

      {/* Track: horizontal on desktop (flex row), vertical stack on mobile */}
      <div
        ref={trackRef}
        className="flex flex-col gap-8 px-6 py-16 md:flex-row md:flex-nowrap md:gap-10 md:px-10 md:py-24 md:will-change-transform"
      >
        {projects.map((p) => (
          <article
            key={p.id}
            data-cursor="hover"
            className="gold-border group relative flex min-h-[60vh] shrink-0 flex-col justify-between overflow-hidden rounded-sm border border-line bg-surface p-8 shadow-[var(--shadow-card)] transition-[border-color,box-shadow,transform] duration-500 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)] md:min-h-[70vh] md:w-[46vw] md:p-12"
          >
            {/* Panel accent wash — the single amber signal, kept subtle */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-1/4 -top-1/4 h-2/3 w-2/3 rounded-full opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.14]"
              style={{
                background: `conic-gradient(from ${p.hue}deg, var(--color-accent), transparent 60%)`,
              }}
            />

            <div className="flex items-start justify-between">
              <span className="font-mono text-sm text-accent tabular-nums">{p.index}</span>
              <ArrowUpRight
                className="h-6 w-6 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                strokeWidth={1.5}
              />
            </div>

            <div className="relative">
              <p className="mono-label mb-4 uppercase">{p.category}</p>
              <h3 className="text-[clamp(2rem,4vw,3.75rem)] font-display font-normal italic leading-[0.95]">
                {p.title}
              </h3>
              <p className="mt-5 max-w-md text-muted">{p.description}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-line pt-6">
                <div>
                  <dt className="mono-label uppercase">Role</dt>
                  <dd className="mt-1 text-sm text-text">{p.role}</dd>
                </div>
                <div>
                  <dt className="mono-label uppercase">Year</dt>
                  <dd className="mt-1 text-sm text-text">{p.year}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="mono-label uppercase">Outcome</dt>
                  <dd className="mt-1 text-sm text-text">{p.outcome}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
