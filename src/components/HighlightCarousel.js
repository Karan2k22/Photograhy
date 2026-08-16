'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function shortestOffset(index, active, count) {
  let diff = index - active
  if (diff > count / 2) diff -= count
  if (diff < -count / 2) diff += count
  return diff
}

export default function HighlightCarousel({ highlights }) {
  const [active, setActive] = useState(0)
  const [inView, setInView] = useState(true)
  const [spacing, setSpacing] = useState(280)
  const pointerStart = useRef(null)
  const rootRef = useRef(null)
  const count = highlights.length

  useEffect(() => {
    const update = () => setSpacing(window.innerWidth < 768 ? 96 : 300)
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
        className="relative h-[460px] sm:h-[500px] md:h-[540px] flex items-center justify-center overflow-hidden select-none touch-pan-y"
        style={{ perspective: '1400px' }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          pointerStart.current = null
        }}
      >
        {highlights.map((item, index) => {
          const offset = shortestOffset(index, active, count)
          const abs = Math.abs(offset)
          const isActive = offset === 0

          return (
            <motion.article
              key={item.id}
              initial={false}
              animate={{
                x: offset * spacing,
                rotateY: offset * -38,
                scale: isActive ? 1 : abs === 1 ? 0.82 : 0.68,
                opacity: abs > 1 ? 0.4 : 1,
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              onClick={() => setActive(index)}
              className={`absolute w-[240px] sm:w-[280px] md:w-[320px] rounded-2xl overflow-hidden cursor-pointer ${
                isActive
                  ? 'border border-gold shadow-[0_20px_50px_rgba(0,0,0,0.45)]'
                  : 'border border-gold/15'
              }`}
              style={{
                transformPerspective: 1400,
                transformStyle: 'preserve-3d',
                zIndex: 20 - abs,
                pointerEvents: abs > 2 ? 'none' : 'auto',
              }}
            >
              <Link href={item.href} className="block" onClick={(e) => abs !== 0 && e.preventDefault()}>
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <span className="inline-block px-3 py-1 bg-white text-black text-xs tracking-wide rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl text-white mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              </Link>
            </motion.article>
          )
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          type="button"
          aria-label="Previous highlight"
          onClick={() => go(-1)}
          className="w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-bg transition-colors flex items-center justify-center"
        >
          <FaChevronLeft />
        </button>

        <div className="flex gap-2">
          {highlights.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show ${item.title}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active ? 'w-8 bg-gold' : 'w-2.5 bg-muted/40 hover:bg-gold/60'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next highlight"
          onClick={() => go(1)}
          className="w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-bg transition-colors flex items-center justify-center"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}
