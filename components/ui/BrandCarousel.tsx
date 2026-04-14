'use client'
import { useState } from 'react'
import type { ComponentType, CSSProperties } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import * as SimpleIcons from '@icons-pack/react-simple-icons'
import { Car } from 'lucide-react'

type IconComp = ComponentType<{ size?: number; style?: CSSProperties }>

// Resolve icon by name at runtime — falls back to Car if the icon doesn't exist
const getIcon = (name: string): IconComp => {
  const si = SimpleIcons as unknown as Record<string, IconComp | undefined>
  return si[name] ?? (Car as IconComp)
}

// Internal brand data — SiMercedes doesn't exist in the package, falls back to Car via getIcon
const BRANDS = [
  { iconName: 'SiSkoda',      name: 'Škoda',        color: '#4ba82e' },
  { iconName: 'SiVolkswagen', name: 'Volkswagen',   color: '#001e50' },
  { iconName: 'SiBmw',        name: 'BMW',           color: '#0066b1' },
  { iconName: 'SiAudi',       name: 'Audi',          color: '#bb0a14' },
  { iconName: 'SiFord',       name: 'Ford',          color: '#003478' },
  { iconName: 'SiToyota',     name: 'Toyota',        color: '#eb0a1e' },
  { iconName: 'SiHyundai',    name: 'Hyundai',       color: '#002c5f' },
  { iconName: 'SiKia',        name: 'Kia',           color: '#05141f' },
  { iconName: 'SiRenault',    name: 'Renault',       color: '#efdf00' },
  { iconName: 'SiPeugeot',    name: 'Peugeot',       color: '#003189' },
  { iconName: 'SiOpel',       name: 'Opel',          color: '#d52b1e' },
  { iconName: 'SiMercedes',   name: 'Mercedes-Benz', color: '#00adef' },
]

// Per-item component so each manages its own hover state independently
const BrandItem = ({
  IconComponent,
  brand,
  isRenault,
}: {
  IconComponent: IconComp
  brand: { name: string; color: string }
  isRenault: boolean
}) => {
  const [hovered, setHovered] = useState(false)

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

// brands prop kept for API compatibility — internal BRANDS data is used instead
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
                  IconComponent={getIcon(brand.iconName)}
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
