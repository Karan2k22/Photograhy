'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-[#2c2c2c] text-white hover:bg-black',
  outline:
    'border border-[#2c2c2c] bg-[#faf6f0] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white',
  ghost:
    'text-gold hover:text-text',
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3 min-h-11 rounded-full font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
  }

  const wrapperClass = className.includes('w-full') ? 'flex w-full' : 'inline-flex'

  if (href) {
    return (
      <motion.div {...motionProps} className={wrapperClass}>
        <Link href={href} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button {...motionProps} className={classes} {...props}>
      {children}
    </motion.button>
  )
}
