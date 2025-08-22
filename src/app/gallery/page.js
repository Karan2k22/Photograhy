'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'




const model = [
    {
    id: 21,
    title: 'Sunset Pre-Wedding',
    category: 'model',
    image: '/model/1675237481098.jpeg',
    featured: true
  },
    {
    id: 22,
    title: 'Sunset Pre-Wedding',
    category: 'model',
    image: '/model/1676521889672.jpg',
    featured: true
  },
    {
    id: 23,
    title: 'Sunset Pre-Wedding',
    category: 'model',
    image: '/model/1709308820689.jpg',
    featured: true
  },
    {
    id: 24,
    title: 'Sunset Pre-Wedding',
    category: 'model',
    image: '/model/DKS02923.jpg',
    featured: true
  },
    {
    id: 25,
    title: 'Sunset Pre-Wedding',
    category: 'model',
    image: '/model/1679220076166.jpg',
    featured: true
  },
    {
    id: 26,
    title: 'Sunset Pre-Wedding',
    category: 'model',
    image: '/model/1676521889672.jpg',
    featured: true
  },
    {
    id: 27,
    title: 'Fashion Model Portfolio',
    category: 'model',
    image: '/gallery/1679220076131.jpg',
    featured: true
  },
]


const makup = [
  {
    id: 31,
    title: 'Bridal Makeup Session',
    category: 'makeup',
    image: '/gallery/makeup-1.jpg',
    featured: false
  },
  {
    id: 32,
    title: 'Bridal Makeup Session',
    category: 'makeup',
    image: '/makup/1749278031306.jpg',
    featured: false
  },
  {
    id: 33,
    title: 'Bridal Makeup Session',
    category: 'makeup',
    image: '/makeup/IMG-20250427-WA0002.jpg',
    featured: false
  },
  {
    id: 34,
    title: 'Bridal Makeup Session',
    category: 'makeup',
    image: '/makeup/IMG-20250427-WA0004.jpg',
    featured: false
  },
  {
    id: 35,
    title: 'Bridal Makeup Session',
    category: 'makeup',
    image: '/makeup/IMG-20250427-WA0006.jpg',
    featured: false
  },
]
const galleryItems = [
  {
    id: 1,
    title: 'Sunset Pre-Wedding',
    category: 'pre-wedding',
    image: '/prewedding/DSC_0072.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Traditional Wedding Ceremony',
    category: 'wedding',
    image: '/wedding/1694716301993.jpg',
    featured: true
  },

  {
    id: 4,
    title: 'Newborn Baby Portraits',
    category: 'baby',
    image: '/gallery/baby-1.jpg',
    featured: true
  },
 

  {
    id: 7,
    title: 'Romantic Post-Wedding',
    category: 'post-wedding',
    image: '/prewedding/DSC.jpg',
    featured: false
  },
  {
    id: 8,
    title: 'Jewelry Product Shoot',
    category: 'product',
    image: '/jwellery/1729944615450.jpg',
    featured: true
  },
  {
    id: 9,
    title: 'Jewelry Product Shoot',
    category: 'product',
    image: '/jwellery/1729944615454.jpg',
    featured: true
  },
  {
    id: 10,
    title: 'Beachside Engagement',
    category: 'pre-wedding',
    image: '/prewedding/pre44 (1).jpg',
    featured: false
  },
  {
    id: 11,
    title: 'Cultural Wedding Rituals',
    category: 'wedding',
    image: '/wedding/1694716301979.jpg',
    featured: true
  },
  {
    id: 12,
    title: 'Editorial Makeup Look',
    category: 'makeup',
    image: '/wedding/AK108892.jpg',
    featured: false
  },
  {
    id: 13,
    title: 'Maternity Photo Session',
    category: 'baby',
    image: '/gallery/baby-2.jpg',
    featured: true
  },
   {
    id: 14,
    title: 'Traditional Wedding Ceremony',
    category: 'wedding',
    image: '/wedding/1694716302022.jpg',
    featured: true
  },
     {
    id: 15,
    title: 'Traditional Wedding Ceremony',
    category: 'wedding',
    image: '/wedding/1694716301986.jpg', 
    featured: true
  },
     {
    id: 16,
    title: 'Traditional Wedding Ceremony',
    category: 'wedding',
    image: '/wedding/1694716302010.jpg', 
    featured: true
  },
  {
    id: 17,
    title: 'Traditional Wedding Ceremony',
    category: 'wedding',
    image: '/wedding/DSC_0464.JPG',
    featured: true
  },
  {
    id: 18,
    title: 'Traditional Wedding Ceremony',
    category: 'wedding',
    image: '/wedding/DSC_1773.JPG',
    featured: true
  },
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
  { id: 'baby', name: 'Baby' },
   { id: 'product', name: 'Product' }
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'masonry'

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="pt-24 pb-16 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gray-400">Gallery</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of beautifully captured moments across different photography styles and events
          </p>
        </motion.div>

        {/* Filters and View Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-white text-black'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 bg-gray-900 p-1 rounded-full">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-white text-black' : 'text-white'}`}
              aria-label="Grid view"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-full ${viewMode === 'masonry' ? 'bg-white text-black' : 'text-white'}`}
              aria-label="Masonry view"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-medium text-lg">{item.title}</h3>
                      <p className="text-gray-300 text-sm capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="mb-6 break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={900}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-medium text-lg">{item.title}</h3>
                      <p className="text-gray-300 text-sm capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">No images found in this category</p>
          </motion.div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-6 right-6 text-white text-3xl z-10"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <div className="max-w-6xl w-full max-h-[90vh] relative">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full h-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-medium">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-400 capitalize">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}