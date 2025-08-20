'use client'

import { useEffect, useRef } from 'react'
import { Application, Text } from 'pixi.js'

export default function PixelGame() {
  const containerRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<Application | null>(null)

  useEffect(() => {
    let destroyed = false

    const run = async () => {
      const app = new Application()
      await app.init({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x000000,
      })

      if (!containerRef.current || destroyed) return

      containerRef.current.appendChild(app.canvas)
      appRef.current = app

      const loadingText = new Text('Loading Pixelverse...', {
        fill: 'white',
        fontSize: 28,
      })
      loadingText.anchor.set(0.5)
      loadingText.x = app.screen.width / 2
      loadingText.y = app.screen.height / 2
      app.stage.addChild(loadingText)
    }

    run()

    return () => {
      destroyed = true
      if (appRef.current && typeof appRef.current.destroy === 'function') {
        appRef.current.destroy(true, true)
        appRef.current = null
      }
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
