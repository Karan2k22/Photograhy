// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'


// const model = [
//     {
//     id: 21,
//     title: 'Sunset Pre-Wedding',
//     category: 'model',
//     image: '/model/1675237481098.jpeg',
//     featured: true
//   },
//     {
//     id: 22,
//     title: 'Sunset Pre-Wedding',
//     category: 'model',
//     image: '/model/1676521889672.jpg',
//     featured: true
//   },
//     {
//     id: 23,
//     title: 'Sunset Pre-Wedding',
//     category: 'model',
//     image: '/model/1709308820689.jpg',
//     featured: true
//   },
//     {
//     id: 24,
//     title: 'Sunset Pre-Wedding',
//     category: 'model',
//     image: '/model/DKS02923.jpg',
//     featured: true
//   },
//     {
//     id: 25,
//     title: 'Sunset Pre-Wedding',
//     category: 'model',
//     image: '/model/1679220076166.jpg',
//     featured: true
//   },
//     {
//     id: 26,
//     title: 'Sunset Pre-Wedding',
//     category: 'model',
//     image: '/model/1676521889672.jpg',
//     featured: true
//   },
//     {
//     id: 27,
//     title: 'Fashion Model Portfolio',
//     category: 'model',
//     image: '/gallery/1679220076131.jpg',
//     featured: true
//   },
// ]


// const makup = [
//   {
//     id: 31,
//     title: 'Bridal Makeup Session',
//     category: 'makeup',
//     image: '/gallery/makeup-1.jpg',
//     featured: false
//   },
//   {
//     id: 32,
//     title: 'Bridal Makeup Session',
//     category: 'makeup',
//     image: '/makup/1749278031306.jpg',
//     featured: false
//   },
//   {
//     id: 33,
//     title: 'Bridal Makeup Session',
//     category: 'makeup',
//     image: '/makeup/IMG-20250427-WA0002.jpg',
//     featured: false
//   },
//   {
//     id: 34,
//     title: 'Bridal Makeup Session',
//     category: 'makeup',
//     image: '/makeup/IMG-20250427-WA0004.jpg',
//     featured: false
//   },
//   {
//     id: 35,
//     title: 'Bridal Makeup Session',
//     category: 'makeup',
//     image: '/makeup/IMG-20250427-WA0006.jpg',
//     featured: false
//   },
// ]
// const portfolioItems = [
//   ...model, ...makup,
//   {
//     id: 1,
//     title: 'Sunset Pre-Wedding',
//     category: 'pre-wedding',
//     image: '/portfolio/pre-wedding-1.jpg',
//     featured: true,
//     tags: ['romantic', 'outdoor', 'couple']
//   },
//   {
//     id: 2,
//     title: 'Grand Wedding Ceremony',
//     category: 'wedding',
//     image: '/portfolio/wedding-1.jpg',
//     featured: true,
//     tags: ['traditional', 'indoor', 'ceremony']
//   },
//   {
//     id: 3,
//     title: 'Bridal Makeup Session',
//     category: 'makeup',
//     image: '/portfolio/makeup-1.jpg',
//     featured: false,
//     tags: ['beauty', 'bridal', 'studio']
//   },
//   {
//     id: 4,
//     title: 'Newborn Baby Portraits',
//     category: 'baby',
//     image: '/portfolio/baby-1.jpg',
//     featured: true,
//     tags: ['newborn', 'family', 'indoor']
//   },
//   {
//     id: 5,
//     title: 'Luxury Interior Showcase',
//     category: 'interior',
//     image: '/portfolio/interior-1.jpg',
//     featured: false,
//     tags: ['architecture', 'design', 'property']
//   },
//   {
//     id: 6,
//     title: 'Fashion Model Portfolio',
//     category: 'model',
//     image: '/portfolio/model-1.jpg',
//     featured: true,
//     tags: ['fashion', 'editorial', 'studio']
//   },
//   {
//     id: 7,
//     title: 'Romantic Post-Wedding',
//     category: 'post-wedding',
//     image: '/portfolio/post-wedding-1.jpg',
//     featured: false,
//     tags: ['couple', 'outdoor', 'sunset']
//   },
//   {
//     id: 8,
//     title: 'Jewelry Product Shoot',
//     category: 'product',
//     image: '/portfolio/product-1.jpg',
//     featured: true,
//     tags: ['commercial', 'jewelry', 'studio']
//   },
//   {
//     id: 9,
//     title: 'Beach Engagement Session',
//     category: 'pre-wedding',
//     image: '/portfolio/pre-wedding-2.jpg',
//     featured: false,
//     tags: ['beach', 'sunset', 'couple']
//   },
//   {
//     id: 10,
//     title: 'Cultural Wedding Rituals',
//     category: 'wedding',
//     image: '/portfolio/wedding-2.jpg',
//     featured: true,
//     tags: ['cultural', 'traditional', 'ceremony']
//   },
//   {
//     id: 11,
//     title: 'Editorial Makeup Look',
//     category: 'makeup',
//     image: '/portfolio/makeup-2.jpg',
//     featured: false,
//     tags: ['editorial', 'high-fashion', 'studio']
//   },
//   {
//     id: 12,
//     title: 'Maternity Photo Session',
//     category: 'baby',
//     image: '/portfolio/baby-2.jpg',
//     featured: true,
//     tags: ['maternity', 'family', 'outdoor']
//   }
// ]

