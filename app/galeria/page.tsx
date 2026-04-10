'use client'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/footer/Footer'
import VapiWidget from '@/components/ui/VapiWidget'
import { ImageComparisonSlider } from '@/components/ui/ImageComparisonSlider'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'

const galleryPairs = [
  {
    category: 'VÝMENA PNEUMATÍK & DISKOV',
    beforeLabel: 'Opotrebované pneumatiky',
    afterLabel: 'Nové pneumatiky a disky',
    before: '/gallery/tires-before.png',
    after: '/gallery/tires-after.png',
  },
  {
    category: 'KOMPLETNÝ DETAILING EXTERIÉRU',
    beforeLabel: 'Zanedbané auto',
    afterLabel: 'Vyleštené do zrkadlového lesku',
    before: '/gallery/detailing-before.png',
    after: '/gallery/detailing-after.png',
  },
  {
    category: 'ČISTENIE & SERVIS MOTOROVÉHO PRIESTORU',
    beforeLabel: 'Zanesený motorový priestor',
    afterLabel: 'Vyčistený a ošetrený',
    before: '/gallery/engine-before.png',
    after: '/gallery/engine-after.png',
  },
  {
    category: 'VÝMENA BRZDOVÝCH KOTÚČOV',
    beforeLabel: 'Zhrdzavené kotúče',
    afterLabel: 'Nové brzdové kotúče',
    before: '/gallery/brakes-before.png',
    after: '/gallery/brakes-after.png',
  },
]

export default function GaleriaPage() {
  const heroRef = useScrollReveal()
  const gridRef = useStaggerReveal('.gallery-card', 0.15)

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          position: 'relative',
          height: '50vh',
          overflow: 'hidden',
          minHeight: '360px',
        }}
      >
        <img
          src="/gallery/Mechanic_working_under_202604040940.jpeg"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(8,13,24,0.5) 0%, rgba(8,13,24,0.8) 100%)',
          }}
        />
        <div
          ref={heroRef}
          style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '72px 24px 0',
          }}
        >
          <div
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
            NAŠA PRÁCA
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #ffffff 30%, #1a4fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter:
                'drop-shadow(0 0 30px rgba(26,79,255,0.45)) drop-shadow(0 0 60px rgba(26,79,255,0.2))',
            }}
          >
            Galéria prác
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              marginTop: '16px',
            }}
          >
            Reálne výsledky každého servisu — transparentnosť je náš záväzok
          </p>
        </div>
      </div>

      {/* Gallery grid */}
      <main style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            ref={gridRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
              gap: '32px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {galleryPairs.map((pair) => (
              <div
                key={pair.category}
                className="gallery-card"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(26,79,255,0.4)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,79,255,0.18)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#1a4fff',
                    marginBottom: '14px',
                  }}
                >
                  {pair.category}
                </p>
                <div
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.07)',
                    cursor: 'ew-resize',
                  }}
                >
                  <ImageComparisonSlider
                    leftImage={pair.before}
                    rightImage={pair.after}
                    altLeft={pair.beforeLabel}
                    altRight={pair.afterLabel}
                    initialPosition={38}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                  }}
                >
                  <span
                    style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}
                  >
                    {pair.beforeLabel}
                  </span>
                  <span
                    style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}
                  >
                    {pair.afterLabel}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.2)',
                    textAlign: 'center',
                    marginTop: '6px',
                  }}
                >
                  ← Potiahnite pre porovnanie →
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: '64px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '8px',
              }}
            >
              Máte záujem o takýto výsledok?
            </p>
            <p
              style={{
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '24px',
                fontSize: '0.9rem',
              }}
            >
              Objednajte sa a my sa postaráme o váš automobil s rovnakou starostlivosťou.
            </p>
            <a
              href="/#booking"
              style={{
                display: 'inline-block',
                background: '#1a4fff',
                borderRadius: '10px',
                padding: '14px 32px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                boxShadow: '0 4px 24px rgba(26,79,255,0.4)',
              }}
            >
              Objednať servis
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <VapiWidget />
    </>
  )
}
