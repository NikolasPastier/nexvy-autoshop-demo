'use client'
import { useState } from 'react'
import { Car } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function StatusChecker() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const contentRef = useScrollReveal()

  const handleCheck = () => {
    const v = input.trim().toUpperCase().replace(/\s/g, '')
    if (v === 'BA123AB' || v === '+421900000000' || v === '421900000000') {
      setResult('ready')
    } else if (v.length > 0) {
      setResult('notfound')
    }
  }

  return (
    <section id="stav-opravy" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div ref={contentRef} style={{ textAlign: 'center' }}>
          {/* Car icon */}
          <div style={{ marginBottom: '20px' }}>
            <Car size={48} color="rgba(255,255,255,0.3)" />
          </div>

          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              border: '1px solid rgba(26,79,255,0.45)',
              background: 'rgba(26,79,255,0.08)',
              backdropFilter: 'blur(8px)',
              borderRadius: '999px',
              padding: '6px 16px',
              marginBottom: '20px',
            }}
          >
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              background: 'linear-gradient(90deg, #60a5fa 0%, #1a4fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              STAV VÁŠHO AUTA
            </span>
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
            Je moje auto hotové?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.4)',
              maxWidth: '520px',
              margin: '12px auto 40px',
              textAlign: 'center',
            }}
          >
            Skontrolujte si stav vašej opravy online — okamžite a bez čakania.
          </p>

          {/* Search widget */}
          <div
            style={{
              maxWidth: '580px',
              margin: '0 auto',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '32px',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
              placeholder="Zadajte ŠPZ alebo telefónne číslo"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '14px 16px',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                marginBottom: '12px',
              }}
            />
            <button
              onClick={handleCheck}
              style={{
                width: '100%',
                background: '#1a4fff',
                borderRadius: '10px',
                padding: '14px 28px',
                fontWeight: 600,
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 24px rgba(26,79,255,0.4)',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
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
              Zistiť stav
            </button>
            <p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                marginTop: '12px',
              }}
            >
              Stav vašej opravy overíme okamžite cez WhatsApp
            </p>

            {/* Result */}
            {result === 'ready' && (
              <div
                style={{
                  marginTop: '20px',
                  background: 'rgba(34,197,94,0.08)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  borderRadius: '10px',
                  padding: '16px',
                  color: 'rgba(134,239,172,1)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                }}
              >
                🚗 Vaše auto <strong>BA123AB</strong> je pripravené na vyzdvihnutie!
                <br />
                Sme otvorení do 17:30. Tešíme sa na vás.
              </div>
            )}
            {result === 'notfound' && (
              <div
                style={{
                  marginTop: '20px',
                  background: 'rgba(239,68,68,0.08)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  borderRadius: '10px',
                  padding: '16px',
                  color: 'rgba(252,165,165,1)',
                  fontSize: '0.9rem',
                }}
              >
                Zákazku sme nenašli. Zavolajte nám:{' '}
                <a
                  href="tel:+421948222333"
                  style={{ color: '#1a4fff', textDecoration: 'none' }}
                >
                  +421 948 222 333
                </a>
              </div>
            )}
          </div>

          {/* Status example pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              marginTop: '32px',
            }}
          >
            {[
              {
                text: '✓ PRIPRAVENÉ NA VYZDVIHNUTIE',
                bg: 'rgba(34,197,94,0.08)',
                border: 'rgba(34,197,94,0.3)',
                color: 'rgba(134,239,172,1)',
              },
              {
                text: '🔧 V OPRAVE — DO 16:00',
                bg: 'rgba(26,79,255,0.08)',
                border: 'rgba(26,79,255,0.3)',
                color: '#7ba5ff',
              },
              {
                text: '📦 ČAKÁ NA NÁHRADNÝ DIEL',
                bg: 'rgba(245,158,11,0.08)',
                border: 'rgba(245,158,11,0.3)',
                color: '#fcd34d',
              },
            ].map((pill) => (
              <div
                key={pill.text}
                style={{
                  background: pill.bg,
                  border: `1px solid ${pill.border}`,
                  borderRadius: '8px',
                  padding: '12px 16px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: pill.color,
                }}
              >
                {pill.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
