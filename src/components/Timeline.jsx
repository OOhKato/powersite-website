import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from './Section'

const events = [
  {
    quarter: '2025 Q3',
    title: 'Initiale Gründungsidee & Problemvalidierung',
    description: 'Validierung der Herausforderungen im Bereich Wasserstoff- und PtX-Optimierung.',
    done: true,
  },
  {
    quarter: '2025 Q4',
    title: 'Geschäftsmodell & technische Konzeption',
    description: 'Ausarbeitung des Geschäftsmodells, erste Pilotpartnergespräche und technische Plattformkonzeption.',
    done: true,
  },
  {
    quarter: '2026 Q2',
    title: 'Proof-of-Concept Vorbereitung',
    description: 'Weiterentwicklung des MVP-Konzepts und Abstimmung mit Advisors und Partnern.',
    done: false,
  },
  {
    quarter: '2027',
    title: 'Start der MVP-Entwicklung',
    description: 'Beginn der Pilotvorbereitung und Validierung mit realen oder synthetischen Betriebsdaten.',
    done: false,
  },
]

export default function Timeline({ standalone = false }) {
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-500' : 'text-gray-500'
  const muted = light ? 'text-gray-400' : 'text-gray-600'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const lineColor = light ? 'bg-green-500/20' : 'bg-green-500/15'
  const doneCard = light
    ? 'bg-white border-green-500/40 shadow-sm'
    : 'bg-black border-green-500/30'
  const upcomingCard = light
    ? 'bg-gray-50 border-green-500/15 shadow-sm'
    : 'bg-black border-green-500/8'

  return (
    <PageSection id="timeline" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            Timeline
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Unsere <span className="text-green-500">Entwicklung</span>
          </h2>
          <p className={`mx-auto max-w-xl text-base leading-relaxed ${body}`}>
            Von der Idee bis zur autonomen Optimierung.
          </p>
        </SectionHeader>

        <div className="mx-auto w-full max-w-2xl">
          {events.map((e, i) => (
            <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                  e.done
                    ? 'border-green-500 bg-green-500'
                    : light ? 'border-green-500/30 bg-white' : 'border-green-500/25 bg-black'
                }`}>
                  {e.done ? (
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className="h-2 w-2 rounded-full bg-green-500/40" />
                  )}
                </div>
                {i < events.length - 1 && (
                  <div className={`mt-2 w-0.5 flex-1 ${lineColor}`} />
                )}
              </div>

              <div className={`flex-1 rounded-xl border p-5 sm:p-6 mb-2 transition-colors ${e.done ? doneCard : upcomingCard}`}>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-xs font-black uppercase tracking-widest text-green-500">
                    {e.quarter}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    e.done
                      ? 'bg-green-500/10 text-green-600'
                      : light ? 'bg-gray-100 text-gray-400' : 'bg-white/5 text-gray-600'
                  }`}>
                    {e.done ? 'Abgeschlossen' : 'Geplant'}
                  </span>
                </div>
                <h3 className={`mb-2 font-bold text-base ${heading}`}>{e.title}</h3>
                <p className={`text-sm leading-relaxed ${e.done ? body : muted}`}>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  )
}
