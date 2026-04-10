'use client'
import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.set(el, { opacity: 0, y: 48 })

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    init()

    return () => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === el) t.kill()
        })
      })
    }
  }, [])

  return ref
}
