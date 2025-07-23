'use client'

import { AnimatedSection } from './AnimatedSection'
import { FaCamera, FaHiking, FaCoffee, FaGamepad } from 'react-icons/fa'

const hobbies = [
  { icon: <FaCamera />, label: 'Photography' },
  { icon: <FaHiking />, label: 'Hiking' },
  { icon: <FaCoffee />, label: 'Trying New Cafes' },
  { icon: <FaGamepad />, label: 'Gaming & Tech' },
]

export const Hobbies = () => {
  return (
    <section id="hobbies" className="max-w-7xl mx-auto px-6 pt-24 pb-32">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-[color:var(--text-main)] mb-4">Outside of Work</h2>
        <p className="text-[color:var(--text-muted)] mb-6 max-w-xl">
          I believe in staying inspired, whether it's through nature, creativity, or a good cup of coffee. Here's a little of what I enjoy beyond the keyboard.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-[color:var(--text-muted)]">
          {hobbies.map((hob, i) => (
            <div key={i} className="flex flex-col items-center gap-2 hover:text-[color:var(--primary)] transition">
              <div className="text-3xl">{hob.icon}</div>
              <p className="text-sm">{hob.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
