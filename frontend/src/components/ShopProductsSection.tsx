import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const shopProducts = [
  {
    title: 'Vitamin C Serum',
    description: 'Brighten your skin with our potent Vitamin C serum.',
    image: '/images/product1.jpg',
    href: '#vitamin-c-serum',
  },
  {
    title: 'Hydrating Face Mask',
    description: 'Deep hydration for dry and sensitive skin.',
    image: '/images/product2.jpg',
    href: '#hydrating-mask',
  },
  {
    title: 'Organic Aloe Gel',
    description: 'Soothing and moisturizing aloe vera gel for all skin types.',
    image: '/images/product3.jpg',
    href: '#aloe-gel',
  },
  {
    title: 'SPF 50 Sunscreen',
    description: 'Protect your skin from harmful UV rays with our lightweight formula.',
    image: '/images/product4.jpg',
    href: '#spf50-sunscreen',
  },
]

// Reuse slide-up animation variant for consistency
const slideUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function ShopProductsSection() {
  return (
    <motion.section
    id="shop"
      className="py-24 px-4 bg-gray-50 dark:bg-black/50 flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariant}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          SHOP PRODUCTS
        </motion.h2>

        <motion.p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Explore our curated selection of skincare and wellness products designed to complement your health journey.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          className="h-1 w-16 bg-blue-600 mx-auto mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* Products Grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 w-full max-w-6xl"
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {shopProducts.map(({ title, description, image, href }, idx) => (
          <motion.a
            key={idx}
            href={href}
            className="relative group rounded-lg shadow-lg overflow-hidden block h-72"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 + 0.4 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{title}</h3>
                <p className="text-sm drop-shadow-md">{description}</p>
              </div>

              <div className="flex items-center gap-2 mt-4 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                <span>Shop Now</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}
