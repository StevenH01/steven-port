'use client'

import dynamic from 'next/dynamic'

const PixelGame = dynamic(() => import('./PixelGame'), {
  ssr: false,
})

export default function PixelverseWrapper() {
  return (
    <div>
      <PixelGame />
    </div>
  )
}
