'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-page)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl text-[color:var(--text-main)] tracking-tight">
          Steven Ho<span className="text-[color:var(--olive)]">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm text-[color:var(--text-body)] hover:text-[color:var(--olive)] transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="#contact" className="btn-pill btn-olive">
            Get in touch ↗
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-full text-[color:var(--text-main)]"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mx-6 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <ul className="bg-white border border-[var(--border)] rounded-2xl px-3 py-3 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-[color:var(--text-body)] hover:bg-[var(--bg-cream)] hover:text-[color:var(--olive)] transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
