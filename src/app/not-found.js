'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaCamera, FaHome, FaArrowLeft, FaSearch } from 'react-icons/fa'

export default function Custom404() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <FaCamera className="text-red-500" />
          <span>Dhansu Photography</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-2/5 relative"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src="/logo/logo.png"
                  alt="Lost in focus"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-8xl md:text-9xl font-bold text-white">404</span>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-3/5 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Looks like you are <span className="text-gray-400">lost in focus</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                The page you are looking for seems to be out of frame or doesn not exist. Lets find a better view together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-gray-200"
                  >
                    <FaHome className="text-lg" />
                    Back to Home
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/gallery"
                    className="flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-black"
                  >
                    <FaSearch className="text-lg" />
                    Browse Gallery
                  </Link>
                </motion.div>
              </div>

              {/* Search suggestion */}
              <div className="mt-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <FaSearch className="text-gray-400" />
                  Can not find what you are looking for?
                </h3>
                <p className="text-gray-400 mb-4">
                  Try exploring our portfolio or contact us directly for assistance.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/portfolio"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    View Portfolio
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <FaCamera className="text-red-500" />
            <span className="font-medium">LensCraft Photography</span>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} LensCraft. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}