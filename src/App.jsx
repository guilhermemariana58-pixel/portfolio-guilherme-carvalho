import { Suspense } from 'react'
import { Navbar } from './components/layout/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Process from './sections/Process'
import { CustomCursor } from './components/ui/CustomCursor'

export default function App() {
  return (
    <div className="relative min-h-screen bg-graphite-900 text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Services />
        <Process />
      </main>
    </div>
  )
}
