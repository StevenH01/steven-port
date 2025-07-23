'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { AnimatedSection } from './AnimatedSection'

export const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 pt-24 pb-32">
      <AnimatedSection className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[color:var(--text-main)]">Contact Me</h2>
        <p className="text-[color:var(--text-muted)] mt-2">
          Whether it's a project, opportunity, or just to say hello — let's connect.
        </p>
      </AnimatedSection>

      <AnimatedSection className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[color:var(--text-muted)] text-base">
        <Link href="mailto:you@example.com" className="flex items-center gap-2 hover:text-[color:var(--primary)]">
          <FaEnvelope /> you@example.com
        </Link>
        <Link href="https://github.com/yourusername" target="_blank" className="flex items-center gap-2 hover:text-[color:var(--primary)]">
          <FaGithub /> GitHub
        </Link>
        <Link href="https://linkedin.com/in/yourusername" target="_blank" className="flex items-center gap-2 hover:text-[color:var(--primary)]">
          <FaLinkedin /> LinkedIn
        </Link>
      </AnimatedSection>
    </section>
  )
}
