'use client'
import { useEffect, useRef } from 'react'

export function useStaggerReveal(selector: string, staggerAmount = 0.12) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const items = container.querySelectorAll(selector)
      if (!items.length) return

      gsap.set(items, { opacity: 0, y: 40 })

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: staggerAmount,
        scrollTrigger: {
          trigger: container,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    init()
  }, [selector, staggerAmount])

  return ref
}
