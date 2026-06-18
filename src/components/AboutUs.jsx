import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from './Section'

const highlights = [
  {
    title: 'AI-as-a-Service',
    description: 'An AI-as-a-Service startup transforming renewable energy management through intelligent optimization.',
  },
  {
    title: 'Real Impact',
    description: 'Built to tackle curtailment losses of €3.1 billion in Germany alone in 2024, cutting inefficiencies and boosting profitability.',
  },
  {
    title: 'Pay-as-You-Optimize',
    description: 'A pricing model aligned with the value we deliver: you save first, you pay second.',
  },
  {
    title: 'Seamless Onboarding',
    description: 'A no-code interface and a 2-week integration that fits effortlessly into your existing systems.',
  },
]

export default function AboutUs({ standalone = false }) {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const card = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/40'

  return (
    <PageSection id="about" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            About Us
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Who We <span className="text-green-500">Are</span>
          </h2>
          <p className={`mx-auto max-w-3xl text-base sm:text-lg leading-relaxed ${body}`}>
            Powerwise empowers energy operators to make data-driven decisions in real time,
            improving green energy efficiency and minimizing uncertainty, with performance
            forecasts delivered within milliseconds.
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {highlights.map((h) => (
            <div key={h.title}
              className={`group relative overflow-hidden rounded-2xl border p-6 card-glow transition-all duration-300 ${card}`}>
              <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-green-500/30 to-transparent" />
                <div className="absolute top-0 right-0 w-12 h-px bg-gradient-to-l from-green-500/30 to-transparent" />
              </div>
              <h3 className={`font-bold text-lg mb-3 ${heading}`}>{h.title}</h3>
              <p className={`text-sm leading-relaxed ${body}`}>{h.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  )
}
