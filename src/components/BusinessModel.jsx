import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from './Section'

const plans = [
  {
    name: 'Optimizer',
    price: '€36,000',
    period: 'per year',
    summary: 'Real-time optimization for a single renewable project.',
    features: ['Real-time optimization', 'AI reports', 'Non-automated scheduler', 'Up to 1 RES project'],
  },
  {
    name: 'RenewBrain',
    price: '€72,000',
    period: 'per year',
    summary: 'Quantum-powered automation that scales across your portfolio.',
    features: ['Quantum optimization (3× faster)', 'Automated actions', 'Boosted self-learning', 'Up to 3 RES projects'],
    featured: true,
  },
  {
    name: 'Copilot',
    price: '€57,000',
    period: 'per year',
    summary: 'AI-automated models with a conversational assistant.',
    features: ['AI-automated models', 'Partial scheduler + add-ons', 'AI-Chat assistant', 'Up to 1 RES project'],
  },
]

export default function BusinessModel({ standalone = false }) {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const muted = light ? 'text-gray-400' : 'text-gray-600'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const card = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/40'
  const featuredCard = light
    ? 'bg-green-500/[0.06] border-green-500/55 shadow-md'
    : 'bg-green-500/[0.07] border-green-500/50'

  return (
    <PageSection id="pricing" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            Business Model
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Pricing That Scales With Your <span className="text-green-500">Savings</span>
          </h2>
          <p className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed ${body}`}>
            A subscription model built around results. As our motto goes: if you don’t save,
            you don’t pay.
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 items-stretch">
          {plans.map((plan) => (
            <div key={plan.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 md:p-8 card-glow transition-all duration-300 ${plan.featured ? `${featuredCard} md:-mt-2 md:mb-2` : card}`}>
              {plan.featured && (
                <span className="absolute top-4 right-4 rounded-full bg-green-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                  Most Popular
                </span>
              )}
              <h3 className={`font-bold text-xl mb-1 ${heading}`}>{plan.name}</h3>
              <p className={`text-sm mb-5 ${body}`}>{plan.summary}</p>
              <div className="mb-5 flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-black text-green-500">{plan.price}</span>
                <span className={`text-xs ${muted}`}>{plan.period}</span>
              </div>
              <ul className="mb-6 flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${body}`}>
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact"
                className={`mt-auto w-full rounded-xl py-3 text-center text-sm font-bold transition-all duration-200 ${
                  plan.featured
                    ? 'bg-green-500 text-white hover:bg-green-400 hover:text-black hover:shadow-lg hover:shadow-green-500/25'
                    : light
                      ? 'border border-green-500/40 bg-green-500/8 text-green-700 hover:border-green-500/70 hover:bg-green-500/15'
                      : 'border border-green-500/30 bg-green-500/5 text-green-400 hover:border-green-500/60 hover:bg-green-500/10'
                }`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <p className={`mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed ${muted}`}>
          Prices are indicative and subject to optimization performance and negotiation after
          results are demonstrated.
        </p>
      </PageContainer>
    </PageSection>
  )
}
