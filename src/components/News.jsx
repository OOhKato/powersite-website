import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from './Section'

const articles = [
  {
    tag: 'Event',
    date: 'Juni 2026',
    title: 'Powerwise beim Gründungs-Event Bayern',
    excerpt: 'Powerwise präsentierte sich beim Innovations-Event der Bayerischen Staatsregierung und GründungsLab Bayern. Ein wichtiger Schritt für Sichtbarkeit, Netzwerk und zukünftige Kooperationen.',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7341145358074269698/',
  },
]

export default function News({ standalone = false }) {
  const { light } = useTheme()

  const sectionBg = light ? 'bg-gray-50' : 'bg-green-950/[0.03]'
  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const card = light
    ? 'bg-white border-green-500/25 hover:border-green-500/50 shadow-sm'
    : 'bg-black border-green-500/15 hover:border-green-500/40'
  const cardTag = light ? 'border-green-500/35 bg-green-500/8 text-green-700' : 'border-green-500/25 bg-green-500/5 text-green-400'
  const cardDate = light ? 'text-gray-400' : 'text-gray-700'
  const imgPlaceholder = light ? 'bg-green-500/[0.08] border-green-500/15 text-gray-400' : 'bg-green-500/[0.06] border-green-500/10 text-gray-700'
  return (
    <PageSection id="news" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder} ${sectionBg}`}>
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            News
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Aktuelle <span className="text-green-500">Updates</span>
          </h2>
        </SectionHeader>

        <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-5">
          {articles.map((a, i) => (
            <article key={i}
              className={`group flex flex-col rounded-2xl border p-6 sm:p-8 card-glow transition-all duration-300 ${card}`}>
              <div className={`mb-5 flex h-44 w-full items-center justify-center rounded-xl border ${imgPlaceholder}`}>
                <span className="text-xs uppercase tracking-widest">Image Placeholder</span>
              </div>
              <div className="mb-3 flex items-center gap-3">
                <span className={`text-xs font-bold border px-2 py-0.5 rounded-md ${cardTag}`}>{a.tag}</span>
                <span className={`text-xs ${cardDate}`}>{a.date}</span>
              </div>
              <h3 className={`mb-3 font-bold text-xl group-hover:text-green-500 transition-colors ${heading}`}>{a.title}</h3>
              <p className={`mb-6 flex-1 text-sm leading-relaxed ${body}`}>{a.excerpt}</p>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-500 text-sm font-semibold hover:gap-3 transition-all"
              >
                Mehr lesen auf LinkedIn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  )
}
