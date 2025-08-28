// 'use client'

// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa'
// import { MdEmail } from 'react-icons/md'
// import { FiPhone } from 'react-icons/fi'

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   const socialLinks = [
//     { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/dhansu.photography?igsh=eWt5bzh3cm5zNm13' },
//     { icon: <FaFacebook size={20} />, url: 'https://facebook.com' },
//     { icon: <FaTwitter size={20} />, url: 'https://twitter.com' },
//     { icon: <FaPinterest size={20} />, url: 'https://pinterest.com' },
//     { icon: <FaYoutube size={20} />, url: 'https://youtube.com' },
//   ]

//   const footerLinks = [
//     {
//       title: 'Quick Links',
//       links: [
//         { name: 'Home', url: '/' },
//         { name: 'Portfolio', url: '/portfolio' },
//         { name: 'Services', url: '/services' },
//         { name: 'About', url: '/about' },
//         { name: 'Contact', url: '/contact' },
//       ],
//     },
//     {
//       title: 'Services',
//       links: [
//         { name: 'Wedding Photography', url: '/services#wedding' },
//         { name: 'Pre-Wedding Shoot', url: '/services#pre-wedding' },
//         { name: 'Makeup Shoots', url: '/services#makeup' },
//         { name: 'Baby Shower', url: '/services#baby' },
//         { name: 'Product Photography', url: '/services#product' },
//       ],
//     },
//     {
//       title: 'Support',
//       links: [
//         { name: 'FAQ', url: '/faq' },
//         { name: 'Privacy Policy', url: '/privacy' },
//         { name: 'Terms of Service', url: '/terms' },
//         { name: 'Pricing Guide', url: '/pricing' },
//         { name: 'Booking Policy', url: '/booking' },
//       ],
//     },
//   ]

//   return (
//     <footer className="bg-gray-900 border-t border-gray-800">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <Link href="/" className="text-2xl font-bold block mb-4">
//               Lens<span className="text-gray-400">Craft</span>
//             </Link>
//             <p className="text-gray-400 mb-6">
//               Capturing timeless moments with artistic vision and technical excellence.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Footer Links */}
//           {footerLinks.map((column, colIndex) => (
//             <motion.div
//               key={colIndex}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: colIndex * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-white font-semibold text-lg mb-4">{column.title}</h3>
//               <ul className="space-y-3">
//                 {column.links.map((link, linkIndex) => (
//                   <motion.li
//                     key={linkIndex}
//                     whileHover={{ x: 5 }}
//                     transition={{ type: 'spring', stiffness: 300 }}
//                   >
//                     <Link
//                       href={link.url}
//                       className="text-gray-400 hover:text-white transition-colors flex items-center"
//                     >
//                       <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
//                       {link.name}
//                     </Link>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <MdEmail className="text-gray-400 mt-1 mr-3" size={18} />
//                 <div>
//                   <p className="text-gray-400">Email</p>
//                   <a
//                     href="mailto:hello@lenscraft.com"
//                     className="text-white hover:underline"
//                   >
// dhansukumar700@gmail.com 
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <FiPhone className="text-gray-400 mt-1 mr-3" size={18} />
//                 <div>
//                   <p className="text-gray-400">Phone</p>
//                   <a href="tel:+11234567890" className="text-white hover:underline">
// 7008254188                  </a>
//                 </div>
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div className="mt-8">
//               <h4 className="text-white font-medium mb-3">Join Our Newsletter</h4>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white text-black px-4 py-2 rounded-r-lg font-medium"
//                 >
//                   Subscribe
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Copyright */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           viewport={{ once: true }}
//           className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
//         >
//           <p>
//             &copy; {currentYear} LensCraft Photography. All rights reserved. | Designed with{' '}
//             <span className="text-white">♥</span> for moments that matter
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/dhansu.photography?igsh=eWt5bzh3cm5zNm13' },
    { icon: <FaFacebook size={20} />, url: 'https://facebook.com' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com' },
    { icon: <FaPinterest size={20} />, url: 'https://pinterest.com' },
    { icon: <FaYoutube size={20} />, url: 'https://youtube.com' },
  ]

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
        { name: 'Services', url: '/services' },
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
    {
      title: 'Support',
      links: [
        { name: 'FAQ', url: '/faq' },
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Pricing Guide', url: '/pricing' },
        { name: 'Booking Policy', url: '/booking' },
      ],
    },
  ]

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <motion.a
        href="https://wa.me/message/LMZRMFSOWSSKF1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <FaWhatsapp size={28} />
      </motion.a>

      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-2xl font-bold block mb-4">
                 <span className="text-gray-400">Dhansu Photography</span>
              </Link>
              <p className="text-gray-400 mb-6">
                Capturing timeless moments with artistic vision and technical excellence.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((column, colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: colIndex * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold text-lg mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link
                        href={link.url}
                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                      >
                        <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MdEmail className="text-gray-400 mt-1 mr-3" size={18} />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a
                      href="mailto:dhansukumar700@gmail.com"
                      className="text-white hover:underline"
                    >
                      dhansukumar700@gmail.com 
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="text-gray-400 mt-1 mr-3" size={18} />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:7008254188" className="text-white hover:underline">
                      7008254188
                    </a>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="text-white font-medium mb-3">Join Our Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-4 py-2 rounded-r-lg font-medium"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
          >
            <p>
              &copy; {currentYear} Dhansu Photography. All rights reserved. | Designed with{' '}
              <span className="text-white">♥</span> for moments that matter
            </p>
          </motion.div> */}
          <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  viewport={{ once: true }}
  className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
>
  <p>
    &copy; {currentYear} Dhansu Photography. All rights reserved. | Designed with{' '}
    <span className="text-white">♥</span> for moments that matter
  </p>
  <p className="text-sm mt-2">
    Design & Dev: <span className="text-white">Karan</span> | 
    Maintenance: <span className="text-white">coodersg</span>
  </p>
</motion.div>
        </div>
      </footer>
    </>
  )
}