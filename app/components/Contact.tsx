'use client'

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import { toast } from 'react-hot-toast'
import { Panel } from './Panel'

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', botField: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        toast.success('Message sent!')
        setForm({ name: '', email: '', message: '', botField: '' })
      } else {
        toast.error('Failed to send. Try again later.')
      }
    } catch {
      toast.error('Failed to send. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full px-0 py-4 bg-transparent border-0 border-b border-[var(--border-strong)] rounded-none text-[color:var(--text-main)] placeholder:text-[color:var(--text-muted)] focus:outline-none focus:border-[var(--olive)] focus:ring-0 transition'

  return (
    <Panel id="contact" tone="sage" className="px-6 sm:px-10 lg:px-16 pt-28 pb-32">
      <div className="max-w-[1280px] mx-auto">
        <AnimatedSection>
          <p className="eyebrow">CONTACT</p>
          <h2 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] mt-4 text-[color:var(--text-main)]">
            Let's connect.
          </h2>
          <p className="text-[color:var(--text-muted)] mt-6 max-w-xl text-base sm:text-lg">
            Want to talk about a project, an opportunity, or just say hello? Drop a note below.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-12 max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                name="botField"
                value={form.botField}
                onChange={handleChange}
                className="hidden"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className={`${inputClass} h-40 resize-none`}
              />
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-pill btn-olive disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message ↗'}
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </Panel>
  )
}
