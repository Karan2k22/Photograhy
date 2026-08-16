'use client'

import { Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import PageHero from '@/components/PageHero'
import Button from '@/components/Button'

const modelFiles = [
  { file: '1675237481098.jpeg', title: 'Fashion Model Portfolio' },
  { file: '1676521889672.jpg', title: 'Outdoor Model Shoot' },
  { file: '1676521889674.jpg', title: 'Studio Fashion Shoot' },
  { file: '1679220076131.jpg', title: 'Editorial Model Portfolio' },
  { file: '1679220076166.jpg', title: 'Creative Model Session' },
  { file: '1709308820689.jpg', title: 'Natural Light Portrait' },
  { file: '1709308820689.jpg.jpeg', title: 'Model Editorial Portrait' },
  { file: 'DKS02923.jpg', title: 'Fashion Editorial' },
  { file: 'DSC_0109-01.jpeg', title: 'Outdoor Fashion Frame' },
  { file: '_DKS5178.jpg.jpeg', title: 'Model Lifestyle Frame' },
  { file: '_DKS5184 (1).jpg.jpeg', title: 'Studio Model Portrait' },
  { file: '_DKS5197.jpg.jpeg', title: 'Fashion Model Close-up' },
]

const model = modelFiles.map((item) => ({
  id: `/model/${item.file}`,
  title: item.title,
  category: 'model',
  image: `/model/${item.file}`,
  featured: true,
  tags: ['fashion', 'portrait'],
}))

const makeup = [
  { id: '/makup/IMG-20250427-WA0006.jpg', title: 'Bridal Makeup Session', category: 'makeup', image: '/makup/IMG-20250427-WA0006.jpg', featured: false, tags: ['bridal', 'beauty', 'glamour'] },
  { id: '/makup/IMG-20250427-WA0004.jpg', title: 'Editorial Makeup Look', category: 'makeup', image: '/makup/IMG-20250427-WA0004.jpg', featured: false, tags: ['editorial', 'creative', 'artistic'] },
  { id: '/makup/IMG-20250427-WA0002.jpg', title: 'Professional Makeup Shoot', category: 'makeup', image: '/makup/IMG-20250427-WA0002.jpg', featured: false, tags: ['professional', 'portfolio', 'beauty'] },
  { id: '/makup/1749278031306.jpg', title: 'Creative Makeup Art', category: 'makeup', image: '/makup/1749278031306.jpg', featured: false, tags: ['creative', 'artistic', 'conceptual'] },
]

const weddingFiles = [
  { file: '1694716301979.jpg', title: 'Grand Wedding Ceremony' },
  { file: '1694716301986.jpg', title: 'Elegant Wedding Reception' },
  { file: '1694716301993.jpg', title: 'Intimate Wedding Vows' },
  { file: '1694716302010.jpg', title: 'Wedding Family Portrait' },
  { file: '1694716302022.jpg', title: 'Wedding Rituals' },
  { file: '1694716302027.jpg', title: 'Bridal Portrait' },
  { file: '1721149518798.jpg.jpeg', title: 'Wedding Celebration' },
  { file: '1729944615457.jpg', title: 'Wedding Detail Shot' },
  { file: 'AD_02952.JPG.jpeg', title: 'Wedding Ceremony Portrait' },
  { file: 'AK108892.jpg', title: 'Bridal Makeup Wedding Look' },
  { file: 'AK109028 (1).jpg', title: 'Wedding Guest Portrait' },
  { file: 'DSC_0321.JPG', title: 'Wedding Procession' },
  { file: 'DSC_0464.JPG', title: 'Wedding Couple Walk' },
  { file: 'DSC_1459.JPG', title: 'Sacred Wedding Vows' },
  { file: 'DSC_1614.JPG', title: 'Wedding Mandap Moment' },
  { file: 'DSC_1627.JPG', title: 'Wedding Blessings' },
  { file: 'DSC_1630.JPG', title: 'Wedding Ritual Close-up' },
  { file: 'DSC_1753.JPG', title: 'Wedding Crowd Celebration' },
  { file: 'DSC_1773.JPG', title: 'Traditional Wedding Rituals' },
  { file: 'DSC_1852.JPG', title: 'Wedding Portrait Session' },
  { file: 'DSC_1865.JPG', title: 'Wedding Couple Portraits' },
  { file: 'DSC_3570.JPG', title: 'Evening Wedding Portrait' },
  { file: 'DSC_3673.JPG', title: 'Reception Portrait' },
  { file: 'DSC_3759 (1).JPG', title: 'Wedding Dance Floor' },
  { file: 'DSC_3767.JPG', title: 'Wedding Celebration Night' },
  { file: 'file_00000000cf888208a2ba0e242078fe6f.png', title: 'Cinematic Wedding Frame' },
  { file: 'shadi.JPG', title: 'Wedding Reception' },
  { file: 'wed-3.jpg', title: 'Wedding Day Portrait' },
  { file: 'wed2 (1).jpg', title: 'Wedding Couple Editorial' },
  { file: 'weeding1.jpg', title: 'Wedding Story Frame' },
  { file: '_DKS1028 (1).jpg.jpeg', title: 'Wedding Candid Moment' },
  { file: '_DKS1039 (1).jpg.jpeg', title: 'Wedding Ceremony Candid' },
  { file: '_DKS1041-1.JPG.jpeg', title: 'Wedding Ritual Portrait' },
  { file: '_DKS1361.JPG.jpeg', title: 'Grand Wedding Scene' },
]

const wedding = weddingFiles.map((item) => ({
  id: `/wedding/${item.file}`,
  title: item.title,
  category: 'wedding',
  image: `/wedding/${item.file}`,
  featured: true,
  tags: ['portrait', 'lifestyle'],
}))

const prewedding = [
  { id: '/prewedding/DSC_0072.jpg', title: 'Sunset Pre-Wedding', category: 'pre-wedding', image: '/prewedding/DSC_0072.jpg', featured: true, tags: ['romantic', 'outdoor', 'couple'] },
  { id: '/prewedding/DSC_0137.jpg', title: 'Urban Pre-Wedding', category: 'pre-wedding', image: '/prewedding/DSC_0137.jpg', featured: true, tags: ['urban', 'city', 'modern'] },
  { id: '/prewedding/DSC_0158.jpg', title: 'Beach Pre-Wedding', category: 'pre-wedding', image: '/prewedding/DSC_0158.jpg', featured: true, tags: ['beach', 'sunset', 'casual'] },
  { id: '/prewedding/pre44 (1).jpg', title: 'Forest Pre-Wedding', category: 'pre-wedding', image: '/prewedding/pre44 (1).jpg', featured: true, tags: ['forest', 'nature', 'adventure'] },
  { id: '/prewedding/DSC.jpg', title: 'Traditional Pre-Wedding', category: 'pre-wedding', image: '/prewedding/DSC.jpg', featured: true, tags: ['traditional', 'cultural', 'elegant'] },
]

const postwedding = [
  { id: '/prewedding/pre17.jpg', title: 'Romantic Post-Wedding', category: 'post-wedding', image: '/prewedding/pre17.jpg', featured: false, tags: ['couple', 'outdoor', 'sunset'] },
  { id: '/prewedding/DSC_9989.jpg', title: 'Casual Post-Wedding', category: 'post-wedding', image: '/prewedding/DSC_9989.jpg', featured: false, tags: ['casual', 'lifestyle', 'natural'] },
]

const jewelryFiles = [
  { file: '1729944615450.jpg', title: 'Jewelry Product Shoot' },
  { file: '1729944615454.jpg', title: 'Fine Jewelry Detail' },
  { file: '1729944615457.jpg', title: 'Studio Jewelry Frame' },
  { file: 'file_00000000a304720b9bb26ff5bc68ffa4.png', title: 'Jewelry Editorial Still' },
  { file: 'file_00000000fed4720892ff5bca59d88793.png', title: 'Luxury Jewelry Look' },
]

const product = jewelryFiles.map((item) => ({
  id: `/jwellery/${item.file}`,
  title: item.title,
  category: 'product',
  image: `/jwellery/${item.file}`,
  featured: true,
  tags: ['jewelry', 'fashion'],
}))

const portraitFiles = [
  { file: '1682137715164.jpg', title: 'Street Portrait' },
  { file: '1707118931151.jpg', title: 'Candid Portrait' },
  { file: '1707118931183.JPG', title: 'Lifestyle Portrait' },
  { file: '1707119659683.jpg', title: 'Natural Portrait' },
  { file: '1707119659688.jpg', title: 'Outdoor Portrait' },
  { file: '1707119659705.jpg', title: 'Street Character Study' },
  { file: '1707232906918.jpg', title: 'City Portrait' },
  { file: '1707232906925.jpg', title: 'Everyday Portrait' },
  { file: '1707232906930.jpg', title: 'Candid Street Frame' },
  { file: '1707232906953.jpg', title: 'Portrait in Motion' },
  { file: '1707232907022.jpg', title: 'Urban Portrait' },
  { file: '1707232907030.jpg', title: 'Street Lifestyle' },
  { file: '1710671175593.jpg', title: 'Quiet Portrait' },
  { file: '1710671175599.jpg', title: 'Documentary Portrait' },
  { file: '1710671175604.jpg', title: 'Natural Light Portrait' },
  { file: '1710671175608.jpg', title: 'Environmental Portrait' },
  { file: '1710671175622.jpg', title: 'Portrait Moment' },
  { file: '1710671175642.jpg', title: 'Street Story Frame' },
  { file: '1710671175655.jpg', title: 'Candid Character' },
  { file: '1715967303750.jpg', title: 'Golden Hour Portrait' },
  { file: '1715967303755.jpg', title: 'Soft Light Portrait' },
  { file: '1715967303759.jpg', title: 'Portrait Study' },
  { file: '1715967303763.jpg', title: 'Lifestyle Character' },
  { file: '1715967303767.jpg', title: 'Street Portrait Frame' },
  { file: '1715967303781.jpg', title: 'Close Portrait' },
  { file: '1715967303787.jpg', title: 'Candid Portrait Frame' },
  { file: '1715967304268.jpg', title: 'Editorial Portrait' },
  { file: 'DKS01679.jpg', title: 'Classic Portrait' },
  { file: 'DKS02355.jpg', title: 'Fashion Portrait' },
  { file: 'DKS02446.jpg', title: 'Studio Portrait Look' },
  { file: '_DSC0014.jpg', title: 'Fine Art Portrait' },
]

const portrait = portraitFiles.map((item) => ({
  id: `/street/${item.file}`,
  title: item.title,
  category: 'portrait',
  image: `/street/${item.file}`,
  featured: true,
  tags: ['portrait', 'lifestyle'],
}))

const portfolioItems = [...model, ...makeup, ...wedding, ...prewedding, ...postwedding, ...product, ...portrait]

const categories = [
  { id: 'all', name: 'All' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'pre-wedding', name: 'Pre-Wedding' },
  { id: 'post-wedding', name: 'Post-Wedding' },
  { id: 'makeup', name: 'Makeup' },
  { id: 'model', name: 'Model' },
  { id: 'portrait', name: 'Portrait' },
  { id: 'product', name: 'Product' },
]

const filterTags = ['adventure', 'fashion', 'jewelry', 'lifestyle', 'portrait']

function GalleryCard({ item, index, masonry = false, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.06 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group overflow-hidden rounded-xl cursor-pointer ${masonry ? 'mb-6 break-inside-avoid' : ''}`}
      onClick={() => onSelect(item)}
    >
      <div className={masonry ? 'relative' : 'aspect-square relative overflow-hidden'}>
        {masonry ? (
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={900}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
          <div>
            <h3 className="text-white font-serif text-lg">{item.title}</h3>
            <p className="text-white/70 text-sm capitalize">{item.category}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function PortfolioInner() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [activeTags, setActiveTags] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const category = searchParams.get('category')
    if (category && categories.some((c) => c.id === category)) {
      setActiveCategory(category)
    }
  }, [searchParams])

  const filteredItems = portfolioItems.filter((item) => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory
    const tagMatch = activeTags.length === 0 || activeTags.some((tag) => item.tags.includes(tag))
    const searchMatch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return categoryMatch && tagMatch && searchMatch
  })

  const toggleTag = (tag) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="pb-16 md:pb-24 min-h-screen bg-bg">
      <PageHero
        eyebrow="The Work"
        title="Our Portfolio"
        highlight="Portfolio"
        subtitle="Explore our collection of beautifully captured moments across different photography styles and events"
      />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
            <div className="relative w-full md:max-w-sm">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                placeholder="Search work..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-gold/15 rounded-full pl-10 pr-4 py-2.5 min-h-11 text-sm text-text placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
            </div>

            <div className="flex items-center justify-between md:justify-end gap-3 md:ml-auto">
              <p className="text-muted text-sm whitespace-nowrap">
                {filteredItems.length} {filteredItems.length === 1 ? 'image' : 'images'}
              </p>
              <div className="flex gap-1 bg-surface p-1 rounded-full border border-gold/10">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 min-h-11 min-w-11 rounded-full ${viewMode === 'grid' ? 'bg-gold text-bg' : 'text-muted'}`}
                  aria-label="Grid view"
                >
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 min-h-11 min-w-11 rounded-full ${viewMode === 'masonry' ? 'bg-gold text-bg' : 'text-muted'}`}
                  aria-label="Masonry view"
                >
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h10M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 mb-4 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setActiveTags([])
                }}
                className={`px-4 py-2 min-h-11 rounded-full text-sm font-medium whitespace-nowrap shrink-0 transition-all ${
                  activeCategory === category.id
                    ? 'bg-gold text-bg'
                    : 'bg-surface text-muted hover:text-text border border-gold/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs capitalize transition-all ${
                  activeTags.includes(tag)
                    ? 'bg-gold text-bg'
                    : 'text-muted hover:text-text border border-gold/15'
                }`}
              >
                {tag}
              </button>
            ))}

            {activeTags.length > 0 && (
              <button
                type="button"
                onClick={() => setActiveTags([])}
                className="text-xs text-muted hover:text-gold ml-1"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {filteredItems.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} onSelect={setSelectedImage} />
              ))}
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {filteredItems.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} masonry onSelect={setSelectedImage} />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-16">
            <p className="text-muted text-lg mb-4">No images found matching your criteria</p>
            <Button
              onClick={() => {
                setActiveCategory('all')
                setActiveTags([])
                setSearchQuery('')
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl z-10 hover:text-white/70 w-11 h-11"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              &times;
            </button>
            <div className="max-w-6xl w-full max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="font-serif text-xl">{selectedImage.title}</h3>
                <p className="text-white/70 capitalize text-sm">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-muted">Loading portfolio...</div>}>
      <PortfolioInner />
    </Suspense>
  )
}
