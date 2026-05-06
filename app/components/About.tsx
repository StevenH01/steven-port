'use client'

import { AnimatedSection } from './AnimatedSection'
import { Panel } from './Panel'

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

const journey = [
  { num: '01', title: 'Local Business Sites', body: 'Building production websites for local businesses, from quote flows to bookings.' },
  { num: '02', title: 'Full-Stack Team Lead', body: 'Led a team to deliver a full-stack e-commerce platform end-to-end.' },
  { num: '03', title: 'Internship', body: 'Improved login flows to enhance the user experience.' },
  { num: '04', title: "What's Next", body: "Looking for my next adventure — open to new opportunities." },
]

export const About = () => {
  return (
    <Panel id="about" tone="page" className="px-6 sm:px-10 lg:px-16 pt-28 pb-28">
      <div className="max-w-[1280px] mx-auto">
        <AnimatedSection>
          <p className="eyebrow">ABOUT</p>
          <h2 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] mt-4 text-[color:var(--text-main)]">
            A bit about me.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-12 items-start">
          <AnimatedSection className="md:col-span-7">
            <p className="text-lg text-[color:var(--text-body)] leading-relaxed">
              I'm a software engineer driven by a love for building meaningful, impactful tools. My experience spans full-stack development with a strong focus on crafting responsive, engaging front-end interfaces.
            </p>
            <p className="text-base text-[color:var(--text-muted)] leading-relaxed mt-5">
              I've built websites for local businesses, led a team to deliver a full-stack e-commerce platform, and completed an internship where I improved login flows to enhance user experience. I'm always exploring new technologies and constantly learning how to create better, smarter software.
            </p>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-5">
            <div className="rounded-[1.75rem] bg-[var(--bg-cream)] aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
                backgroundSize: '20px 20px',
              }} />
              <span className="font-display text-[10rem] leading-none text-[color:var(--olive)]">SH</span>
            </div>
          </AnimatedSection>
        </div>

        {/* Numbered journey list */}
        <AnimatedSection>
          <div className="mt-20 border-t border-[var(--border)]">
            {journey.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 gap-4 sm:gap-8 py-7 border-b border-[var(--border)]"
              >
                <div className="col-span-2 sm:col-span-1 text-[color:var(--text-subtle)] text-sm font-mono pt-1">
                  {item.num}
                </div>
                <div className="col-span-10 sm:col-span-4">
                  <p className="font-display text-xl text-[color:var(--text-main)]">{item.title}</p>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <p className="text-sm text-[color:var(--text-muted)] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tech stack */}
        <AnimatedSection>
          <div className="mt-16">
            <p className="eyebrow mb-5">TECH STACK</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-strong)] text-sm text-[color:var(--text-body)] hover:bg-[var(--olive)] hover:border-[var(--olive)] hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Panel>
  )
}
