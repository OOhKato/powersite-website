import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer } from './Section'

const useOfFunds = [
  { pct: 50, label: 'Product Development & Pilot Testing' },
  { pct: 30, label: 'Infrastructure & Operations' },
  { pct: 10, label: 'Marketing & Sales' },
  { pct: 10, label: 'Expansion & Growth Initiatives' },
]

export default function InvestorCTA({ standalone = false }) {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-600' : 'text-gray-400'
  const muted = light ? 'text-gray-500' : 'text-gray-500'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const panel = light ? 'border-green-500/25 bg-white shadow-sm' : 'border-green-500/15 bg-black'
  const track = light ? 'bg-green-500/10' : 'bg-green-500/10'
  const pctColor = light ? 'text-green-600' : 'text-green-500'

  return (
    <PageSection id="investors" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className={`aspect-square w-4/5 max-w-[600px] rounded-full blur-3xl ${light ? 'bg-green-500/5' : 'bg-green-500/8'}`} />
      </div>

      <PageContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 text-left">
          {/* Pitch */}
          <div>
            <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
              Ready to Invest?
            </span>
            <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight ${heading}`}>
              Fuel the Future of <span className="text-green-500">Energy</span>
            </h2>
            <p className={`mb-8 max-w-xl text-base sm:text-lg leading-relaxed ${body}`}>
              We’re raising to turn wasted renewable energy into value. See the full numbers,
              roadmap and go-to-market in our pitch deck, and let’s talk about building the
              autopilot for green energy together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact"
                className="group justify-center px-7 py-4 bg-green-500 text-white font-bold text-sm rounded-xl hover:bg-green-400 hover:text-black transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 flex items-center gap-2">
                Get in contact
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

            </div>
          </div>

          {/* Use of funds */}
          <div className={`rounded-2xl border p-6 md:p-8 ${panel}`}>
            <h3 className={`mb-1 font-bold text-lg ${heading}`}>Use of Funds</h3>
            <p className={`mb-6 text-sm ${muted}`}>How investment translates into growth.</p>
            <div className="flex flex-col gap-5">
              {useOfFunds.map((f) => (
                <div key={f.label}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-3">
                    <span className={`text-sm font-medium ${body}`}>{f.label}</span>
                    <span className={`text-sm font-black ${pctColor}`}>{f.pct}%</span>
                  </div>
                  <div className={`h-2 w-full overflow-hidden rounded-full ${track}`}>
                    <div className="h-full rounded-full bg-green-500" style={{ width: `${f.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </PageSection>
  )
}