// const categories = [
//   { id: 'all', name: 'All' },
//   { id: 'wedding', name: 'Wedding' },
//   { id: 'pre-wedding', name: 'Pre-Wedding' },
//   { id: 'post-wedding', name: 'Post-Wedding' },
//   { id: 'makeup', name: 'Makeup' },
//   { id: 'model', name: 'Model' },
//   { id: 'baby', name: 'Baby' },
//   { id: 'interior', name: 'Interior' },
//   { id: 'product', name: 'Product' }
// ]

// // const tags = [
// //   'romantic', 'outdoor', 'couple', 'traditional', 
// //   'indoor', 'ceremony', 'beauty', 'bridal', 
// //   'studio', 'newborn', 'family', 'architecture',
// //   'design', 'property', 'fashion', 'editorial',
// //   'commercial', 'jewelry', 'beach', 'sunset',
// //   'cultural', 'high-fashion', 'maternity'
// // ]

// export default function Portfolio() {
//   const [activeCategory, setActiveCategory] = useState('all')
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [viewMode, setViewMode] = useState('grid')
//   const [activeTags, setActiveTags] = useState([])
//   const [searchQuery, setSearchQuery] = useState('')

//   const filteredItems = portfolioItems.filter(item => {
//     // Category filter
//     const categoryMatch = activeCategory === 'all' || item.category === activeCategory
    
//     // Tag filter
//     const tagMatch = activeTags.length === 0 || 
//       activeTags.some(tag => item.tags.includes(tag))
    
//     // Search filter
//     const searchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
//     return categoryMatch && tagMatch && searchMatch
//   })

//   const toggleTag = (tag) => {
//     setActiveTags(prev => 
//       prev.includes(tag) 
//         ? prev.filter(t => t !== tag) 
//         : [...prev, tag]
//     )
//   }

//   return (
//     <div className="pt-24 pb-16 min-h-screen bg-black">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gray-400">Portfolio</span></h1>
//           <p className="text-gray-400 max-w-2xl">
//             Explore our collection of beautifully captured moments across different photography styles and events
//           </p>
//         </motion.div>

//         {/* Filters */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="mb-8"
//         >
//           {/* Search */}
//           <div className="relative mb-6">
//             <input
//               type="text"
//               placeholder="Search portfolio..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
//             />
//             <svg
//               className="absolute right-3 top-3.5 text-gray-400 w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//             </svg>
//           </div>

//           {/* Category Filters */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             {categories.map(category => (
//               <motion.button
//                 key={category.id}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                   activeCategory === category.id
//                     ? 'bg-white text-black'
//                     : 'bg-gray-900 text-white hover:bg-gray-800'
//                 }`}
//               >
//                 {category.name}
//               </motion.button>
//             ))}
//           </div>

