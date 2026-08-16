'use client'

import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  const isHome = pathname === '/'
  const solid = !isHome || scrolled || isOpen

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 ${solid ? 'site-chrome' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="relative h-12 w-36 z-[60] shrink-0" aria-label="Dhansu Photography home">
          <Image
            src="/logo/logo.png"
            alt="Dhansu Photography Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative text-sm tracking-wide transition-colors duration-300 ${
                isActive(item.path) ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <motion.span
                  layoutId="nav-gold-line"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                />
              )}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden relative z-[60] w-11 h-11 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className={`h-px w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-px w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="site-chrome fixed inset-0 z-50 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.08 * index, duration: 0.4 }}
                >
                  <Link
                    href={item.path}
                    className={`font-serif text-3xl ${
                      isActive(item.path) ? 'text-white italic' : 'text-white/70'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
