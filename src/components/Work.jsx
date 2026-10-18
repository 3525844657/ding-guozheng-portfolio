import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from 'lucide-react'

const projects = [
  {
    index: '01',
    type: 'AI Agent / Aviation Safety',
    title: '航空安全智能问答 Agent',
    tags: ['Coze', 'RAG', '飞书 API', 'FIFO 自进化'],
    description:
      '面向高容错成本的航空安全场景，独立设计“意图路由、RAG 检索、代码清洗、联网兜底、反思校验”链路。通过 Python 维护 20 条 FIFO 知识队列与飞书多维表格读写，让新知识经审核后回流，形成可自更新的安全回答体系。',
    metrics: [
      { value: '20', label: 'FIFO 知识容量' },
      { value: '4', label: '层检索与校验' },
    ],
    notes: [
      '意图路由：闲聊与专业咨询独立分流',
      'Python 清洗结合大模型模糊匹配',
      '审核 AI 校验事实，降低幻觉风险',
      '20 条 FIFO 飞轮，旧记录自动淘汰',
    ],
    images: [
      {
        src: '/images/aero-chat.jpg',
        alt: '航空安全智能问答助手人设化劫机场景回答界面',
        caption: '人设化问答 / 劫机场景',
        label: 'Dialogue',
      },
      {
        src: '/images/aero-table-structure.jpg',
        alt: '飞书多维表格中的航空安全知识表结构',
        caption: '飞轮表结构 / 场景与做法',
        label: 'Knowledge table',
      },
      {
        src: '/images/aero-table-early.jpg',
        alt: '航空安全知识飞轮第 1 至 2 条早期记录',
        caption: '早期记录 / 知识开始沉淀',
        label: 'Early records',
      },
      {
        src: '/images/aero-table-middle.jpg',
        alt: '航空安全知识飞轮第 18 至 20 条持续归档记录',
        caption: '持续归档 / 第 18–20 条',
        label: 'Rolling archive',
      },
      {
        src: '/images/aero-table-fifo.jpg',
        alt: 'FIFO 知识表第 17 至 20 条记录及最新劫机知识',
        caption: 'FIFO 第 20 条 / 新知识入表',
        label: 'FIFO evidence',
      },
    ],
    workflow: {
      src: '/images/aero-workflow.jpg',
      alt: '航空安全智能问答 Agent 的 Coze 工作流底图',
      caption: '意图路由、检索、反思校验与知识回流链路',
      label: 'Agent workflow',
      detail: '完整工作流底图',
      pipeline: [
        {
          title: '意图路由',
          description: '区分闲聊与航空安全专业咨询',
          tag: 'Routing',
        },
        {
          title: '检索增强',
          description: '飞书知识召回，Python 清洗重排',
          tag: 'RAG',
        },
        {
          title: '兜底与校验',
          description: '未命中触发联网搜索，审核 AI 校验事实',
          tag: 'Review',
        },
        {
          title: '知识回流',
          description: '审核后写回飞书表，20 条 FIFO 自动淘汰',
          tag: 'Loop',
        },
      ],
    },
  },
  {
    index: '02',
    type: 'Automation / Intelligence Pipeline',
    title: '行业情报自动化归档与预警',
    tags: ['Coze', 'LinkReader', '16 节点编排', '飞书 Webhook'],
    description:
      '针对多模态行业文档人工摘录难、重复数据污染和预警打扰率高的问题，独立设计 16 节点工作流。以“模型做语义、代码做计算”的混合架构，完成文档解析、严格 JSON 提取、相似度查重、高风险合并与飞书 Webhook 触达。',
    metrics: [
      { value: '16', label: '工作流节点' },
      { value: '0.6', label: '摘要相似度阈值' },
    ],
    notes: [
      '多模态路由：文本 / PDF / Word 自动分流',
      '公司相同 + 摘要相似度 ≥ 0.6 查重',
      '毒文档、空结果与失败分支均有兜底',
      '高风险事件合并降噪，Webhook 精准触达',
    ],
    images: [
      {
        src: '/images/intel-intro.jpg',
        alt: '行业情报自动化分析助手首屏引导界面',
        caption: '首屏引导 / 多模态输入',
        label: 'Entry',
      },
      {
        src: '/images/intel-dedup.jpg',
        alt: '行业情报助手识别重复记录并返回无新增回执',
        caption: '查重拦截 / 无新增回执',
        label: 'Deduplication',
      },
      {
        src: '/images/intel-alert.jpg',
        alt: '飞书群中的高风险行业情报合并预警',
        caption: '飞书群预警 / 合并降噪',
        label: 'Alert',
      },
      {
        src: '/images/intel-table.jpg',
        alt: '飞书多维表格中的行业情报自动归档记录',
        caption: '多维表格 / 自动归档',
        label: 'Archive',
      },
    ],
    workflow: {
      src: '/images/intel-workflow.jpg',
      alt: '行业情报自动化归档与预警的 16 节点工作流底图',
      caption: '从多模态输入、语义提取到查重、落库与 Webhook 触达',
      label: '16-node workflow',
      detail: '16 节点全链路底图',
      pipeline: [
        {
          title: '多模态分流',
          description: '文本与 PDF / Word 按指令选择解析路径',
          tag: 'Input',
        },
        {
          title: '语义加工',
          description: '严格 JSON 提取事件，大模型完成字段审核',
          tag: 'Model',
        },
        {
          title: '查重落库',
          description: '公司相同且摘要相似度 ≥ 0.6 才新增',
          tag: 'Code',
        },
        {
          title: '合并触达',
          description: '高风险事件合并为 Markdown，Webhook 推送',
          tag: 'Output',
        },
      ],
    },
  },
]

