'use client'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function BookingForm() {
  const headerRef = useScrollReveal()
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  const [formData, setFormData] = useState({
    service: '',
    car: '',
    date: new Date().toISOString().split('T')[0],
    name: '',
    phone: '',
    desc: '',
  })

  const handleSubmit = () => {
    alert('Ďakujeme! Vaša požiadavka bola odoslaná. Odpovieme do 2 hodín.')
  }

  const inputStyle: React.CSSProperties = {
    background: 'transparent',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    color: 'white',
    padding: '12px 0',
    fontSize: '0.9rem',
    outline: 'none',
    width: '100%',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '0.7rem',
    letterSpacing: '0.1em',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '6px',
    display: 'block',
    fontWeight: 600,
  }

  return (
    <section id="booking" style={{ padding: '96px 0' }}>
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
            REZERVÁCIA TERMÍNU
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
            Objednajte sa online
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
            Vyplňte formulár a naši špecialisti vás budú kontaktovať do 2 hodín počas pracovných
            hodín.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Left column */}
          <div ref={leftRef}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                '✓ Odpoveď do 2 hodín',
                '✓ 100% záruka na prácu',
                '✓ Bezplatná diagnostika pre objednané servisy',
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                >
                  <span style={{ color: '#1a4fff', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ color: 'white', fontSize: '0.9rem' }}>
                    {item.replace('✓ ', '')}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div
              style={{
                marginTop: '32px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeft: '3px solid #1a4fff',
                borderRadius: '16px',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.25)',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                ALEBO ZAVOLAJTE PRIAMO
              </p>
              <a
                href="tel:+421948222333"
                style={{
                  display: 'block',
                  color: '#1a4fff',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  marginBottom: '8px',
                }}
              >
                +421 948 222 333
              </a>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.25)',
                }}
              >
                Po–Pi 7:30–17:30 · So 8:00–12:00
              </p>
            </div>
          </div>

          {/* Right column — form card */}
          <div
            ref={rightRef}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '32px',
            }}
          >
            {/* Service select */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>DRUH SERVISU</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                style={{
                  ...inputStyle,
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                }}
              >
                <option value="" style={{ background: '#0d1525' }}>
                  Vyberte službu...
                </option>
                {[
                  'Výmena oleja & filtrov — od €35',
                  'Prezutie & vyváženie pneumatík — od €22',
                  'Brzdový systém — od €55',
                  'Diagnostika závad — od €25',
                  'Klimatizácia — plnenie & servis — od €45',
                  'Kompletný servis — od €139',
                  'STK príprava — od €49',
                  'Geometria kolies — od €35',
                ].map((opt) => (
                  <option key={opt} value={opt} style={{ background: '#0d1525' }}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Car model */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>ZNAČKA A MODEL AUTA</label>
              <input
                type="text"
                placeholder="napr. Škoda Octavia 2019"
                value={formData.car}
                onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Date */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>PREFEROVANÝ DÁTUM</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                style={{ ...inputStyle, colorScheme: 'dark' }}
              />
            </div>

            {/* Name */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>MENO</label>
              <input
                type="text"
                placeholder="Vaše meno"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>TELEFÓN</label>
              <input
                type="text"
                placeholder="+421 9XX XXX XXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Description */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>POPIS PROBLÉMU</label>
              <textarea
                rows={3}
                placeholder="Opíšte čo sa deje..."
                value={formData.desc}
                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                style={{ ...inputStyle, resize: 'none', fontFamily: 'inherit' }}
              />
            </div>

            {/* Submit */}
            <div
              onClick={handleSubmit}
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
                textAlign: 'center',
                marginTop: '8px',
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
              Odoslať požiadavku
            </div>

            <p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.35)',
                textAlign: 'center',
                marginTop: '12px',
              }}
            >
              Odpovieme do 2 hodín · alebo zavolajte +421 948 222 333
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
