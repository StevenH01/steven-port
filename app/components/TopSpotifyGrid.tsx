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

  if (!hasMounted) return null;
  return (
    <section id="hobbies" className="max-w-6xl mx-auto px-6 py-24">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-[color:var(--text-main)] mb-6">Music I Enjoy</h2>

        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded border text-sm transition-all ${
              type === 'tracks'
                ? 'bg-[var(--primary)] text-white'
                : 'border-[var(--border)] text-[color:var(--text-muted)]'
            }`}
            onClick={() => setType('tracks')}
          >
            Top Tracks
          </button>
          <button
            className={`px-4 py-2 rounded border text-sm transition-all ${
              type === 'artists'
                ? 'bg-[var(--primary)] text-white'
                : 'border-[var(--border)] text-[color:var(--text-muted)]'
            }`}
            onClick={() => setType('artists')}
          >
            Top Artists
          </button>
        </div>

        {isLoading ? (
          <p className="text-[color:var(--text-muted)] text-center">Loading your favorites...</p>
        ) : items.length === 0 ? (
          <p className="text-[color:var(--text-muted)] text-center">No data available. Try again later.</p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {items.map((item: any, index: number) => (
                <motion.a
                  key={item.id}
                  href={item.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-white/5 border border-[var(--border)] p-4 rounded-lg hover:shadow-md transition-all flex flex-col items-center text-center"
                >
                  <img
                    src={
                      type === 'tracks'
                        ? item.album?.images?.[0]?.url ?? '/placeholder.png'
                        : item.images?.[0]?.url ?? '/placeholder.png'
                    }
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-full mb-3 group-hover:scale-105 transition-transform"
                  />
                  <p className="font-semibold text-[color:var(--text-main)]">
                    {item.name.length > 22 ? item.name.slice(0, 22) + '…' : item.name}
                  </p>
                  <p className="text-xs text-[color:var(--text-muted)] mt-1">
                    {type === 'tracks'
                      ? item.artists.map((a: any) => a.name).join(', ')
                      : 'Artist'}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </AnimatedSection>
    </section>
  )
}