function EvidenceGallery({ project, onOpen }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = project.images[activeIndex]
  const thumbnailColumns =
    project.images.length === 5 ? 'grid-cols-5' : 'grid-cols-4'

  return (
    <div className="flex h-full min-h-[560px] flex-col border-b border-white/10 bg-[#050606] lg:min-h-[650px] lg:border-b-0 lg:border-r">
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-5">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-500">
          Product evidence
        </span>
        <span className="font-mono text-[8px] tracking-[0.2em] text-neutral-700">
          {String(activeIndex + 1).padStart(2, '0')} /{' '}
          {String(project.images.length).padStart(2, '0')}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onOpen(activeIndex)}
        aria-label={`放大查看：${activeImage.caption}`}
        className="group/evidence relative min-h-[380px] flex-1 overflow-hidden bg-[#080A0B] p-4 text-left sm:p-6"
      >
        <div
          className="tech-grid absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] object-contain sm:inset-6 sm:h-[calc(100%-3rem)] sm:w-[calc(100%-3rem)]"
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
          <div className="border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md">
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-neutral-600">
              {activeImage.label}
            </p>
            <p className="mt-1 text-[11px] text-neutral-300">
              {activeImage.caption}
            </p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 bg-black/70 text-neutral-400 backdrop-blur-md transition-colors group-hover/evidence:border-electric/50 group-hover/evidence:text-electric">
            <Maximize2 size={14} strokeWidth={1.25} />
          </span>
        </div>
      </button>

      <div className={`grid shrink-0 gap-px bg-white/10 ${thumbnailColumns}`}>
        {project.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`查看${image.caption}`}
            aria-pressed={index === activeIndex}
            className={`relative aspect-[16/10] overflow-hidden bg-[#070809] transition-opacity ${
              index === activeIndex
                ? 'opacity-100'
                : 'opacity-45 hover:opacity-80'
            }`}
          >
            <img
              src={image.src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {index === activeIndex && (
              <span className="absolute inset-x-0 bottom-0 h-px bg-electric" />
            )}
            <span className="absolute left-2 top-2 font-mono text-[7px] text-white/60">
              0{index + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

function WorkflowMap({ workflow, onOpen }) {
  return (
    <div className="border-t border-white/10 bg-[#050505] p-5 sm:p-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600">
            Delivery architecture
          </p>
          <p className="mt-3 text-lg font-medium tracking-[-0.025em] text-white">
            流程被拆成四个可验证阶段。
          </p>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex w-fit shrink-0 items-center gap-2 border border-white/10 px-3.5 py-2.5 font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-500 transition-colors hover:border-electric/40 hover:text-electric"
        >
          查看原始工作流底图
          <ArrowUpRight size={12} strokeWidth={1.25} />
        </button>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
        {workflow.pipeline.map((step, index) => (
          <div
            key={step.title}
            className="group/step relative min-h-[150px] bg-[#080808] p-5"
          >
            <span
              className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-electric/60 transition-transform duration-500 group-hover/step:scale-x-100"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] tracking-[0.18em] text-neutral-700">
                0{index + 1}
              </span>
              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-neutral-700">
                {step.tag}
              </span>
            </div>
            <h4 className="mt-8 text-sm font-medium text-neutral-200">
              {step.title}
            </h4>
            <p className="mt-3 text-[11px] leading-5 text-neutral-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 overflow-hidden border border-white/10">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#080808] px-3 py-2.5">
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-600">
            原始工作流底图
          </span>
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-600 transition-colors hover:text-electric"
          >
            打开大图
            <ArrowUpRight size={11} strokeWidth={1.25} />
          </button>
        </div>
        <button
          type="button"
          onClick={onOpen}
          aria-label={`放大查看${workflow.detail}`}
          className="block w-full overflow-x-auto bg-[#F4F4F1] p-2 text-left"
        >
          <img
            src={workflow.src}
            alt={workflow.alt}
            loading="lazy"
            className="h-auto w-[1280px] max-w-none lg:w-full"
          />
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-700">
        <span>{workflow.label}</span>
        <span className="lg:hidden">可横向滑动查看底图</span>
        <span className="hidden lg:block">{workflow.detail}</span>
      </div>
    </div>
  )
}

function ImageLightbox({ viewer, setViewer }) {
  useEffect(() => {
    if (!viewer) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setViewer(null)
      }

      if (!viewer.wide && viewer.images.length > 1) {
        if (event.key === 'ArrowLeft') {
          setViewer((current) => ({
            ...current,
            index:
              (current.index - 1 + current.images.length) %
              current.images.length,
          }))
        }

        if (event.key === 'ArrowRight') {
          setViewer((current) => ({
            ...current,
            index: (current.index + 1) % current.images.length,
          }))
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [viewer, setViewer])

  if (!viewer) {
    return createPortal(<AnimatePresence />, document.body)
  }

  const image = viewer.images[viewer.index]
  const hasMultiple = !viewer.wide && viewer.images.length > 1

  const navigate = (direction) => {
    setViewer((current) => ({
      ...current,
      index:
        (current.index + direction + current.images.length) %
        current.images.length,
    }))
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={`${viewer.title} 图片预览`}
        onClick={() => setViewer(null)}
      >
        <button
          type="button"
          onClick={() => setViewer(null)}
          aria-label="关闭图片预览"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/15 bg-black/60 text-neutral-400 transition-colors hover:border-electric/40 hover:text-electric sm:right-8 sm:top-8"
        >
          <X size={18} strokeWidth={1.25} />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.99 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[1600px]"
          onClick={(event) => event.stopPropagation()}
        >
          <div
            className={
              viewer.wide
                ? 'max-h-[78vh] overflow-auto border border-white/10 bg-white'
                : 'flex max-h-[78vh] items-center justify-center border border-white/10 bg-[#070809]'
            }
          >
            <img
              src={image.src}
              alt={image.alt}
              className={
                viewer.wide
                  ? 'h-auto w-[2200px] max-w-none'
                  : 'max-h-[78vh] w-auto max-w-full object-contain'
              }
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-5 border-t border-white/10 pt-4">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                {viewer.title}
              </p>
              <p className="mt-2 text-sm text-neutral-300">
                {image.caption}
              </p>
            </div>
            {viewer.wide ? (
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-600">
                可横向滚动查看细节
              </span>
            ) : (
              <span className="font-mono text-[8px] tracking-[0.16em] text-neutral-600">
                {String(viewer.index + 1).padStart(2, '0')} /{' '}
                {String(viewer.images.length).padStart(2, '0')}
              </span>
            )}
          </div>
        </motion.div>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                navigate(-1)
              }}
              aria-label="上一张图片"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/60 text-neutral-400 transition-colors hover:border-electric/40 hover:text-electric sm:left-8"
            >
              <ChevronLeft size={18} strokeWidth={1.25} />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                navigate(1)
              }}
              aria-label="下一张图片"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/60 text-neutral-400 transition-colors hover:border-electric/40 hover:text-electric sm:right-8"
            >
              <ChevronRight size={18} strokeWidth={1.25} />
            </button>
          </>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}

function ProjectCard({ project, index }) {
  const [viewer, setViewer] = useState(null)

  return (
    <motion.article
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -7 }}
      className="group overflow-hidden border border-white/10 bg-[#070707] transition-colors duration-500 hover:border-electric/40"
    >
      <div className="grid lg:grid-cols-[1.08fr_1fr]">
        <EvidenceGallery
          project={project}
          onOpen={(imageIndex) =>
            setViewer({
              images: project.images,
              index: imageIndex,
              title: project.title,
              wide: false,
            })
          }
        />

        <div className="flex flex-col p-7 sm:p-10 lg:p-12 xl:p-14">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
            <span>{project.type}</span>
            <span className="text-neutral-700">{project.index}</span>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 px-2.5 py-1.5 text-[10px] text-neutral-500 transition-colors duration-300 group-hover:border-white/15 group-hover:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mt-7 text-balance text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl xl:text-[3.25rem]">
            {project.title}
          </h3>

          <p className="mt-7 text-sm leading-7 text-neutral-500 md:text-[15px] md:leading-8">
            {project.description}
          </p>

          <div className="mt-8 grid grid-cols-2 border-y border-white/10">
            {project.metrics.map((metric, metricIndex) => (
              <div
                key={metric.label}
                className={`py-5 ${
                  metricIndex === 0 ? 'pr-5' : 'border-l border-white/10 pl-5'
                }`}
              >
                <p className="text-3xl font-medium tracking-[-0.045em] text-white">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-[10px] text-neutral-600">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7">
            {project.notes.map((note) => (
              <div
                key={note}
                className="flex items-center gap-3 border-b border-white/[0.07] py-3 text-[11px] text-neutral-500 last:border-b-0"
              >
                <span className="h-px w-4 shrink-0 bg-electric/60" />
                {note}
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-9">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700">
              Case file / {project.index}
            </span>
            <a
              href="#contact"
              aria-label={`联系我了解${project.title}`}
              className="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-500 transition-all duration-300 hover:border-electric/50 hover:text-electric"
            >
              <ArrowUpRight size={16} strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </div>

      <WorkflowMap
        workflow={project.workflow}
        onOpen={() =>
          setViewer({
            images: [
              {
                ...project.workflow,
                alt: project.workflow.alt,
                caption: project.workflow.caption,
              },
            ],
            index: 0,
            title: project.workflow.detail,
            wide: true,
          })
        }
      />

      <ImageLightbox viewer={viewer} setViewer={setViewer} />
    </motion.article>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      className="relative scroll-mt-20 border-t border-white/10 bg-[#030303] py-28 md:py-36 lg:py-44"
    >
      <div
        className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_80%_20%,rgba(0,240,255,0.055),transparent_28%)]"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col gap-8 border-b border-white/10 pb-8 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Selected work / 精选项目
            </p>
            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              从想法到<span className="text-neutral-500">上线</span>。
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-neutral-500 md:text-right">
            两个真实业务流程，两种 AI 落地方式。
            <br />
            从产品交互到工作流底图，均可验证、可运行。
          </p>
        </motion.div>

        <div className="space-y-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