//           {/* Tag Filters */}
//           <div className="mb-4">
//             <h3 className="text-gray-400 text-sm mb-2">Filter by tags:</h3>
//             <div className="flex flex-wrap gap-2">
//               {tags.map(tag => (
//                 <motion.button
//                   key={tag}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => toggleTag(tag)}
//                   className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
//                     activeTags.includes(tag)
//                       ? 'bg-gray-400 text-black'
//                       : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
//                   }`}
//                 >
//                   {tag}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* View Toggle */}
//           <div className="flex justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
//             </p>
//             <div className="flex gap-2 bg-gray-900 p-1 rounded-full">
//               <button
//                 onClick={() => setViewMode('grid')}
//                 className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-white text-black' : 'text-white'}`}
//                 aria-label="Grid view"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                 </svg>
//               </button>
//               <button
//                 onClick={() => setViewMode('masonry')}
//                 className={`p-2 rounded-full ${viewMode === 'masonry' ? 'bg-white text-black' : 'text-white'}`}
//                 aria-label="Masonry view"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Gallery Grid */}
//         {filteredItems.length > 0 ? (
//           viewMode === 'grid' ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredItems.map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.05, duration: 0.5 }}
//                   whileHover={{ scale: 1.02 }}
//                   className="relative group overflow-hidden rounded-xl cursor-pointer"
//                   onClick={() => setSelectedImage(item)}
//                 >
//                   <div className="aspect-square relative">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
//                       <div className="flex flex-wrap gap-2">
//                         {item.tags.slice(0, 3).map(tag => (
//                           <span key={tag} className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                         <h3 className="text-white font-medium text-lg">{item.title}</h3>
//                         <p className="text-gray-300 text-sm capitalize">{item.category}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           ) : (
//             <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
//               {filteredItems.map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05, duration: 0.5 }}
//                   whileHover={{ scale: 1.02 }}
//                   className="mb-6 break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer"
//                   onClick={() => setSelectedImage(item)}
//                 >
//                   <div className="relative">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       width={600}
//                       height={900}
//                       className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
//                       <div className="flex flex-wrap gap-2">
//                         {item.tags.slice(0, 3).map(tag => (
//                           <span key={tag} className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                         <h3 className="text-white font-medium text-lg">{item.title}</h3>
//                         <p className="text-gray-300 text-sm capitalize">{item.category}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )
//         ) : (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-16"
//           >
//             <p className="text-gray-400 text-lg">No images found matching your criteria</p>
//             <button 
//               onClick={() => {
//                 setActiveCategory('all')
//                 setActiveTags([])
//                 setSearchQuery('')
//               }}
//               className="mt-4 text-white hover:underline"
//             >
//               Clear all filters
//             </button>
//           </motion.div>
//         )}

//         {/* Image Modal */}
//         {selectedImage && (
//           <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//             <button 
//               className="absolute top-6 right-6 text-white text-3xl z-10"
//               onClick={() => setSelectedImage(null)}
//             >
//               &times;
//             </button>
//             <div className="max-w-6xl w-full max-h-[90vh] relative">
//               <Image
//                 src={selectedImage.image}
//                 alt={selectedImage.title}
//                 width={1200}
//                 height={800}
//                 className="w-full h-full max-h-[80vh] object-contain"
//               />
//               <div className="mt-4 text-center">
//                 <h3 className="text-white text-xl font-medium">
//                   {selectedImage.title}
//                 </h3>
//                 <p className="text-gray-400 capitalize mb-2">
//                   {selectedImage.category}
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-2">
//                   {selectedImage.tags.map(tag => (
//                     <span key={tag} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'


// const model = [
//   {
//     id: 21,
//     title: 'Fashion Model Portfolio',
//     category: 'model',
//     image: '/model/1675237481098.jpeg',
//     featured: true,
//     tags: ['fashion', 'editorial', 'studio']
//   },
//   {
//     id: 22,
//     title: 'Outdoor Model Shoot',
//     category: 'model',
//     image: '/model/1676521889672.jpg',
//     featured: true,
//     tags: ['outdoor', 'natural', 'portrait']
//   },
//   {
//     id: 23,
//     title: 'Studio Fashion Shoot',
//     category: 'model',
//     image: '/model/1709308820689.jpg',
//     featured: true,
//     tags: ['studio', 'fashion', 'professional']
//   },
//   {
//     id: 24,
//     title: 'Editorial Model Portfolio',
//     category: 'model',
//     image: '/model/DKS02923.jpg',
//     featured: true,
//     tags: ['editorial', 'high-fashion', 'conceptual']
//   },
//   {
//     id: 25,
//     title: 'Creative Model Session',
//     category: 'model',
//     image: '/model/1679220076166.jpg',
//     featured: true,
//     tags: ['creative', 'artistic', 'conceptual']
//   },
//   {
//     id: 26,
//     title: 'Natural Light Portrait',
//     category: 'model',
//     image: '/model/1676521889672.jpg',
//     featured: true,
//     tags: ['natural', 'portrait', 'soft']
//   },
//   {
//     id: 27,
//     title: 'Fashion Editorial',
//     category: 'model',
//     image: '/gallery/1679220076131.jpg',
//     featured: true,
//     tags: ['fashion', 'editorial', 'trendy']
//   },
// ]

