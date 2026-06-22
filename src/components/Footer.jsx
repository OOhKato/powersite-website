import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { PageContainer } from './Section'
import gzdnLogo from '../assets/logos/gzdn.svg'
import thdLogo from '../assets/logos/thd.svg'

// base = the source colour of the SVG, so we can normalise both logos to the
// same tone in either theme (white in dark mode, dark in light mode).
const cooperationLogos = [
  { src: gzdnLogo, alt: 'Gründerzentrum Digitale Nachhaltigkeit', base: 'white', href: 'https://www.gzdn.de/' },
  { src: thdLogo, alt: 'Technische Hochschule Deggendorf', base: 'black', href: 'https://www.th-deg.de/' },
]

export default function Footer() {
  const { light } = useTheme()

  const bg = light ? 'bg-gray-50 border-green-500/20' : 'bg-black border-green-500/10'
  const logo = light ? 'text-gray-900' : 'text-white'
  const logoBox = light ? 'border-green-500/50 bg-green-500/10' : 'border-green-500/50 bg-green-500/10'
  const copy = light ? 'text-gray-400' : 'text-gray-700'
  const legal = light ? 'text-gray-400' : 'text-gray-700'
  const coopLabel = light ? 'text-gray-400' : 'text-gray-600'

  const logoFilter = (base) =>
    light
      ? base === 'white' ? 'brightness(0)' : 'none'
      : base === 'black' ? 'brightness(0) invert(1)' : 'none'

  return (
    <footer className={`w-full border-t py-10 lg:py-12 ${bg}`}>
      <PageContainer className="flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:text-left">
        {/* In Cooperation with */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <p className={`text-xs font-bold uppercase tracking-[0.2em] ${coopLabel}`}>
            In Cooperation with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 md:justify-start lg:gap-x-16">
            {cooperationLogos.map((l) => (
              <a
                key={l.alt}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.alt}
                className="inline-flex"
              >
                <img
                  src={l.src}
                  alt={l.alt}
                  style={{ filter: logoFilter(l.base) }}
                  className="h-10 w-auto object-contain opacity-60 transition-opacity duration-300 hover:opacity-100 sm:h-12"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Brand + legal */}
        <div className="flex flex-col items-center gap-4 md:items-end">
          <Link to="/" className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${logoBox}`}>
              <span className="text-green-500 font-black text-xs">PW</span>
            </div>
            <span className={`font-black text-lg ${logo}`}>Powerwise<span className="text-green-500"> AI</span></span>
          </Link>
          <div className={`text-xs ${copy} md:text-right`}>
            © 2026 Powerwise AI
            <span className="mx-2">·</span>
            <Link to="/imprint" className={`transition-colors hover:text-green-500 ${legal}`}>Imprint</Link>
            <span className={legal}> · </span>
            <Link to="/data-policy" className={`transition-colors hover:text-green-500 ${legal}`}>Data Policy</Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}
