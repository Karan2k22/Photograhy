'use client'

import { motion } from 'framer-motion'
import Typewriter from './Typewriter'

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  type = true,
}) {
  return (
    <section className="page-hero-wash pt-28 md:pt-32 pb-12 md:pb-16 text-center px-4">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label mb-5"
        >
          {eyebrow}
        </motion.p>
      )}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
        {type ? (
          <Typewriter
            text={title}
            highlightWords={highlight ? [highlight] : []}
            speed={55}
          />
        ) : (
          <>
            {title}
            {highlight ? (
              <>
                {' '}
                <span className="text-gold italic">{highlight}</span>
              </>
            ) : null}
          </>
        )}
      </h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-muted max-w-2xl mx-auto text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </section>
  )
}
