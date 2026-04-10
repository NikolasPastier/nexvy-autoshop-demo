'use client'
import { useEffect } from 'react'

export default function HeroSection() {
  // Load animation — runs once on mount, no ScrollTrigger
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const elements = [
        '.hero-badge',
        '.hero-h1-wrapper',
        '.hero-subtitle',
        '.hero-buttons',
        '.hero-trust',
        '.hero-scroll',
      ]
      gsap.set(elements, { opacity: 0, y: 24 })
      const tl = gsap.timeline({ delay: 0.3 })
      elements.forEach((el, i) => {
        tl.to(
          el,
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          i === 0 ? 0 : '-=0.45'
        )
      })
    }
    init()
  }, [])

  // Subtle parallax on hero bg image only
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      gsap.to('.hero-bg-img', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section-wrapper',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
    init()
  }, [])

  return (
    <div
      className="hero-section-wrapper"
      style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/gallery/Mechanic_working_under_202604040940.jpeg"
          alt=""
          className="hero-bg-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(8,13,24,0.35) 0%, rgba(8,13,24,0.65) 60%, rgba(8,13,24,0.95) 100%)',
        }}
      />

      {/* Hero content */}
      <div
        className="hero-content-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
          paddingTop: '72px',
        }}
      >
        {/* 1. Badge */}
        <div
          className="hero-badge"
          style={{
            display: 'inline-flex',
            border: '1px solid rgba(26,79,255,0.45)',
            background: 'rgba(26,79,255,0.08)',
            backdropFilter: 'blur(8px)',
            borderRadius: '999px',
            padding: '6px 16px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '20px',
          }}
        >
          AUTOSERVIS & PNEUSERVIS
        </div>

        {/* 2. h1 */}
        <div className="hero-h1-wrapper">
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #ffffff 30%, #1a4fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter:
                'drop-shadow(0 0 30px rgba(26,79,255,0.45)) drop-shadow(0 0 60px rgba(26,79,255,0.2))',
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            PROFESIONÁLNY AUTOSERVIS V BRATISLAVE
          </h1>
        </div>

        {/* 3. Subtitle */}
        <p
          className="hero-subtitle"
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1.1rem',
            letterSpacing: '0.08em',
            marginTop: '20px',
          }}
        >
          Diagnostika · Opravy · Údržba · Pneuservis
        </p>

        {/* 4. Buttons */}
        <div
          className="hero-buttons"
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '40px',
          }}
        >
          <a
            href="#booking"
            style={{
              background: '#1a4fff',
              borderRadius: '10px',
              padding: '14px 28px',
              fontWeight: 600,
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 24px rgba(26,79,255,0.4)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              fontSize: '1rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 32px rgba(26,79,255,0.6)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(26,79,255,0.4)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Objednať termín
          </a>
          <a
            href="tel:+421948222333"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              padding: '14px 28px',
              color: 'white',
              backdropFilter: 'blur(8px)',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')
            }
          >
            +421 948 222 333
          </a>
        </div>

        {/* 5. Trust badges */}
        <div
          className="hero-trust"
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '48px',
          }}
        >
          {[
            '✓ 15 rokov skúseností',
            '✓ Certifikovaní mechanici',
            '✓ 100% záruka na prácu',
          ].map((badge) => (
            <span
              key={badge}
              style={{
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* 6. Scroll indicator */}
      <div
        className="hero-scroll"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '32px',
            background: 'rgba(255,255,255,0.3)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  )
}
