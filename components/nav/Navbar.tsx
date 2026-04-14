'use client'
import { Wrench } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleBooking = () => {
    if (pathname === '/') {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push('/kontakt')
    }
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        background: 'rgba(8,13,24,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        opacity: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <Wrench size={20} color="#1a4fff" />
          <span
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '0.04em',
            }}
          >
            AUTOFIX
            <span style={{ color: '#1a4fff' }}>BA</span>
          </span>
        </a>

        {/* Center nav links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            flex: 1,
            justifyContent: 'center',
          }}
          className="nav-links-desktop"
        >
          {[
            { label: 'SLUŽBY', href: '/sluzby' },
            { label: 'STAV OPRAVY', href: '/stav-opravy' },
            { label: 'GALÉRIA', href: '/galeria' },
            { label: 'KONTAKT', href: '/kontakt' },
            { label: 'CENNÍK', href: '/cennik' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = '#ffffff')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <a
            href="tel:+421948222333"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              padding: '10px 20px',
              color: 'white',
              backdropFilter: 'blur(8px)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
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
          <button
            onClick={handleBooking}
            style={{
              background: '#1a4fff',
              borderRadius: '10px',
              padding: '10px 20px',
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
              border: 'none',
              boxShadow: '0 4px 24px rgba(26,79,255,0.4)',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
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
            Objednať servis
          </button>
        </div>
      </div>
    </nav>
  )
}
