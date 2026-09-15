import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, MessageCircle, Send } from 'lucide-react'

const STEPS = [
  {
    id: 'need',
    question: 'O que você precisa?',
    subtitle: 'Selecione o tipo de projeto',
    type: 'select',
    options: [
      'Site profissional',
      'Landing Page',
      'Loja virtual',
      'SaaS',
      'Site 3D',
      'Ainda não sei',
    ],
  },
  {
    id: 'goal',
    question: 'Qual o objetivo principal?',
    subtitle: 'O que você espera alcançar',
    type: 'text',
    placeholder: 'Ex: Aumentar vendas, gerar leads, melhorar presença digital...',
  },
  {
    id: 'branding',
    question: 'Você já possui identidade visual?',
    subtitle: 'Logo, cores, guideline...',
    type: 'select',
    options: ['Sim, já tenho', 'Em desenvolvimento', 'Não, preciso criar'],
  },
  {
    id: 'idea',
    question: 'Conte brevemente sua ideia',
    subtitle: 'Descreva seu projeto',
    type: 'textarea',
    placeholder: 'Conte um pouco sobre o que você tem em mente...',
  },
  {
    id: 'budget',
    question: 'Qual o orçamento estimado?',
    subtitle: 'Isso nos ajuda a propor a solução ideal',
    type: 'select',
    options: [
      'R$ 3.000 - R$ 7.000',
      'R$ 7.000 - R$ 15.000',
      'R$ 15.000 - R$ 30.000',
      'R$ 30.000+',
      'Prefiro não informar',
    ],
  },
]

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentQuestion = STEPS[currentStep]
  const progress = ((currentStep + 1) / STEPS.length) * 100

  const handleNext = (value) => {
    setFormData({ ...formData, [currentQuestion.id]: value })

    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsSubmitted(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateWhatsAppMessage = () => {
    const need = formData.need || 'Não informado'
    const goal = formData.goal || 'Não informado'
    const branding = formData.branding || 'Não informado'
    const idea = formData.idea || 'Não informado'
    const budget = formData.budget || 'Não informado'

    return encodeURIComponent(
      `Olá Guilherme! Vi seu portfólio e gostaria de conversar sobre um projeto.\n\n` +
        `📋 O que preciso: ${need}\n` +
        `🎯 Objetivo: ${goal}\n` +
        `🎨 Identidade visual: ${branding}\n` +
        `💡 Ideia: ${idea}\n` +
        `💰 Orçamento: ${budget}\n\n` +
        `Aguardo seu retorno!`
    )
  }

  if (isSubmitted) {
    return (
      <section id="contato" className="relative py-32 md:py-48 px-6 bg-graphite-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              MENSAGEM ENVIADA<span className="text-gradient">!</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Obrigado pelo interesse! Em breve entrarei em contato.
            </p>

            <a
              href={`https://wa.me/5511999999999?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              <span className="font-semibold">FALAR NO WHATSAPP AGORA</span>
            </a>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="relative py-32 md:py-48 px-6 bg-graphite-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            VAMOS CRIAR ALGO<br />
            <span className="text-gradient">INCRÍVEL?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conte um pouco sobre seu projeto e vamos transformar sua ideia em uma experiência digital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-400">
                {String(currentStep + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}
              </span>
              <span className="text-sm font-medium text-gray-400">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {currentQuestion.question}
              </h3>
              <p className="text-gray-400 mb-8">
                {currentQuestion.subtitle}
              </p>

              <div className="space-y-4">
                {currentQuestion.type === 'select' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleNext(option)}
                        className="text-left p-4 rounded-xl border border-white/10 hover:border-accent-blue/50 hover:bg-white/5 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option}</span>
                          <ChevronRight className="text-gray-500 group-hover:text-accent-blue transition-colors" size={20} />
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'text' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder={currentQuestion.placeholder}
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 text-white placeholder-gray-500"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim()) {
                          handleNext(e.target.value.trim())
                        }
                      }}
                      autoFocus
                    />
                    <button
                      onClick={(e) => {
                        const input = e.target.previousElementSibling
                        if (input.value.trim()) handleNext(input.value.trim())
                      }}
                      className="w-full py-4 bg-accent-blue text-white rounded-xl font-medium hover:bg-accent-blue/80 transition-colors duration-300"
                    >
                      Continuar
                    </button>
                  </div>
                )}

                {currentQuestion.type === 'textarea' && (
                  <div className="space-y-4">
                    <textarea
                      placeholder={currentQuestion.placeholder}
                      rows={5}
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                      autoFocus
                    />
                    <button
                      onClick={(e) => {
                        const textarea = e.target.previousElementSibling
                        if (textarea.value.trim()) handleNext(textarea.value.trim())
                      }}
                      className="w-full py-4 bg-accent-blue text-white rounded-xl font-medium hover:bg-accent-blue/80 transition-colors duration-300"
                    >
                      Continuar
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="mt-8 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              ← Voltar
            </button>
          )}

          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-center text-gray-400 mb-4">
              Prefere conversar agora?
            </p>
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá Guilherme! Vi seu portfólio e gostaria de conversar sobre um projeto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              <span className="font-semibold">FALAR NO WHATSAPP</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
