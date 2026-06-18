import { useTheme } from '../ThemeContext'
import { PageSection, SectionHeader } from './Section'
import MagicBento from './MagicBento'

export default function Approach({ standalone = false }) {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'

  return (
    <PageSection id="approach" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="mx-auto box-border w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            Our Approach
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Why <span className="text-green-500">Powerwise</span>
          </h2>
          <p className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed ${body}`}>
            Bring your assets, we bring the solutions. By analysing vast datasets like weather,
            prices and consumption trends, our AI forecasts the best energy schedule and acts
            on it automatically.
          </p>
        </SectionHeader>

        <MagicBento
          textAutoHide={false}
          glowColor="34, 197, 94"
          spotlightRadius={300}
          particleCount={12}
          enableTilt={false}
          clickEffect
          enableMagnetism
        />
      </div>
    </PageSection>
  )
}
