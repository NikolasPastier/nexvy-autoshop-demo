'use client'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

type IconProps = { size?: number; style?: CSSProperties }

// Inline SVG icons — no external icon library needed
const BrandIcons: Record<string, FC<IconProps>> = {
  Škoda: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm1.5 4.5l-5 5 1.5 1.5 3.5-3.5 3.5 3.5 1.5-1.5-5-5zm-1.5 4l-3 3 1.5 1.5L12 13.5l1.5 1.5L15 13.5l-3-3z" />
    </svg>
  ),
  Volkswagen: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c2.468 0 4.747.9 6.505 2.384L14 13l-2-5H8L6 13 1.495 4.384A9.963 9.963 0 0112 2zM4.5 17.5L8 9h2l2 5 2-5h2l3.5 8.5A9.963 9.963 0 0112 22a9.963 9.963 0 01-7.5-4.5z" />
    </svg>
  ),
  BMW: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 1C6.477 3 2 7.477 2 13h10V3zm0 0v10h10c0-5.523-4.477-10-10-10zM2 13c0 5.523 4.477 10 10 10V13H2zm10 0v10c5.523 0 10-4.477 10-10H12z" />
    </svg>
  ),
  Audi: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M4.5 12a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 110-4 2 2 0 010 4zM9 12a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 110-4 2 2 0 010 4zm4.5 1a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 110-4 2 2 0 010 4zm4.5 1a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  ),
  Ford: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-5 7h10v1H7V9zm0 2h3v1H7v-1zm0 2h10v1H7v-1zm7-2h3v1h-3v-1z" />
    </svg>
  ),
  Toyota: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c2.1 0 4 .8 5.5 2C16 7.3 14.1 8 12 8S8 7.3 6.5 6C8 4.8 9.9 4 12 4zM5.5 7.5C6.3 9 6.8 10.4 6.8 12c0 1.5-.5 3-1.3 4.2A7.956 7.956 0 014 12c0-1.6.5-3.2 1.5-4.5zm13 0C19.5 8.8 20 10.4 20 12a7.956 7.956 0 01-1.5 4.7c-.8-1.3-1.3-2.7-1.3-4.7 0-1.6.5-3 1.3-4.5zM12 9.5c2.5 0 4.7-.9 6.2-2.3.5.8.8 1.8.8 2.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1 .3-2 .8-2.8C7.3 8.6 9.5 9.5 12 9.5z" />
    </svg>
  ),
  Hyundai: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 6h2v4h3V8h2v8h-2v-2h-3v2h-2V8zm-4 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 5h2v3H7v-3z" />
    </svg>
  ),
  Kia: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4 6h2v8H8V8zm3 0h5c1.1 0 2 .9 2 2s-.9 2-2 2h-3v4h-2V8zm2 2v2h3V10h-3z" />
    </svg>
  ),
  Renault: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 2L7 12l5 10 5-10-5-10zm0 3l3.5 7-3.5 7-3.5-7 3.5-7z" />
    </svg>
  ),
  Peugeot: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 5h4c1.7 0 3 1.3 3 3s-1.3 3-3 3h-2v4h-2V7zm2 2v2h2c.6 0 1-.4 1-1s-.4-1-1-1h-2z" />
    </svg>
  ),
  Opel: ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a7 7 0 110 14A7 7 0 0112 5zm0 2a5 5 0 100 10A5 5 0 0012 7zm-4 5h3.5l1-3 1 3H17l-2.8 2 1 3.1L12 15.2 9.8 17l1-3.1L8 12z" />
    </svg>
  ),
  'Mercedes-Benz': ({ size = 40, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 1L9 11h6l-3-6zm0 0v8.5l7.4 4.3A7.963 7.963 0 0020 12a8 8 0 00-8-7zm0 0A8 8 0 004 12c0 2.4 1.1 4.6 2.8 6.1L12 14.5V5z" />
    </svg>
  ),
}

const BRANDS = [
  { name: 'Škoda',         color: '#4ba82e' },
  { name: 'Volkswagen',    color: '#001e50' },
  { name: 'BMW',           color: '#0066b1' },
  { name: 'Audi',          color: '#bb0a14' },
  { name: 'Ford',          color: '#003478' },
  { name: 'Toyota',        color: '#eb0a1e' },
  { name: 'Hyundai',       color: '#002c5f' },
  { name: 'Kia',           color: '#05141f' },
  { name: 'Renault',       color: '#efdf00' },
  { name: 'Peugeot',       color: '#003189' },
  { name: 'Opel',          color: '#d52b1e' },
  { name: 'Mercedes-Benz', color: '#00adef' },
]

// Per-item component so each manages its own hover state independently
const BrandItem = ({
  brand,
  isRenault,
}: {
  brand: { name: string; color: string }
  isRenault: boolean
}) => {
  const [hovered, setHovered] = useState(false)
  const IconComponent = BrandIcons[brand.name]
  if (!IconComponent) return null

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        padding: '0 36px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'default',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
      }}
    >
      <IconComponent
        size={40}
        style={{
          color: brand.color,
          opacity: hovered ? 1 : (isRenault ? 0.5 : 0.35),
          filter: hovered ? `drop-shadow(0 0 12px ${brand.color}88)` : 'none',
          transition: 'opacity 0.3s ease, filter 0.3s ease',
          display: 'block',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          color: hovered ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.3)',
          transition: 'color 0.3s ease',
        }}
      >
        {brand.name}
      </span>
    </div>
  )
}

// brands prop kept for API compatibility with StatsSection
interface Props {
  brands: string[]
}

export default function BrandCarousel({ brands: _ }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1 }),
  ])

  return (
    <div style={{ position: 'relative' }}>
      {/* Vertical buffer — allows hover lift to be visible above/below */}
      <div style={{ paddingTop: '12px', paddingBottom: '12px', marginTop: '-12px', marginBottom: '-12px' }}>
        {/* overflow:hidden clips horizontal scroll for embla; paddingTop/Bottom gives 16px vertical room */}
        <div style={{ overflow: 'hidden', paddingTop: '16px', paddingBottom: '16px' }}>
          <div ref={emblaRef}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {BRANDS.map((brand) => (
                <BrandItem
                  key={brand.name}
                  brand={brand}
                  isRenault={brand.name === 'Renault'}
                />
              ))}
            </div>
          </div>
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
