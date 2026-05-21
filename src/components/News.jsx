import { useTheme } from '../ThemeContext'

const articles = [
  { tag: 'Press Release', date: 'DD. MMM 20XX', title: 'Article Title Placeholder', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { tag: 'Research',      date: 'DD. MMM 20XX', title: 'Article Title Placeholder', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { tag: 'Update',        date: 'DD. MMM 20XX', title: 'Article Title Placeholder', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
]

export default function News() {
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
  const viewAll = light
    ? 'text-green-700 border-green-500/40 hover:bg-green-500/8'
    : 'text-green-400 border-green-500/30 hover:bg-green-500/5'

  return (
    <section id="news" className={`py-24 px-6 relative border-t ${sectionBorder} ${sectionBg}`}>
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className={`inline-block text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full mb-4 ${badge}`}>
              News
            </span>
            <h2 className={`text-4xl md:text-5xl font-black ${heading}`}>
              Latest <span className="text-green-500">Updates</span>
            </h2>
          </div>
          <a href="#" className={`text-sm font-semibold border px-4 py-2 rounded-lg transition-colors shrink-0 ${viewAll}`}>
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <article key={i}
              className={`group p-6 rounded-2xl border card-glow transition-all duration-300 flex flex-col ${card}`}>
              <div className={`w-full h-40 rounded-xl border mb-5 flex items-center justify-center ${imgPlaceholder}`}>
                <span className="text-xs uppercase tracking-widest">Image Placeholder</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold border px-2 py-0.5 rounded-md ${cardTag}`}>{a.tag}</span>
                <span className={`text-xs ${cardDate}`}>{a.date}</span>
              </div>
              <h3 className={`font-bold text-base mb-2 group-hover:text-green-600 transition-colors ${heading}`}>{a.title}</h3>
              <p className={`text-sm leading-relaxed mb-5 flex-1 ${body}`}>{a.excerpt}</p>
              <a href="#" className="inline-flex items-center gap-2 text-green-600 text-sm font-semibold hover:gap-3 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
