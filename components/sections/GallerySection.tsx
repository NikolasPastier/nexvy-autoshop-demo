'use client'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ImageComparisonSlider } from '@/components/ui/ImageComparisonSlider'

const galleryPairs = [
  {
    category: 'VÝMENA PNEUMATÍK & DISKOV',
    before: '/gallery/tires-before.png',
    after: '/gallery/tires-after.png',
  },
  {
    category: 'KOMPLETNÝ DETAILING EXTERIÉRU',
    before: '/gallery/detailing-before.png',
    after: '/gallery/detailing-after.png',
  },
  {
    category: 'ČISTENIE & SERVIS MOTOROVÉHO PRIESTORU',
    before: '/gallery/engine-before.png',
    after: '/gallery/engine-after.png',
  },
  {
    category: 'VÝMENA BRZDOVÝCH KOTÚČOV',
    before: '/gallery/brakes-before.png',
    after: '/gallery/brakes-after.png',
  },
]

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const headerRef = useScrollReveal()
  const carouselRef = useScrollReveal()

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -484 : 484, behavior: 'smooth' })
  }

  return (
    <section id="galeria" style={{ padding: '96px 0', background: 'rgba(13,21,37,0.4)' }}>
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
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '20px',
            }}
          >
            NAŠA PRÁCA
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
            Priebeh prác
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.4)',
              maxWidth: '520px',
              margin: '12px auto 8px',
              textAlign: 'center',
            }}
          >
            Reálne výsledky našej práce — pred a po každom servise
          </p>
          <a
            href="/galeria"
            style={{
              display: 'inline-block',
              color: '#1a4fff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            Viac fotiek →
          </a>
        </div>

        {/* Horizontal carousel */}
        <div
          ref={carouselRef}
          style={{ position: 'relative', marginTop: '48px' }}
        >
          {/* Left button */}
          <button
            onClick={() => scroll('left')}
            className="gallery-btn-left"
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
          >
            <ChevronLeft size={18} />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="scrollbar-hide"
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: '8px',
            }}
            onMouseEnter={() => {
              const leftBtn = document.querySelector('.gallery-btn-left') as HTMLElement
              const rightBtn = document.querySelector('.gallery-btn-right') as HTMLElement
              if (leftBtn) leftBtn.style.opacity = '1'
              if (rightBtn) rightBtn.style.opacity = '1'
            }}
            onMouseLeave={() => {
              const leftBtn = document.querySelector('.gallery-btn-left') as HTMLElement
              const rightBtn = document.querySelector('.gallery-btn-right') as HTMLElement
              if (leftBtn) leftBtn.style.opacity = '0'
              if (rightBtn) rightBtn.style.opacity = '0'
            }}
          >
            {galleryPairs.map((pair) => (
              <div
                key={pair.category}
                style={{ flexShrink: 0, width: '460px', scrollSnapAlign: 'start' }}
              >
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#1a4fff',
                    marginBottom: '12px',
                  }}
                >
                  {pair.category}
                </p>
                <div
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.07)',
                    cursor: 'ew-resize',
                  }}
                >
                  <ImageComparisonSlider
                    leftImage={pair.before}
                    rightImage={pair.after}
                    altLeft="Pred"
                    altRight="Po"
                    initialPosition={38}
                  />
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.25)',
                    textAlign: 'center',
                    marginTop: '10px',
                  }}
                >
                  ← Potiahnite pre porovnanie →
                </p>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={() => scroll('right')}
            className="gallery-btn-right"
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
          >
            <ChevronRight size={18} />
          </button>

          {/* Fade edges */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: '8px',
              left: 0,
              width: '60px',
              background: 'linear-gradient(to right, #080d18, transparent)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: '8px',
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
