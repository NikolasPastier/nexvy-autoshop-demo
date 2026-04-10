'use client'
import { useState } from 'react'
import { Search, Car, MessageSquare } from 'lucide-react'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/footer/Footer'
import VapiWidget from '@/components/ui/VapiWidget'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'

const SearchIcon = Search

const howSteps = [
  {
    icon: SearchIcon,
    label: 'KROK 1',
    desc: 'Zadajte ŠPZ alebo telefón',
  },
  {
    icon: Car,
    label: 'KROK 2',
    desc: 'Systém overí stav zákazky',
  },
  {
    icon: MessageSquare,
    label: 'KROK 3',
    desc: 'Dostanete okamžitú odpoveď',
  },
]

const demoCars = [
  {
    spz: 'BA 123 AB',
    status: 'PRIPRAVENÉ NA VYZDVIHNUTIE',
    desc: 'Škoda Octavia 2019 — umyté a pripravené. Sme otvorení do 17:30.',
    time: 'Dnes 14:32',
    emoji: '✅',
    bg: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.3)',
    statusColor: 'rgba(134,239,172,1)',
  },
  {
    spz: 'BA 456 CD',
    status: 'V OPRAVE — DOKONČENIE DO 16:00',
    desc: 'VW Golf 2020 — vymieňame brzdové platničky. Pošleme správu.',
    time: 'Dnes 11:15',
    emoji: '🔧',
    bg: 'rgba(26,79,255,0.08)',
    border: 'rgba(26,79,255,0.3)',
    statusColor: '#7ba5ff',
  },
  {
    spz: 'BA 789 EF',
    status: 'ČAKÁ NA NÁHRADNÝ DIEL',
    desc: 'BMW 3 2018 — diel objednaný. Predpokladaný príchod zajtra.',
    time: 'Včera 16:45',
    emoji: '📦',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.3)',
    statusColor: '#fcd34d',
  },
]

export default function StavOpravyPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const heroRef = useScrollReveal()
  const stepsRef = useStaggerReveal('.how-step', 0.15)
  const checkerRef = useScrollReveal()
  const cardsRef = useStaggerReveal('.status-demo-card', 0.15)

  const handleCheck = () => {
    const v = input.trim().toUpperCase().replace(/\s/g, '')
    if (v === 'BA123AB' || v === '+421900000000' || v === '421900000000') {
      setResult('ready')
    } else if (v.length > 0) {
      setResult('notfound')
    }
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          position: 'relative',
          height: '60vh',
          overflow: 'hidden',
          minHeight: '400px',
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
              'linear-gradient(to bottom, rgba(8,13,24,0.5) 0%, rgba(8,13,24,0.85) 100%)',
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
            ONLINE SLEDOVANIE
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
            Stav vašej opravy
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              marginTop: '16px',
              maxWidth: '480px',
            }}
          >
            Skontrolujte si stav svojho auta kedykoľvek — bez čakania na linke.
          </p>
        </div>
      </div>

      <main style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          {/* How it works mini-steps */}
          <div
            ref={stepsRef}
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              maxWidth: '700px',
              margin: '0 auto 64px',
              flexWrap: 'wrap',
            }}
          >
            {howSteps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.label}
                  className="how-step"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    padding: '24px',
                    textAlign: 'center',
                    flex: '1',
                    minWidth: '180px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'rgba(26,79,255,0.12)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px',
                    }}
                  >
                    <Icon size={22} color="#1a4fff" />
                  </div>
                  <p
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      color: '#1a4fff',
                      fontWeight: 700,
                      marginBottom: '8px',
                    }}
                  >
                    {step.label}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Large status checker */}
          <div
            ref={checkerRef}
            style={{
              maxWidth: '620px',
              margin: '0 auto 64px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: '40px',
            }}
          >
            <h2
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: '8px',
              }}
            >
              Skontrolovať stav
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.875rem',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              Zadajte ŠPZ alebo telefónne číslo zákazníka
            </p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
              placeholder="napr. BA123AB"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '10px',
                padding: '14px 16px',
                color: 'white',
                fontSize: '1.1rem',
                outline: 'none',
                marginBottom: '12px',
                textAlign: 'center',
                letterSpacing: '0.08em',
              }}
            />
            <p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                textAlign: 'center',
                marginBottom: '14px',
              }}
            >
              Skúste demo: zadajte &quot;BA123AB&quot;
            </p>
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
              }}
            >
              Zistiť stav
            </button>

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

          {/* Demo status cards */}
          <div
            ref={cardsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              maxWidth: '900px',
              margin: '0 auto 48px',
            }}
          >
            {demoCars.map((car) => (
              <div
                key={car.spz}
                className="status-demo-card"
                style={{
                  background: car.bg,
                  border: `1px solid ${car.border}`,
                  borderRadius: '14px',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{car.emoji}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: 'rgba(255,255,255,0.35)',
                    }}
                  >
                    {car.time}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: '4px',
                  }}
                >
                  ŠPZ: <strong style={{ color: '#ffffff' }}>{car.spz}</strong>
                </p>
                <p
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: car.statusColor,
                    marginBottom: '10px',
                  }}
                >
                  {car.status}
                </p>
                <p style={{ fontSize: '0.825rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                  {car.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Note */}
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.875rem',
              maxWidth: '600px',
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}
          >
            Táto služba je dostupná pre všetkých zákazníkov AutoFix Bratislava.
            Informujeme vás automaticky cez WhatsApp pri zmene stavu.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => window.open('https://wa.me/421948222333', '_blank')}
              style={{
                background: '#25d366',
                borderRadius: '10px',
                padding: '14px 28px',
                color: 'white',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
              }}
            >
              💬 WhatsApp
            </button>
            <a
              href="/#booking"
              style={{
                background: '#1a4fff',
                borderRadius: '10px',
                padding: '14px 28px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
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
