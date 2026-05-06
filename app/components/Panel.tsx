import { ReactNode } from 'react'

type PanelTone = 'page' | 'cream' | 'sand' | 'stone' | 'sage' | 'olive'

const toneClass: Record<PanelTone, string> = {
  page: 'bg-[var(--bg-page)]',
  cream: 'bg-[var(--bg-cream)]',
  sand: 'bg-[var(--bg-sand)]',
  stone: 'bg-[var(--bg-stone)]',
  sage: 'bg-[var(--sage-light)]',
  olive: 'bg-[var(--olive)] text-white',
}

type Props = {
  id?: string
  tone?: PanelTone
  className?: string
  children: ReactNode
}

export const Panel = ({ id, tone = 'page', className = '', children }: Props) => {
  return (
    <section id={id} className={`w-full ${toneClass[tone]} ${className}`}>
      {children}
    </section>
  )
}
