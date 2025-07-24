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
        {
          threshold: 0.4,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  const handleDotClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-[999] hidden md:flex flex-col gap-3">
      {sections.map(id => (
        <button
          key={id}
          onClick={() => handleDotClick(id)}
          className={`w-3 h-3 rounded-full transition-all border border-[var(--primary)] ${
            active === id ? 'bg-[var(--primary)] scale-125' : 'bg-transparent'
          }`}
          aria-label={`Scroll to ${id}`}
        />
      ))}
    </div>
  )
}
