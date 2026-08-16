'use client'

import { motion } from 'framer-motion'

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeader({ eyebrow, title, highlight, subtitle, align = 'center' }) {
  return (
    <AnimatedSection className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && <p className="section-label mb-4">{eyebrow}</p>}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
        {title}
        {highlight ? (
          <>
            {' '}
            <span className="text-gold italic">{highlight}</span>
          </>
        ) : null}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-muted max-w-2xl text-base md:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
