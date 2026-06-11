import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { PageContainer } from './Section'

export default function Hero() {
  const { light } = useTheme()

  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-600' : 'text-gray-400'
  const muted = light ? 'text-gray-400' : 'text-gray-600'
  const statBorder = light ? 'border-green-500/25 bg-green-500/5' : 'border-green-500/15 bg-green-500/[0.03]'
  const statLabel = light ? 'text-gray-500' : 'text-gray-500'

  return (
    <section id="home" className="relative flex w-full min-h-screen flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className={`w-4/5 max-w-[600px] aspect-square rounded-full blur-3xl ${light ? 'bg-green-500/5' : 'bg-green-500/8'}`} />
      </div>

      <PageContainer className="relative z-10">
        {/* Badge */}
        <div className={`inline-flex flex-wrap items-center justify-center gap-2.5 border rounded-full px-4 sm:px-5 py-2 mb-8 max-w-full ${light ? 'border-green-500/40 bg-green-500/8' : 'border-green-500/30 bg-green-500/5'}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-green-600 text-xs font-semibold tracking-wider uppercase">
            Placeholder Tagline — Your Slogan Here
          </span>
        </div>

        {/* Headline */}
        <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] sm:leading-[0.9] mb-5 sm:mb-6 ${heading}`}>
          OPTIMIZE THE
          <br />
          <span className="text-green-500 green-glow">FUTURE</span>
          <br />
          OF ENERGY
        </h1>

        <p className={`text-base sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed ${body}`}>
          AI-Algorithm for Hydrogen Production that helps you to{' '}
          <span className="text-green-600 font-semibold">save money</span> and the{' '}
          <span className="text-green-500 font-semibold">environment</span>.
        </p>
        <p className={`text-sm max-w-xl mx-auto mb-8 sm:mb-10 px-1 ${muted}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for your startup goes here.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16 w-full sm:w-auto px-1">
          <Link to="/contact"
            className="group w-full sm:w-auto justify-center px-8 py-4 bg-green-500 text-white font-bold text-sm rounded-xl hover:bg-green-400 hover:text-black transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 flex items-center gap-2">
            Get Started
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link to="/solutions"
            className={`w-full sm:w-auto text-center px-8 py-4 border font-semibold text-sm rounded-xl transition-all duration-200 ${
              light
                ? 'border-green-500/40 bg-green-500/8 text-green-700 hover:border-green-500/70 hover:bg-green-500/15'
                : 'border-green-500/30 bg-green-500/5 text-green-400 hover:border-green-500/60 hover:bg-green-500/10'
            }`}>
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className={`border rounded-2xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 ${statBorder}`}>
          {['Placeholder Stat', 'Placeholder Stat', 'Placeholder Stat', 'Placeholder Stat'].map((label, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-green-500 green-glow mb-1">—</div>
              <div className={`text-xs ${statLabel}`}>{label}</div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* Scroll cue */}
      <Link
        to="/timeline"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 ${muted}`}
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
    </section>
  )
}
