'use client'
import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  SiSkoda,
  SiVolkswagen,
  SiBmw,
  SiAudi,
  SiFord,
  SiToyota,
  SiHyundai,
  SiKia,
  SiRenault,
  SiPeugeot,
  SiOpel,
} from '@icons-pack/react-simple-icons'
import { Car } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

type IconComp = ComponentType<SVGProps<SVGSVGElement> & { size?: number; color?: string }>

// Brand icon + color map — keys match site-config.json brands array (uppercase)
const brandData: Record<string, { Icon: IconComp; color: string }> = {
  'ŠKODA':         { Icon: SiSkoda as IconComp,      color: '#4ba82e' },
  'VOLKSWAGEN':    { Icon: SiVolkswagen as IconComp,  color: '#001e50' },
  'BMW':           { Icon: SiBmw as IconComp,         color: '#0066b1' },
  'AUDI':          { Icon: SiAudi as IconComp,        color: '#bb0a14' },
  'FORD':          { Icon: SiFord as IconComp,        color: '#003478' },
  'TOYOTA':        { Icon: SiToyota as IconComp,      color: '#eb0a1e' },
  'HYUNDAI':       { Icon: SiHyundai as IconComp,     color: '#002c5f' },
  'KIA':           { Icon: SiKia as IconComp,         color: '#05141f' },
  'RENAULT':       { Icon: SiRenault as IconComp,     color: '#efdf00' },
  'PEUGEOT':       { Icon: SiPeugeot as IconComp,     color: '#003189' },
  'OPEL':          { Icon: SiOpel as IconComp,        color: '#d52b1e' },
  'MERCEDES-BENZ': { Icon: Car as IconComp,           color: '#00adef' },
}

interface Props {
  brands: string[]
}

export default function BrandCarousel({ brands }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1 }),
  ])
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div ref={emblaRef} style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {brands.map((b) => {
            const { Icon, color: brandHex } = brandData[b] ?? { Icon: Car as IconComp, color: '#1a4fff' }
            const isHov = hovered === b
            // Renault yellow is hard to see at 0.35 — use 0.5 as default
            const defaultOpacity = b === 'RENAULT' ? 0.5 : 0.35
            // Renault also gets extra glow on hover so it reads on dark bg
            const hoverFilter = b === 'RENAULT'
              ? `drop-shadow(0 0 12px ${brandHex}66) drop-shadow(0 0 8px rgba(239,223,0,0.4))`
              : `drop-shadow(0 0 12px ${brandHex}66)`

            return (
              <div
                key={b}
                style={{
                  flexShrink: 0,
                  padding: '0 36px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'default',
                  transform: isHov ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={() => setHovered(b)}
                onMouseLeave={() => setHovered(null)}
              >
                <Icon
                  size={40}
                  style={{
                    fill: brandHex,
                    color: brandHex,
                    opacity: isHov ? 1 : defaultOpacity,
                    filter: isHov ? hoverFilter : 'none',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: isHov ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.3)',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {b}
                </span>
              </div>
            )
          })}
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
