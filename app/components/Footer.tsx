'use client'

import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[color:var(--text-muted)]">
      <div className="flex flex-wrap items-center gap-6 md:gap-8">
        <Link href="#projects" className="hover:text-[color:var(--olive)] transition">Projects</Link>
        <Link href="#about" className="hover:text-[color:var(--olive)] transition">About</Link>
        <Link href="#hobbies" className="hover:text-[color:var(--olive)] transition">Hobbies</Link>
        <Link href="https://github.com/StevenH01" target="_blank" className="hover:text-[color:var(--olive)] transition">GitHub ↗</Link>
        <Link href="https://www.linkedin.com/in/steven-h0/" target="_blank" className="hover:text-[color:var(--olive)] transition">LinkedIn ↗</Link>
        <Link href="/Ho_Steven_Resume_2025.pdf" target="_blank" className="hover:text-[color:var(--olive)] transition">Resume ↗</Link>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-[color:var(--text-subtle)]">
          © {new Date().getFullYear()} Steven Ho
        </span>
        <Link href="mailto:steven09ho@gmail.com" className="btn-pill btn-olive text-xs px-4 py-2">
          Email ↗
        </Link>
        <Link href="#contact" className="btn-pill btn-sage text-xs px-4 py-2">
          Contact
        </Link>
      </div>
    </footer>
  )
}
