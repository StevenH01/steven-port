'use client'

import { useState, useEffect } from 'react'
import { AnimatedSection } from './AnimatedSection'
import useSWR from 'swr'
import { motion, AnimatePresence } from 'framer-motion'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export const TopSpotifyGrid = () => {
  const [type, setType] = useState<'tracks' | 'artists'>('tracks')
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('spotifyType') as 'tracks' | 'artists'
    if (stored) setType(stored)
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem('spotifyType', type)
    }
  }, [type, hasMounted])

  const { data, isLoading } = useSWR(`/api/spotify?type=${type}`, fetcher, {
    refreshInterval: 3600000,
    revalidateOnFocus: false,
  })

  const items = data?.items || []

  if (!hasMounted) return null

  return (
    <div className="mt-24">
      <AnimatedSection>
        <p className="eyebrow">SOUNDTRACK</p>
        <h3 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] mt-4 text-[color:var(--text-main)]">
          Music I enjoy.
        </h3>
        <p className="text-[color:var(--text-muted)] mt-5 max-w-xl">
          Pulled live from my Spotify — the soundtrack to most of my coding sessions.
        </p>

        <div className="inline-flex p-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-strong)] mt-8">
          {(['tracks', 'artists'] as const).map(opt => (
            <button
              key={opt}
              onClick={() => setType(opt)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition ${
                type === opt
                  ? 'bg-[var(--olive)] text-white'
                  : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]'
              }`}
            >
              Top {opt === 'tracks' ? 'Tracks' : 'Artists'}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {isLoading ? (
            <p className="text-[color:var(--text-muted)] text-center py-8">Loading your favorites...</p>
          ) : items.length === 0 ? (
            <p className="text-[color:var(--text-muted)] text-center py-8">No data available. Try again later.</p>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              >
                {items.map((item: any, index: number) => (
                  <motion.a
                    key={item.id}
                    href={item.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 flex flex-col items-center text-center hover:border-[var(--olive)] hover:-translate-y-0.5 transition"
                  >
                    <img
                      src={
                        type === 'tracks'
                          ? item.album?.images?.[0]?.url ?? '/placeholder.png'
                          : item.images?.[0]?.url ?? '/placeholder.png'
                      }
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-full mb-4 group-hover:scale-105 transition-transform"
                    />
                    <p className="font-display text-base text-[color:var(--text-main)] line-clamp-1">
                      {item.name.length > 22 ? item.name.slice(0, 22) + '…' : item.name}
                    </p>
                    <p className="text-xs text-[color:var(--text-muted)] mt-1 line-clamp-1">
                      {type === 'tracks'
                        ? item.artists.map((a: any) => a.name).join(', ')
                        : 'Artist'}
                    </p>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </AnimatedSection>
    </div>
  )
}
