"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaArrowLeft, FaExpand, FaCompress } from "react-icons/fa";

export default function IndianWeddingPage() {
  const [expandedImage, setExpandedImage] = useState(null);
  const [activeEvent, setActiveEvent] = useState("ring-ceremony");

  const events = [
    {
      id: "ring-ceremony",
      title: "Ring Ceremony",
      description:
        "The engagement ceremony where the couple exchanges rings, marking their formal commitment to each other.",
      images: ["/haldi/haldi1.JPG", "/haldi/haldi2.JPG"],
    },
    {
      id: "haldi",
      title: "Haldi Ceremony",
      description:
        "A joyful pre-wedding ritual where turmeric paste is applied to the bride and groom for purification and blessings.",
      images: [
        "/haldi/haldi1.JPG",
        "/haldi/haldi2.JPG",
        "/haldi/haldi3.JPG",
        "/haldi/haldi4.JPG",
      ],
    },
    {
      id: "mehndi",
      title: "Mehndi Ceremony",
      description:
        "The celebration where intricate henna designs are applied to the bride's hands and feet, symbolizing beauty and spiritual awakening.",
      images: ["/mehndi/mehndi1.jpg"],
    },
    {
      id: "shaadi",
      title: "Shaadi",
      description:
        "The main wedding ceremony where the couple takes their vows amidst sacred rituals and traditional customs.",
      images: [
        "/wedding/1694716301979.jpg",
        "/wedding/DSC_1459.JPG",
        "/wedding/DSC_1459.JPG",
      ],
    },
    {
      id: "reception",
      title: "Reception",
      description:
        "A grand celebration where the newly married couple is introduced to society with music, dance, and feasting.",
      images: ["/wedding/shadi.JPG"],
    },
    {
      id: "vidai",
      title: "Vidai Ceremony",
      description:
        "The emotional farewell where the bride leaves her parental home to start a new life with her husband.",
      images: ["/wedding/DSC_1865.JPG"],
    },
  ];

  const currentEvent = events.find((event) => event.id === activeEvent);

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-8"
        >
          <a
            href="/portfolio"
            className="flex items-center text-gray-400 hover:text-white transition-colors mr-6"
          >
            <FaArrowLeft className="mr-2" />
            Back
          </a>
          <h1 className="text-4xl md:text-5xl font-bold">
            Indian <span className="text-gray-400">Wedding</span> Events
          </h1>
        </motion.div>

        {/* Event Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 overflow-x-auto"
        >
          <div className="flex space-x-2 pb-4">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveEvent(event.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeEvent === event.id
                    ? "bg-white text-black"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {event.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Event Content */}
        <motion.div
          key={activeEvent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{currentEvent.title}</h2>
          <p className="text-gray-400 text-lg max-w-3xl mb-8">
            {currentEvent.description}
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentEvent.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setExpandedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${currentEvent.title} ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaExpand className="text-2xl text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Capture Your <span className="text-gray-400">Special Day</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Let us help you preserve the beautiful moments of your Indian
            wedding with our professional photography services.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-gray-200">
            Book a Consultation
          </button>
        </motion.div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={expandedImage}
              alt="Expanded view"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => setExpandedImage(null)}
            >
              <FaCompress className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
