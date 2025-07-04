'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden mx-auto py-20 px-6 sm:px-8 md:px-12 max-w-7xl">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT TEXT */}
        <motion.div
          className="md:w-1/2 space-y-6 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        >
          <motion.span
            className="inline-block text-gray-800 dark:text-gray-200 text-xs uppercase tracking-wide font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Health and Wellness Innovations
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            OLD MISSION MEDICINE
          </motion.h1>

          <motion.p
            className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            We’re a national leader in personalized healthcare solutions — from primary care to aesthetics, emergency medicine, and nutritional therapy. Serving Traverse City and beyond.
          </motion.p>

          <motion.p
            className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Old Mission Medicine brings together compliance, corporate strategy, and lifestyle wellness under one brand — so you can serve patients better, faster, and healthier.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-wrap gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
              Book Appointment
            </button>
            <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition duration-300">
              Chat with Us
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Image
            src="/ommmuscle1.png"
            alt="Doctor Illustration"
            width={320}
            height={320}
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
