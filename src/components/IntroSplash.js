'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const INTRO_MS = 5000

export default function IntroSplash() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const timeout = setTimeout(() => setVisible(false), INTRO_MS)

    return () => {
      clearTimeout(timeout)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    if (!visible) document.body.style.overflow = ''
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-black"
          aria-hidden={!visible}
        >
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/intro/dhansu_photography_intro_landscape.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
