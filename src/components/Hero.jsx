import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.35,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]"
    >
      {/* 替换提示：将 /videos/bg.mp4 换成你的 8-15 秒暗色科技感循环视频 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.svg"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        aria-hidden="true"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,transparent_0%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0.86)_100%)]"
        aria-hidden="true"
      />
      <div
        className="tech-grid absolute inset-0 opacity-[0.12] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="site-container relative z-10 flex min-h-screen flex-col items-center justify-center pb-24 pt-32 text-center"
      >
        <motion.div
          variants={fadeUp}
          className="mb-9 inline-flex items-center gap-3 border border-white/10 bg-black/20 px-4 py-2.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping bg-electric opacity-40" />
            <span className="relative inline-flex h-2 w-2 bg-electric" />
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-neutral-300">
            AI NATIVE DEVELOPER · 2026
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="max-w-[1500px] text-balance text-[clamp(3.4rem,8.7vw,9.7rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-white"
        >
          <span className="block whitespace-nowrap text-white sm:inline">
            丁国政
          </span>
          <span className="mt-2 block whitespace-nowrap text-[0.72em] text-cyan-400 sm:inline sm:text-[1em]">
            {' / AI 落地实践者'}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-9 max-w-[780px] text-balance text-base leading-8 text-neutral-400 md:text-xl md:leading-9"
        >
          跨越概念与交付的鸿沟。驾驭大模型与低代码引擎，将复杂业务逻辑转化为可落地的产品方案。
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-600"
        >
          <span>AGENT ORCHESTRATION</span>
          <span className="h-px w-6 bg-white/15" aria-hidden="true" />
          <span>PRODUCT STRATEGY</span>
          <span className="h-px w-6 bg-white/15" aria-hidden="true" />
          <span>API INTEGRATION</span>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-black/15 backdrop-blur-sm">
        <div className="site-container flex h-[74px] items-center justify-between">
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600 opacity-50 sm:block">
            Scroll to explore
          </span>

          <motion.button
            type="button"
            onClick={scrollToAbout}
            aria-label="向下滚动至关于我"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="group absolute left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center border border-white/15 text-neutral-500 transition-colors hover:border-electric/60 hover:text-electric"
          >
            <ArrowDown size={16} strokeWidth={1.25} />
          </motion.button>

          <span className="ml-auto hidden font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600 sm:block">
            Available for select projects
          </span>
        </div>
      </div>
    </section>
  )
}
