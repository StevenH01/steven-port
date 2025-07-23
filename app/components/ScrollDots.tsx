'use client'

import { useEffect, useState } from 'react'

const sections = ['home', 'projects', 'about', 'contact']

export const ScrollDots = () => {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home'
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top < window.innerHeight / 2) current = id
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-[999] hidden md:flex flex-col gap-3">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-3 h-3 rounded-full border border-[var(--primary)] ${
            active === id ? 'bg-[var(--primary)]' : 'bg-transparent'
          } transition-all`}
          aria-label={`Scroll to ${id}`}
        />
      ))}
    </div>
  )
}
