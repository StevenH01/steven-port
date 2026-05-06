'use client'

import { useEffect, useState } from 'react'

const sections = ['home', 'projects', 'about', 'hobbies', 'contact']

export const ScrollDots = () => {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id)
          }
        },
        { threshold: 0.4 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  const handleDotClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-[60] hidden lg:flex flex-col gap-3">
      {sections.map(id => (
        <button
          key={id}
          onClick={() => handleDotClick(id)}
          className="group relative flex items-center"
          aria-label={`Scroll to ${id}`}
        >
          <span
            className="absolute right-6 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider whitespace-nowrap bg-white border border-[var(--border)] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition pointer-events-none text-[color:var(--text-muted)]"
          >
            {id}
          </span>
          <span
            className={`block rounded-full transition-all ${
              active === id
                ? 'w-3 h-3 bg-[var(--olive)]'
                : 'w-2 h-2 bg-transparent border border-[var(--border-strong)] group-hover:border-[var(--olive)]'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
