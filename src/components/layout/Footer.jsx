import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-white font-bold text-xl tracking-tight">
          GC<span className="text-accent-blue">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#projetos" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
            Projetos
          </a>
          <a href="#servicos" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
            Serviços
          </a>
          <a href="#processo" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
            Processo
          </a>
          <a
            href="#contato"
            className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-graphite-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              SUA IDEIA<br />
              <span className="text-gradient">PODE SER</span><br />
              O PRÓXIMO PROJETO.
            </h3>
          </div>

          <div className="md:col-span-2 flex flex-col justify-end">
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Pronto para transformar sua ideia em uma experiência digital extraordinária?
              Vamos criar algo incrível juntos.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511999999999?text=Olá%20Guilherme!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Guilherme Carvalho. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="mailto:contato@guilhermecarvalho.dev"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="E-mail"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
