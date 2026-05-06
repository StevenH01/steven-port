'use client'

import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { AnimatedSection } from './AnimatedSection'
import { Panel } from './Panel'

const allProjects = [
  {
    title: 'RedAI',
    description: 'An AI-powered red teaming assistant for cybersecurity assessments.',
    tech: ['Next.js', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/yourusername/redai',
    live: '',
  },
  {
    title: 'Prosper AutoWerks',
    description:
      'Full-stack app for a local tint/wrap shop: automated quotes, email/SMS notifications, and secure auth with Google.',
    tech: ['Next.js', 'Supabase', 'Nodemailer', 'vtext', 'Google OAuth 2.0', 'Google Calendar API'],
    github: 'https://github.com/StevenH01/prosper-auto',
    live: 'https://prosperautowerks.com/',
  },
  {
    title: 'F1 Prediction Model',
    description:
      'Machine learning pipeline to predict race outcomes using historical driver/team data, qualifying results, and track features.',
    tech: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'Matplotlib', 'FastAPI'],
    github: 'https://github.com/StevenH01/f1-prediction-model',
  },
  {
    title: 'Roomies',
    description: 'A student-focused roommate finder platform — currently in progress.',
    tech: ['Next.js', 'Tailwind', 'MaterialUi', 'MongoDB'],
    github: 'https://github.com/StevenH01/roomies-frontend',
    live: 'roomies-frontend-eight.vercel.app',
  },
  {
    title: 'The Lamby Shop',
    description:
      'Full-scale e-commerce site with secure checkout and inventory management; serverless backend on AWS and Stripe payments.',
    tech: ['React', 'Next.js', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'Stripe', 'Figma'],
    github: 'https://github.com/zzzkevon/the-lamby-shop',
    live: 'https://the-lamby-shop.vercel.app/',
  },
]

const allTags = ['All', ...new Set(allProjects.flatMap(p => p.tech))]

export const Projects = () => {
  const [activeTag, setActiveTag] = useState('All')
  const filtered = allProjects.filter(p => activeTag === 'All' || p.tech.includes(activeTag))

  return (
    <Panel id="projects" tone="cream" className="px-6 sm:px-10 lg:px-16 pt-28 pb-28">
      <div className="max-w-[1280px] mx-auto">
        <AnimatedSection>
          <p className="eyebrow">PROJECTS</p>
          <h2 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] mt-4 text-[color:var(--text-main)]">
            Selected work.
          </h2>
          <p className="text-[color:var(--text-muted)] mt-6 max-w-xl text-base sm:text-lg">
            A handful of things I've built — full-stack platforms, ML pipelines, and tools for local businesses.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mt-10">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs border transition ${
                  activeTag === tag
                    ? 'bg-[var(--olive)] text-white border-[var(--olive)]'
                    : 'bg-[var(--bg-card)] text-[color:var(--text-muted)] border-[var(--border-strong)] hover:text-[color:var(--olive)] hover:border-[var(--olive)]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Numbered list, divider style */}
        <div className="mt-16 border-t border-[var(--border)]">
          {filtered.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.05}>
              <div className="group grid grid-cols-12 gap-4 sm:gap-8 py-8 sm:py-10 border-b border-[var(--border)] hover:bg-[var(--bg-card)] px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl">
                <div className="col-span-12 sm:col-span-1 text-[color:var(--text-subtle)] text-sm font-mono pt-1">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="col-span-12 sm:col-span-5">
                  <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--text-main)]">
                    {project.title}
                  </h3>
                </div>

                <div className="col-span-12 sm:col-span-4">
                  <p className="text-sm text-[color:var(--text-muted)] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-[color:var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border)] px-2 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-2 flex sm:justify-end items-start gap-2 pt-1">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      aria-label="GitHub"
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border-strong)] text-[color:var(--text-main)] hover:bg-[var(--olive)] hover:text-white hover:border-[var(--olive)] transition"
                    >
                      <FaGithub size={14} />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      aria-label="Live demo"
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border-strong)] text-[color:var(--text-main)] hover:bg-[var(--olive)] hover:text-white hover:border-[var(--olive)] transition"
                    >
                      <FaExternalLinkAlt size={12} />
                    </Link>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Panel>
  )
}
