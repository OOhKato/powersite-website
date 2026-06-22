import { NavLink } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { sidebarLinks } from '../nav'

export default function Sidebar() {
  const { light } = useTheme()

  const border = light ? 'border-green-500/20 bg-white/80' : 'border-green-500/10 bg-black/80'
  const label = light ? 'text-gray-400' : 'text-gray-600'
  const idle = light
    ? 'text-gray-600 hover:bg-green-500/8 hover:text-green-700'
    : 'text-gray-400 hover:bg-green-500/10 hover:text-green-400'
  const active = light
    ? 'bg-green-500/10 text-green-700 border-green-500/40'
    : 'bg-green-500/10 text-green-400 border-green-500/30'

  return (
    <aside className={`hidden lg:flex w-56 xl:w-64 shrink-0 flex-col border-r backdrop-blur-sm sticky top-[4.25rem] h-[calc(100vh-4.25rem)] px-4 py-8 ${border}`}>
      <p className={`mb-4 px-3 text-xs font-bold uppercase tracking-widest ${label}`}>
        Navigation
      </p>
      <nav className="flex flex-col gap-1">
        {sidebarLinks.map(({ label: linkLabel, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `rounded-lg border border-transparent px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? active : idle}`
            }
          >
            {linkLabel}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
