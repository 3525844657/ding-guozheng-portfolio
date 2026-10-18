import { motion } from 'framer-motion'
import { Blocks, MessagesSquare, ShieldCheck, Sparkles } from 'lucide-react'

const skills = [
  {
    icon: Sparkles,
    index: '01',
    title: 'AI Agent 与低代码',
    description:
      '熟悉 Coze 智能体、Prompt、RAG 与工作流编排，能够把业务目标转换为可运行的 Agent 链路。',
  },
  {
    icon: Blocks,
    index: '02',
    title: '架构与数据加工',
    description:
      '从 0 到 1 绘制数据流，让模型负责语义、代码负责确定性计算，完成 JSON 清洗与字段映射。',
  },
  {
    icon: ShieldCheck,
    index: '03',
    title: '系统集成与兜底',
    description:
      '完成飞书 API、多维表格与 Webhook 联调，用 FIFO、查重和异常分支保证链路稳定运行。',
  },
  {
    icon: MessagesSquare,
    index: '04',
    title: '交付与团队协同',
    description:
      '多次担任项目 Leader，负责任务拆解、技术兜底与业务文档，让复杂工程问题能够被团队理解和推进。',
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 border-t border-white/10 bg-black py-28 md:py-36 lg:py-44"
    >
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Capabilities / 个人优势
            </p>
            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              工具会变，<span className="text-neutral-500">判断力不会。</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-neutral-500 md:text-right">
            在模型、代码与业务之间，找到最短且可靠的交付路径。
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-[310px] overflow-hidden bg-[#070707] p-7 backdrop-blur-xl transition-colors duration-500 hover:bg-[#0a0a0a] md:p-9"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-electric transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.035] text-neutral-400 transition-colors duration-500 group-hover:border-electric/30 group-hover:text-electric">
                    <Icon size={20} strokeWidth={1.25} />
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.18em] text-neutral-700">
                    {skill.index}
                  </span>
                </div>

                <h3 className="mt-16 text-xl font-medium tracking-[-0.025em] text-white">
                  {skill.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-500">
                  {skill.description}
                </p>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-700"
        >
          <span>Toolkit</span>
          {[
            'Coze',
            'RAG',
            'Python',
            'Feishu API',
            'Webhook',
            'Trae / Codex',
          ].map((tool) => (
              <span key={tool} className="text-neutral-600">
                {tool}
              </span>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
