// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { useState } from 'react'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Portfolio', path: '/portfolio' },
//     { name: 'Services', path: '/services' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ]

//   return (
//     <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Link href="/" className="text-2xl font-bold">
//             Lens<span className="text-gray-400">Craft</span>
//           </Link>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-8">
//           {navItems.map((item, index) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.3 }}
//             >
//               <Link
//                 href={item.path}
//                 className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
//               >
//                 {item.name}
//                 <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </motion.div>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <div className="w-6 flex flex-col space-y-1">
//             <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
//             <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
//             <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
//           </div>
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           exit={{ opacity: 0, height: 0 }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden overflow-hidden"
//         >
//           <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </header>
//   )
// }

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="relative h-8 w-32">
            <Image
              src="/logo/logo.png"
              alt="Dhansu Photography Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.path}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col space-y-1">
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={item.path}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}