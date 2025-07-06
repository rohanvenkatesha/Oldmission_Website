'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

// --- NEW: Data for the single owner ---
const mainOwner = {
  name: 'Dr. Christopher P. Mason',
  title: 'Founder & Visionary',
  imageSrc: '/team/christopher.jpg', // Replace with the owner's actual image
  quote: 'Our mission is to build a national network of healthcare innovators, empowering them with the tools and compliance needed to deliver exceptional, life-changing care.'
}

// --- UPDATED: Sub-brand data no longer needs owner info ---
const subBrands = [
  {
    name: 'Old Mission Aesthetics',
    logoSrc: '/logos/OMA1.png',
    description: 'Cutting-edge aesthetic treatments and training for medical professionals seeking excellence.',
    href: '#iv-aesthetics'
  },
  {
    name: 'Old Mission Lifestyle Medicine',
    logoSrc: '/logos/omlm1.png',
    description: 'Personalized wellness plans focusing on functional and preventative care for a vibrant life.',
    href: '/lifestyle-medicine'
  },
  {
    name: 'Old Mission Emergency Medicine',
    logoSrc: '/logos/omem1.png',
    description: 'Providing expert hospital management, staffing solutions, and leadership development.',
    href: '/emergency-medicine'
  },
  {
    name: 'Old Mission IV Nutrition',
    logoSrc: '/logos/omivn1.png',
    description: 'Tailored intravenous nutrient therapies to boost wellness and vitality from within.',
    href: 'iv-aesthetics'
  },
  {
    name: 'Old Mission Wound Care',
    logoSrc: '/logos/omwc1.png',
    description: 'Advanced wound healing programs with full compliance and reimbursement support.',
    href: '/wound-care'
  },
  {
    name: 'Old Mission Lifetsyle',
    logoSrc: '/logos/oml1.png',
    description: 'Ensuring state and federal regulatory compliance for medical practices nationwide.',
    href: '/compliance'
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Ecosystem() {
  return (
    <section id = "about-us" className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- ABOUT US SECTION --- */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Vision</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            A National Leader in Healthcare Innovation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Old Mission Medicine was founded on the principle of elevating healthcare standards nationwide. We provide a comprehensive ecosystem of services, from clinical care to business strategy and regulatory compliance, empowering providers to deliver unparalleled patient outcomes.
          </p>
        </motion.div>

        {/* --- NEW: MEET THE VISIONARY SECTION --- */}
        <motion.div
          className="max-w-5xl mx-auto mt-24 flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-gray-50 dark:bg-gray-800/50 p-8 md:p-12 rounded-3xl shadow-inner-lg"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={mainOwner.imageSrc}
            alt={mainOwner.name}
            width={200}
            height={200}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-2xl flex-shrink-0"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{mainOwner.name}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{mainOwner.title}</p>
            <blockquote className="text-lg italic text-gray-600 dark:text-gray-300 border-l-4 border-blue-500 pl-4">
              "{mainOwner.quote}"
            </blockquote>
          </div>
        </motion.div>


        {/* --- OUR BRANDS GRID --- */}
        <div className="text-center mt-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Family of Brands
            </h2>
        </div>
        <motion.div
          className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {subBrands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              className="flex flex-col rounded-2xl bg-gray-50 dark:bg-gray-800/50 p-8 shadow-lg ring-1 ring-gray-900/5 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex-grow">
                <Image
                  src={brand.logoSrc}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={30}
                  className="h-8 w-auto mb-4 dark:invert"
                />
                <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                    {brand.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {brand.description}
                </p>
              </div>
              <a
                href={brand.href}
                className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Learn More <FaArrowRight />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}