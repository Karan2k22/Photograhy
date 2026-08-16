'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRing, FaHeart, FaCamera, FaMagic, FaBaby, FaCouch, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import Typewriter from '@/components/Typewriter'
import { SectionHeader } from '@/components/AnimatedSection'
import Button from '@/components/Button'
import CountUp from '@/components/CountUp'
import ServiceCarousel from '@/components/ServiceCarousel'
import HighlightCarousel from '@/components/HighlightCarousel'
import TestimonialCarousel from '@/components/TestimonialCarousel'

const services = [
  {
    title: 'Wedding Photography',
    description: 'Capturing the magic of your special day with artistic and emotional shots.',
    icon: FaRing,
    link: '/services#wedding',
  },
  {
    title: 'Pre-Wedding Shoot',
    description: 'Romantic and creative sessions before the big day to tell your love story.',
    icon: FaHeart,
    link: '/services#pre-wedding',
  },
  {
    title: 'Post-Wedding Shoot',
    description: 'Relaxed and beautiful sessions after the wedding to capture your newlywed joy.',
    icon: FaCamera,
    link: '/services#post-wedding',
  },
  {
    title: 'Makeup & Model Shoots',
    description: 'Professional portfolio shots for models, influencers, and makeup artists.',
    icon: FaMagic,
    link: '/services#makeup',
  },
  {
    title: 'Baby Shower & Maternity',
    description: 'Tender moments of anticipation and the beginning of new life.',
    icon: FaBaby,
    link: '/services#baby',
  },
  {
    title: 'Product & Interior',
    description: 'Commercial photography that showcases products and spaces in their best light.',
    icon: FaCouch,
    link: '/services#product',
  },
]

const highlights = [
  {
    id: 1,
    title: 'Elegant Wedding Moments',
    category: 'Wedding',
    image: '/wedding/1694716301993.jpg',
    description: 'Capturing the raw emotions and beautiful details of your special day',
    href: '/portfolio/wedding',
  },
  {
    id: 2,
    title: 'Romantic Pre-Wedding',
    category: 'Pre-Wedding',
    image: '/prewedding/DSC_0072.jpg',
    description: 'Love stories told through creative compositions',
    href: '/portfolio?category=pre-wedding',
  },
  {
    id: 3,
    title: 'Glamorous Makeup Shoots',
    category: 'Makeup',
    image: '/wedding/AK108892.jpg',
    description: 'Showcasing artistry and beauty in every frame',
    href: '/portfolio?category=makeup',
  },
]

const testimonials = [
  {
    id: 1,
    name: 'Ambika Sharma',
    role: 'Wedding Client',
    initials: 'AS',
    content:
      'Absolutely stunning photos that captured every special moment of our wedding day. The team went above and beyond to make us feel comfortable and the results speak for themselves!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Komal Pandey',
    role: 'Pre-Wedding Client',
    initials: 'KP',
    content:
      'The best photography experience I have ever had. The attention to detail and creative direction helped me get portraits I will treasure for a lifetime.',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Bharti Singh',
    role: 'Portrait Client',
    initials: 'BS',
    content:
      'Our photos have never looked better. The lighting and composition felt cinematic and elegant — truly professional work from start to finish.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Rohan Mehta',
    role: 'Wedding Client',
    initials: 'RM',
    content:
      'From the baraat to the pheras, every frame felt honest and beautiful. Relatives still ask who photographed our wedding — we happily share the name.',
    rating: 3.5,
  },
  {
    id: 5,
    name: 'Ananya Iyer',
    role: 'Pre-Wedding Client',
    initials: 'AI',
    content:
      'Our pre-wedding shoot in the city felt easy and fun. The photos look like a film still, yet they still feel like us.',
    rating: 4.5,
  },
  {
    id: 6,
    name: 'Vikram Reddy',
    role: 'Reception Client',
    initials: 'VR',
    content:
      'The reception coverage was seamless. Family portraits, speeches, and the dance floor were all captured without missing a beat.',
    rating: 4,
  },
  {
    id: 7,
    name: 'Priya Nair',
    role: 'Maternity Client',
    initials: 'PN',
    content:
      'A gentle, patient shoot for our maternity session. The photographs already feel like heirlooms we will pass on.',
    rating: 3.5,
  },
  {
    id: 8,
    name: 'Arjun Joshi',
    role: 'Portrait Client',
    initials: 'AJ',
    content:
      'Professional, warm, and quick with direction. The portrait set is the best I have ever had for work and family alike.',
    rating: 5,
  },
  {
    id: 9,
    name: 'Sneha Kapoor',
    role: 'Wedding Client',
    initials: 'SK',
    content:
      'They understood our rituals and still found quiet, emotional moments. Looking through the gallery still makes us emotional.',
    rating: 4.5,
  },
  {
    id: 10,
    name: 'Kabir Malhotra',
    role: 'Product Client',
    initials: 'KM',
    content:
      'Our jewellery campaign looked premium and true to the pieces. Lighting and styling were handled with real care.',
    rating: 4,
  },
]

