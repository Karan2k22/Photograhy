'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
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
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Call Us',
      info: '7008254188',
      action: 'tel:+7008254188'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email Us',
      info: 'dhansukumar700@gmail.com ',
      action: 'mailto:dhansukumar700@gmail.com '
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Visit Us',
      info: '123 Photography Ave, New York, NY',
      action: 'https://maps.google.com'
    }
  ]

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' }
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-gray-400">Touch</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or ready to book a session? Reach out to us through any of these methods
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-gray-800 p-3 rounded-full text-gray-400">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{method.title}</h3>
                      <a 
                        href={method.action} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {method.info}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-800 text-gray-400 hover:text-white p-3 rounded-full transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-white mb-2">Business Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-400">Saturday: 10am - 4pm</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 border border-green-800 text-green-400 p-4 rounded-lg mb-6"
                >
                  Thank you for your message! We will get back to you within 24 hours.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-gray-600'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-400 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-gray-600'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-400 mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
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
                    <label htmlFor="message" className="block text-gray-400 mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-gray-600'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-white text-black py-3 rounded-lg font-medium transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-200'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
{/* 
              <div className="mt-8 border-t border-gray-800 pt-8">
                <h3 className="font-medium text-white mb-4">Studio Location</h3>
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                   <div className="w-full h-full flex items-center justify-center text-gray-400">
                    [Google Maps Embed Here]
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}