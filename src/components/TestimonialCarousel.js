'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-2 mb-4" aria-label={`${rating} out of 5 stars`}>
      <div className="flex" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) => {
          const fill = Math.min(1, Math.max(0, rating - (star - 1)))
          return (
            <span key={star} className="relative block h-4 w-4">
              <svg className="absolute inset-0 h-4 w-4 text-gold/20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </span>
          )
        })}
      </div>
      <span className="text-sm text-gold">{Number.isInteger(rating) ? rating : rating.toFixed(1)}</span>
    </div>
  )
}

function shortestOffset(index, active, count) {
  let diff = index - active
  if (diff > count / 2) diff -= count
  if (diff < -count / 2) diff += count
  return diff
}

export default function TestimonialCarousel({ testimonials }) {
  const [active, setActive] = useState(0)
  const [inView, setInView] = useState(true)
  const [spacing, setSpacing] = useState(280)
  const pointerStart = useRef(null)
  const rootRef = useRef(null)
  const count = testimonials.length

  useEffect(() => {
    const update = () => setSpacing(window.innerWidth < 768 ? 92 : 300)
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
    }, 4500)
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
        className="relative h-[420px] sm:h-[440px] md:h-[460px] flex items-center justify-center overflow-hidden select-none touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          pointerStart.current = null
        }}
      >
        {testimonials.map((testimonial, index) => {
          const offset = shortestOffset(index, active, count)
          const abs = Math.abs(offset)
          const isActive = offset === 0

          return (
            <motion.article
              key={testimonial.id}
              initial={false}
              animate={{
                x: offset * spacing,
                scale: isActive ? 1 : abs === 1 ? 0.9 : 0.78,
                opacity: abs > 2 ? 0 : abs === 2 ? 0.4 : 1,
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              onClick={() => setActive(index)}
              className={`absolute w-[260px] sm:w-[320px] md:w-[380px] rounded-2xl p-6 md:p-8 cursor-pointer ${
                isActive
                  ? 'bg-surface border border-gold shadow-[0_20px_50px_rgba(0,0,0,0.45)]'
                  : 'bg-surface/90 border border-gold/15'
              }`}
              style={{
                zIndex: 20 - abs,
                pointerEvents: abs > 2 ? 'none' : 'auto',
              }}
            >
              <span className="font-serif text-6xl leading-none text-gold/20 absolute top-3 right-5 select-none">
                &rdquo;
              </span>
              <StarRating rating={testimonial.rating} />
              <p className="text-muted mb-6 italic leading-relaxed text-sm md:text-[15px] relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-5 border-t border-gold/15">
                <div className="w-12 h-12 rounded-full border border-gold/40 bg-bg flex items-center justify-center font-serif text-gold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-serif text-lg text-text">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-bg transition-colors flex items-center justify-center"
        >
          <FaChevronLeft />
        </button>

        <div className="flex gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              aria-label={`Show review from ${testimonial.name}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active ? 'w-8 bg-gold' : 'w-2.5 bg-muted/40 hover:bg-gold/60'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-bg transition-colors flex items-center justify-center"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}
