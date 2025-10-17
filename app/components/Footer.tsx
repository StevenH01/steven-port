'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="bg-[var(--bg-main)] border-t border-[var(--border)] mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[color:var(--text-muted)] text-sm">
        
        {/* Left side */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Steven Ho — Built with Next.js & Tailwind CSS
        </div>

        {/* Right side */}
        <div className="flex gap-6 items-center justify-center">
          <Link href="https://github.com/StevenH01" target="_blank" aria-label="GitHub">
            <FaGithub className="text-xl hover:text-[color:var(--text-main)] transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/steven-h0/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-[color:var(--text-main)] transition-colors" />
          </Link>
          <Link href="mailto:steven09ho@gmail.com" aria-label="Email">
            <FaEnvelope className="text-xl hover:text-[color:var(--text-main)] transition-colors" />
          </Link>
          <Link href="/Ho_Steven_Resume_2025.pdf" target="_blank" aria-label="Resume">
            <FaFileDownload className="text-xl hover:text-[color:var(--text-main)] transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
