import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function CustomCursor() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white/50 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      style={{
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-30"
    >
      <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </motion.div>
  )
}
