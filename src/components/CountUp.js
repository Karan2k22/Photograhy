'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function RollingDigit({ digit }) {
  return (
    <span className="relative inline-block h-[1.05em] w-[0.68em] overflow-hidden align-bottom">
      <AnimatePresence initial={false}>
        <motion.span
          key={digit}
          initial={{ y: '85%', opacity: 0.35 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-85%', opacity: 0.35 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function CountUp({
  value,
  suffix = '',
  duration = 4200,
  delay = 0,
  className = '',
}) {
  const numeric = parseInt(String(value).replace(/\D/g, ''), 10) || 0
  const extra = String(value).replace(/[0-9]/g, '') || suffix
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return undefined

    let intervalId
    const timeout = setTimeout(() => {
      const minTick = 55
      const increment = Math.max(1, Math.ceil(numeric / (duration / minTick)))
      const ticks = Math.ceil(numeric / increment)
      const tickEvery = duration / ticks
      let current = 0

      intervalId = setInterval(() => {
        current = Math.min(numeric, current + increment)
        setCount(current)
        if (current >= numeric) clearInterval(intervalId)
      }, tickEvery)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (intervalId) clearInterval(intervalId)
    }
  }, [started, numeric, duration, delay])

  const digits = String(count).split('')

  return (
    <span ref={ref} className={`inline-flex items-baseline tabular-nums ${className}`}>
      {digits.map((digit, index) => (
        <RollingDigit key={`${digits.length}-${index}`} digit={digit} />
      ))}
      {extra ? <span className="ml-0.5">{extra}</span> : null}
    </span>
  )
}
