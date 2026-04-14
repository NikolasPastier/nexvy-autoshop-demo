'use client'
import { MapPin, Clock } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function MapSection() {
  const infoRef = useScrollReveal()

  return (
    <section id="kontakt" style={{ padding: '0 0 96px' }}>
      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.4!2d17.1!3d48.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBajkalsk%C3%A1+29!5e0!3m2!1ssk!2ssk!4v1617000000000"
        width="100%"
        height="400"
        style={{
          border: 'none',
          display: 'block',
          filter: 'grayscale(100%) contrast(1.1)',
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="AutoFix Bratislava — mapa"
      />

      {/* Info bar */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          ref={infoRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            paddingTop: '32px',
          }}
        >
          {/* Address card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '28px',
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
            <MapPin size={24} color="#1a4fff" style={{ marginBottom: '12px' }} />
            <p
              style={{ fontWeight: 700, color: '#ffffff', marginBottom: '6px', fontSize: '1rem' }}
            >
              AutoFix Bratislava
            </p>
            <p
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.875rem',
                marginBottom: '14px',
              }}
            >
              Bajkalská 29, 821 01 Bratislava
            </p>
            <a
              href="https://maps.google.com/?q=Bajkalská+29+Bratislava"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#4d80ff',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#60a5fa'
                e.currentTarget.style.textShadow = '0 0 16px rgba(96,165,250,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#4d80ff'
                e.currentTarget.style.textShadow = 'none'
              }}
            >
              Navigovať →
            </a>
          </div>

          {/* Hours card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '28px',
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
            <Clock size={24} color="#1a4fff" style={{ marginBottom: '12px' }} />
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#1a4fff',
                fontWeight: 700,
                marginBottom: '14px',
              }}
            >
              OTVÁRACIE HODINY
            </p>
            {[
              { day: 'Pondelok – Piatok', time: '7:30 – 17:30', muted: false },
              { day: 'Sobota', time: '8:00 – 12:00', muted: false },
              { day: 'Nedeľa', time: 'Zatvorené', muted: true },
            ].map(({ day, time, muted }) => (
              <div
                key={day}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.875rem',
                  color: muted ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.6)',
                  marginBottom: '8px',
                }}
              >
                <span>{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>

          {/* Navigate card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Nájdete nás priamo v Bratislave na Bajkalskej ulici. Parkovanie k dispozícii priamo
              pred servisom.
            </p>
            <a
              href="https://maps.google.com/?q=Bajkalská+29+Bratislava"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#1a4fff',
                borderRadius: '10px',
                padding: '12px 24px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                boxShadow: '0 4px 24px rgba(26,79,255,0.4)',
                transition: 'all 0.3s ease',
                textAlign: 'center',
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
              Navigovať do servisu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
