'use client'
import Navbar from '@/components/nav/Navbar'
import MapSection from '@/components/sections/MapSection'
import BookingForm from '@/components/sections/BookingForm'
import Footer from '@/components/footer/Footer'
import VapiWidget from '@/components/ui/VapiWidget'

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px' }}>

        {/* Page header */}
        <div style={{
          textAlign: 'center',
          padding: '80px 24px 60px',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'inline-flex',
            border: '1px solid rgba(26,79,255,0.45)',
            background: 'rgba(26,79,255,0.08)',
            backdropFilter: 'blur(8px)',
            borderRadius: '999px',
            padding: '6px 16px',
            marginBottom: '20px',
          }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              background: 'linear-gradient(90deg, #60a5fa 0%, #1a4fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              KONTAKT
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(90deg, #ffffff 30%, #1a4fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(26,79,255,0.45))',
            marginBottom: '16px',
          }}>
            Kontaktujte nás
          </h1>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.4)',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            Sme tu pre vás — zavolajte, napíšte alebo sa objednajte online.
          </p>
        </div>

        {/* Contact info cards row */}
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px 60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {/* Phone */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📞</div>
            <h3 style={{ color: 'white', fontWeight: 700, marginBottom: '8px' }}>
              Telefón
            </h3>
            <a href="tel:+421948222333" style={{
              color: '#4d80ff', fontSize: '1.2rem', fontWeight: 700,
              textDecoration: 'none', display: 'block', marginBottom: '8px',
            }}>
              +421 948 222 333
            </a>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
              Po–Pi 7:30–17:30 · So 8:00–12:00
            </p>
          </div>

          {/* WhatsApp */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💬</div>
            <h3 style={{ color: 'white', fontWeight: 700, marginBottom: '8px' }}>
              WhatsApp
            </h3>
            <a
              href="https://wa.me/421948222333"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '8px',
                background: '#25d366',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '10px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              Napísať správu
            </a>
          </div>

          {/* Email */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>✉️</div>
            <h3 style={{ color: 'white', fontWeight: 700, marginBottom: '8px' }}>
              Email
            </h3>
            <a href="mailto:info@autofix-ba.sk" style={{
              color: '#4d80ff', fontSize: '1rem', fontWeight: 600,
              textDecoration: 'none',
            }}>
              info@autofix-ba.sk
            </a>
          </div>
        </div>

        <BookingForm />
        <MapSection />
      </main>
      <Footer />
      <VapiWidget />
    </>
  )
}
