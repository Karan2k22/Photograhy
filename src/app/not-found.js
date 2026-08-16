'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaHome, FaSearch } from 'react-icons/fa'
import Button from '@/components/Button'

export default function Custom404() {
  return (
    <div className="min-h-[80vh] bg-bg text-text flex items-center px-4 py-28">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/5 relative"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden border border-gold/15">
              <Image
                src="/logo/logo.png"
                alt="Lost in focus"
                fill
                className="object-contain p-8"
                priority
              />
              <div className="absolute bottom-6 left-6">
                <span className="font-serif text-7xl md:text-8xl text-gold">404</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-3/5 text-center md:text-left"
          >
            <p className="section-label mb-4">Out of Frame</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">
              Looks like you are <span className="text-gold italic">lost in focus</span>
            </h1>
            <p className="text-muted text-lg mb-8">
              The page you are looking for seems to be out of frame. Let us find a better view together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/">
                <FaHome />
                Back to Home
              </Button>
              <Button href="/portfolio" variant="outline">
                <FaSearch />
                Browse Portfolio
              </Button>
            </div>

            <div className="mt-10 p-6 bg-surface border border-gold/10 rounded-xl">
              <h3 className="font-serif text-xl mb-3">Looking for something else?</h3>
              <p className="text-muted mb-4 text-sm">Explore our work or get in touch.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <Link href="/portfolio" className="text-muted hover:text-gold transition-colors min-h-11 inline-flex items-center">
                  Portfolio
                </Link>
                <Link href="/contact" className="text-muted hover:text-gold transition-colors min-h-11 inline-flex items-center">
                  Contact
                </Link>
                <Link href="/about" className="text-muted hover:text-gold transition-colors min-h-11 inline-flex items-center">
                  About
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
