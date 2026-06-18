import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from './Section'
import thdLogo from '../assets/logos/thd.svg'
import gzdnLogo from '../assets/logos/gzdn.svg'

const members = [
  {
    initials: 'SA',
    // photo: '/team/sebastian-arjona.jpg',
    name: 'Dipl.-Ing. Sebastian Arjona',
    role: 'CEO & Co-Founder',
    bio: 'Energy systems engineer with a strong entrepreneurial background. Leads team and project management, sales, and marketing. Brings EU funding experience and an international network to drive Powerwise forward.',
    linkedin: null, // e.g. 'https://www.linkedin.com/in/username'
  },
  {
    initials: 'SB',
    // photo: '/team/sreedevi-bhaskaran.jpg',
    name: 'M.Sc. Sreedevi Bhaskaran',
    role: 'CTO & Co-Founder',
    bio: 'Technical lead with deep expertise in Quantum AI, non-supervised learning, and framework architecture. Drives product development and ensures data security across all Powerwise systems.',
    linkedin: null,
  },
  {
    initials: 'LK',
    // photo: '/team/lukas-klein.jpg',
    name: 'M.Sc. Lukas Klein',
    role: 'COO & Co-Founder',
    bio: 'Combines entrepreneurial experience with software development skills and a strong foundation in quantum computing and energy systems. Responsible for operations, front-end design, and data security.',
    linkedin: null,
  },
]

// ── Replace name/role/contribution for each advisor ───────────────────────────
const advisors = [
  {
    initials: 'XX',
    name: 'Advisor Name',
    role: 'Scientific Advisor',
    contribution: 'Describe the advisor\'s specific contribution — e.g. domain expertise, research guidance, industry access.',
  },
  {
    initials: 'YY',
    name: 'Advisor Name',
    role: 'Industry Advisor',
    contribution: 'Describe the advisor\'s specific contribution — e.g. domain expertise, research guidance, industry access.',
  },
]


const partners = [
  {
    name: 'Technische Hochschule Deggendorf',
    shortName: 'THD',
    role: 'Academic Partner',
    description: 'University partner providing research infrastructure, scientific expertise, and engineering talent.',
    url: 'https://www.th-deg.de',
    logo: thdLogo,
  },
  {
    name: 'Gründerzentrum Deggendorf',
    shortName: 'GZDN',
    role: 'Startup Incubator',
    description: 'Incubator providing office space, mentoring, and access to investor networks.',
    url: 'https://www.gruenderzentrum-niederbayern.de',
    logo: gzdnLogo,
  },
]

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

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
  const advisorCard = light
    ? 'bg-green-500/5 border-green-500/20'
    : 'bg-green-500/[0.03] border-green-500/10'
  const partnerCard = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/40'
  const avatarBase = light
    ? 'border-green-500/40 bg-green-500/10'
    : 'border-green-500/30 bg-green-500/10'
  const avatarHover = 'group-hover:border-green-500/70 group-hover:bg-green-500/20'
  const divider = light ? 'border-green-500/15' : 'border-green-500/8'
  const logoFallback = light
    ? 'border-green-500/30 bg-green-500/8 text-green-700'
    : 'border-green-500/20 bg-green-500/5 text-green-400'

  return (
    <PageSection
      id="team"
      standalone={standalone}
      className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <PageContainer className="relative z-10">

        {/* ── Header ── */}
        <SectionHeader>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Meet The People Behind <span className="text-green-500">Powerwise</span>
          </h2>
        </SectionHeader>

        {/* ── Team members ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8 mb-16 md:mb-20">
          {members.map((m, i) => (
            <div
              key={i}
              className={`group flex flex-col rounded-2xl border p-6 text-center card-glow transition-all duration-300 ${card}`}
            >
              {/* Avatar / Photo */}
              <div
                className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border overflow-hidden transition-all ${avatarBase} ${avatarHover}`}
              >
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={`Photo of ${m.name}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xl font-black text-green-600">{m.initials}</span>
                )}
              </div>

              {/* Name & role */}
              <h3 className={`mb-1 font-bold text-base ${heading}`}>{m.name}</h3>
              <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-green-600">
                {m.role}
              </div>

              {/* Bio */}
              <p className={`flex-1 text-xs leading-relaxed ${muted}`}>{m.bio}</p>

              {/* LinkedIn */}
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-500 transition-colors"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>

        <div className={`border-t mb-12 md:mb-16 ${divider}`} />

        {/* ── Advisors ── */}
        <div className="mb-16 md:mb-20">
          <h3 className={`mb-2 text-2xl font-black text-center ${heading}`}>
            Our <span className="text-green-500">Advisors</span>
          </h3>
          <br></br>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {advisors.map((a, i) => (
              <div
                key={i}
                className={`group flex items-start gap-4 rounded-2xl border p-5 transition-all duration-300 ${advisorCard}`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border text-sm font-black text-green-600 transition-all ${avatarBase} ${avatarHover}`}
                >
                  {a.initials}
                </div>

                {/* Text */}
                <div className="text-left">
                  <div className={`font-bold text-sm ${heading}`}>{a.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-2">
                    {a.role}
                  </div>
                  <p className={`text-xs leading-relaxed ${muted}`}>{a.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`border-t mb-12 md:mb-16 ${divider}`} />

        {/* ── Partners ── */}         
        <div>
          <h3 className={`mb-2 text-2xl font-black text-center ${heading}`}>
            Our <span className="text-green-500">Partners</span>
          </h3>
          <br></br>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 max-w-2xl mx-auto">
            {partners.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${p.name} website`}
                className={`group flex flex-col items-center gap-4 rounded-2xl border p-6 text-center card-glow transition-all duration-300 ${partnerCard}`}
              >
                {/* Logo with text fallback */}
                <div className="h-14 flex items-center justify-center">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-12 max-w-[160px] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling.style.display = 'flex'
                    }}
                  />
                  {/* Shown only when logo fails to load */}
                  <div
                    className={`hidden items-center justify-center h-10 px-4 rounded-xl border text-sm font-black ${logoFallback}`}
                    aria-hidden="true"
                  >
                    {p.shortName}
                  </div>
                </div>

                {/* Name, role, description */}
                <div>
                  <div className={`font-bold text-sm mb-0.5 ${heading}`}>{p.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-2">
                    {p.role}
                  </div>
                  <p className={`text-xs leading-relaxed ${muted}`}>{p.description}</p>
                </div>

                {/* Link cue */}
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 group-hover:text-green-500 transition-colors">
                  Visit website <ExternalLinkIcon />
                </span>
              </a>
            ))}
          </div>
        </div>

      </PageContainer>
    </PageSection>
  )
}
