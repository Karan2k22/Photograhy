'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaInstagram size={18} />,
      url: 'https://www.instagram.com/dhansu.photography?igsh=eWt5bzh3cm5zNm13',
      label: 'Instagram',
    },
    { icon: <FaFacebook size={18} />, url: 'https://facebook.com', label: 'Facebook' },
  ]

  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
        { name: 'Wedding Stories', url: '/portfolio/wedding' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Wedding Photography', url: '/services#wedding' },
        { name: 'Pre-Wedding Shoot', url: '/services#pre-wedding' },
        { name: 'Makeup Shoots', url: '/services#makeup' },
        { name: 'Baby Shower', url: '/services#baby' },
        { name: 'Product Photography', url: '/services#product' },
      ],
    },
  ]

  return (
    <>
      <motion.a
        href="https://wa.me/message/LMZRMFSOWSSKF1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl"
        style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <FaWhatsapp size={26} />
      </motion.a>

      <footer className="site-chrome border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="font-serif text-2xl block mb-4">
                Dhansu <span className="text-white/80 italic">Photography</span>
              </Link>
              <p className="text-white/55 mb-6 text-sm leading-relaxed">
                Capturing timeless moments with artistic vision and technical excellence.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {footerLinks.map((column, colIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: colIndex * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-lg text-white mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.url}
                        className="text-white/55 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-lg text-white mb-4">Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:dhansukumar700@gmail.com"
                  className="flex items-start text-white/55 hover:text-white transition-colors text-sm"
                >
                  <MdEmail className="mt-0.5 mr-3 text-white shrink-0" size={16} />
                  dhansukumar700@gmail.com
                </a>
                <a
                  href="tel:7008254188"
                  className="flex items-start text-white/55 hover:text-white transition-colors text-sm"
                >
                  <FiPhone className="mt-0.5 mr-3 text-white shrink-0" size={16} />
                  7008254188
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
          <p>&copy; {currentYear} Dhansu Photography. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
