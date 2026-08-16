'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaBriefcase,
  FaCamera,
  FaCheck,
  FaClipboardList,
  FaComments,
  FaHeart,
  FaMapMarkerAlt,
  FaUser,
} from 'react-icons/fa'
import PageHero from '@/components/PageHero'
import { SectionHeader } from '@/components/AnimatedSection'
import Button from '@/components/Button'
import CountUp from '@/components/CountUp'

const ease = [0.22, 1, 0.36, 1]
const cardClass =
  'card-gold group relative overflow-hidden bg-surface/80 border rounded-2xl transition-transform duration-500 hover:-translate-y-2'

function GoldLine() {
  return (
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  )
}

function IconBadge({ children }) {
  return (
    <motion.div
      whileHover={{ rotate: 8, scale: 1.06 }}
      className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold/25 bg-bg flex items-center justify-center text-gold shrink-0"
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  const stats = [
    { value: '7+', label: 'Years Behind the Lens', icon: <FaCamera className="text-lg md:text-xl" /> },
    { value: '250+', label: 'Weddings Captured', icon: <FaHeart className="text-lg md:text-xl" /> },
    { value: '40+', label: 'Cities Photographed', icon: <FaMapMarkerAlt className="text-lg md:text-xl" /> },
    { value: '90+', label: 'Portrait Sessions', icon: <FaUser className="text-lg md:text-xl" /> },
  ]

  const philosophy = [
    'Authenticity over perfection — we capture real moments and emotions',
    'Every client receives personalized attention and customized solutions',
    'We invest in the highest quality equipment and continuous education',
    'Ethical business practices with transparent pricing',
  ]

  const process = [
    { title: 'Consultation', text: 'We listen to understand your vision and needs' },
    { title: 'Planning', text: 'Location scouting, styling, and timeline creation' },
    { title: 'Shoot Day', text: 'Relaxed, professional session tailored to you' },
    { title: 'Delivery', text: 'Carefully edited images delivered in your preferred format' },
  ]

  const specialties = [
    {
      title: 'Wedding Photography',
      description:
        'Capturing the raw emotions and beautiful details of your special day with a documentary approach combined with artistic flair.',
      icon: <FaHeart className="text-xl" />,
    },
    {
      title: 'Pre-Wedding Shoots',
      description:
        'Creating romantic and creative sessions that tell your unique love story in breathtaking locations.',
      icon: <FaCamera className="text-xl" />,
    },
    {
      title: 'Commercial Photography',
      description:
        'High-quality product and interior photography that elevates brands and showcases spaces in their best light.',
      icon: <FaBriefcase className="text-xl" />,
    },
    {
      title: 'Portrait Sessions',
      description:
        'Professional portraits that capture personality and essence, perfect for models, professionals, and families.',
      icon: <FaUser className="text-xl" />,
    },
  ]

  return (
    <div className="pb-16 md:pb-24 min-h-screen bg-bg">
      <PageHero
        eyebrow="Our Story"
        title="Capturing Moments, Creating Memories"
        highlight="Moments"
        subtitle="Welcome to Dhansu Photography, where we transform fleeting moments into timeless art."
      />

      <div className="container mx-auto px-4 md:px-8">
        <section className="mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="w-full lg:w-1/2"
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-5">
                Dedicated to <span className="text-gold italic">storytelling</span> since 2020
              </h2>
              <p className="text-muted text-base md:text-lg mb-8 leading-relaxed">
                Founded in 2020, we have been dedicated to telling stories through our lens with passion, creativity, and technical excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="#story">Our Story</Button>
                <Button href="#approach" variant="outline">
                  Our Approach
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold/15">
                <Image
                  src="/street/1715967304268.jpg"
                  alt="Photographer at work"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.55, ease }}
                className="absolute -bottom-3 -right-2 md:-bottom-5 md:-right-4 bg-surface/95 backdrop-blur-sm border border-gold/25 p-3 md:p-4 rounded-2xl w-2/3 md:w-1/2 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
              >
                <FaHeart className="text-gold text-xl md:text-2xl mb-2" />
                <p className="text-text font-medium text-xs md:text-sm">Passionate about storytelling since 2020</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.55, ease }}
                viewport={{ once: true }}
                className={`${cardClass} text-center px-4 py-6 md:p-8`}
              >
                <GoldLine />
                <div className="flex justify-center mb-4">
                  <IconBadge>{stat.icon}</IconBadge>
                </div>
                <h3 className="font-serif text-3xl md:text-5xl text-gold mb-2">
                  <CountUp value={stat.value} duration={4200} delay={index * 180} />
                </h3>
                <p className="text-muted text-xs md:text-sm tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="story" className="mb-16 md:mb-24 scroll-mt-28">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease }}
              className="w-full lg:w-1/2 relative order-2 lg:order-1"
            >
              <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden border border-gold/15">
                <Image
                  src="/street/1710671175604.jpg"
                  alt="Our studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12, ease }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <p className="section-label mb-4">Since 2020</p>
              <h2 className="font-serif text-2xl md:text-4xl mb-4 md:mb-6">
                Our <span className="text-gold italic">Story</span>
              </h2>
              <div className="space-y-4 text-muted text-sm md:text-base leading-relaxed">
                <p>
                  Dhansu Photography began as a small studio with a clear vision: to capture real emotion with cinematic craft. What started as a passion project has grown into a trusted photography studio across weddings, portraits, and commercial work.
                </p>
                <p>
                  We believe every moment has a story worth telling. Whether it is the nervous excitement before wedding vows, the quiet connection between loved ones, or the proud showcase of a business — we capture the essence that makes each moment unique.
                </p>
                <p>
                  Over the years, we have had the privilege of working with thousands of clients, from grand celebrations to intimate gatherings. Each project receives the same level of dedication and artistic attention.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="approach" className="mb-16 md:mb-24 scroll-mt-28">
          <SectionHeader
            eyebrow="How We Work"
            title="Our"
            highlight="Approach"
            subtitle="We combine technical expertise with artistic vision to create images that stand the test of time"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              viewport={{ once: true }}
              className={`${cardClass} p-6 md:p-8`}
            >
              <GoldLine />
              <div className="flex items-start justify-between mb-6">
                <IconBadge>
                  <FaComments className="text-xl" />
                </IconBadge>
                <span className="font-serif text-muted/50 text-sm">01</span>
              </div>
              <h3 className="font-serif text-2xl text-text mb-6">The Dhansu Philosophy</h3>
              <ul className="space-y-4">
                {philosophy.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + i * 0.08, duration: 0.4, ease }}
                    className="flex items-start text-sm md:text-base"
                  >
                    <FaCheck className="text-gold mt-1 mr-3 shrink-0 text-xs" />
                    <span className="text-muted">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease }}
              viewport={{ once: true }}
              className={`${cardClass} p-6 md:p-8`}
            >
              <GoldLine />
              <div className="flex items-start justify-between mb-6">
                <IconBadge>
                  <FaClipboardList className="text-xl" />
                </IconBadge>
                <span className="font-serif text-muted/50 text-sm">02</span>
              </div>
              <h3 className="font-serif text-2xl text-text mb-6">The Process</h3>
              <ol className="space-y-5">
                {process.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease }}
                    className="flex items-start gap-4"
                  >
                    <span className="font-serif text-gold text-lg w-7 shrink-0">0{i + 1}</span>
                    <div>
                      <p className="text-text font-medium text-sm md:text-base">{item.title}</p>
                      <p className="text-muted text-sm mt-0.5">{item.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <SectionHeader
            eyebrow="Expertise"
            title="Our"
            highlight="Specializations"
            subtitle="While we are versatile in many photography styles, these are our core specialties"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {specialties.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.55, ease }}
                viewport={{ once: true }}
                className={`${cardClass} p-6 md:p-7 flex flex-col`}
              >
                <GoldLine />
                <div className="flex items-start justify-between mb-5">
                  <IconBadge>{service.icon}</IconBadge>
                  <span className="font-serif text-muted/50 text-sm">0{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-text mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          viewport={{ once: true }}
          className="card-gold relative overflow-hidden bg-surface/80 border rounded-2xl p-8 md:p-14 text-center"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
          <h2 className="font-serif text-3xl md:text-5xl mb-4 relative">
            Ready to <span className="text-gold italic">Create</span> Together?
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-8 relative">
            Whether you are planning a wedding, need commercial photography, or want a personal portrait session, we would love to hear about your vision.
          </p>
          <div className="relative flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/contact">Get in Touch</Button>
            <Button href="/portfolio" variant="outline">
              View Portfolio
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
