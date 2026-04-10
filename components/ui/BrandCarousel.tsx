'use client'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

interface Props {
  brands: string[]
}

export default function BrandCarousel({ brands }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1 }),
  ])

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div ref={emblaRef} style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex' }}>
          {brands.map((b) => (
            <div key={b} style={{ flexShrink: 0, padding: '0 40px' }}>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.3)',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')
                }
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Fade edges */}
      <div
        style={{
          position: 'absolute',
          inset: '0 auto 0 0',
          width: '80px',
          background: 'linear-gradient(to right, #080d18, transparent)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '0 0 0 auto',
          width: '80px',
          background: 'linear-gradient(to left, #080d18, transparent)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
