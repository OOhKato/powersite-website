import { useTheme } from '../../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from '../Section'

const steps = [
  {
    number: '01',
    title: 'Demo',
    description: 'We provide the first scenario on your system, so you can see exactly how the solution works.',
  },
  {
    number: '02',
    title: 'Training',
    description: 'Go across the technology and learn its benefits in detail.',
  },
  {
    number: '03',
    title: 'Onboarding',
    description: 'We integrate door-to-door across every part of your PtX system, so PowerAIwise can learn and optimize.',
  },
  {
    number: '04',
    title: 'Run Autonomously',
    description: 'Get comfortable and let your Energy Copilot do the work, while performance and revenues increase.',
  },
]

export default function OurProcess({ standalone = false }) {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const card = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/40'
  const numColor = light ? 'text-green-600 group-hover:text-green-700' : 'text-green-500/60 group-hover:text-green-500/90'
  const connector = light ? 'bg-green-500/25' : 'bg-green-500/15'

  return (
    <PageSection id="process" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            Our Process
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            From Demo to <span className="text-green-500">Autonomy</span>
          </h2>
          <p className={`mx-auto max-w-2xl text-base leading-relaxed ${body}`}>
            Four steps to bring your assets, so we can bring you the solutions, from a first
            look to a fully autonomous energy copilot.
          </p>
        </SectionHeader>

        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {/* Connecting line across steps on large screens */}
          <div className={`hidden lg:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-px ${connector}`} />

          {steps.map((s) => (
            <div key={s.number}
              className={`group relative overflow-hidden rounded-2xl border p-6 md:p-8 card-glow transition-all duration-300 ${card}`}>
              <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-green-500/30 to-transparent" />
                <div className="absolute top-0 right-0 w-12 h-px bg-gradient-to-l from-green-500/30 to-transparent" />
              </div>
              <div className={`text-5xl font-black mb-4 transition-colors ${numColor}`}>{s.number}</div>
              <h3 className={`font-bold text-xl mb-3 ${heading}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed ${body}`}>{s.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  )
}
