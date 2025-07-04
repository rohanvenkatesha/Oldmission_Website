import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import MembershipPlansWrapper from '../components/MembershipPlansWrapper'

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
  return (
    <section id="services" className="py-24 px-4 bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-12">
        <motion.div
          className="mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <img
            src="/logos/omlm1.png"
            alt="Old Mission Medicine Logo"
            className="mx-auto w-20 h-auto"
          />
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          OLD MISSION LIFESTYLE MEDICINE
        </motion.h2>

        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          Our healthcare professionals customize your care and keep your health, wellness, and longevity a top priority.
          Lifestyle medicine focuses on diet, physical activity, adequate sleep, stress reduction, responsible supplement use,
          and fostering healthy relationships to prevent, manage, and often reverse chronic illnesses. Our team provides
          personalized and convenient telehealth consultations through our affordable membership plan, no matter where you are.
        </motion.p>

        <motion.p
          className="mt-4 text-sm italic text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          Client Profile: Women and men 40 and older, business executives, and elite athletes seeking affordable healthcare to live
          their best lives with high-precision diagnostics, advanced treatment plans, and beneficial supplements.
        </motion.p>

        {/* <MembershipPlansWrapper delay={services.length * 0.1 + 0.3} /> */}

        <motion.div
          className="h-1 w-16 bg-blue-600 mx-auto mt-6 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
          viewport={{ once: false }}
        />
      </div>

      <MembershipPlansWrapper delay={services.length * 0.1 + 0.3} />

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mb-12">
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
            transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{title}</h3>
                <p className="text-sm drop-shadow-md">{description}</p>
              </div>
              <div className="flex items-center gap-2 mt-4 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                <span>{title}</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Membership Plans */}
      {/* <MembershipPlansWrapper delay={services.length * 0.1 + 0.3} /> */}
    </section>
  )
}
