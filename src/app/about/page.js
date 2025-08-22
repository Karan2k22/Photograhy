'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCamera, FaAward, FaSmile, FaHeart } from 'react-icons/fa'
// import { GiLightningSpellCast } from 'react-icons/gi'

export default function AboutPage() {
  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <FaCamera className="text-2xl" /> },
    { value: '100%', label: 'Client Satisfaction', icon: <FaSmile className="text-2xl" /> },
    { value: '50+', label: 'Awards Won', icon: <FaAward className="text-2xl" /> },
    { value: '10+', label: 'Years Experience', icon: <FaAward className="text-2xl" /> }
  ]

  const services = [
    {
      title: 'Wedding Photography',
      description: 'Capturing the raw emotions and beautiful details of your special day with a documentary approach combined with artistic flair.'
    },
    {
      title: 'Pre-Wedding Shoots',
      description: 'Creating romantic and creative sessions that tell your unique love story in breathtaking locations.'
    },
    {
      title: 'Commercial Photography',
      description: 'High-quality product and interior photography that elevates brands and showcases spaces in their best light.'
    },
    {
      title: 'Portrait Sessions',
      description: 'Professional portraits that capture personality and essence, perfect for models, professionals, and families.'
    }
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Capturing <span className="text-gray-400">Moments</span>, Creating <span className="text-gray-400">Memories</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Welcome to LensCraft, where we transform fleeting moments into timeless art. Founded in 2012, we've been dedicated to telling stories through our lens with passion, creativity, and technical excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#story"
                    className="bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-gray-200"
                  >
                    Our Story
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#approach"
                    className="border border-white text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-black"
                  >
                    Our Approach
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/about-hero.jpg"
                  alt="Photographer at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gray-900 border border-gray-800 p-4 rounded-xl w-1/2">
                <FaHeart className="text-red-500 text-3xl mb-2" />
                <p className="text-white font-medium">Passionate about storytelling since 2012</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-900 rounded-xl mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-4"
              >
                <div className="text-gray-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/studio.jpg"
                  alt="Our studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-800 p-4 rounded-xl w-1/2 z-10">
                <p className="text-white font-medium">Our state-of-the-art studio in New York</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gray-400">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Founded by award-winning photographer Jane Doe, LensCraft began as a small studio with big dreams. What started as a passion project has grown into one of the most sought-after photography studios in the region.
                </p>
                <p>
                  We believe every moment has a story worth telling. Whether it's the nervous excitement before the wedding vows, the quiet connection between loved ones, or the proud showcase of a business's products - we capture the essence that makes each moment unique.
                </p>
                <p>
                  Over the years, we've had the privilege of working with thousands of clients, from celebrity weddings to small intimate gatherings, from global brands to local businesses. Each project receives the same level of dedication and artistic attention.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Our Approach Section */}
        <section id="approach" className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gray-400">Approach</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We combine technical expertise with artistic vision to create images that stand the test of time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">The LensCraft Philosophy</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Authenticity over perfection - we capture real moments and emotions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Every client receives personalized attention and customized solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>We invest in the highest quality equipment and continuous education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Ethical business practices with transparent pricing</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">The Process</h3>
              <ol className="space-y-6 text-gray-400">
                <li className="flex items-start">
                  <span className="text-white font-medium mr-3">1.</span>
                  <span>Consultation - We listen to understand your vision and needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-medium mr-3">2.</span>
                  <span>Planning - Location scouting, styling, and timeline creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-medium mr-3">3.</span>
                  <span>Shoot Day - Relaxed, professional session tailored to you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-medium mr-3">4.</span>
                  <span>Delivery - Carefully edited images delivered in your preferred format</span>
                </li>
              </ol>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gray-400">Specializations</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              While we're versatile in many photography styles, these are our core specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gray-400">Create</span> Together?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Whether you're planning a wedding, need commercial photography, or want a personal portrait session, we'd love to hear about your vision.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/contact"
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium transition-all hover:bg-gray-200"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}