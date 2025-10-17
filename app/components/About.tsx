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
  { label: 'Years of Experience', value: '1+' },
  { label: 'Projects Built', value: '8+' },
  { label: 'Working Technologies', value: '4+' },
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
            Hi, I’m Steven, a passionate software engineer driven by a love for building meaningful, impactful tools. My experience spans full-stack development, with a strong focus on crafting responsive, engaging front-end interfaces.
          <br /><br />
            I’ve built websites for local businesses, led a team to deliver a full-stack e-commerce platform, and completed an internship where I improved login flows to enhance user experience. I’m always exploring new technologies and constantly learning how to create better, smarter software.
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
