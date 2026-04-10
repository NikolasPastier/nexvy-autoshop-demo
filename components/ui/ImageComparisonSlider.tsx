'use client'
import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  leftImage: string
  rightImage: string
  altLeft?: string
  altRight?: string
  initialPosition?: number
}

export function ImageComparisonSlider({
  leftImage,
  rightImage,
  altLeft = 'Pred',
  altRight = 'Po',
  initialPosition = 38,
}: Props) {
  const [pos, setPos] = useState(initialPosition)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const move = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }

  useEffect(() => {
    if (!dragging) return
    const mm = (e: MouseEvent) => move(e.clientX)
    const tm = (e: TouchEvent) => move(e.touches[0].clientX)
    const up = () => setDragging(false)
    document.addEventListener('mousemove', mm)
    document.addEventListener('touchmove', tm)
    document.addEventListener('mouseup', up)
    document.addEventListener('touchend', up)
    return () => {
      document.removeEventListener('mousemove', mm)
      document.removeEventListener('touchmove', tm)
      document.removeEventListener('mouseup', up)
      document.removeEventListener('touchend', up)
    }
  }, [dragging])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        userSelect: 'none',
        overflow: 'hidden',
      }}
      onMouseDown={() => setDragging(true)}
      onTouchStart={() => setDragging(true)}
    >
      {/* After image (full) */}
      <img
        src={rightImage}
        alt={altRight}
        draggable={false}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Before image (clipped) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
        }}
      >
        <img
          src={leftImage}
          alt={altLeft}
          draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Divider line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: '2px',
          background: 'rgba(26,79,255,0.8)',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Handle */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: `${pos}%`,
          transform: 'translate(-50%, -50%)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(26,79,255,0.9)',
          border: '2px solid rgba(255,255,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'ew-resize',
          pointerEvents: 'none',
          boxShadow: '0 4px 16px rgba(26,79,255,0.4)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <ChevronLeft size={14} />
          <ChevronRight size={14} />
        </div>
      </div>

      {/* Labels */}
      <div
        style={{
          position: 'absolute',
          top: 12,
          left: 12,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          borderRadius: '6px',
          padding: '4px 10px',
          fontSize: '11px',
          fontWeight: 700,
          color: 'white',
          letterSpacing: '0.08em',
          pointerEvents: 'none',
        }}
      >
        PRED
      </div>
      <div
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          background: 'rgba(26,79,255,0.8)',
          backdropFilter: 'blur(4px)',
          borderRadius: '6px',
          padding: '4px 10px',
          fontSize: '11px',
          fontWeight: 700,
          color: 'white',
          letterSpacing: '0.08em',
          pointerEvents: 'none',
        }}
      >
        PO
      </div>
    </div>
  )
}
