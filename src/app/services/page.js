'use client'

import { motion } from 'framer-motion'
import { FaCamera, FaPhotoVideo, FaCalendarAlt, FaStar, FaCheck } from 'react-icons/fa'
import PageHero from '@/components/PageHero'
import { SectionHeader } from '@/components/AnimatedSection'
import Button from '@/components/Button'

export default function ServicesPage() {
  const services = [
    {
      id: 'wedding',
      title: 'Wedding Photography',
      icon: <FaCamera className="text-2xl text-gold" />,
      description:
        'Comprehensive coverage of your special day from preparation to reception with artistic and documentary styles.',
      features: [
        'Full-day coverage (8-12 hours)',
        '2 photographers',
        '500+ high-resolution edited images',
        'Online gallery with download',
        'Engagement session included',
      ],
      popular: true,
    },
    {
      id: 'pre-wedding',
      title: 'Pre-Wedding Shoot',
      icon: <FaPhotoVideo className="text-2xl text-gold" />,
      description:
        'Romantic and creative session before the big day to capture your love story in beautiful locations.',
      features: [
        '2-3 hour session',
        '1 photographer',
        '100+ high-resolution edited images',
        '2 outfit changes',
        'Location scouting assistance',
      ],
    },
    {
      id: 'post-wedding',
      title: 'Post-Wedding Shoot',
      icon: <FaCamera className="text-2xl text-gold" />,
      description:
        'Relaxed and beautiful session after the wedding to capture your newlywed joy without time constraints.',
      features: [
        '2-3 hour session',
        '1 photographer',
        '80+ high-resolution edited images',
        'More creative freedom',
        'Multiple location options',
      ],
    },
    {
      id: 'makeup',
      title: 'Makeup & Model Shoots',
      icon: <FaPhotoVideo className="text-2xl text-gold" />,
      description:
        'Professional portfolio shots for models, influencers, and makeup artists to showcase their work.',
      features: [
        '2 hour studio session',
        'Professional lighting setup',
        '50+ high-resolution edited images',
        'Multiple looks',
        'Quick turnaround',
      ],
    },
    {
      id: 'baby',
      title: 'Baby Shower & Maternity',
      icon: <FaCamera className="text-2xl text-gold" />,
      description:
        'Tender moments of anticipation and the beginning of new life captured with warmth and care.',
      features: [
        '1-2 hour session',
        'Studio or outdoor options',
        '40+ high-resolution edited images',
        'Family included',
        'Props provided',
      ],
    },
    {
      id: 'product',
      title: 'Product & Interior',
      icon: <FaPhotoVideo className="text-2xl text-gold" />,
      description:
        'Commercial photography that showcases products and spaces in their best light for businesses.',
      features: [
        'Per product or hourly rates',
        'Professional lighting setup',
        'White background options',
        'High-resolution images',
        'Fast delivery',
      ],
    },
  ]

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer:
        'Weddings should be booked 6-12 months in advance. Other sessions typically need 2-4 weeks notice.',
    },
    {
      question: 'Do you travel for shoots?',
      answer:
        'Yes! We love destination weddings and location shoots. Travel fees may apply outside our local area.',
    },
    {
      question: 'What is your editing process?',
      answer:
        'We carefully edit all delivered images for color, exposure, and composition while maintaining natural beauty.',
    },
    {
      question: 'Can I get raw/unedited photos?',
      answer:
        'We do not provide raw files as they do not represent our finished work, but we are happy to accommodate specific edit requests.',
    },
  ]

  return (
    <div className="pb-16 md:pb-24 min-h-screen bg-bg">
      <PageHero
        eyebrow="Offerings"
        title="Our Services"
        highlight="Services"
        subtitle="Professional photography tailored to capture your most precious moments with artistic excellence"
      />

      <div className="container mx-auto px-4 md:px-8">
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className={`card-gold group relative scroll-mt-28 flex flex-col bg-surface/80 border rounded-2xl p-7 md:p-8 overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${
                  service.popular ? 'border-gold' : ''
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {service.popular && (
                  <span className="absolute top-5 right-5 text-[10px] tracking-[0.2em] uppercase text-gold">
                    Popular
                  </span>
                )}

                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.06 }}
                    className="w-14 h-14 rounded-full border border-gold/25 flex items-center justify-center bg-bg"
                  >
                    {service.icon}
                  </motion.div>
                  <span className="font-serif text-muted/50 text-sm">0{index + 1}</span>
                </div>

                <h2 className="font-serif text-2xl mb-3">{service.title}</h2>
                <p className="text-muted mb-6 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + featureIndex * 0.05, duration: 0.35 }}
                      className="flex items-start text-sm"
                    >
                      <FaCheck className="text-gold mt-1 mr-2.5 shrink-0 text-xs" />
                      <span className="text-muted">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button href="/contact" className="w-full" variant={service.popular ? 'primary' : 'outline'}>
                  Enquire Now
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <SectionHeader
            eyebrow="How It Works"
            title="Our"
            highlight="Process"
            subtitle="Simple steps from booking to receiving your final images"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, preferences, and requirements',
                icon: <FaCalendarAlt className="text-xl" />,
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Location scouting, styling advice, and timeline creation',
                icon: <FaPhotoVideo className="text-xl" />,
              },
              {
                step: '03',
                title: 'Shoot Day',
                description: 'Relaxed, professional session tailored to you',
                icon: <FaCamera className="text-xl" />,
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Carefully edited images delivered in your preferred format',
                icon: <FaStar className="text-xl" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-gold bg-surface border rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                  {item.icon}
                </div>
                <span className="text-gold text-xs tracking-[0.2em]">{item.step}</span>
                <h3 className="font-serif text-xl mt-1 mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="faq" className="mb-16 md:mb-24 scroll-mt-28">
          <SectionHeader
            eyebrow="Good to Know"
            title="Frequently"
            highlight="Asked Questions"
            subtitle="Common questions about our photography services"
          />

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-2 border-b border-gold/10 py-6"
              >
                <h3 className="font-serif text-xl mb-2">{faq.question}</h3>
                <p className="text-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="card-gold bg-surface border rounded-xl p-8 md:p-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-4">
              Ready to <span className="text-gold italic">Create</span> With Us?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Whether you are planning a wedding, need commercial photography, or want a personal portrait session, we would love to hear about your vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button href="/contact">Get in Touch</Button>
              <Button href="/portfolio" variant="outline">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
