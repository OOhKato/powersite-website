import { useTheme } from '../ThemeContext'

export default function Footer() {
  const { light } = useTheme()

  const bg = light ? 'bg-gray-50 border-green-500/20' : 'bg-black border-green-500/10'
  const logo = light ? 'text-gray-900' : 'text-white'
  const logoBox = light ? 'border-green-500/50 bg-green-500/10' : 'border-green-500/50 bg-green-500/10'
  const link = light ? 'text-gray-500 hover:text-green-600' : 'text-gray-600 hover:text-green-400'
  const copy = light ? 'text-gray-400' : 'text-gray-700'
  const legal = light ? 'text-gray-300' : 'text-gray-800'

  return (
    <footer className={`border-t py-10 px-6 ${bg}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${logoBox}`}>
            <span className="text-green-500 font-black text-xs">PW</span>
          </div>
          <span className={`font-black text-lg ${logo}`}>Powerwise<span className="text-green-500"> AI</span></span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Timeline', href: '#timeline' },
            { label: 'Solutions', href: '#solutions' },
            { label: 'News', href: '#news' },
            { label: 'Team', href: '#team' },
            { label: 'Contact Us', href: '#contact' },
          ].map(({ label, href }) => (
            <a key={label} href={href} className={`transition-colors ${link}`}>{label}</a>
          ))}
        </div>

        <div className={`text-xs text-center md:text-right ${copy}`}>
          © 2026 Powerwise AI — Hochschulprojekt
          <br />
          <span className={legal}>Impressum · Datenschutz</span>
        </div>
      </div>
    </footer>
  )
}
