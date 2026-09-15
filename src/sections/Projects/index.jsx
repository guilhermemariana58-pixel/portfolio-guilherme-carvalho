import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../../data/content'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function Projects() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 bg-graphite-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ opacity, y }} className="mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            PROJETOS<br />
            <span className="text-gradient">SELECIONADOS</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Cada projeto é uma história única de criatividade, tecnologia e resultados.
          </p>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, y }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        index % 2 === 1 ? 'lg:grid-flow-dense' : ''
      }`}
    >
      <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-graphite-800 group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/80 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <ExternalLink className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div className="flex items-center gap-4">
          <span className="text-6xl md:text-7xl font-black text-white/10">
            {String(project.id).padStart(2, '0')}
          </span>
        </div>

        <div>
          <span
            className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            style={{
              backgroundColor: `${project.color}20`,
              color: project.color,
              border: `1px solid ${project.color}40`,
            }}
          >
            {project.category}
          </span>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {project.title}
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-white/5 rounded-lg border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <button className="group flex items-center gap-3 text-white font-medium hover:gap-5 transition-all duration-300">
          <span className="text-lg">VER PROJETO</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>
    </motion.div>
  )
}
