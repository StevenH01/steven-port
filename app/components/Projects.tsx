'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { AnimatedSection } from './AnimatedSection'

const allProjects = [
  {
    title: 'Roomies',
    description: 'A student-focused roommate finder platform using Next.js and Spring Boot.',
    tech: ['Next.js', 'Tailwind', 'Spring Boot', 'MongoDB'],
    github: 'https://github.com/yourusername/roomies',
    live: 'https://roomies.vercel.app',
  },
  {
    title: 'RedAI',
    description: 'An AI-powered red teaming assistant for cybersecurity assessments.',
    tech: ['Next.js', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/yourusername/redai',
    live: '',
  },
]

const allTags = ['All', ...new Set(allProjects.flatMap(p => p.tech))]

export const Projects = () => {
  const [activeTag, setActiveTag] = useState('All')

  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
      <div className="absolute -top-16 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[var(--bg-main)] pointer-events-none z-0" />

      <AnimatedSection>
        <h2 className="text-3xl font-bold text-[color:var(--text-main)]">Projects</h2>
        <p className="text-[color:var(--text-muted)] mt-2 max-w-xl">
          A selection of things I've built using web technologies — from full-stack platforms to internal tools.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-wrap gap-3 mb-8 z-10 relative">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                activeTag === tag
                  ? 'bg-[var(--primary)] text-white border-[var(--primary)]'
                  : 'border-[var(--border)] text-[color:var(--text-muted)] hover:bg-[var(--bg-main)]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-2 relative z-10">
        {allProjects
          .filter(p => activeTag === 'All' || p.tech.includes(activeTag))
          .map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="bg-white border border-[var(--border)] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-semibold text-[color:var(--text-main)] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[color:var(--text-muted)] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-[color:var(--text-muted)] mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[var(--bg-main)] border border-[var(--border)] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <Link href={project.github} target="_blank" className="flex items-center gap-1 text-[color:var(--primary)] hover:underline">
                      <FaGithub /> GitHub
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" className="flex items-center gap-1 text-[color:var(--primary)] hover:underline">
                      <FaExternalLinkAlt /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
      </div>
    </section>
  )
}
