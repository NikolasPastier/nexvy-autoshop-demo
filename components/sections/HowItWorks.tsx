'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'

const steps = [
  {
    num: '01',
    title: 'Objednávka',
    desc: 'Rezervácia termínu online alebo telefonicky podľa vašich preferencií.',
    link: 'Online alebo telefonicky',
  },
  {
    num: '02',
    title: 'Diagnostika',
    desc: 'Dôkladná kontrola vozidla a nacenenie potrebných opráv vopred.',
    link: 'S vaším súhlasom vopred',
  },
  {
    num: '03',
    title: 'Realizácia',
    desc: 'Odborná oprava s použitím originálnych dielov v dohodnutom čase.',
    link: 'WhatsApp správa automaticky',
  },
  {
    num: '04',
    title: 'Odovzdanie',
    desc: 'Skúšobná jazda, kontrola kvality a vysvetlenie vykonaných prác.',
    link: 'Vrátane záručného listu',
  },
]

export default function HowItWorks() {
  const headerRef = useScrollReveal()
  const gridRef = useStaggerReveal('.process-card', 0.15)

  return (
    <section style={{ padding: '96px 0', background: 'rgba(13,21,37,0.4)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            TRANSPARENTNÝ PROCES
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #ffffff 30%, #1a4fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter:
                'drop-shadow(0 0 30px rgba(26,79,255,0.45)) drop-shadow(0 0 60px rgba(26,79,255,0.2))',
              textAlign: 'center',
            }}
          >
            Ako to funguje
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.4)',
              maxWidth: '520px',
              margin: '12px auto 0',
              textAlign: 'center',
            }}
          >
            Vaše auto prejde logickým a transparentným postupom od prevzatia až po odovzdanie.
          </p>
        </div>

        {/* Steps grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="process-card"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26,79,255,0.4)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,79,255,0.18)'
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Number badge */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: '#1a4fff',
                  borderRadius: '12px',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  flexShrink: 0,
                }}
              >
                {step.num}
              </div>
              {/* Content */}
              <div>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '8px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.6,
                    marginBottom: '10px',
                  }}
                >
                  {step.desc}
                </p>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: '#1a4fff',
                    fontWeight: 600,
                  }}
                >
                  {step.link}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
