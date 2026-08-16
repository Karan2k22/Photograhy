'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/PageHero'

const model = [
  { id: 21, title: 'Fashion Model Portfolio', category: 'model', image: '/model/1675237481098.jpeg', featured: true },
  { id: 22, title: 'Outdoor Model Shoot', category: 'model', image: '/model/1676521889672.jpg', featured: true },
  { id: 23, title: 'Studio Fashion Shoot', category: 'model', image: '/model/1709308820689.jpg', featured: true },
  { id: 24, title: 'Editorial Model Portfolio', category: 'model', image: '/model/DKS02923.jpg', featured: true },
  { id: 25, title: 'Creative Model Session', category: 'model', image: '/model/1679220076166.jpg', featured: true },
  { id: 26, title: 'Natural Light Portrait', category: 'model', image: '/model/1676521889672.jpg', featured: true },
  { id: 27, title: 'Fashion Editorial', category: 'model', image: '/model/1679220076131.jpg', featured: true },
]

const makup = [
  { id: 31, title: 'Bridal Makeup Session', category: 'makeup', image: '/makup/1749278031306.jpg', featured: false },
  { id: 32, title: 'Bridal Makeup Session', category: 'makeup', image: '/makup/IMG-20250427-WA0002.jpg', featured: false },
  { id: 33, title: 'Bridal Makeup Session', category: 'makeup', image: '/makup/IMG-20250427-WA0004.jpg', featured: false },
  { id: 35, title: 'Bridal Makeup Session', category: 'makeup', image: '/makup/IMG-20250427-WA0006.jpg', featured: false },
]

const galleryItems = [
  { id: 1, title: 'Sunset Pre-Wedding', category: 'pre-wedding', image: '/prewedding/DSC_0072.jpg', featured: true },
  { id: 2, title: 'Traditional Wedding Ceremony', category: 'wedding', image: '/wedding/1694716301993.jpg', featured: true },
  { id: 7, title: 'Romantic Post-Wedding', category: 'post-wedding', image: '/prewedding/DSC.jpg', featured: false },
  { id: 8, title: 'Jewelry Product Shoot', category: 'product', image: '/jwellery/1729944615450.jpg', featured: true },
  { id: 9, title: 'Jewelry Product Shoot', category: 'product', image: '/jwellery/1729944615454.jpg', featured: true },
  { id: 10, title: 'Beachside Engagement', category: 'pre-wedding', image: '/prewedding/pre44 (1).jpg', featured: false },
  { id: 11, title: 'Cultural Wedding Rituals', category: 'wedding', image: '/wedding/1694716301979.jpg', featured: true },
  { id: 12, title: 'Editorial Makeup Look', category: 'makeup', image: '/wedding/AK108892.jpg', featured: false },
  { id: 14, title: 'Traditional Wedding Ceremony', category: 'wedding', image: '/wedding/1694716302022.jpg', featured: true },
  { id: 15, title: 'Traditional Wedding Ceremony', category: 'wedding', image: '/wedding/1694716301986.jpg', featured: true },
  { id: 16, title: 'Traditional Wedding Ceremony', category: 'wedding', image: '/wedding/1694716302010.jpg', featured: true },
  { id: 17, title: 'Traditional Wedding Ceremony', category: 'wedding', image: '/wedding/DSC_0464.JPG', featured: true },
  { id: 18, title: 'Traditional Wedding Ceremony', category: 'wedding', image: '/wedding/DSC_1773.JPG', featured: true },
  ...model,
  ...makup,
]

const categories = [
  { id: 'all', name: 'All' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'pre-wedding', name: 'Pre-Wedding' },
  { id: 'post-wedding', name: 'Post-Wedding' },
  { id: 'makeup', name: 'Makeup' },
  { id: 'model', name: 'Model' },
  { id: 'product', name: 'Product' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="pb-16 md:pb-24 min-h-screen bg-bg">
      <PageHero
        eyebrow="Collections"
        title="Our Gallery"
        highlight="Gallery"
        subtitle="Explore our collection of beautifully captured moments across different photography styles and events"
      />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 min-h-11 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gold text-bg'
                    : 'bg-surface text-muted hover:text-text border border-gold/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 1.06 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.5 }}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <div>
                      <h3 className="font-serif text-lg text-white">{item.title}</h3>
                      <p className="text-white/70 text-sm capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted text-lg">No images found in this category</p>
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl z-10 w-11 h-11 hover:text-white/70"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="max-w-6xl w-full max-h-[90vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="font-serif text-xl">{selectedImage.title}</h3>
                <p className="text-white/70 capitalize">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
