import { useTheme } from '../../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from '../Section'
import MagicBento from '../MagicBento'

const aboutCards = [
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

  return (
    <PageSection id="about" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            About Us
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            <span className="text-green-500">Who</span> We Are
          </h2>
          <p className={`mx-auto max-w-3xl text-base sm:text-lg leading-relaxed ${body}`}>
            Powerwise empowers energy operators to make data-driven decisions in real time,
            improving green energy efficiency and minimizing uncertainty, with performance
            forecasts delivered within milliseconds.
          </p>
        </SectionHeader>

        <MagicBento
          cards={aboutCards}
          layout="cols-4"
          textAutoHide={false}
          glowColor="34, 197, 94"
          spotlightRadius={300}
          particleCount={10}
          enableTilt={false}
          clickEffect
          enableMagnetism
        />
      </PageContainer>
    </PageSection>
  )
}
