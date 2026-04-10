import { Wrench, Phone, MessageCircle, Mail, MapPin } from 'lucide-react'

// Footer renders at full opacity — no GSAP animations ever
export default function Footer() {
  const serviceLinks = [
    'Výmena oleja & filtrov',
    'Prezutie & vyváženie pneumatík',
    'Brzdový systém',
    'Diagnostika závad',
    'Klimatizácia — plnenie & servis',
    'Kompletný servis',
    'STK príprava',
  ]

  const contactItems = [
    { icon: Phone, text: '+421 948 222 333', href: 'tel:+421948222333' },
    { icon: MessageCircle, text: 'WhatsApp', href: 'https://wa.me/421948222333' },
    { icon: Mail, text: 'info@autofix-ba.sk', href: 'mailto:info@autofix-ba.sk' },
    { icon: MapPin, text: 'Bajkalská 29, 821 01 Bratislava', href: '#kontakt' },
  ]

  return (
    <footer style={{ background: '#050810', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* 4-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Column 1 — Brand */}
          <div>
            <a
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                marginBottom: '16px',
              }}
            >
              <Wrench size={20} color="#1a4fff" />
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                AUTOFIX<span style={{ color: '#1a4fff' }}>BA</span>
              </span>
            </a>
            <p
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.85rem',
                lineHeight: 1.7,
              }}
            >
              Profesionálny autoservis v Bratislave.
              <br />
              15 rokov budujeme meno na kvalite a transparentnosti.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              {['F', 'G'].map((letter) => (
                <button
                  key={letter}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#1a4fff',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              NAŠE SLUŽBY
            </p>
            {serviceLinks.map((link) => (
              <a
                key={link}
                href="/sluzby"
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  marginBottom: '10px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')
                }
              >
                {link}
              </a>
            ))}
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#1a4fff',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              KONTAKT
            </p>
            {contactItems.map(({ icon: Icon, text, href }) => (
              <a
                key={text}
                href={href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  marginBottom: '14px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')
                }
              >
                <Icon size={14} style={{ flexShrink: 0 }} />
                {text}
              </a>
            ))}
            <a
              href="tel:+421948222333"
              style={{
                display: 'inline-block',
                marginTop: '4px',
                background: '#1a4fff',
                borderRadius: '8px',
                padding: '10px 20px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(26,79,255,0.35)',
              }}
            >
              Zavolať
            </a>
          </div>

          {/* Column 4 — Hours */}
          <div>
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#1a4fff',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              OTVÁRACIE HODINY
            </p>
            {[
              { day: 'Pondelok – Piatok', time: '7:30 – 17:30' },
              { day: 'Sobota', time: '8:00 – 12:00' },
              { day: 'Nedeľa', time: 'Zatvorené', muted: true },
            ].map(({ day, time, muted }) => (
              <div
                key={day}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                  fontSize: '0.85rem',
                  color: muted ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.5)',
                }}
              >
                <span>{day}</span>
                <span>{time}</span>
              </div>
            ))}
            <div style={{ marginTop: '24px' }}>
              <p
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#1a4fff',
                  fontWeight: 700,
                  marginBottom: '14px',
                }}
              >
                RÝCHLE ODKAZY
              </p>
              {['Ochrana osobných údajov', 'Obchodné podmienky'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    marginBottom: '8px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>
            © 2026 AUTOFIX BRATISLAVA. VŠETKY PRÁVA VYHRADENÉ.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>
            OCHRANA ÚDAJOV · PODMIENKY
          </p>
        </div>
      </div>
    </footer>
  )
}
