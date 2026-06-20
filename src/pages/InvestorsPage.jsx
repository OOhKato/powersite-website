import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SubpageLayout from '../components/SubpageLayout'
import InvestorCTA from '../components/InvestorCTA'
import { ParticleCard } from '../components/MagicBento'
import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from '../components/Section'

function useGlowCards(gridRef) {
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const onMove = (e) => {
      grid.querySelectorAll('.inv-glow-card').forEach(card => {
        const rect = card.getBoundingClientRect()
        const dist = Math.max(0,
          Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2))
          - Math.max(rect.width, rect.height) / 2
        )
        const intensity = dist < 150 ? 1 : dist < 350 ? (350 - dist) / 200 : 0
        card.style.setProperty('--glow-x', `${((e.clientX - rect.left) / rect.width) * 100}%`)
        card.style.setProperty('--glow-y', `${((e.clientY - rect.top) / rect.height) * 100}%`)
        card.style.setProperty('--glow-intensity', intensity.toString())
        card.style.setProperty('--glow-radius', '250px')
        card.style.setProperty('--glow-color', '34, 197, 94')
      })
    }
    const onLeave = () => {
      grid.querySelectorAll('.inv-glow-card').forEach(card =>
        card.style.setProperty('--glow-intensity', '0')
      )
    }
    document.addEventListener('mousemove', onMove)
    grid.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      grid.removeEventListener('mouseleave', onLeave)
    }
  }, [gridRef])
}

/* ── 1. Market Size ─────────────────────────────────────────────────────── */
const marketMetrics = [
  {
    value: '€2.9B',
    label: 'Total Addressable Market',
    source: 'BloombergNEF, 2024',
    description: 'Global AI-driven optimization across all renewable energy systems.',
  },
  {
    value: '€15M',
    label: 'Serviceable Addressable Market',
    source: 'Internal estimate based on KfW Research, 2022',
    description: 'Power-to-X operators in DACH region plus Chile expansion market.',
    featured: true,
  },
  {
    value: '€800K',
    label: 'Serviceable Obtainable Market',
    source: 'Internal projection',
    description: 'Near-term capturable share targeting our first 20 enterprise clients.',
  },
]

const curtailmentData = [
  { flag: 'DE', country: 'Germany', loss: '€3.1B', twh: '19 TWh', source: 'Bundesnetzagentur, 2024' },
  { flag: 'GB', country: 'United Kingdom', loss: '~€1B', twh: '–', source: 'Ofgem / National Grid ESO, 2024' },
  { flag: 'CL', country: 'Chile', loss: '1.9 TW', twh: 'potential', source: 'Comision Nacional de Energía, 2023' },
]

