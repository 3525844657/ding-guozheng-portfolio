import { motion } from 'framer-motion'

const stats = [
  { value: '2+', label: '完整端到端 AI Agent 交付经验' },
  { value: '16', label: '节点复杂工作流独立设计与排障' },
  { value: '100%', label: '查重过滤链路验证跑通' },
]

const deliveryLayers = [
  {
    title: '需求拆解',
    tag: 'FRAME',
    description: '业务目标 · 数据流 · 异常路径',
  },
  {
    title: '语义层',
    tag: 'MODEL',
    description: '意图路由 · RAG · 信息提取',
  },
  {
    title: '确定性层',
    tag: 'CODE',
    description: 'Python · JSON · 查重 · FIFO',
  },
  {
    title: '交付层',
    tag: 'SYSTEM',
    description: '飞书 API · Webhook · 回执校验',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

function DeliveryModelCard() {
  return (
    <motion.div variants={fadeUp} className="h-full lg:col-span-5">
      <div className="relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A]/90 shadow-none backdrop-blur-xl lg:min-h-[590px]">
        <div
          className="tech-grid pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
        />

        <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-5">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-500">
            Delivery model / 01
          </p>
          <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-600">
            <span className="h-1.5 w-1.5 bg-cyan-400" />
            Process verified
          </span>
        </div>

        <div className="relative flex flex-1 flex-col p-6 sm:p-8">
          <p className="max-w-md text-balance text-2xl font-medium leading-snug tracking-[-0.035em] text-white sm:text-[1.7rem]">
            模型理解语义，
            <br />
            <span className="text-neutral-500">代码守住确定性。</span>
          </p>

          <div className="relative mt-9 flex-1">
            <span
              className="absolute bottom-5 left-[11px] top-4 w-px bg-white/10"
              aria-hidden="true"
            />

            {deliveryLayers.map((layer, index) => (
              <div
                key={layer.title}
                className="relative grid grid-cols-[24px_1fr] gap-4 pb-5 last:pb-0"
              >
                <span className="relative z-10 mt-1 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-white/15 bg-[#0A0A0A] font-mono text-[7px] text-neutral-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="border-b border-white/[0.07] pb-5 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-medium text-neutral-200">
                      {layer.title}
                    </h3>
                    <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-neutral-700">
                      {layer.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-5 text-neutral-500">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-between border-t border-white/10 px-6 py-4 font-mono text-[7px] uppercase tracking-[0.16em] text-neutral-700">
          <span>Human-in-the-loop</span>
          <span>Requirement → Delivery</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-t border-white/10 bg-black py-28 md:py-36 lg:py-48"
    >
      <div className="site-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid items-stretch gap-16 lg:grid-cols-12 lg:gap-20 xl:gap-28"
        >
          <DeliveryModelCard />

          <div className="lg:col-span-7 lg:pt-3">
            <motion.p variants={fadeUp} className="eyebrow">
              <span className="eyebrow-dot" />
              About / 关于我
              <span className="ml-auto font-mono text-neutral-700">01</span>
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-9 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.35rem]"
            >
              把复杂需求，
              <br />
              拆成<span className="text-neutral-500">可交付</span>的系统。
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-10 max-w-2xl space-y-6">
              <p className="text-lg leading-8 text-neutral-300 md:text-xl md:leading-9">
                集美大学诚毅学院软件工程本科在读，预计 2027 年毕业。两年
                Trae / Codex 深度实践经历，独立交付两个端到端 AI Agent
                项目，擅长
                <span className="text-white">需求拆解、低代码编排与系统集成</span>。
              </p>
              <p className="text-sm leading-7 text-neutral-500 md:text-base md:leading-8">
                我的交付方式不是让模型回答一切，而是先梳理数据流与异常路径，再让模型负责语义判断、代码负责确定性计算，最后通过回执、日志与推送结果验证业务闭环。
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-14 grid border-y border-white/10 sm:grid-cols-3"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className={`py-7 sm:px-6 ${
                    index === 0
                      ? 'sm:pl-0'
                      : 'border-t border-white/10 sm:border-l sm:border-t-0'
                  } ${index === 2 ? 'sm:pr-0' : ''}`}
                >
                  <p className="text-4xl font-medium tracking-[-0.055em] text-white lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 max-w-[170px] text-xs leading-5 text-neutral-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
