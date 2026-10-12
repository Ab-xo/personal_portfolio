import { useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect'
import { site } from '../../data/site'
import { HudGrid } from '../ui/HudGrid'
import { MagneticButton } from '../ui/MagneticButton'
import { ScrollIndicator } from '../ui/ScrollIndicator'

// Hero: the payoff of the opening timeline. Large display headline reveals
// line-by-line (masked), supporting copy and CTAs fade up after, and the grid
// drifts subtly with scroll for depth. `ready` gates the entrance so it starts
// right as the preloader clears.
export function Hero({ ready }: { ready: boolean }) {
  const rootRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (!ready) return
    const root = rootRef.current
    if (!root) return

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const lines = gsap.utils.toArray<HTMLElement>('[data-hero-line]')
        gsap.set(lines, { yPercent: 120 })

        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
        tl.to(lines, { yPercent: 0, duration: 1.2, stagger: 0.12 })
          .from(
            '[data-hero-fade]',
            { y: 24, autoAlpha: 0, duration: 1, stagger: 0.12 },
            '-=0.6',
          )

        // Subtle parallax on the HUD grid as the hero scrolls away.
        gsap.to(gridRef.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }, root)

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [ready])

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-6 pb-28 pt-36 md:px-10"
    >
      <div ref={gridRef} className="absolute inset-0 -z-10">
        <HudGrid />
      </div>

      {/* Ambient light — one warm source low in the frame, behind the grid */}
      <div
        aria-hidden
        className="aurora left-1/2 top-auto -z-10 h-[38vh] w-[60vw] -translate-x-1/2 bottom-[-10vh]"
        style={{ background: 'radial-gradient(ellipse, rgba(212,176,106,0.10), transparent 70%)' }}
      />

      {/* Corner HUD readouts */}
      <div className="pointer-events-none absolute inset-x-6 top-28 flex justify-between md:inset-x-10">
        <span className="mono-label uppercase">{site.availability}</span>
        <span className="mono-label uppercase">
          {site.location} · {site.timezone}
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1400px]">
        <p data-hero-fade className="mono-label mb-10 uppercase">
          {site.fullName} — {site.role}
        </p>

        <h1 className="text-display font-normal">
          {site.heroLines.map((line, i) => (
            <span key={i} className="reveal-mask">
              <span
                data-hero-line
                className={`block ${i === site.heroLines.length - 1 ? 'italic-accent text-gradient-gold' : ''}`}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-12 flex max-w-2xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p data-hero-fade className="max-w-xl text-lead text-muted">
            {site.heroStatement}
          </p>
        </div>

        <div data-hero-fade className="mt-14 flex flex-wrap items-center gap-4">
          <MagneticButton href="#work">View selected work</MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            Get in touch
          </MagneticButton>
        </div>
      </div>

      <ScrollIndicator className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0" />
    </section>
  )
}
