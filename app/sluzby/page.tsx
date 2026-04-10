'use client'
import {
  Wrench,
  CircleDot,
  Disc3,
  Activity,
  Wind,
  Settings,
  ClipboardCheck,
  Gauge,
} from 'lucide-react'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/footer/Footer'
import VapiWidget from '@/components/ui/VapiWidget'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'

const services = [
  {
    icon: Wrench,
    price: 'od €35',
    title: 'Výmena oleja & filtrov',
    desc: 'Kompletná výmena motorového oleja a olejového filtra. Všetky značky automobilov. Používame certifikované oleje odporúčané výrobcom.',
    duration: '~45 min',
    warranty: 'Záruka 6 mesiacov alebo 10 000 km',
  },
  {
    icon: CircleDot,
    price: 'od €22',
    title: 'Prezutie & vyváženie pneumatík',
    desc: 'Sezónne prezutie, vyváženie a kontrola stavu pneumatík. Uskladnenie pneumatík za €30/sezóna. Odborná montáž pre všetky typy diskov.',
    duration: '~30 min',
    warranty: 'Záruka na montáž a vyváženie',
  },
  {
    icon: Disc3,
    price: 'od €55',
    title: 'Brzdový systém',
    desc: 'Výmena brzdových platničiek a kotúčov. Kontrola brzdovej kvapaliny a hadíc. Kompletná diagnostika brzdovej sústavy.',
    duration: '~60 min',
    warranty: 'Záruka 12 mesiacov na diely aj prácu',
  },
  {
    icon: Activity,
    price: 'od €25',
    title: 'Diagnostika závad',
    desc: 'Počítačová diagnostika motorových a elektronických systémov. Čítanie chybových kódov a identifikácia problémov. Všetky značky automobilov.',
    duration: '~30 min',
    warranty: 'Detailný výpis závad s odporúčaním',
  },
  {
    icon: Wind,
    price: 'od €45',
    title: 'Klimatizácia — plnenie & servis',
    desc: 'Plnenie chladiva R134a/R1234yf, kontrola tesnosti, dezinfekcia a čistenie systému. Obnovíme výkon vašej klimatizácie.',
    duration: '~45 min',
    warranty: 'Záruka na plnenie 12 mesiacov',
  },
  {
    icon: Settings,
    price: 'od €139',
    title: 'Kompletný servis',
    desc: 'Výmena oleja, filtrov, kontrola bŕzd, podvozku, svetiel, kvapalín. Komplexná prehliadka vozidla s písomným protokolom.',
    duration: '~120 min',
    warranty: 'Záruka 12 mesiacov na vykonanú prácu',
  },
  {
    icon: ClipboardCheck,
    price: 'od €49',
    title: 'STK príprava',
    desc: 'Kompletná príprava vozidla na technickú kontrolu. Opravíme závady pred STK. Odovzdáme vám auto pripravené na úspešný priechod.',
    duration: '~60 min',
    warranty: 'Opravíme závady pred STK — garantujeme priechod',
  },
  {
    icon: Gauge,
    price: 'od €35',
    title: 'Geometria kolies',
    desc: 'Nastavenie geometrie prednej a zadnej nápravy pomocou moderného 3D prístroja. Eliminuje nerovnomerné opotrebenie pneumatík.',
    duration: '~45 min',
    warranty: 'Záruka na nastavenie 6 mesiacov',
  },
]

export default function SluzbyPage() {
  const heroRef = useScrollReveal()
  const gridRef = useStaggerReveal('.service-card-full', 0.1)

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
            NAŠE SLUŽBY
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
            Komplexný autoservis
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              marginTop: '16px',
            }}
          >
            Profesionálny servis pre všetky značky automobilov
          </p>
        </div>
      </div>

      {/* Services grid */}
      <main style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            ref={gridRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="service-card-full"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    padding: '32px',
                    position: 'relative',
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
                  {/* Price badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: 'rgba(26,79,255,0.15)',
                      border: '1px solid rgba(26,79,255,0.3)',
                      borderRadius: '999px',
                      padding: '5px 12px',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#1a4fff',
                    }}
                  >
                    {s.price}
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    {/* Icon */}
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        background: 'rgba(26,79,255,0.12)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color="#1a4fff" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '10px',
                          paddingRight: '60px',
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'rgba(255,255,255,0.5)',
                          lineHeight: 1.6,
                          marginBottom: '14px',
                        }}
                      >
                        {s.desc}
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          gap: '16px',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          marginBottom: '14px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.75rem',
                            color: 'rgba(255,255,255,0.3)',
                          }}
                        >
                          ⏱ {s.duration}
                        </span>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            color: 'rgba(34,197,94,0.8)',
                          }}
                        >
                          ✓ {s.warranty}
                        </span>
                      </div>
                      <a
                        href="/#booking"
                        style={{
                          display: 'inline-block',
                          background: '#1a4fff',
                          borderRadius: '8px',
                          padding: '10px 20px',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          boxShadow: '0 4px 16px rgba(26,79,255,0.35)',
                        }}
                      >
                        Objednať →
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: '64px',
              background: 'rgba(26,79,255,0.06)',
              border: '1px solid rgba(26,79,255,0.3)',
              borderRadius: '20px',
              padding: '48px',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '64px auto 0',
            }}
          >
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '8px', fontSize: '0.9rem' }}>
              Nenašli ste čo hľadáte?
            </p>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '24px',
              }}
            >
              Kontaktujte nás — poradíme
            </h3>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="tel:+421948222333"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  padding: '12px 24px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                +421 948 222 333
              </a>
              <a
                href="/#booking"
                style={{
                  background: '#1a4fff',
                  borderRadius: '10px',
                  padding: '12px 24px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 20px rgba(26,79,255,0.4)',
                }}
              >
                Objednať servis
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <VapiWidget />
    </>
  )
}
