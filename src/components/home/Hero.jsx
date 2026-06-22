import { Link } from 'react-router-dom'
import { useTheme } from '../../ThemeContext'
import { PageContainer } from '../Section'
import DarkVeil from '../DarkVeil'

export default function Hero() {
  const { light } = useTheme()

  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-600' : 'text-gray-400'
  const statBorder = light ? 'border-green-500/30 bg-green-500/[0.06]' : 'border-green-500/15 bg-green-500/[0.03]'
  const statLabel = light ? 'text-gray-500' : 'text-gray-500'
  // Green numbers read poorly on white, so darken them a touch in light mode.
  const statValue = light ? 'text-green-600' : 'text-green-500'

  // Hue shift that rotates the DarkVeil's default violet/magenta palette onto
  // the site's green. Stronger in light mode so the animation stays visible
  // against the white background.
  const veilHueShift = 115
  // In light mode invert the veil so its dark base turns white while the green
  // animation is preserved (invert + hue-rotate keeps the hue, flips lightness).
  const veilOpacity = light ? 0.5 : 0.9
  const veilFilter = light ? 'invert(1) hue-rotate(180deg)' : 'none'

  return (
    <section id="home" className="relative flex w-full min-h-screen flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Animated DarkVeil background (green-shifted) */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: veilOpacity, filter: veilFilter }}>
        <DarkVeil
          hueShift={veilHueShift}
          speed={0.5}
          warpAmount={0.1}
          noiseIntensity={0}
          scanlineIntensity={0}
          scanlineFrequency={0}
          resolutionScale={1}
        />
      </div>
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className={`w-4/5 max-w-[600px] aspect-square rounded-full blur-3xl ${light ? 'bg-green-500/8' : 'bg-green-500/8'}`} />
      </div>

      <PageContainer className="relative z-10">
        {/* Headline */}
        <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] sm:leading-[0.9] mb-5 sm:mb-6 ${heading}`}>
          OPTIMIZE THE
          <br />
          <span className="text-green-500 green-glow">FUTURE</span>
          <br />
          OF ENERGY
        </h1>

        <p className={`text-base sm:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed ${body}`}>
          AI-Algorithm for Hydrogen Production that helps you to{' '}
          <span className="text-green-600 font-semibold">save money</span> and the{' '}
          <span className="text-green-500 font-semibold">environment</span>.
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
          {[
            { value: '€2.9B', label: 'Total Addressable Market' },
            { value: '19 TWh', label: 'Energy Curtailed in Germany' },
            { value: '3×', label: 'Faster with Quantum AI' },
            { value: '2 wks', label: 'To Full Onboarding' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-2xl sm:text-3xl font-black green-glow mb-1 ${statValue}`}>{stat.value}</div>
              <div className={`text-xs ${statLabel}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
