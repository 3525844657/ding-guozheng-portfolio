import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowUpRight, Check, Copy, Mail } from 'lucide-react'

const CONTACT_EMAIL = '3525844657@qq.com'
const WECHAT_ID = '19168140404'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <footer
      id="contact"
      className="relative flex min-h-screen scroll-mt-0 flex-col overflow-hidden border-t border-white/10 bg-[#020202]"
    >
      <div className="footer-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.055),transparent_66%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent"
        aria-hidden="true"
      />

      <div className="site-container relative z-10 flex flex-1 items-center py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center"
        >
          <p className="eyebrow justify-center">
            <span className="eyebrow-dot" />
            Contact / 保持联系
          </p>

          <h2 className="mx-auto mt-10 max-w-[1320px] text-balance text-[clamp(3.4rem,8.1vw,9rem)] font-semibold leading-[0.93] tracking-[-0.065em] text-white">
            Let&apos;s build something{' '}
            <span className="text-neutral-500">intelligent</span> together.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
            如果你有一个需要被拆解、验证和真正落地的想法，欢迎直接联系我。
          </p>

          <div className="mx-auto mt-16 max-w-4xl border-y border-white/10">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center justify-between gap-5 border-b border-white/10 py-7 text-left transition-colors hover:text-electric md:py-9"
            >
              <span className="flex min-w-0 items-center gap-4 md:gap-7">
                <Mail
                  size={19}
                  strokeWidth={1.2}
                  className="shrink-0 text-neutral-600 transition-colors group-hover:text-electric"
                />
                <span className="truncate font-mono text-2xl tracking-[-0.04em] text-neutral-200 transition-colors group-hover:text-electric sm:text-4xl md:text-5xl">
                  {CONTACT_EMAIL}
                </span>
              </span>
              <ArrowUpRight
                size={23}
                strokeWidth={1.15}
                className="shrink-0 text-neutral-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric"
              />
            </a>

            <div className="grid border-b border-white/10 text-left sm:grid-cols-2">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:pr-8">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                    WeChat / 微信
                  </p>
                  <p className="mt-2 text-sm text-neutral-300">{WECHAT_ID}</p>
                </div>
                <button
                  type="button"
                  onClick={copyWechat}
                  aria-label="复制微信号"
                  className="flex h-9 w-9 items-center justify-center text-neutral-600 transition-colors hover:text-electric"
                >
                  {copied ? (
                    <Check size={15} strokeWidth={1.4} />
                  ) : (
                    <Copy size={15} strokeWidth={1.2} />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between gap-4 py-6 sm:pl-8">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                    Resume / 简历
                  </p>
                  <p className="mt-2 text-sm text-neutral-300">PDF · 2026</p>
                </div>
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 border border-white/15 px-3.5 py-2.5 text-[10px] text-neutral-400 transition-colors hover:border-electric/50 hover:text-electric"
                >
                  下载简历
                  <ArrowDownToLine
                    size={13}
                    strokeWidth={1.3}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="site-container flex flex-col gap-3 py-6 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Ding Guozheng. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <span>Designed &amp; built with intention</span>
            <a href="#home" className="transition-colors hover:text-white">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
