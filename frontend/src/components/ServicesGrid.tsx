import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import MembershipPlansWrapper from '../components/MembershipPlansWrapper'
import { memberships } from '../data/memberships'  // make sure you have this file

const services = [
  {
    title: 'Functional Medicine',
    description: 'Target the root cause with holistic healing and lifestyle solutions',
    image: '/images/fm.png',
    href: '#functional-medicine'
  },
  {
    title: 'Hormone Therapy',
    description: 'Optimize hormones to stop fatigue and feel healthier and balanced',
    image: '/images/ht.png',
    href: '#hormone-therapy'
  },
  {
    title: 'Peptide Therapy',
    description: 'Customizable treatment to rejuvenate your health naturally',
    image: '/images/pt.png',
    href: '#peptide-therapy'
  },
  {
    title: 'Medical Weight Loss',
    description: 'Personalized coaching and lifestyle plans to reach your goal',
    image: '/images/mw.png',
    href: '#medical-weight-loss'
  },
  {
    title: 'Sexual Wellness',
    description: 'Therapeutic solutions to boost performance and improve intimacy',
    image: '/images/sh.png',
    href: '#sexual-wellness'
  },
  {
    title: 'Comprehensive Lab Testing',
    description: 'Diagnose the root cause to formulate a tailored treatment protocol',
    image: '/images/lt.png',
    href: '#lab-testing'
  },
  {
    title: 'DNA Testing',
    description: 'Advanced testing to assess biological processes and develop treatment',
    image: '/images/dt.png',
    href: '#dna-testing'
  }
]

export default function ServicesGrid() {
  const [showMemberships, setShowMemberships] = useState(false)

  return (
    <section id='services' className="py-16 px-6 max-w-7xl mx-auto">
      {/* Divider */}
      <div className="h-1 w-24 bg-blue-600 mx-auto mb-4 rounded-full" />

      <h2 className="text-3xl font-semibold mb-12 text-center dark:text-white">
        Old Mission Lifestyle Medicine Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, image, href }, idx) => (
          <motion.a
            key={idx}
            href={href}
            className="relative group rounded-lg shadow-lg overflow-hidden block h-72 sm:h-64"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-opacity duration-300" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{title}</h3>
                <p className="text-sm drop-shadow-md">{description}</p>
              </div>

              {/* Hover CTA */}
              <div className="flex items-center gap-2 mt-4 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                <span>{title}</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* View Memberships Button */}
      {/* <div className="flex justify-center mt-16">
        <button
          onClick={() => setShowMemberships(!showMemberships)}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          aria-expanded={showMemberships}
          aria-controls="membership-section"
        >
          {showMemberships ? 'Hide Memberships' : 'View Memberships'}
        </button>
      </div> */}

<MembershipPlansWrapper />
    </section>
  )
}
