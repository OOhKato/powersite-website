import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from './Section'

const problems = [
  {
    title: 'Unpredictable Renewables',
    description: 'Projects and entire countries struggle with volatile production. In 2024 the UK lost nearly €1 billion to curtailment; Germany lost €3.1 billion across 19 TWh of wasted energy.',
  },
  {
    title: 'Costs That Hinder Profit',
    description: 'Generation costs keep falling, but intermittent feed-in means a reliable year-round system still won’t get cheaper under current arrangements.',
  },
  {
    title: 'Real or False Alarms?',
    description: 'Weather, grid prices, H2 system pressure, surplus windows: the volume of data keeps growing, and so do the undetected failures hiding inside it.',
  },
]

export default function Problem({ standalone = false }) {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const card = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/40'

  return (
    <PageSection id="problem" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            The Problem
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Clean Energy, <span className="text-green-500">Wasted</span>
          </h2>
          <p className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed ${body}`}>
            Running a renewable energy system perfectly would require a flawless employee who
            never tires. As the Power-to-X market grows exponentially, people and infrastructure
            simply cannot scale that way, leaving billions in value on the table.
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {problems.map((p) => (
            <div key={p.title}
              className={`group relative overflow-hidden rounded-2xl border p-6 md:p-8 card-glow transition-all duration-300 ${card}`}>
              <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-green-500/30 to-transparent" />
                <div className="absolute top-0 right-0 w-12 h-px bg-gradient-to-l from-green-500/30 to-transparent" />
              </div>
              <h3 className={`font-bold text-xl mb-3 ${heading}`}>{p.title}</h3>
              <p className={`text-sm leading-relaxed ${body}`}>{p.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  )
}
