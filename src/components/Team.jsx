import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from './Section'

const members = [
  {
    initials: 'SA',
    name: 'Sebastián Arjona',
    role: 'CEO',
    bio: 'Environmental engineer and Techstars alum with expertise in renewable energy simulation, executive coaching and international business development.',
  },
  {
    initials: 'SB',
    name: 'Sreedevi Bhaskaran, M.Sc.',
    role: 'CTO',
    bio: 'Physicist with a background in quantum computing and AI, leading hybrid optimization for climate-focused energy solutions.',
  },
  {
    initials: 'LK',
    name: 'Lukas Klein, M.Sc.',
    role: 'COO',
    bio: 'Software engineer and business informatics expert, currently researching Quantum AI for energy optimization.',
  },
]

export default function Team({ standalone = false }) {
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
    <PageSection id="team" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <PageContainer>
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            Team
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Meet the <span className="text-green-500">Team</span>
          </h2>
          <p className={`mx-auto max-w-xl text-base ${body}`}>
            An #UnlikelyPair of engineers and scientists combining energy systems, quantum
            computing and software to make renewable energy run itself.
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {members.map((m, i) => (
            <div key={i}
              className={`group rounded-2xl border p-6 text-center card-glow transition-all duration-300 ${card}`}>
              <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border text-xl font-black text-green-600 transition-all ${avatar}`}>
                {m.initials}
              </div>
              <h3 className={`mb-1 font-bold text-base ${heading}`}>{m.name}</h3>
              <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-green-600">{m.role}</div>
              <p className={`text-xs leading-relaxed ${muted}`}>
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  )
}
