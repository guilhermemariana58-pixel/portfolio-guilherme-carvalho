import { useEffect, useRef, useState } from 'react'
import { useLenis } from '../hooks/useLenis'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [direction, setDirection] = useState('down')
  const [currentSection, setCurrentSection] = useState('hero')
  const lenis = useLenis().lenis
  const lastScroll = useRef(0)

  useEffect(() => {
    if (!lenis) return

    const handleScroll = () => {
      const currentScroll = lenis.scroll || 0
      const maxScroll = lenis.limit || 1
      const newProgress = currentScroll / maxScroll

      setProgress(Math.min(Math.max(newProgress, 0), 1))

      if (currentScroll > lastScroll.current) {
        setDirection('down')
      } else if (currentScroll < lastScroll.current) {
        setDirection('up')
      }

      lastScroll.current = currentScroll
    }

    lenis.on('scroll', handleScroll)

    return () => {
      lenis.off('scroll', handleScroll)
    }
  }, [lenis])

  return { progress, direction, currentSection }
}
