import { useState } from 'react'
import { useTheme } from '../ThemeContext'

export default function Contact() {
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
    <section id="contact" className={`py-24 px-6 relative border-t ${sectionBorder}`}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-[500px] h-[500px] rounded-full blur-3xl ${light ? 'bg-green-500/5' : 'bg-green-500/5'}`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <span className={`inline-block text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full mb-6 ${badge}`}>
              Contact Us
            </span>
            <h2 className={`text-4xl md:text-5xl font-black mb-5 ${heading}`}>
              Get in <span className="text-green-500">Touch</span>
            </h2>
            <p className={`text-lg leading-relaxed mb-10 ${body}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder text for the contact section. Replace with your actual call-to-action.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Email', value: 'placeholder@example.com' },
                { label: 'Phone', value: '+49 000 000 0000' },
                { label: 'Location', value: 'City, Country' },
              ].map((item) => (
                <div key={item.label} className={`flex items-center gap-4 p-4 rounded-xl border ${infoCard}`}>
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${dot}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <div className={`text-xs uppercase tracking-widest font-semibold mb-0.5 ${infoLabel}`}>{item.label}</div>
                    <div className={`text-sm ${infoValue}`}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={`p-8 rounded-2xl border ${formCard}`}>
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full border-2 border-green-500 bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className={`font-black text-xl mb-2 ${formHeading}`}>Message Sent!</h3>
                <p className={`text-sm ${body}`}>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className={`font-black text-xl mb-6 ${formHeading}`}>Send a Message</h3>
                {[
                  { key: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label className={`text-xs font-semibold block mb-1.5 uppercase tracking-wide ${inputLabel}`}>{label} *</label>
                    <input type={type} required placeholder={placeholder}
                      value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${input}`} />
                  </div>
                ))}
                <div>
                  <label className={`text-xs font-semibold block mb-1.5 uppercase tracking-wide ${inputLabel}`}>Message *</label>
                  <textarea rows={4} required placeholder="Your message..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${input}`} />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 text-sm">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
