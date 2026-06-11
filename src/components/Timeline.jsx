import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from './Section'

const events = [
  { year: '20XX', title: 'Milestone Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for this milestone.' },
  { year: '20XX', title: 'Milestone Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for this milestone.' },
  { year: '20XX', title: 'Milestone Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for this milestone.' },
  { year: '20XX', title: 'Milestone Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for this milestone.' },
  { year: '20XX', title: 'Milestone Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for this milestone.' },
]

export default function Timeline({ standalone = false }) {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-600' : 'border-green-500/30 bg-green-500/5 text-green-600'
  const card = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/35'

  return (
    <PageSection id="timeline" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            Timeline
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Our <span className="text-green-500">Journey</span>
          </h2>
          <p className={`mx-auto max-w-xl text-base ${body}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder subtitle for the timeline section.
          </p>
        </SectionHeader>

        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 md:gap-6">
          {events.map((e, i) => (
            <div key={i} className={`w-full p-5 sm:p-6 rounded-xl border text-center transition-colors ${card}`}>
              <div className="text-green-600 font-black text-sm mb-2">{e.year}</div>
              <h3 className={`font-bold text-base mb-2 ${heading}`}>{e.title}</h3>
              <p className={`text-sm leading-relaxed ${body}`}>{e.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  )
}
