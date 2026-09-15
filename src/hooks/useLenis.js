import { useEffect, useRef, useState, useCallback } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  const lenisRef = useRef(null)
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    lenisRef.current = instance
    setLenis(instance)

    function raf(time) {
      instance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      instance.destroy()
    }
  }, [])

  const scrollTo = useCallback((target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: 0 })
    }
  }, [])

  return { lenis, scrollTo }
}
