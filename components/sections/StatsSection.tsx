'use client'
import { useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import BrandCarousel from '@/components/ui/BrandCarousel'
import siteConfig from '@/content/site-config.json'

export default function StatsSection() {
  const sectionRef = useScrollReveal()

  // Counter animation
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      siteConfig.stats.forEach((stat) => {
        const el = document.querySelector(`[data-id="${stat.id}"]`)
        if (!el) return

        const raw = stat.value
        const suffix = raw.replace(/[\d\s]/g, '') // "+", "%", "h", etc.
        const num = parseInt(raw.replace(/\D/g, ''))

        // Set initial display immediately so it's never blank
        el.textContent = raw

        const obj = { val: 0 }
        gsap.to(obj, {
          val: num,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
          onUpdate: () => {
            const current = Math.round(obj.val)
            if (stat.value.includes(' ')) {
              // "3 400+" — preserve space-formatted number
              el.textContent = current.toLocaleString('sk') + suffix
            } else {
              el.textContent = current + suffix
            }
          },
          onComplete: () => {
            // Always land on the exact original value
            el.textContent = raw
          },
        })
      })
    }
    init()
  }, [])

  return (
    <section style={{ padding: '64px 0', background: 'rgba(13,21,37,0.5)' }}>
      <div ref={sectionRef} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '48px',
            padding: '0 24px',
            overflowX: 'auto',
            maxWidth: '900px',
            margin: '0 auto 48px',
            textAlign: 'center',
          }}
        >
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="stat-item" style={{ minWidth: '200px', flex: 1 }}>
              <span
                className="stat-number"
                data-id={stat.id}
                style={{
                  display: 'block',
                  whiteSpace: 'nowrap',
                  fontSize: '4rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: '8px',
                  background: 'linear-gradient(135deg, #60a5fa 0%, #1a4fff 60%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(26,79,255,0.4))',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  display: 'block',
                  whiteSpace: 'nowrap',
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Brand carousel */}
        <div>
          <p
            style={{
              textAlign: 'center',
              fontSize: '11px',
              letterSpacing: '0.15em',
              fontWeight: 700,
              marginBottom: '24px',
              background: 'linear-gradient(90deg, #60a5fa 0%, #1a4fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            PRACUJEME SO VŠETKÝMI ZNAČKAMI
          </p>
          <BrandCarousel brands={siteConfig.brands} />
        </div>
      </div>
    </section>
  )
}
