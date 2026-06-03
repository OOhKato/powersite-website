import { useTheme } from '../ThemeContext'

const events = [
  { year: '20XX', title: 'Milestone Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for this milestone.' },
  { year: '20XX', title: 'Milestone Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for this milestone.' },
  { year: '20XX', title: 'Milestone Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for this milestone.' },
  { year: '20XX', title: 'Milestone Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for this milestone.' },
  { year: '20XX', title: 'Milestone Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder description for this milestone.' },
]

export default function Timeline() {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const card = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/35'

  return (
    <section id="timeline" className={`py-24 px-6 relative border-t ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className={`inline-block text-xs font-bold uppercase tracking-widest text-green-600 border px-3 py-1 rounded-full mb-4 ${light ? 'border-green-500/40 bg-green-500/8' : 'border-green-500/30 bg-green-500/5'}`}>
            Timeline
          </span>
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${heading}`}>
            Our <span className="text-green-500">Journey</span>
          </h2>
          <p className={`text-base max-w-xl mx-auto ${body}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder subtitle for the timeline section.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/5 via-green-500/30 to-green-500/5 md:-translate-x-1/2" />

          <div className="space-y-10">
            {events.map((e, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-6 md:gap-0 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'} pl-14 md:pl-0`}>
                  <div className={`p-5 rounded-xl border transition-colors ${card}`}>
                    <div className="text-green-600 font-black text-sm mb-1">{e.year}</div>
                    <h3 className={`font-bold text-base mb-2 ${heading}`}>{e.title}</h3>
                    <p className={`text-sm leading-relaxed ${body}`}>{e.description}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 top-5 md:-translate-x-1/2 w-3 h-3 rounded-full border-2 border-green-500 bg-green-500/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
