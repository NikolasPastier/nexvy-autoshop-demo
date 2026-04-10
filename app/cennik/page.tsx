'use client'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/footer/Footer'
import VapiWidget from '@/components/ui/VapiWidget'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'

const categories = [
  {
    icon: '🔧',
    name: 'MOTOR & OLEJE',
    services: [
      { name: 'Výmena oleja a filtra', price: 'od €35', duration: '~45 min' },
      { name: 'Výmena vzduchového filtra', price: 'od €15', duration: '~15 min' },
      { name: 'Výmena palivového filtra', price: 'od €25', duration: '~30 min' },
      { name: 'Výmena chladiacej kvapaliny', price: 'od €40', duration: '~45 min' },
    ],
  },
  {
    icon: '🛑',
    name: 'BRZDY',
    services: [
      { name: 'Výmena predných platničiek', price: 'od €55', duration: '~60 min' },
      { name: 'Výmena zadných platničiek', price: 'od €50', duration: '~60 min' },
      { name: 'Výmena brzdových kotúčov (1 os)', price: 'od €120', duration: '~90 min' },
      { name: 'Kontrola brzdovej sústavy', price: 'od €20', duration: '~30 min' },
    ],
  },
  {
    icon: '🔘',
    name: 'PNEUMATIKY',
    services: [
      { name: 'Prezutie 1 pneumatiky', price: 'od €6', duration: '~10 min' },
      { name: 'Prezutie sady (4 ks)', price: 'od €22', duration: '~30 min' },
      { name: 'Vyváženie 1 kola', price: 'od €5', duration: '~10 min' },
      { name: 'Oprava defektu', price: 'od €15', duration: '~20 min' },
      { name: 'Uskladnenie pneumatík/sezóna', price: '€30', duration: '—' },
    ],
  },
  {
    icon: '❄️',
    name: 'KLIMATIZÁCIA',
    services: [
      { name: 'Plnenie chladiva R134a', price: 'od €45', duration: '~45 min' },
      { name: 'Dezinfekcia klimatizácie', price: 'od €25', duration: '~30 min' },
      { name: 'Kontrola tesnosti', price: 'od €20', duration: '~20 min' },
    ],
  },
  {
    icon: '🔍',
    name: 'DIAGNOSTIKA & OSTATNÉ',
    services: [
      { name: 'Počítačová diagnostika', price: 'od €25', duration: '~30 min' },
      { name: 'Kontrola pred STK', price: 'od €30', duration: '~45 min' },
      { name: 'STK príprava + odovzdanie', price: 'od €49', duration: '~60 min' },
      { name: 'Geometria kolies', price: 'od €35', duration: '~45 min' },
      { name: 'Kompletný servis (balík)', price: 'od €139', duration: '~120 min' },
    ],
  },
]

function CategorySection({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useStaggerReveal('.price-row', 0.05)
  return (
    <div style={{ marginBottom: '48px' }} key={index}>
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '20px',
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
            fontSize: '22px',
          }}
        >
          {cat.icon}
        </div>
        <h3
          style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.04em',
          }}
        >
          {cat.name}
        </h3>
      </div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: 'rgba(255,255,255,0.06)',
          marginBottom: '12px',
        }}
      />

      {/* Service rows */}
      <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {cat.services.map((s) => (
          <div
            key={s.name}
            className="price-row"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '10px',
              padding: '16px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(26,79,255,0.3)'
              e.currentTarget.style.background = 'rgba(26,79,255,0.04)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
          >
            <span style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.9rem' }}>
              {s.name}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
              <span
                style={{
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '0.8rem',
                }}
              >
                {s.duration}
              </span>
              <span
                style={{
                  color: '#1a4fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  minWidth: '70px',
                  textAlign: 'right',
                }}
              >
                {s.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CennikPage() {
  const heroRef = useScrollReveal()

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
            CENNÍK SLUŽIEB
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
            Transparentné ceny
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              marginTop: '16px',
              maxWidth: '480px',
            }}
          >
            Férové ceny bez skrytých poplatkov. Nacenenie vždy vopred s vaším súhlasom.
          </p>
        </div>
      </div>

      {/* Price list */}
      <main style={{ padding: '80px 0' }}>
        <div
          style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}
        >
          {categories.map((cat, i) => (
            <CategorySection key={cat.name} cat={cat} index={i} />
          ))}

          {/* Note */}
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.85rem',
              marginTop: '48px',
              lineHeight: 1.7,
            }}
          >
            Všetky ceny sú orientačné. Finálna cena po diagnostike s vaším súhlasom.
            <br />
            Záruka na všetky práce.
          </p>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
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
                fontSize: '1rem',
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
