'use client'
import { useRef } from 'react'
import {
  Wrench,
  CircleDot,
  Disc3,
  Activity,
  Wind,
  Settings,
  ClipboardCheck,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const services = [
  {
    icon: Wrench,
    price: 'od €35',
    title: 'Výmena oleja & filtrov',
    desc: 'Kompletná výmena motorového oleja a olejového filtra. Všetky značky automobilov.',
    duration: '~45 min',
  },
  {
    icon: CircleDot,
    price: 'od €22',
    title: 'Prezutie & vyváženie pneumatík',
    desc: 'Sezónne prezutie, vyváženie a kontrola stavu pneumatík. Uskladnenie za €30/sezóna.',
    duration: '~30 min',
  },
  {
    icon: Disc3,
    price: 'od €55',
    title: 'Brzdový systém',
    desc: 'Výmena brzdových platničiek a kotúčov. Kontrola brzdovej kvapaliny a hadíc.',
    duration: '~60 min',
  },
  {
    icon: Activity,
    price: 'od €25',
    title: 'Diagnostika závad',
    desc: 'Počítačová diagnostika motorových a elektronických systémov. Všetky značky.',
    duration: '~30 min',
  },
  {
    icon: Wind,
    price: 'od €45',
    title: 'Klimatizácia — plnenie & servis',
    desc: 'Plnenie chladiva, kontrola tesnosti, dezinfekcia a čistenie systému.',
    duration: '~45 min',
  },
  {
    icon: Settings,
    price: 'od €139',
    title: 'Kompletný servis',
    desc: 'Výmena oleja, filtrov, kontrola bŕzd, podvozku, svetiel, kvapalín.',
    duration: '~120 min',
  },
  {
    icon: ClipboardCheck,
    price: 'od €49',
    title: 'STK príprava',
    desc: 'Kompletná príprava vozidla na technickú kontrolu. Opravíme závady pred STK.',
    duration: '~60 min',
  },
  {
    icon: Gauge,
    price: 'od €35',
    title: 'Geometria kolies',
    desc: 'Nastavenie geometrie prednej a zadnej nápravy. Eliminuje nerovnomerné opotrebenie.',
    duration: '~45 min',
  },
]

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const headerRef = useScrollReveal()
  const carouselRevealRef = useScrollReveal()

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }

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
              PORTFÓLIO SLUŽIEB
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
            Odborné servisné úkony
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
            Profesionálny servis pre všetky značky automobilov
          </p>
          <a
            href="/sluzby"
            style={{
              display: 'inline-block',
              marginTop: '12px',
              color: '#4d80ff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
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
            Všetky služby a cenník →
          </a>
        </div>

        {/* Horizontal carousel */}
        <div
          ref={carouselRevealRef}
          className="relative group"
          style={{ position: 'relative', marginTop: '48px', overflow: 'visible', padding: '12px 0' }}
        >
          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className="carousel-btn-left"
            style={{
              position: 'absolute',
              left: '-16px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(26,79,255,0.9)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              opacity: 0,
              transition: 'opacity 0.3s',
              boxShadow: '0 4px 16px rgba(26,79,255,0.4)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="scrollbar-hide"
            style={{
              display: 'flex',
              gap: '20px',
              overflowX: 'auto',
              overflowY: 'visible',
              scrollSnapType: 'x mandatory',
              paddingTop: '12px',
              paddingBottom: '12px',
              cursor: 'grab',
            }}
            onMouseEnter={(e) => {
              const leftBtn = e.currentTarget.parentElement?.querySelector('.carousel-btn-left') as HTMLElement
              const rightBtn = e.currentTarget.parentElement?.querySelector('.carousel-btn-right') as HTMLElement
              if (leftBtn) leftBtn.style.opacity = '1'
              if (rightBtn) rightBtn.style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              const leftBtn = e.currentTarget.parentElement?.querySelector('.carousel-btn-left') as HTMLElement
              const rightBtn = e.currentTarget.parentElement?.querySelector('.carousel-btn-right') as HTMLElement
              if (leftBtn) leftBtn.style.opacity = '0'
              if (rightBtn) rightBtn.style.opacity = '0'
            }}
          >
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="service-card"
                  style={{
                    flexShrink: 0,
                    width: '300px',
                    scrollSnapAlign: 'start',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    padding: '32px',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
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
                      top: '16px',
                      right: '16px',
                      background: 'rgba(26,79,255,0.15)',
                      border: '1px solid rgba(26,79,255,0.3)',
                      borderRadius: '999px',
                      padding: '4px 10px',
                    }}
                  >
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      background: 'linear-gradient(90deg, #60a5fa, #1a4fff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {s.price}
                    </span>
                  </div>

                  {/* Icon tile */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'rgba(26,79,255,0.12)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={20} color="#1a4fff" />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '10px',
                      paddingRight: '48px',
                    }}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.6,
                      marginBottom: '16px',
                    }}
                  >
                    {s.desc}
                  </p>

                  {/* Duration + link */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'rgba(255,255,255,0.3)',
                      }}
                    >
                      {s.duration}
                    </span>
                    <a
                      href="#booking"
                      style={{
                        fontSize: '0.8rem',
                        color: '#4d80ff',
                        textDecoration: 'none',
                        fontWeight: 600,
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
                      Objednať →
                    </a>
                  </div>

                  {/* Blue accent line bottom-left */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '32px',
                      width: '40px',
                      height: '2px',
                      background: '#1a4fff',
                      borderRadius: '1px',
                    }}
                  />
                </div>
              )
            })}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className="carousel-btn-right"
            style={{
              position: 'absolute',
              right: '-16px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(26,79,255,0.9)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              opacity: 0,
              transition: 'opacity 0.3s',
              boxShadow: '0 4px 16px rgba(26,79,255,0.4)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
          >
            <ChevronRight size={18} />
          </button>

          {/* Fade edges */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              bottom: '12px',
              left: 0,
              width: '60px',
              background: 'linear-gradient(to right, #080d18, transparent)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '12px',
              bottom: '12px',
              right: 0,
              width: '60px',
              background: 'linear-gradient(to left, #080d18, transparent)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  )
}
