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
      document.querySelectorAll('.stat-number').forEach((el) => {
        const target = el.getAttribute('data-value') || '0'
        const isPlus = target.includes('+')
        const isPct = target.includes('%')
        const isH = target.includes('h')
        const num = parseInt(target.replace(/\D/g, ''))
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
            el.textContent =
              Math.round(obj.val).toLocaleString('sk') +
              (isPlus ? '+' : isPct ? '%' : isH ? 'h' : '')
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto 48px',
            textAlign: 'center',
          }}
        >
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <span
                className="stat-number"
                data-value={stat.value}
                style={{
                  display: 'block',
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
