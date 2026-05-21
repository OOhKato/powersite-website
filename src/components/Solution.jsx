import { useTheme } from '../ThemeContext'

const solutions = [
  { number: '01', title: 'Solution Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placeholder text for this solution card.' },
  { number: '02', title: 'Solution Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placeholder text for this solution card.' },
  { number: '03', title: 'Solution Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placeholder text for this solution card.' },
  { number: '04', title: 'Solution Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placeholder text for this solution card.' },
]

export default function Solutions() {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const card = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/40'
  const numColor = light ? 'text-green-500/20 group-hover:text-green-500/35' : 'text-green-500/15 group-hover:text-green-500/25'

  return (
    <section id="solutions" className={`py-24 px-6 relative border-t ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-14">
          <span className={`inline-block text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full mb-4 ${badge}`}>
            Solutions
          </span>
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${heading}`}>
            What We <span className="text-green-500">Offer</span>
          </h2>
          <p className={`text-base leading-relaxed ${body}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder subtitle for the solutions section goes here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((s) => (
            <div key={s.number}
              className={`group relative p-8 rounded-2xl border card-glow transition-all duration-300 overflow-hidden ${card}`}>
              <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-green-500/30 to-transparent" />
                <div className="absolute top-0 right-0 w-12 h-px bg-gradient-to-l from-green-500/30 to-transparent" />
              </div>
              <div className={`text-5xl font-black mb-5 transition-colors ${numColor}`}>{s.number}</div>
              <h3 className={`font-bold text-xl mb-3 ${heading}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed mb-5 ${body}`}>{s.description}</p>
              <a href="#contact"
                className="inline-flex items-center gap-2 text-green-600 text-sm font-semibold hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
