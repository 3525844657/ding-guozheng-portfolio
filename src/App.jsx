import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative min-h-screen overflow-clip bg-black text-white">
      <a
        href="#main-content"
        className="sr-only z-[100] bg-white px-4 py-3 text-sm font-medium text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        跳到主要内容
      </a>

      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-electric"
        style={{ scaleX: progress }}
      />

      <div
        aria-hidden="true"
        className="noise-overlay pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-screen"
      />

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Work />
        <Skills />
      </main>

      <Footer />
    </div>
  )
}

export default App
