'use client'

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import { toast } from 'react-hot-toast'

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
        toast.success('✅ Message sent!')
        setForm({ name: '', email: '', message: '', botField: '' })
      } else {
        toast.error('❌ Failed to send. Try again later.')
      }
    } catch {
      toast.error('❌ Failed to send. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-[color:var(--text-main)] mb-6">Let's Connect</h2>
        <p className="text-[color:var(--text-muted)] mb-10">
          Want to talk about a project, opportunity, or just say hello? Fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field (hidden from users) */}
          <input
            type="text"
            name="botField"
            value={form.botField}
            onChange={handleChange}
            className="hidden"
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[var(--border)] rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[var(--border)] rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[var(--border)] rounded h-28"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-[var(--primary)] text-white rounded hover:bg-[#174db8] disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </AnimatedSection>
    </section>
  )
}
