import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { services } from '../../data/content'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  const sectionRef = useRef(null)
  const [hoveredService, setHoveredService] = useState(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 bg-graphite-800 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div style={{ opacity, y }} className="mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            O QUE EU POSSO<br />
            <span className="text-gradient">CRIAR PARA VOCÊ?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHovered={hoveredService === service.id}
              onHover={() => setHoveredService(service.id)}
              onLeave={() => setHoveredService(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isHovered, onHover, onLeave }) {
  const Icon = getIcon(service.icon)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <span className="text-6xl md:text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500">
            {service.number}
          </span>
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
            <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
          {service.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-all duration-300">
          <span>Saiba mais</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  )
}

function getIcon(name) {
  const icons = {
    Globe: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
    Rocket: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
    ShoppingCart: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>,
    LayoutTemplate: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>,
    Box: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
    Sparkles: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" /><path d="M5 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" /></svg>,
  }
  return icons[name] || icons.Globe
}
