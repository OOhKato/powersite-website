import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { PageContainer } from './Section'
import { navLinks } from '../nav'

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}

export default function Navbar({ hideLinks = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { light, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navBg = scrolled
    ? light
      ? 'bg-white/95 backdrop-blur-xl border-b border-green-500/25 shadow-sm'
      : 'bg-black/95 backdrop-blur-xl border-b border-green-500/20'
    : 'bg-transparent'

  const linkColor = light
    ? 'text-gray-600 hover:text-green-600'
    : 'text-gray-400 hover:text-green-400'

  const activeLink = light ? 'text-green-600' : 'text-green-400'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <PageContainer className="flex items-center justify-between py-3 sm:py-4 !text-left">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-lg bg-green-500 opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
            <div className={`relative w-9 h-9 rounded-lg border border-green-500/60 flex items-center justify-center ${light ? 'bg-white' : 'bg-black'}`}>
              <span className="text-green-500 font-black text-xs">PW</span>
            </div>
          </div>
          <div>
            <span className={`font-black text-lg tracking-tight ${light ? 'text-gray-900' : 'text-white'}`}>Powerwise</span>
            <span className="text-green-500 font-black text-lg tracking-tight"> AI</span>
          </div>
        </Link>

        {!hideLinks && (
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 relative group ${isActive ? activeLink : linkColor}`
                }
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-green-500 group-hover:w-full transition-all duration-300" />
              </NavLink>
            ))}
          </div>
        )}

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            title={light ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${
              light
                ? 'border-gray-200 bg-gray-100 text-gray-600 hover:border-green-500/50 hover:text-green-600'
                : 'border-green-500/20 bg-green-500/5 text-gray-400 hover:border-green-500/50 hover:text-green-400'
            }`}
          >
            {light ? <MoonIcon /> : <SunIcon />}
            <span>{light ? 'Dark' : 'Light'}</span>
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className={`p-2 rounded-lg border transition-all ${
              light
                ? 'border-gray-200 text-gray-600 hover:text-green-600'
                : 'border-green-500/20 text-gray-400 hover:text-green-400'
            }`}
          >
            {light ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            className={`transition-colors ${light ? 'text-gray-600 hover:text-green-600' : 'text-gray-300 hover:text-green-400'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </PageContainer>

      {menuOpen && (
        <PageContainer className={`lg:hidden flex flex-col items-center gap-4 border-t py-5 text-center ${light ? 'bg-white border-green-500/20' : 'bg-black/98 border-green-500/20'}`}>
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors py-1 w-full ${isActive ? activeLink : linkColor}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </PageContainer>
      )}
    </nav>
  )
}
