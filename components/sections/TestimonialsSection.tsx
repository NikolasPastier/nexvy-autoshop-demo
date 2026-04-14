'use client'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    text: 'Rýchla diagnostika, férová cena. Auto hotové v ten istý deň. Určite odporúčam každému.',
    name: 'Peter K.',
    role: 'Škoda Octavia',
    stars: 5,
  },
  {
    text: 'Konečne servis, kde mi vysvetlia čo sa robí a prečo. Žiadne zbytočné opravy. Plná dôvera.',
    name: 'Martina S.',
    role: 'VW Golf',
    stars: 5,
  },
  {
    text: 'Profesionálny prístup. Trochu dlhšie čakanie na diely, ale kvalita práce výborná.',
    name: 'Ján M.',
    role: 'BMW 3',
    stars: 4,
  },
  {
    text: 'Výmena oleja a filtrov za 45 minút bez objednávky. Prídem sem vždy znova.',
    name: 'Tomáš B.',
    role: 'Audi A4',
    stars: 5,
  },
  {
    text: 'Pneuservis bol bleskový. Cena nižšia ako som čakal, personál veľmi ochotný.',
    name: 'Lucia H.',
    role: 'Toyota Corolla',
    stars: 5,
  },
  {
    text: 'Brzdový systém vymenili za jeden deň. Cítim výrazný rozdiel. Skvelá práca.',
    name: 'Miroslav P.',
    role: 'Ford Focus',
    stars: 5,
  },
  {
    text: 'WhatsApp notifikácia keď bolo auto hotové — to som ešte nezažil. Moderný prístup.',
    name: 'Katarína V.',
    role: 'Renault Clio',
    stars: 5,
  },
  {
    text: 'Diagnostika závady bola presná a lacnejšia ako v autorizovanom servise. Vrátim sa.',
    name: 'Rastislav N.',
    role: 'Hyundai i30',
    stars: 5,
  },
  {
    text: 'Klimatizácia opravená rýchlo a lacno. Príjemné prostredie, káva zadarmo. 10/10.',
    name: 'Zuzana F.',
    role: 'Kia Sportage',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{ color: i <= count ? '#fbbf24' : 'rgba(255,255,255,0.15)', fontSize: '14px' }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '16px',
      }}
    >
      <StarRating count={t.stars} />
      <p
        style={{
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.6,
          marginBottom: '16px',
        }}
      >
        &ldquo;{t.text}&rdquo;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1a4fff, #2a5ccc)',
            color: 'white',
            fontSize: '0.85rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {t.name.charAt(0)}
        </div>
        <div>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>{t.name}</p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{t.role}</p>
        </div>
      </div>
    </div>
  )
}

// Split testimonials into 3 columns
const col1 = testimonials.slice(0, 3)
const col2 = testimonials.slice(3, 6)
const col3 = testimonials.slice(6, 9)

const columnSpeeds = [18, 22, 20]
const columns = [col1, col2, col3]

export default function TestimonialsSection() {
  const headerRef = useScrollReveal()
  const ratingRef = useScrollReveal()

  return (
    <section style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '16px' }}>
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
              HODNOTENIA ZÁKAZNÍKOV
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
            Čo hovoria naši zákazníci
          </h2>
        </div>

        {/* Rating block */}
        <div
          ref={ratingRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '48px',
          }}
        >
          <span
            style={{ color: '#1a4fff', fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}
          >
            4.8
          </span>
          <div
            style={{ display: 'flex', gap: '4px', margin: '8px 0 4px' }}
          >
            {[1, 2, 3, 4].map((i) => (
              <span key={i} style={{ color: '#fbbf24', fontSize: '20px' }}>★</span>
            ))}
            <span style={{ color: '#fbbf24', fontSize: '20px' }}>☆</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '4px' }}>
            89 hodnotení
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginBottom: '8px' }}>
            Hodnotené zákazníkmi na Google Maps.
          </p>
          <a
            href="#"
            style={{ color: '#4d80ff', fontSize: '0.85rem', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#60a5fa'
              e.currentTarget.style.textShadow = '0 0 16px rgba(96,165,250,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#4d80ff'
              e.currentTarget.style.textShadow = 'none'
            }}
          >
            Prečítať všetkých 89 hodnotení na Google →
          </a>
        </div>

        {/* Scrolling columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            maxHeight: '620px',
            overflow: 'hidden',
            maskImage:
              'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
          }}
        >
          {columns.map((col, colIdx) => (
            <div key={colIdx} style={{ overflow: 'hidden' }}>
              <motion.ul
                style={{ listStyle: 'none', padding: 0, margin: 0 }}
                animate={{ translateY: '-50%' }}
                transition={{
                  duration: columnSpeeds[colIdx],
                  repeat: Infinity,
                  ease: 'linear',
                  repeatType: 'loop',
                }}
              >
                {/* Duplicate for seamless loop */}
                {[...col, ...col].map((t, idx) => (
                  <li key={`${colIdx}-${idx}`}>
                    <TestimonialCard t={t} />
                  </li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