// const makeup = [
//   {
//     id: 31,
//     title: 'Bridal Makeup Session',
//     category: 'makeup',
//     image: '/makeup/1749278031306.jpg',
//     featured: false,
//     tags: ['bridal', 'beauty', 'glamour']
//   },
//   {
//     id: 32,
//     title: 'Editorial Makeup Look',
//     category: 'makeup',
//     image: '/makeup/IMG-20250427-WA0002.jpg',
//     featured: false,
//     tags: ['editorial', 'creative', 'artistic']
//   },
//   {
//     id: 33,
//     title: 'Professional Makeup Shoot',
//     category: 'makeup',
//     image: '/makeup/IMG-20250427-WA0004.jpg',
//     featured: false,
//     tags: ['professional', 'portfolio', 'beauty']
//   },
//   {
//     id: 34,
//     title: 'Creative Makeup Art',
//     category: 'makeup',
//     image: '/makeup/IMG-20250427-WA0006.jpg',
//     featured: false,
//     tags: ['creative', 'artistic', 'conceptual']
//   }
// ]


// const wedding = [
//     {
//     id: 11,
//     title: 'Grand Wedding Ceremony',
//     category: 'wedding',
//     image: '/wedding/weeding1.jpg',
//     featured: true,
//     tags: ['traditional', 'indoor', 'ceremony']
//   },
//     {
//     id: 12,
//     title: 'Grand Wedding Ceremony',
//     category: 'wedding',
//     image: '/weeding/1694716301979.jpg',
//     featured: true,
//     tags: ['traditional', 'indoor', 'ceremony']
//   },
//     {
//     id: 13,
//     title: 'Grand Wedding Ceremony',
//     category: 'wedding',
//     image: '/weeding/1694716301986.jpg',
//     featured: true,
//     tags: ['traditional', 'indoor', 'ceremony']
//   },
//     {
//     id: 14,
//     title: 'Grand Wedding Ceremony',
//     category: 'wedding',
//     image: '/weeding/1694716301993.jpg',
//     featured: true,
//     tags: ['traditional', 'indoor', 'ceremony']
//   },
//     {
//     id: 15,
//     title: 'Grand Wedding Ceremony',
//     category: 'wedding',
//     image: '/weeding/DSC_1773.JPG',
//     featured: true,
//     tags: ['traditional', 'indoor', 'ceremony']
//   },
// ]

// const prewedding = [
// {
//     id: 1,
//     title: 'Sunset Pre-Wedding',
//     category: 'pre-wedding',
//     image: '/prewedding/DSC_0072.jpg/',
//     featured: true,
//     tags: ['romantic', 'outdoor', 'couple']
//   },  
// {
//     id: 2,
//     title: 'Sunset Pre-Wedding',
//     category: 'pre-wedding',
//     image: '/prewedding/DSC_0137.jpg/',
//     featured: true,
//     tags: ['romantic', 'outdoor', 'couple']
//   },  
// {
//     id: 3,
//     title: 'Sunset Pre-Wedding',
//     category: 'pre-wedding',
//     image: '/prewedding/DSC_0158.jpg',
//     featured: true,
//     tags: ['romantic', 'outdoor', 'couple']
//   },  
// {
//     id: 4,
//     title: 'Sunset Pre-Wedding',
//     category: 'pre-wedding',
//     image: '/prewedding/DSC_9989.jpg',
//     featured: true,
//     tags: ['romantic', 'outdoor', 'couple']
//   },  
// {
//     id: 5,
//     title: 'Sunset Pre-Wedding',
//     category: 'pre-wedding',
//     image: '/prewedding/DSC.jpg',
//     featured: true,
//     tags: ['romantic', 'outdoor', 'couple']
//   },  
// ]


