import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from './Section'

const markets = [
  {
    value: '€2.9B',
    label: 'Total Addressable Market',
    description: 'The full market for AI-driven optimization across renewable energy systems.',
  },
  {
    value: '€15M',
    label: 'Serviceable Addressable Market',
    description: 'The share we can realistically serve with our Power-to-X focus.',
    featured: true,
  },
  {
    value: '€800K',
    label: 'Serviceable Obtainable Market',
    description: 'Our near-term, capturable target as we enter the market.',
  },
]

export default function MarketOpportunity({ standalone = false }) {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const card = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/40'
  const featuredCard = light
    ? 'bg-green-500/[0.06] border-green-500/50 shadow-sm'
    : 'bg-green-500/[0.06] border-green-500/45'

  return (
    <PageSection id="market" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            Market Opportunity
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            A Growing <span className="text-green-500">Market</span>
          </h2>
          <p className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed ${body}`}>
            In Germany alone there are around 2,000 energy suppliers and 160,000 enterprises
            investing in green energy (KfW Research, 2022). We target renewable producers across
            solar, wind, hydrogen and e-fuels, aiming for roughly 5%, about 8,000 businesses.
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {markets.map((m) => (
            <div key={m.label}
              className={`group relative overflow-hidden rounded-2xl border p-6 md:p-8 text-center card-glow transition-all duration-300 ${m.featured ? featuredCard : card}`}>
              <div className={`text-4xl sm:text-5xl font-black mb-2 text-green-500 ${m.featured ? 'green-glow' : ''}`}>{m.value}</div>
              <div className={`mb-3 text-xs font-semibold uppercase tracking-widest text-green-600`}>{m.label}</div>
              <p className={`text-sm leading-relaxed ${body}`}>{m.description}</p>
            </div>
          ))}
        </div>

        <p className={`mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed ${body}`}>
          Through our founder’s network, Chile becomes our first expansion market, a country
          with more than 1.9 TW of renewable potential.
        </p>
      </PageContainer>
    </PageSection>
  )
}
