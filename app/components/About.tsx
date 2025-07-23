'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedSection } from './AnimatedSection'

const techStack = [
  'Next.js',
  'React',
  'Tailwind CSS',
  'TypeScript',
  'MongoDB',
  'Spring Boot',
  'FastAPI',
  'Git',
]

const stats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Projects Built', value: '15+' },
  { label: 'Technologies Mastered', value: '10+' },
]

export const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 pt-24 pb-16">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-[color:var(--text-main)]">About Me</h2>
        <p className="text-[color:var(--text-muted)] mt-2 max-w-xl">
          A little background about who I am, what I do, and how I got here.
        </p>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row items-start gap-12 mt-10">
        <AnimatedSection className="flex-1">
          <p className="text-[color:var(--text-muted)] text-base leading-relaxed">
            I’m Steven, a passionate developer who enjoys crafting clean, responsive, and interactive user interfaces.
            My background blends full-stack web development with a strong appreciation for frontend polish and performance.
            <br /><br />
            I’ve worked on student-focused platforms, AI-driven tools, and business websites. I love building tools that are both functional and beautiful — and I’m always learning something new.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex-shrink-0">
          <Image
            src="/profile-placeholder.png"
            alt="Steven Ho"
            width={320}
            height={320}
            className="rounded-xl shadow-md"
          />
        </AnimatedSection>
      </div>

      <AnimatedSection className="mt-12">
        <h3 className="text-xl font-semibold text-[color:var(--text-main)] mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-[var(--bg-main)] border border-[var(--border)] text-sm text-[color:var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl font-bold text-[color:var(--primary)]">{stat.value}</p>
            <p className="text-[color:var(--text-muted)]">{stat.label}</p>
          </div>
        ))}
      </AnimatedSection>
    </section>
  )
}
