'use client'

import { motion } from 'framer-motion'
import { FaCamera, FaVideo, FaPhotoVideo, FaCalendarAlt, FaStar, FaCheck } from 'react-icons/fa'

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Wedding Photography',
      icon: <FaCamera className="text-3xl text-white" />,
      description: 'Comprehensive coverage of your special day from preparation to reception with artistic and documentary styles.',
      price: '$2,500+',
      features: [
        'Full-day coverage (8-12 hours)',
        '2 photographers',
        '500+ high-resolution edited images',
        'Online gallery with download',
        'Engagement session included'
      ],
      popular: true
    },
    {
      id: 2,
      title: 'Pre-Wedding Shoot',
      icon: <FaPhotoVideo className="text-3xl text-white" />,
      description: 'Romantic and creative session before the big day to capture your love story in beautiful locations.',
      price: '$800+',
      features: [
        '2-3 hour session',
        '1 photographer',
        '100+ high-resolution edited images',
        '2 outfit changes',
        'Location scouting assistance'
      ]
    },
    {
      id: 3,
      title: 'Post-Wedding Shoot',
      icon: <FaCamera className="text-3xl text-white" />,
      description: 'Relaxed and beautiful session after the wedding to capture your newlywed joy without time constraints.',
      price: '$700+',
      features: [
        '2-3 hour session',
        '1 photographer',
        '80+ high-resolution edited images',
        'More creative freedom',
        'Multiple location options'
      ]
    },
    {
      id: 4,
      title: 'Makeup & Model Shoots',
      icon: <FaPhotoVideo className="text-3xl text-white" />,
      description: 'Professional portfolio shots for models, influencers, and makeup artists to showcase their work.',
      price: '$600+',
      features: [
        '2 hour studio session',
        'Professional lighting setup',
        '50+ high-resolution edited images',
        'Multiple looks',
        'Quick turnaround'
      ]
    },
    {
      id: 5,
      title: 'Baby Shower & Maternity',
      icon: <FaCamera className="text-3xl text-white" />,
      description: 'Tender moments of anticipation and the beginning of new life captured with warmth and care.',
      price: '$500+',
      features: [
        '1-2 hour session',
        'Studio or outdoor options',
        '40+ high-resolution edited images',
        'Family included',
        'Props provided'
      ]
    },
    {
      id: 6,
      title: 'Product & Interior',
      icon: <FaPhotoVideo className="text-3xl text-white" />,
      description: 'Commercial photography that showcases products and spaces in their best light for businesses.',
      price: '$400+',
      features: [
        'Per product or hourly rates',
        'Professional lighting setup',
        'White background options',
        'High-resolution images',
        'Fast delivery'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'Weddings should be booked 6-12 months in advance. Other sessions typically need 2-4 weeks notice.'
    },
    {
      question: 'Do you travel for shoots?',
      answer: 'Yes! We love destination weddings and location shoots. Travel fees may apply outside our local area.'
    },
    {
      question: 'What is your editing process?',
      answer: 'We carefully edit all delivered images for color, exposure, and composition while maintaining natural beauty.'
    },
    {
      question: 'Can I get raw/unedited photos?',
      answer: 'We don not provide raw files as they don not represent our finished work, but we are happy to accommodate specific edit requests.'
    }
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gray-400">Services</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional photography services tailored to capture your most precious moments with artistic excellence
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative bg-gray-900 border rounded-xl p-8 overflow-hidden transition-all hover:border-gray-600 ${
                  service.popular ? 'border-2 border-yellow-400' : 'border-gray-800'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 text-sm font-bold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center mb-6">
                  <div className="bg-gray-800 p-4 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{service.title}</h2>
                    <p className="text-gray-400">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    service.popular
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  Book Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gray-400">Process</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple steps from booking to receiving your final images
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'We discuss your vision, preferences, and requirements',
                icon: <FaCalendarAlt className="text-2xl" />
              },
              {
                step: '2',
                title: 'Planning',
                description: 'Location scouting, styling advice, and timeline creation',
                icon: <FaPhotoVideo className="text-2xl" />
              },
              {
                step: '3',
                title: 'Shoot Day',
                description: 'Relaxed, professional session tailored to you',
                icon: <FaCamera className="text-2xl" />
              },
              {
                step: '4',
                title: 'Delivery',
                description: 'Carefully edited images delivered in your preferred format',
                icon: <FaStar className="text-2xl" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-400">
                  {item.icon}
                </div>
                <span className="text-gray-400 text-sm">STEP {item.step}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently <span className="text-gray-400">Asked Questions</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about our photography services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 border-b border-gray-800 pb-6"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gray-400">Create</span> With Us?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Whether you are planning a wedding need commercial photography or want a personal portrait session we did love to hear about your vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/contact"
                  className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium transition-all hover:bg-gray-200"
                >
                  Get in Touch
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/portfolio"
                  className="inline-block border border-white text-white px-8 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-black"
                >
                  View Portfolio
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}