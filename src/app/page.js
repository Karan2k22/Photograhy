'use client'
import React from 'react'

import { motion } from 'framer-motion'
 
 import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  
const services = [
  {
    title: 'Wedding Photography',
    description: 'Capturing the magic of your special day with artistic and emotional shots.',
    icon: '👰',
    link: '/services#wedding'
  },
  {
    title: 'Pre-Wedding Shoot',
    description: 'Romantic and creative sessions before the big day to tell your love story.',
    icon: '💑',
    link: '/services#pre-wedding'
  },
  {
    title: 'Post-Wedding Shoot',
    description: 'Relaxed and beautiful sessions after the wedding to capture your newlywed joy.',
    icon: '📸',
    link: '/services#post-wedding'
  },
  {
    title: 'Makeup & Model Shoots',
    description: 'Professional portfolio shots for models, influencers, and makeup artists.',
    icon: '💄',
    link: '/services#makeup'
  },
  {
    title: 'Baby Shower & Maternity',
    description: 'Tender moments of anticipation and the beginning of new life.',
    icon: '👶',
    link: '/services#baby'
  },
  {
    title: 'Product & Interior',
    description: 'Commercial photography that showcases products and spaces in their best light.',
    icon: '🛋️',
    link: '/services#product'
  },
]


const highlights = [
  {
    id: 1,
    title: 'Elegant Wedding Moments',
    category: 'Wedding',
     image: '/wedding/1694716301993.jpg',
    description: 'Capturing the raw emotions and beautiful details of your special day'
  },
  {
    id: 2,
    title: 'Romantic Pre-Wedding',
    category: 'Pre-Wedding',
    image: '/prewedding/DSC_0072.jpg',
    description: 'Love stories told through creative compositions'
  },
  {
    id: 3,
    title: 'Glamorous Makeup Shoots',
    category: 'Makeup',
    image: '/wedding/AK108892.jpg',
    description: 'Showcasing artistry and beauty in every frame'
  }
]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael',
      role: 'Wedding Clients',
      content: 'Absolutely stunning photos that captured every special moment of our wedding day. The team went above and beyond to make us feel comfortable and the results speak for themselves!',
      rating: 5
    },
    {
      id: 2,
      name: 'Jessica Taylor',
      role: 'Model Shoot Client',
      content: 'The best photography experience I\'ve ever had. The attention to detail and creative direction helped me get portfolio shots that landed me multiple modeling contracts!',
      rating: 5
    },
    {
      id: 3,
      name: 'Robert Chen',
      role: 'Product Business Owner',
      content: 'Our product photos have never looked better. The lighting and composition made our items look premium, resulting in a 30% increase in online sales. Worth every penny!',
      rating: 5
    }
  ]


  return (
    <>
  {/* <section className="relative h-screen flex items-center justify-center overflow-hidden">
       <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
      
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      
       <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Capturing <span className="text-gray-400">Timeless</span> Moments
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Professional photography services specializing in weddings, pre-wedding, post-wedding, and creative shoots that tell your unique story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-gray-200"
              >
                View Portfolio
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-black"
              >
                Book a Session
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
       <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>   */}
    
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/shadicard/Card_shoot.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>
        </video>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Capturing <span className="text-gray-400">Timeless</span> Moments
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Professional photography services specializing in weddings, pre-wedding, post-wedding, and creative shoots that tell your unique story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-gray-200"
              >
                View Portfolio
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-black"
              >
                Book a Session
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scrolling Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>


     <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gray-400">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in various photography services to capture your most precious moments with artistic excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 transition-all hover:border-gray-600"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link href={service.link} className="text-white hover:text-gray-300 transition-colors flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-block border border-white text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-black"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>


 


    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio <span className="text-gray-400">Highlights</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated selection of our finest work across different photography styles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-white text-black text-sm rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-block border border-white text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-black"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  


 
     <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-gray-400">Testimonials</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="text-white font-medium">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  



    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-center bg-repeat"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Capture Your Special Moments?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's create beautiful memories together. Book your session now or contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-gray-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/gallery"
                className="border border-white text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-black flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Gallery
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  

</>
        )
  
}

export default page