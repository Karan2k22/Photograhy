'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaArrowLeft, FaExpand } from 'react-icons/fa'
import Button from '@/components/Button'

export default function IndianWeddingPage() {
  const [expandedImage, setExpandedImage] = useState(null)
  const [activeEvent, setActiveEvent] = useState('ring-ceremony')

  const events = [
    {
      id: 'ring-ceremony',
      title: 'Ring Ceremony',
      description:
        'The engagement ceremony where the couple exchanges rings, marking their formal commitment to each other.',
      images: ['/haldi/haldi1.JPG', '/haldi/haldi2.JPG'],
    },
    {
      id: 'haldi',
      title: 'Haldi Ceremony',
      description:
        'A joyful pre-wedding ritual where turmeric paste is applied to the bride and groom for purification and blessings.',
      images: ['/haldi/haldi1.JPG', '/haldi/haldi2.JPG', '/haldi/haldi3.JPG', '/haldi/haldi4.JPG'],
    },
    {
      id: 'mehndi',
      title: 'Mehndi Ceremony',
      description:
        "The celebration where intricate henna designs are applied to the bride's hands and feet, symbolizing beauty and spiritual awakening.",
      images: ['/mehndi/mehndi1.jpg'],
    },
    {
      id: 'shaadi',
      title: 'Shaadi',
      description:
        'The main wedding ceremony where the couple takes their vows amidst sacred rituals and traditional customs.',
      images: ['/wedding/1694716301979.jpg', '/wedding/DSC_1459.JPG', '/wedding/1694716301993.jpg'],
    },
    {
      id: 'reception',
      title: 'Reception',
      description:
        'A grand celebration where the newly married couple is introduced to society with music, dance, and feasting.',
      images: ['/wedding/shadi.JPG'],
    },
    {
      id: 'vidai',
      title: 'Vidai Ceremony',
      description:
        'The emotional farewell where the bride leaves her parental home to start a new life with her husband.',
      images: ['/wedding/DSC_1865.JPG'],
    },
  ]

  const currentEvent = events.find((event) => event.id === activeEvent)

  return (
    <div className="min-h-screen bg-bg text-text pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center text-muted hover:text-gold transition-colors min-h-11"
          >
            <FaArrowLeft className="mr-2" />
            Back
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl">
            Indian <span className="text-gold italic">Wedding</span> Events
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mb-10 overflow-x-auto"
        >
          <div className="flex space-x-2 pb-4">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveEvent(event.id)}
                className={`px-4 py-2 min-h-11 rounded-full whitespace-nowrap text-sm transition-all ${
                  activeEvent === event.id
                    ? 'bg-gold text-bg'
                    : 'bg-surface text-muted hover:text-text border border-gold/10'
                }`}
              >
                {event.title}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activeEvent}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl mb-3">{currentEvent.title}</h2>
          <p className="text-muted text-base md:text-lg max-w-3xl mb-8">{currentEvent.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {currentEvent.images.map((image, index) => (
              <motion.div
                key={image + index}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setExpandedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${currentEvent.title} ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaExpand className="text-2xl text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-gold bg-surface border rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Capture Your <span className="text-gold italic">Special Day</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-6">
            Let us help you preserve the beautiful moments of your Indian wedding with our professional photography services.
          </p>
          <Button href="/contact">Book a Consultation</Button>
        </motion.div>
      </div>

      {expandedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={expandedImage}
              alt="Expanded view"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full hover:text-white/70 w-11 h-11"
              onClick={() => setExpandedImage(null)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
