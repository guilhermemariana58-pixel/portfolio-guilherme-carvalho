import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export default function Impact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const text1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 1, 1])
  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 1])
  const text3Opacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 bg-graphite-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="min-h-[60vh] flex items-center justify-center">
          <motion.h2
            style={{ opacity: text1Opacity }}
            className="text-4xl md:text-6xl lg:text-8xl font-black text-center leading-tight mb-12"
          >
            NÃO CRIO APENAS SITES.
          </motion.h2>
        </div>

        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="space-y-6 md:space-y-12">
            <motion.p
              style={{ opacity: text2Opacity }}
              className="text-3xl md:text-5xl lg:text-7xl font-black text-center leading-tight"
            >
              EU CRIO EXPERIÊNCIAS
            </motion.p>

            <motion.p
              style={{ opacity: text3Opacity }}
              className="text-3xl md:text-5xl lg:text-7xl font-black text-center leading-tight"
            >
              QUE FAZEM MARCAS
              <br />
              <span className="text-gradient">SEREM LEMBRADAS.</span>
            </motion.p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
