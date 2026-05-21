import { useTheme } from '../ThemeContext'

const members = [
  { initials: 'AB', name: 'Name Placeholder', role: 'Role / Position' },
  { initials: 'CD', name: 'Name Placeholder', role: 'Role / Position' },
  { initials: 'EF', name: 'Name Placeholder', role: 'Role / Position' },
  { initials: 'GH', name: 'Name Placeholder', role: 'Role / Position' },
]

export default function Team() {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const muted = light ? 'text-gray-400' : 'text-gray-600'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const card = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/40'
  const avatar = light
    ? 'border-green-500/40 bg-green-500/10 group-hover:border-green-500/70 group-hover:bg-green-500/20'
    : 'border-green-500/30 bg-green-500/10 group-hover:border-green-500/60 group-hover:bg-green-500/15'

  return (
    <section id="team" className={`py-24 px-6 relative border-t ${sectionBorder}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className={`inline-block text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full mb-4 ${badge}`}>
            Team
          </span>
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${heading}`}>
            Meet the <span className="text-green-500">Team</span>
          </h2>
          <p className={`text-base max-w-xl mx-auto ${body}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for your team section.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((m, i) => (
            <div key={i}
              className={`group p-6 rounded-2xl border card-glow transition-all duration-300 text-center ${card}`}>
              <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center text-green-600 font-black text-xl mx-auto mb-2 transition-all ${avatar}`}>
                {m.initials}
              </div>
              <div className={`text-xs mb-4 ${muted}`}>[ Photo ]</div>
              <h3 className={`font-bold text-base mb-1 ${heading}`}>{m.name}</h3>
              <div className="text-green-600 text-xs font-semibold uppercase tracking-wide mb-4">{m.role}</div>
              <p className={`text-xs leading-relaxed ${muted}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Short bio placeholder text.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
