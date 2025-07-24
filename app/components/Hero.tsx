'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedSection } from './AnimatedSection'

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-24"
    >
      {/* Left Text Block */}
      <div className="z-10 max-w-xl">
        <AnimatedSection delay={0.1}>
          <p className="text-[color:var(--text-muted)] text-sm md:text-base mb-2">
            👋 Hi there, my name is
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h1 className="text-[color:var(--text-main)] text-4xl sm:text-5xl font-bold leading-tight">
            Steven Ho
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <h2 className="text-[color:var(--text-muted)] text-xl sm:text-2xl mt-2">
            I build clean, responsive UIs with performance and polish.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex gap-4 mt-6">
            <Link
              href="#projects"
              className="px-6 py-2 bg-[var(--primary)] text-white font-medium rounded-lg shadow hover:bg-[#174db8] transition"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2 border border-[var(--primary)] text-[color:var(--primary)] font-medium rounded-lg hover:bg-[var(--primary)] hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Profile Image */}
      <AnimatedSection delay={0.6}>
        <Image
          src="/profile-placeholder.png"
          alt="Steven Ho illustration"
          width={320}
          height={320}
          className="rounded-xl shadow-md mb-10 md:mb-0"
        />
      </AnimatedSection>

      {/* Background Accent */}
      <div className="absolute top-[-100px] -left-[100px] w-[500px] h-[500px] bg-[var(--primary)] opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Scroll Down Cue */}
      <AnimatedSection delay={0.7}>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <a href="#projects" aria-label="Scroll to Projects">
            <div className="w-6 h-10 border-2 border-[var(--primary)] rounded-full flex items-center justify-center animate-bounce">
              <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
            </div>
          </a>
        </div>
      </AnimatedSection>
    </section>
  )
}
