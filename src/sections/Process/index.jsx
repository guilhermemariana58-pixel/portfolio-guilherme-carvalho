import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { processSteps } from '../../data/content'

export default function Process() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 bg-graphite-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            DA IDEIA AO SITE<br />
            <span className="text-gradient">NO AR.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-accent-blue to-accent-purple origin-top"
            style={{ height: lineHeight, x: '-50%' }}
          />

          <div className="space-y-24 md:space-y-32">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
        <div className="glass rounded-2xl p-8 md:p-10 hover:bg-white/5 transition-all duration-500">
          <span className="text-5xl md:text-6xl font-black text-gradient mb-4 block">
            {step.number}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {step.title}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-blue border-4 border-graphite-900 z-10" />

      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  )
}
