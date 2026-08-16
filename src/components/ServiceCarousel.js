'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function shortestOffset(index, active, count) {
  let diff = index - active
  if (diff > count / 2) diff -= count
  if (diff < -count / 2) diff += count
  return diff
}

export default function ServiceCarousel({ services }) {
  const [active, setActive] = useState(0)
  const [inView, setInView] = useState(true)
  const [spacing, setSpacing] = useState(240)
  const pointerStart = useRef(null)
  const rootRef = useRef(null)
  const count = services.length

  useEffect(() => {
    const update = () => setSpacing(window.innerWidth < 768 ? 86 : 250)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || count <= 1) return undefined
    const id = setInterval(() => {
      setActive((i) => (i + 1) % count)
    }, 3000)
    return () => clearInterval(id)
  }, [inView, count])

  const go = useCallback(
    (dir) => {
      setActive((i) => (i + dir + count) % count)
    },
    [count]
  )

  const onPointerDown = (event) => {
    pointerStart.current = event.clientX
  }

  const onPointerUp = (event) => {
    if (pointerStart.current == null) return
    const dx = event.clientX - pointerStart.current
    pointerStart.current = null
    if (dx > 50) go(-1)
    else if (dx < -50) go(1)
  }

  return (
    <div ref={rootRef} className="relative">
      <div
        className="relative h-[380px] sm:h-[400px] md:h-[440px] flex items-center justify-center overflow-hidden select-none touch-pan-y"
        style={{ perspective: '1400px' }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          pointerStart.current = null
        }}
      >
        {services.map((service, index) => {
          const offset = shortestOffset(index, active, count)
          const abs = Math.abs(offset)
          const Icon = service.icon
          const isActive = offset === 0

          return (
            <motion.article
              key={service.title}
              initial={false}
              animate={{
                x: offset * spacing,
                rotateY: offset * -40,
                scale: isActive ? 1 : abs === 1 ? 0.82 : 0.68,
                opacity: abs > 2 ? 0 : abs === 2 ? 0.4 : 1,
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              onClick={() => setActive(index)}
              className={`absolute w-[240px] sm:w-[280px] md:w-[320px] rounded-2xl p-6 md:p-8 cursor-pointer ${
                isActive
                  ? 'bg-surface border border-gold shadow-[0_20px_50px_rgba(0,0,0,0.45)]'
                  : 'bg-surface/90 border border-gold/15'
              }`}
              style={{
                transformPerspective: 1400,
                transformStyle: 'preserve-3d',
                zIndex: 20 - abs,
                pointerEvents: abs > 2 ? 'none' : 'auto',
              }}
            >
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-5">
                <Icon className="text-xl" />
              </div>
              <h3 className="font-serif text-xl mb-2">{service.title}</h3>
              <p className="text-muted mb-5 text-sm leading-relaxed">{service.description}</p>
              <Link
                href={service.link}
                className="text-gold hover:text-text transition-colors inline-flex items-center text-sm min-h-11"
                onClick={(e) => e.stopPropagation()}
                tabIndex={isActive ? 0 : -1}
              >
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.article>
          )
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          type="button"
          aria-label="Previous service"
          onClick={() => go(-1)}
          className="w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-bg transition-colors flex items-center justify-center"
        >
          <FaChevronLeft />
        </button>

        <div className="flex gap-2">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              aria-label={`Show ${service.title}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active ? 'w-8 bg-gold' : 'w-2.5 bg-muted/40 hover:bg-gold/60'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next service"
          onClick={() => go(1)}
          className="w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-bg transition-colors flex items-center justify-center"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}