const stats = [
  { value: '7+', label: 'Years Behind the Lens', icon: FaCamera },
  { value: '250+', label: 'Weddings Captured', icon: FaHeart },
  { value: '40+', label: 'Cities Photographed', icon: FaMapMarkerAlt },
  { value: '90+', label: 'Portrait Sessions', icon: FaUser },
]

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/wedding/1694716301993.jpg"
            className="hero-video w-full h-full object-cover"
          >
            <source src="/shadicard/Card_shoot.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-6 min-h-[5.5rem] sm:min-h-[6.5rem] md:min-h-[9rem]">
            Capturing{' '}
            <span className="text-white italic">
              <Typewriter
                texts={[
                  'Timeless Moments',
                  'Love Stories',
                  'Wedding Portraits',
                  'Every Glance',
                  'Frames Forever',
                ]}
                speed={160}
                deleteSpeed={90}
                pause={2400}
                loop
                onComplete={() => setIntroDone(true)}
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-base md:text-xl text-white/75 max-w-2xl mx-auto mb-8"
          >
            Professional photography for weddings, pre-wedding, post-wedding, and creative shoots that tell your unique story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button href="/portfolio">View Portfolio</Button>
            <Button href="/contact" variant="outline">
              Book a Session
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={introDone ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0 }}
          transition={
            introDone
              ? { opacity: { duration: 0.5 }, y: { repeat: Infinity, duration: 2 } }
              : { duration: 0.3 }
          }
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <span className="sr-only">Scroll</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our"
            highlight="Services"
            subtitle="We specialize in photography that captures your most precious moments with artistic excellence."
          />

          <ServiceCarousel services={services} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16"
          >
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 tone-band">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="Selected Work"
            title="Portfolio"
            highlight="Highlights"
            subtitle="A curated selection of our finest work across different photography styles"
          />

          <HighlightCarousel highlights={highlights} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16"
          >
            <Button href="/portfolio" variant="outline">
              View Full Portfolio
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="Kind Words"
            title="Client"
            highlight="Testimonials"
            subtitle="Hear what our clients say about their experience working with us"
          />

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gold" />
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            eyebrow="Since 2020"
            title="Our Story in"
            highlight="Numbers"
            subtitle="A few snapshots of the work we have created behind the lens"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="card-gold group relative overflow-hidden bg-surface/80 border rounded-2xl text-center px-4 py-6 md:p-8"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold/25 bg-bg flex items-center justify-center text-gold">
                      <Icon className="text-lg md:text-xl" />
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl text-gold mb-2">
                    <CountUp value={stat.value} duration={4200} delay={index * 180} />
                  </h3>
                  <p className="text-muted text-xs md:text-sm tracking-wide">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