// const postwedding = [
//     {
//     id: 41,
//     title: 'Romantic Post-Wedding',
//     category: 'post-wedding',
//     image: '/prewedding/pre17.jpg',
//     featured: false,
//     tags: ['couple', 'outdoor', 'sunset']
//   },
//     {
//     id: 42,
//     title: 'Romantic Post-Wedding',
//     category: 'post-wedding',
//     image: '/prewedding/pre44 (1).jpg',
//     featured: false,
//     tags: ['couple', 'outdoor', 'sunset']
//   },
// ]
// const portfolioItems = [
//   ...model, 
//   ...makeup,
//   ...wedding,
  
 
//   {
//     id: 4,
//     title: 'Newborn Baby Portraits',
//     category: 'baby',
//     image: '/portfolio/baby-1.jpg',
//     featured: true,
//     tags: ['newborn', 'family', 'indoor']
//   },
//   {
//     id: 5,
//     title: 'Luxury Interior Showcase',
//     category: 'interior',
//     image: '/portfolio/interior-1.jpg',
//     featured: false,
//     tags: ['architecture', 'design', 'property']
//   },
   

//   {
//     id: 8,
//     title: 'Jewelry Product Shoot',
//     category: 'product',
//     image: '/portfolio/product-1.jpg',
//     featured: true,
//     tags: ['commercial', 'jewelry', 'studio']
//   },


 
//   {
//     id: 12,
//     title: 'Maternity Photo Session',
//     category: 'baby',
//     image: '/portfolio/baby-2.jpg',
//     featured: true,
//     tags: ['maternity', 'family', 'outdoor']
//   }
// ]

// const categories = [
//   { id: 'all', name: 'All' },
//   { id: 'wedding', name: 'Wedding' },
//   { id: 'pre-wedding', name: 'Pre-Wedding' },
//   { id: 'post-wedding', name: 'Post-Wedding' },
//   { id: 'makeup', name: 'Makeup' },
//   { id: 'model', name: 'Model' },
//   { id: 'baby', name: 'Baby' },
//   { id: 'interior', name: 'Interior' },
//   { id: 'product', name: 'Product' }
// ]

// const allTags = Array.from(
//   new Set(portfolioItems.flatMap(item => item.tags))
// ).sort()

// export default function Portfolio() {
//   const [activeCategory, setActiveCategory] = useState('all')
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [viewMode, setViewMode] = useState('grid')
//   const [activeTags, setActiveTags] = useState([])
//   const [searchQuery, setSearchQuery] = useState('')

//   const filteredItems = portfolioItems.filter(item => {
//     const categoryMatch = activeCategory === 'all' || item.category === activeCategory
//     const tagMatch = activeTags.length === 0 || activeTags.some(tag => item.tags.includes(tag))
//     const searchMatch = searchQuery === '' || 
//       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
//     return categoryMatch && tagMatch && searchMatch
//   })

//   const toggleTag = (tag) => {
//     setActiveTags(prev => 
//       prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
//     )
//   }

//   const clearFilters = () => {
//     setActiveCategory('all')
//     setActiveTags([])
//     setSearchQuery('')
//   }

//   return (
//     <div className="pt-24 pb-16 min-h-screen bg-black">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gray-400">Portfolio</span></h1>
//           <p className="text-gray-400 max-w-2xl">
//             Explore our collection of beautifully captured moments across different photography styles and events
//           </p>
//         </motion.div>

//         {/* Filters */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="mb-8"
//         >
//           {/* Search */}
//           <div className="relative mb-6">
//             <input
//               type="text"
//               placeholder="Search portfolio..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
//             />
//             <svg
//               className="absolute right-3 top-3.5 text-gray-400 w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//             </svg>
//           </div>

//           {/* Category Filters */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             {categories.map(category => (
//               <motion.button
//                 key={category.id}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                   activeCategory === category.id
//                     ? 'bg-white text-black'
//                     : 'bg-gray-900 text-white hover:bg-gray-800'
//                 }`}
//               >
//                 {category.name}
//               </motion.button>
//             ))}
//           </div>

