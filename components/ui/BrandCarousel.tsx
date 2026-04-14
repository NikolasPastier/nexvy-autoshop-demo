'use client'
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

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number; color?: string }>

// Map brand names to their icon components
const brandIconMap: Record<string, IconComponent> = {
  'ŠKODA': SiSkoda as IconComponent,
  'VOLKSWAGEN': SiVolkswagen as IconComponent,
  'BMW': SiBmw as IconComponent,
  'AUDI': SiAudi as IconComponent,
  'FORD': SiFord as IconComponent,
  'TOYOTA': SiToyota as IconComponent,
  'HYUNDAI': SiHyundai as IconComponent,
  'KIA': SiKia as IconComponent,
  'RENAULT': SiRenault as IconComponent,
  'PEUGEOT': SiPeugeot as IconComponent,
  'OPEL': SiOpel as IconComponent,
  'MERCEDES-BENZ': Car as IconComponent,
}

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {brands.map((b) => {
            const Icon = brandIconMap[b] ?? Car as IconComponent
            return (
              <div
                key={b}
                style={{ flexShrink: 0, padding: '0 36px', display: 'flex', alignItems: 'center', gap: '10px' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.querySelectorAll<SVGSVGElement>('svg').forEach((svg) => {
                    svg.style.opacity = '0.8'
                  })
                  const span = el.querySelector<HTMLSpanElement>('span')
                  if (span) span.style.color = 'rgba(255,255,255,0.8)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.querySelectorAll<SVGSVGElement>('svg').forEach((svg) => {
                    svg.style.opacity = '0.3'
                  })
                  const span = el.querySelector<HTMLSpanElement>('span')
                  if (span) span.style.color = 'rgba(255,255,255,0.3)'
                }}
              >
                <Icon
                  size={18}
                  style={{
                    opacity: 0.3,
                    flexShrink: 0,
                    transition: 'opacity 0.3s',
                    fill: 'white',
                    color: 'white',
                  }}
                />
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
