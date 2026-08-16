'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa'
import PageHero from '@/components/PageHero'
import Button from '@/components/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = (hasError) =>
    `w-full bg-bg border rounded-lg px-4 py-3 min-h-11 text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 ${
      hasError ? 'border-red-500 focus:ring-red-500/40' : 'border-gold/20 focus:ring-gold/40 focus:border-gold'
    }`

  return (
    <div className="pb-16 md:pb-24 min-h-screen bg-bg">
      <PageHero
        eyebrow="Let's Talk"
        title="Get In Touch"
        highlight="Touch"
        subtitle="Have questions or ready to book a session? Reach out and we will get back to you soon."
      />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="card-gold bg-surface border rounded-xl p-7 md:p-8 h-full">
              <h2 className="font-serif text-2xl mb-6">Contact Information</h2>

              <div className="space-y-6">
                <a href="tel:7008254188" className="flex items-start gap-4 group min-h-11">
                  <div className="bg-bg border border-gold/20 p-3 rounded-full text-gold">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-medium text-text">Call Us</h3>
                    <span className="text-muted group-hover:text-gold transition-colors">7008254188</span>
                  </div>
                </a>
                <a href="mailto:dhansukumar700@gmail.com" className="flex items-start gap-4 group min-h-11">
                  <div className="bg-bg border border-gold/20 p-3 rounded-full text-gold">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-medium text-text">Email Us</h3>
                    <span className="text-muted group-hover:text-gold transition-colors break-all">
                      dhansukumar700@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-text mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    {
                      icon: <FaInstagram />,
                      url: 'https://www.instagram.com/dhansu.photography?igsh=eWt5bzh3cm5zNm13',
                      label: 'Instagram',
                    },
                    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ y: -3, scale: 1.08 }}
                      className="w-11 h-11 flex items-center justify-center bg-bg border border-gold/20 text-muted hover:text-gold hover:border-gold rounded-full transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="card-gold bg-surface border rounded-xl p-7 md:p-8">
              <h2 className="font-serif text-2xl mb-6">Send Us a Message</h2>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-gold/40 bg-gold/10 text-gold p-6 rounded-lg text-center"
                >
                  <p className="font-serif text-xl mb-2">Thank you</p>
                  <p className="text-muted">We will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-muted mb-2 text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass(errors.name)}
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-muted mb-2 text-sm">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass(errors.email)}
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-muted mb-2 text-sm">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass(false)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-muted mb-2 text-sm">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass(false)}
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="pre-wedding">Pre-Wedding Shoot</option>
                      <option value="post-wedding">Post-Wedding Shoot</option>
                      <option value="makeup">Makeup & Model Shoots</option>
                      <option value="baby">Baby Shower & Maternity</option>
                      <option value="product">Product & Interior</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-muted mb-2 text-sm">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClass(errors.message)}
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