//           {/* Tag Filters */}
//           <div className="mb-4">
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-gray-400 text-sm">Filter by tags:</h3>
//               {activeTags.length > 0 && (
//                 <button 
//                   onClick={() => setActiveTags([])}
//                   className="text-gray-400 hover:text-white text-xs"
//                 >
//                   Clear tags
//                 </button>
//               )}
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {allTags.map(tag => (
//                 <motion.button
//                   key={tag}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => toggleTag(tag)}
//                   className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
//                     activeTags.includes(tag)
//                       ? 'bg-gray-400 text-black'
//                       : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
//                   }`}
//                 >
//                   {tag}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* View Toggle */}
//           <div className="flex justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
//             </p>
//             <div className="flex gap-2 bg-gray-900 p-1 rounded-full">
//               <button
//                 onClick={() => setViewMode('grid')}
//                 className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-white text-black' : 'text-white'}`}
//                 aria-label="Grid view"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                 </svg>
//               </button>
//               <button
//                 onClick={() => setViewMode('masonry')}
//                 className={`p-2 rounded-full ${viewMode === 'masonry' ? 'bg-white text-black' : 'text-white'}`}
//                 aria-label="Masonry view"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Gallery Grid */}
//         {filteredItems.length > 0 ? (
//           viewMode === 'grid' ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredItems.map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.05, duration: 0.5 }}
//                   whileHover={{ scale: 1.02 }}
//                   className="relative group overflow-hidden rounded-xl cursor-pointer"
//                   onClick={() => setSelectedImage(item)}
//                 >
//                   <div className="aspect-square relative">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                     <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
//                       <div className="flex flex-wrap gap-2">
//                         {item.tags.slice(0, 3).map(tag => (
//                           <span key={tag} className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                         <h3 className="text-white font-medium text-lg">{item.title}</h3>
//                         <p className="text-gray-300 text-sm capitalize">{item.category}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           ) : (
//             <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
//               {filteredItems.map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05, duration: 0.5 }}
//                   whileHover={{ scale: 1.02 }}
//                   className="mb-6 break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer"
//                   onClick={() => setSelectedImage(item)}
//                 >
//                   <div className="relative">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       width={600}
//                       height={900}
//                       className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                     <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
//                       <div className="flex flex-wrap gap-2">
//                         {item.tags.slice(0, 3).map(tag => (
//                           <span key={tag} className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                         <h3 className="text-white font-medium text-lg">{item.title}</h3>
//                         <p className="text-gray-300 text-sm capitalize">{item.category}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )
//         ) : (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-16"
//           >
//             <p className="text-gray-400 text-lg">No images found matching your criteria</p>
//             <button 
//               onClick={clearFilters}
//               className="mt-4 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
//             >
//               Clear all filters
//             </button>
//           </motion.div>
//         )}

//         {/* Image Modal */}
//         {selectedImage && (
//           <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//             <button 
//               className="absolute top-6 right-6 text-white text-3xl z-10 hover:text-gray-300 transition-colors"
//               onClick={() => setSelectedImage(null)}
//               aria-label="Close image"
//             >
//               &times;
//             </button>
//             <div className="max-w-6xl w-full max-h-[90vh] relative">
//               <Image
//                 src={selectedImage.image}
//                 alt={selectedImage.title}
//                 width={1200}
//                 height={800}
//                 className="w-full h-full max-h-[80vh] object-contain"
//               />
//               <div className="mt-4 text-center">
//                 <h3 className="text-white text-xl font-medium">
//                   {selectedImage.title}
//                 </h3>
//                 <p className="text-gray-400 capitalize mb-2">
//                   {selectedImage.category}
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-2">
//                   {selectedImage.tags.map(tag => (
//                     <span key={tag} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const model = [
  {
    id: 21,
    title: 'Fashion Model Portfolio',
    category: 'model',
    image: '/model/1675237481098.jpeg',
    featured: true,
    tags: ['fashion', 'editorial', 'studio']
  },
  {
    id: 22,
    title: 'Outdoor Model Shoot',
    category: 'model',
    image: '/model/1676521889672.jpg',
    featured: true,
    tags: ['outdoor', 'natural', 'portrait']
  },
  {
    id: 23,
    title: 'Studio Fashion Shoot',
    category: 'model',
    image: '/model/1676521889674.jpg',
    featured: true,
    tags: ['studio', 'fashion', 'professional']
  },
  {
    id: 24,
    title: 'Editorial Model Portfolio',
    category: 'model',
    image: '/model/1679220076131.jpg',
    featured: true,
    tags: ['editorial', 'high-fashion', 'conceptual']
  },
  {
    id: 25,
    title: 'Creative Model Session',
    category: 'model',
    image: '/model/1679220076166.jpg',
    featured: true,
    tags: ['creative', 'artistic', 'conceptual']
  },
  {
    id: 26,
    title: 'Natural Light Portrait',
    category: 'model',
    image: '/model/1709308820689.jpg',
    featured: true,
    tags: ['natural', 'portrait', 'soft']
  },
  {
    id: 27,
    title: 'Fashion Editorial',
    category: 'model',
    image: '/model/DKS02923.jpg',
    featured: true,
    tags: ['fashion', 'editorial', 'trendy']
  },
]

const makeup = [
  {
    id: 31,
    title: 'Bridal Makeup Session',
    category: 'makeup',
    image: '/makup/IMG-20250427-WA0006.jpg',
    featured: false,
    tags: ['bridal', 'beauty', 'glamour']
  },
  {
    id: 32,
    title: 'Editorial Makeup Look',
    category: 'makeup',
    image: '/makup/IMG-20250427-WA0004.jpg',
    featured: false,
    tags: ['editorial', 'creative', 'artistic']
  },
  {
    id: 33,
    title: 'Professional Makeup Shoot',
    category: 'makeup',
    image: '/makup/IMG-20250427-WA0002.jpg',
    featured: false,
    tags: ['professional', 'portfolio', 'beauty']
  },
  {
    id: 34,
    title: 'Creative Makeup Art',
    category: 'makeup',
    image: '/makup/1749278031306.jpg',
    featured: false,
    tags: ['creative', 'artistic', 'conceptual']
  }
]

const wedding = [
  {
    id: 11,
    title: 'Grand Wedding Ceremony',
    category: 'wedding',
    image: '/wedding/1694716301979.jpg',
    featured: true,
    tags: ['traditional', 'indoor', 'ceremony']
  },
  {
    id: 12,
    title: 'Elegant Wedding Reception',
    category: 'wedding',
    image: '/wedding/1694716301986.jpg',
    featured: true,
    tags: ['reception', 'celebration', 'elegant']
  },
  {
    id: 13,
    title: 'Intimate Wedding Vows',
    category: 'wedding',
    image: '/wedding/1694716301993.jpg',
    featured: true,
    tags: ['intimate', 'vows', 'emotional']
  },
  {
    id: 14,
    title: 'Traditional Wedding Rituals',
    category: 'wedding',
    image: '/wedding/DSC_1773.JPG',
    featured: true,
    tags: ['traditional', 'rituals', 'cultural']
  },
  {
    id: 15,
    title: 'Wedding Couple Portraits',
    category: 'wedding',
    image: '/wedding/DSC_1865.JPG',
    featured: true,
    tags: ['couple', 'portraits', 'romantic']
  },
]

const prewedding = [
  {
    id: 1,
    title: 'Sunset Pre-Wedding',
    category: 'pre-wedding',
    image: '/prewedding/DSC_0072.jpg',
    featured: true,
    tags: ['romantic', 'outdoor', 'couple']
  },  
  {
    id: 2,
    title: 'Urban Pre-Wedding',
    category: 'pre-wedding',
    image: '/prewedding/DSC_0137.jpg',
    featured: true,
    tags: ['urban', 'city', 'modern']
  },  
  {
    id: 3,
    title: 'Beach Pre-Wedding',
    category: 'pre-wedding',
    image: '/prewedding/DSC_0158.jpg',
    featured: true,
    tags: ['beach', 'sunset', 'casual']
  },  
  {
    id: 4,
    title: 'Forest Pre-Wedding',
    category: 'pre-wedding',
    image: '/prewedding/pre44 (1).jpg',
    featured: true,
    tags: ['forest', 'nature', 'adventure']
  },  
  {
    id: 5,
    title: 'Traditional Pre-Wedding',
    category: 'pre-wedding',
    image: '/prewedding/DSC.jpg',
    featured: true,
    tags: ['traditional', 'cultural', 'elegant']
  },  
]

const postwedding = [
  {
    id: 41,
    title: 'Romantic Post-Wedding',
    category: 'post-wedding',
    image: '/prewedding/pre17.jpg',
    featured: false,
    tags: ['couple', 'outdoor', 'sunset']
  },
  {
    id: 42,
    title: 'Casual Post-Wedding',
    category: 'post-wedding',
    image: '/prewedding/DSC_9989.jpg',
    featured: false,
    tags: ['casual', 'lifestyle', 'natural']
  },
]

const baby = [
  {
    id: 4,
    title: 'Newborn Baby Portraits',
    category: 'baby',
    image: '/portfolio/placeholder-baby1.jpg',
    featured: true,
    tags: ['newborn', 'family', 'indoor']
  },
  {
    id: 12,
    title: 'Maternity Photo Session',
    category: 'baby',
    image: '/portfolio/placeholder-baby2.jpg',
    featured: true,
    tags: ['maternity', 'family', 'outdoor']
  }
]

const interior = [
  {
    id: 5,
    title: 'Luxury Interior Showcase',
    category: 'interior',
    image: '/portfolio/placeholder-interior1.jpg',
    featured: false,
    tags: ['architecture', 'design', 'property']
  }
]

const product = [
  {
    id: 8,
    title: 'Jewelry Product Shoot',
    category: 'product',
    image: '/jwellery/1729944615450.jpg',
    featured: true,
    tags: ['commercial', 'jewelry', 'studio']
  },
  {
    id: 9,
    title: 'Jewelry Product Shoot',
    category: 'product',
    image: '/jwellery/1729944615454.jpg',
    featured: true,
    tags: ['commercial', 'jewelry', 'studio']
  },
  {
    id: 10,
    title: 'Jewelry Product Shoot',
    category: 'product',
    image: '/jwellery/1729944615457.jpg',
    featured: true,
    tags: ['commercial', 'jewelry', 'studio']
  }
]

const portfolioItems = [
  ...model, 
  ...makeup,
  ...wedding,
  ...prewedding,
  ...postwedding,
  // ...baby,
  // ...interior,
  ...product
]

const categories = [
  { id: 'all', name: 'All' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'pre-wedding', name: 'Pre-Wedding' },
  { id: 'post-wedding', name: 'Post-Wedding' },
  { id: 'makeup', name: 'Makeup' },
  { id: 'model', name: 'Model' },
  // { id: 'baby', name: 'Baby' },
  // { id: 'interior', name: 'Interior' },
  { id: 'product', name: 'Product' }
]

const allTags = Array.from(
  new Set(portfolioItems.flatMap(item => item.tags))
).sort()

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [activeTags, setActiveTags] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = portfolioItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory
    const tagMatch = activeTags.length === 0 || activeTags.some(tag => item.tags.includes(tag))
    const searchMatch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return categoryMatch && tagMatch && searchMatch
  })

  const toggleTag = (tag) => {
    setActiveTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setActiveCategory('all')
    setActiveTags([])
    setSearchQuery('')
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gray-400">Portfolio</span></h1>
          <p className="text-gray-400 max-w-2xl">
            Explore our collection of beautifully captured moments across different photography styles and events
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          {/* Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search portfolio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <svg
              className="absolute right-3 top-3.5 text-gray-400 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-white text-black'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Tag Filters */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-400 text-sm">Filter by tags:</h3>
              {activeTags.length > 0 && (
                <button 
                  onClick={() => setActiveTags([])}
                  className="text-gray-400 hover:text-white text-xs"
                >
                  Clear tags
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeTags.includes(tag)
                      ? 'bg-gray-400 text-black'
                      : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
            </p>
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
          </div>
        </motion.div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          viewMode === 'grid' ? (
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-medium text-lg">{item.title}</h3>
                        <p className="text-gray-300 text-sm capitalize">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">No images found matching your criteria</p>
            <button 
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-6 right-6 text-white text-3xl z-10 hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
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
                <p className="text-gray-400 capitalize mb-2">
                  {selectedImage.category}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedImage.tags.map(tag => (
                    <span key={tag} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}