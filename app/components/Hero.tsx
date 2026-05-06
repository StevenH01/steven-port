'use client'

import Link from 'next/link'
import { AnimatedSection } from './AnimatedSection'
import { Panel } from './Panel'

export const Hero = () => {
  return (
    <Panel id="home" tone="page" className="relative px-6 sm:px-10 lg:px-16 pt-32 pb-28">
      <div className="max-w-[1280px] mx-auto">
        <AnimatedSection delay={0.05}>
          <p className="eyebrow">PORTFOLIO — 2026</p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.95] text-[color:var(--text-main)] mt-6">
            Hi, I'm Steven.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-7">
              <p className="text-lg sm:text-xl text-[color:var(--text-muted)] leading-relaxed max-w-2xl">
                A software engineer building thoughtful web experiences for local businesses — currently looking for my next adventure.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
              <Link href="#projects" className="btn-pill btn-olive">
                View Projects ↗
              </Link>
              <Link href="#contact" className="btn-pill btn-sage">
                Contact
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Cream feature panel */}
        <AnimatedSection delay={0.45}>
          <div className="mt-20 border-t border-[var(--border)] pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="font-display text-6xl text-[color:var(--text-main)]">1+</p>
                <p className="text-sm text-[color:var(--text-muted)] mt-2">Years building production software</p>
              </div>
              <div>
                <p className="font-display text-6xl text-[color:var(--text-main)]">8+</p>
                <p className="text-sm text-[color:var(--text-muted)] mt-2">Projects shipped end-to-end</p>
              </div>
              <div>
                <p className="font-display text-6xl text-[color:var(--text-main)]">∞</p>
                <p className="text-sm text-[color:var(--text-muted)] mt-2">Cups of coffee and counting</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Panel>
  )
}
