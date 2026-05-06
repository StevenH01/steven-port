'use client'

import { AnimatedSection } from './AnimatedSection'
import { FaCamera, FaHiking, FaCoffee, FaGamepad } from 'react-icons/fa'
import { TopSpotifyGrid } from './TopSpotifyGrid'
import { Panel } from './Panel'

const hobbies = [
  { icon: <FaCamera />, label: 'Photography', body: 'Capturing the in-between moments.' },
  { icon: <FaHiking />, label: 'Hiking', body: 'Trails, mountains, fresh air.' },
  { icon: <FaCoffee />, label: 'New Cafés', body: 'Always hunting the next pour-over.' },
  { icon: <FaGamepad />, label: 'Gaming & Tech', body: 'Tinkering, building, playing.' },
]

export const Hobbies = () => {
  return (
    <Panel id="hobbies" tone="cream" className="px-6 sm:px-10 lg:px-16 pt-28 pb-28">
      <div className="max-w-[1280px] mx-auto">
        <AnimatedSection>
          <p className="eyebrow">OFF THE CLOCK</p>
          <h2 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] mt-4 text-[color:var(--text-main)]">
            Outside of work.
          </h2>
          <p className="text-[color:var(--text-muted)] mt-6 max-w-xl text-base sm:text-lg">
            Staying inspired through nature, creativity, and a good cup of coffee.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 border-t border-[var(--border)] pt-10">
            {hobbies.map((hob, i) => (
              <div key={i} className="group">
                <div className="text-2xl text-[color:var(--olive)] mb-5">{hob.icon}</div>
                <p className="font-display text-xl text-[color:var(--text-main)]">{hob.label}</p>
                <p className="text-sm text-[color:var(--text-muted)] mt-2 leading-relaxed">{hob.body}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <TopSpotifyGrid />
      </div>
    </Panel>
  )
}
