'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-main)] backdrop-blur-md border-b border-[var(--border)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <motion.div
          className="text-xl font-bold text-[color:var(--text-main)]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Steven Ho
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(({ label, href }) => (
            <motion.li
              key={label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={href}
                className="text-[color:var(--text-muted)] hover:text-[color:var(--text-main)] transition-colors font-medium"
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-[var(--bg-main)] border-t border-[var(--border)]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className="block text-[color:var(--text-muted)] hover:text-[color:var(--text-main)] transition-colors font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  )
}
