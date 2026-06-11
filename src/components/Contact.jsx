import { useState } from 'react'
import { useTheme } from '../ThemeContext'
import { PageSection, PageContainer, SectionHeader } from './Section'

export default function Contact({ standalone = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const { light } = useTheme()

  const sectionBorder = light ? 'border-green-500/20' : 'border-green-500/8'
  const heading = light ? 'text-gray-900' : 'text-white'
  const body = light ? 'text-gray-600' : 'text-gray-400'
  const badge = light ? 'border-green-500/40 bg-green-500/8 text-green-700' : 'border-green-500/30 bg-green-500/5 text-green-400'
  const infoCard = light ? 'border-green-500/20 bg-white shadow-sm' : 'border-green-500/10 bg-black'
  const infoLabel = light ? 'text-gray-400' : 'text-gray-600'
  const infoValue = light ? 'text-gray-700' : 'text-gray-300'
  const dot = light ? 'border-green-500/30 bg-green-500/8' : 'border-green-500/20 bg-green-500/5'
  const formCard = light ? 'border-green-500/25 bg-white shadow-sm' : 'border-green-500/20 bg-black'
  const formHeading = light ? 'text-gray-900' : 'text-white'
  const inputLabel = light ? 'text-gray-500' : 'text-gray-600'
  const input = light
    ? 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-green-500/60'
    : 'bg-white/[0.03] border-green-500/15 text-white placeholder-gray-700 focus:border-green-500/50'

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageSection id="contact" standalone={standalone} className={`relative ${standalone ? '' : 'border-t'} ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className={`aspect-square w-4/5 max-w-[500px] rounded-full blur-3xl ${light ? 'bg-green-500/5' : 'bg-green-500/5'}`} />
      </div>

      <PageContainer className="relative z-10">
        <SectionHeader>
          <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
            Contact Us
          </span>
          <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
            Get in <span className="text-green-500">Touch</span>
          </h2>
          <p className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed ${body}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder text for the contact section. Replace with your actual call-to-action.
          </p>
        </SectionHeader>

        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 md:gap-6">
          {[
            { label: 'Email', value: 'placeholder@example.com' },
            { label: 'Phone', value: '+49 000 000 0000' },
            { label: 'Location', value: 'City, Country' },
          ].map((item) => (
            <div key={item.label} className={`flex w-full flex-col items-center gap-3 rounded-xl border p-5 text-center ${infoCard}`}>
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg border shrink-0 ${dot}`}>
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              </div>
              <div>
                <div className={`mb-0.5 text-xs font-semibold uppercase tracking-widest ${infoLabel}`}>{item.label}</div>
                <div className={`text-sm ${infoValue}`}>{item.value}</div>
              </div>
            </div>
          ))}

          <div className={`w-full rounded-2xl border p-6 md:p-8 text-center ${formCard}`}>
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-green-500 bg-green-500/10">
                  <svg className="h-7 w-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className={`mb-2 text-xl font-black ${formHeading}`}>Message Sent!</h3>
                <p className={`text-sm ${body}`}>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 text-center">
                <h3 className={`text-xl font-black ${formHeading}`}>Send a Message</h3>
                {[
                  { key: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key} className="w-full">
                    <label className={`mb-2 block text-xs font-semibold uppercase tracking-wide ${inputLabel}`}>{label} *</label>
                    <input type={type} required placeholder={placeholder}
                      value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition-colors ${input}`} />
                  </div>
                ))}
                <div className="w-full">
                  <label className={`mb-2 block text-xs font-semibold uppercase tracking-wide ${inputLabel}`}>Message *</label>
                  <textarea rows={4} required placeholder="Your message..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full resize-none rounded-xl border px-4 py-3 text-sm focus:outline-none transition-colors ${input}`} />
                </div>
                <button type="submit"
                  className="w-full rounded-xl bg-green-500 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-green-400 hover:text-black hover:shadow-lg hover:shadow-green-500/25">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </PageContainer>
    </PageSection>
  )
}
