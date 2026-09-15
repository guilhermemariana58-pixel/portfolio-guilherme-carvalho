import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LaptopScene from '../../components/three/LaptopScene'
import { ScrollIndicator } from '../../components/ui/CustomCursor'

export default function Hero() {
  const sectionRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState({ current: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    mouseRef.current = mousePosition
  }, [mousePosition])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-graphite-900"
    >
      <div className="absolute inset-0 z-0">
        <LaptopScene mousePosition={mouseRef} scrollProgress={scrollProgress} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite-900/50 to-graphite-900 z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-white"
        >
          GUILHERME<br />
          <span className="text-gradient">CARVALHO</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          Criando experiências digitais
          <br />
          que transformam ideias em negócios.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-sm md:text-base text-gray-500 mb-12 tracking-widest uppercase"
        >
          Sites • Landing Pages • SaaS • Experiências Interativas
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projetos"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            VER MEUS PROJETOS
          </a>
          <a
            href="#contato"
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            CRIAR MEU PROJETO
          </a>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}
