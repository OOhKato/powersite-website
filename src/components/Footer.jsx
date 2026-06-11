import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { PageContainer } from './Section'
import { navLinks } from '../nav'

export default function Footer() {
  const { light } = useTheme()

  const bg = light ? 'bg-gray-50 border-green-500/20' : 'bg-black border-green-500/10'
  const logo = light ? 'text-gray-900' : 'text-white'
  const logoBox = light ? 'border-green-500/50 bg-green-500/10' : 'border-green-500/50 bg-green-500/10'
  const link = light ? 'text-gray-500 hover:text-green-600' : 'text-gray-600 hover:text-green-400'
  const copy = light ? 'text-gray-400' : 'text-gray-700'
  const legal = light ? 'text-gray-300' : 'text-gray-800'

  return (
    <footer className={`w-full border-t py-10 lg:py-12 ${bg}`}>
      <PageContainer className="flex flex-col items-center justify-center gap-8">
        <Link to="/" className="flex items-center justify-center gap-2">
          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${logoBox}`}>
            <span className="text-green-500 font-black text-xs">PW</span>
          </div>
          <span className={`font-black text-lg ${logo}`}>Powerwise<span className="text-green-500"> AI</span></span>
        </Link>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
          {navLinks.map(({ label, to }) => (
            <Link key={to} to={to} className={`transition-colors ${link}`}>{label}</Link>
          ))}
        </div>

        <div className={`text-xs text-center ${copy}`}>
          © 2026 Powerwise AI — Hochschulprojekt
          <br />
          <span className={legal}>Impressum · Datenschutz</span>
        </div>
      </PageContainer>
    </footer>
  )
}