function MarketSize() {
  const { light } = useTheme()
  const gridRef = useRef(null)
  useGlowCards(gridRef)

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const muted = light ? 'text-gray-400' : 'text-gray-600'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const card = light ? 'bg-white border-green-500/25 shadow-sm' : 'bg-black border-green-500/15'
  const featuredCard = light ? 'bg-green-500/[0.06] border-green-500/50 shadow-sm' : 'bg-green-500/[0.06] border-green-500/45'
  const valueColor = light ? 'text-green-600' : 'text-green-500'
  const tableRow = light ? 'border-green-500/15 hover:bg-green-500/[0.03]' : 'border-green-500/10 hover:bg-green-500/[0.04]'

  return (
    <PageSection id="market-size" className={`relative border-t ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            Market Size
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            A Multi-Billion Euro <span className="text-green-500">Opportunity</span>
          </h2>
          <p className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed ${body}`}>
            Renewable curtailment is not a niche problem. Across Europe alone, billions in
            potential revenue are lost every year because energy systems cannot react fast enough.
            Powerwise targets this gap directly.
          </p>
        </SectionHeader>

        {/* TAM / SAM / SOM */}
        <div ref={gridRef} className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 mb-12">
          {marketMetrics.map((m) => (
            <ParticleCard
              key={m.label}
              className={`inv-glow-card magic-bento-card--border-glow rounded-2xl border p-6 md:p-8 text-center transition-all duration-300 ${m.featured ? featuredCard : card}`}
              glowColor="34, 197, 94"
              particleCount={8}
              enableTilt={false}
              clickEffect={false}
              enableMagnetism={false}
            >
              <div className={`text-4xl sm:text-5xl font-black mb-2 ${valueColor} ${m.featured ? 'green-glow' : ''}`}>{m.value}</div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-green-600">{m.label}</div>
              <p className={`text-sm leading-relaxed mb-3 ${body}`}>{m.description}</p>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${light ? 'border-gray-200 text-gray-400 bg-gray-50' : 'border-white/10 text-gray-600'}`}>
                Source: {m.source}
              </span>
            </ParticleCard>
          ))}
        </div>

        {/* Curtailment data table */}
        <div className={`rounded-2xl border overflow-hidden ${light ? 'bg-white border-green-500/20 shadow-sm' : 'bg-black border-green-500/10'}`}>
          <div className={`px-6 py-4 border-b ${light ? 'border-green-500/15 bg-green-500/[0.03]' : 'border-green-500/10 bg-green-500/[0.04]'}`}>
            <h3 className={`font-bold text-base ${heading}`}>Curtailment Losses by Market</h3>
            <p className={`text-xs mt-0.5 ${muted}`}>Documented waste from renewable overproduction that Powerwise directly addresses.</p>
          </div>
          <div className="divide-y divide-green-500/[0.08]">
            {curtailmentData.map((row) => (
              <div key={row.country} className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 transition-colors ${tableRow}`}>
                <div className="flex items-center gap-3">
                  <span className="text-xl">{row.flag === 'DE' ? '🇩🇪' : row.flag === 'GB' ? '🇬🇧' : '🇨🇱'}</span>
                  <span className={`font-semibold text-sm ${heading}`}>{row.country}</span>
                </div>
                <div className="flex items-center gap-6 sm:gap-10">
                  <div className="text-center">
                    <div className={`text-lg font-black ${valueColor}`}>{row.loss}</div>
                    <div className={`text-xs ${muted}`}>{row.twh === 'potential' ? 'renewable potential' : row.twh === '–' ? 'revenue lost' : 'curtailed'}</div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border whitespace-nowrap ${light ? 'border-gray-200 text-gray-400 bg-gray-50' : 'border-white/10 text-gray-600'}`}>
                    {row.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className={`px-6 py-3 border-t text-xs ${light ? 'border-green-500/15 text-gray-400' : 'border-green-500/10 text-gray-600'}`}>
            Germany alone has ~2,000 energy suppliers and 160,000 enterprises investing in green energy. We target roughly 5% of that, around 8,000 businesses. (KfW Research, 2022)
          </div>
        </div>
      </PageContainer>
    </PageSection>
  )
}

/* ── 2. Traction ────────────────────────────────────────────────────────── */
const tractionItems = [
  {
    metric: '19 TWh',
    context: 'curtailed annually in Germany',
    detail: 'Problem validated at scale. Our target market is not theoretical: German grid operators documented 19 TWh in curtailment losses in 2024 alone.',
    source: 'Bundesnetzagentur, 2024',
  },
  {
    metric: '2 weeks',
    context: 'to full system integration',
    detail: 'Our no-code onboarding gets a Power-to-X operator fully connected and optimising within two weeks, with no disruption to existing infrastructure.',
    source: 'Internal specification',
  },
  {
    metric: '3×',
    context: 'faster scheduling vs. classical solvers',
    detail: 'Quantum-enhanced combinatorial optimisation delivers energy schedules three times faster than classical linear programming approaches.',
    source: 'Internal benchmark',
  },
  {
    metric: '160,000',
    context: 'enterprises investing in green energy in Germany',
    detail: 'Our addressable customer base is well-established. We target the subset running Power-to-X assets: electrolysers, hydrogen storage, e-fuels.',
    source: 'KfW Research, 2022',
  },
]

function Traction() {
  const { light } = useTheme()
  const gridRef = useRef(null)
  useGlowCards(gridRef)

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const card = light ? 'bg-white border-green-500/25 shadow-sm' : 'bg-black border-green-500/15'
  const valueColor = light ? 'text-green-600' : 'text-green-500'

  return (
    <PageSection id="traction" className={`relative border-t ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            Traction
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Grounded in <span className="text-green-500">Verifiable Numbers</span>
          </h2>
          <p className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed ${body}`}>
            Every metric below is traceable to a public source or an internal specification
            we can demonstrate live. No projections dressed up as achievements.
          </p>
        </SectionHeader>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tractionItems.map((item) => (
            <ParticleCard
              key={item.metric}
              className={`inv-glow-card magic-bento-card--border-glow rounded-2xl border p-6 md:p-8 ${card}`}
              glowColor="34, 197, 94"
              particleCount={8}
              enableTilt={false}
              clickEffect={false}
              enableMagnetism={false}
            >
              <div className={`text-4xl font-black mb-1 ${valueColor}`}>{item.metric}</div>
              <div className={`text-sm font-semibold mb-3 ${heading}`}>{item.context}</div>
              <p className={`text-sm leading-relaxed mb-4 ${body}`}>{item.detail}</p>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${light ? 'border-gray-200 text-gray-400 bg-gray-50' : 'border-white/10 text-gray-600'}`}>
                {item.source}
              </span>
            </ParticleCard>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  )
}

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function InvestorsPage() {
  return (
    <SubpageLayout>
      <MarketSize />
      <Traction />
      <InvestorCTA standalone />
    </SubpageLayout>
  )
}
