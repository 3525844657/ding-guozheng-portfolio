import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? 'border-white/10 bg-black/70 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="site-container flex h-[76px] items-center justify-between gap-4">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold tracking-[-0.02em] sm:gap-3 sm:text-[15px]"
          aria-label="Ding Guozheng 首页"
        >
          <span className="relative flex h-6 w-6 items-center justify-center border border-white/20">
            <span className="h-1.5 w-1.5 bg-electric transition-transform duration-300 group-hover:scale-[1.8]" />
            <span className="absolute -right-px -top-px h-1 w-1 bg-white" />
          </span>
          <span>Ding Guozheng</span>
        </a>

        <div className="ml-auto flex min-w-0 items-center justify-end gap-5 lg:gap-9">
          <nav
            aria-label="主导航"
            className="hidden shrink-0 items-center gap-6 lg:flex xl:gap-9"
          >
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-baseline gap-2 text-xs text-neutral-500 transition-colors duration-300 hover:text-white"
              >
                <span className="font-mono text-[8px] text-neutral-700">
                  0{index + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="group inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap border border-white/15 px-3 text-xs text-neutral-200 transition-colors duration-300 hover:border-electric/60 hover:text-electric sm:px-4"
          >
            联系我
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </motion.header>
  )
}
