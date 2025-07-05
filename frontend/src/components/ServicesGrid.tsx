// import React from 'react'
// import { motion } from 'framer-motion'
// import { FaArrowRight } from 'react-icons/fa'
// import MembershipPlansWrapper from '../components/MembershipPlansWrapper'

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

// export default function ServicesGrid() {
//   return (
//     <section id="services" className="py-24 px-4 bg-white dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
//         {/* Header Section */}
//         <div className="text-center mb-16 max-w-3xl">
//           <img
//             src="/logos/omlm1.png"
//             alt="Old Mission Medicine Logo"
//             className="mx-auto w-20 h-auto mb-4"
//           />
//           <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
//             OLD MISSION LIFESTYLE MEDICINE
//           </h2>

//           <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
//             Our healthcare professionals customize your care and keep your health, wellness, and longevity a top priority.
//             Lifestyle medicine focuses on diet, physical activity, adequate sleep, stress reduction, responsible supplement use,
//             and fostering healthy relationships to prevent, manage, and often reverse chronic illnesses.
//           </p>

//           <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
//             <strong>Client Profile:</strong> Women and men 40 and older, business executives, and elite athletes seeking affordable healthcare to live
//             their best lives with high-precision diagnostics, advanced treatment plans, and beneficial supplements.
//           </p>

//           <div className="h-1 w-16 bg-blue-600 mx-auto mt-6 rounded-full" />
//         </div>

//         {/* Membership Button */}
//         {/* <div className="mb-12">
//           <MembershipPlansWrapper delay={services.length * 0.1 + 0.3} />
//         </div> */}

//         {/* Services Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           {services.map(({ title, description, image, href }, idx) => (
//             <motion.a
//               key={idx}
//               href={href}
//               className="relative group rounded-lg shadow-lg overflow-hidden block min-h-[16rem] sm:min-h-[14rem]"
//               style={{
//                 backgroundImage: `url(${image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//               whileHover={{ scale: 1.03 }}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: idx * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-opacity duration-300" />
//               <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 text-white">
//                 <div>
//                   <h3 className="text-xl sm:text-2xl font-bold mb-2 drop-shadow-md">{title}</h3>
//                   <p className="text-sm drop-shadow-md">{description}</p>
//                 </div>
//                 <div className="flex items-center gap-2 mt-4 font-semibold group-hover:text-blue-400 transition-colors duration-300">
//                   <span>{title}</span>
//                   <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import MembershipPlansWrapper from '../components/MembershipPlansWrapper'
import Image from 'next/image'

// const services = [
//   // ... your services data remains the same
// ];

// --- UPDATED: Data array now contains only one logo ---
// Replace with your actual logo path and alt text
const featuredLogos = [
  { src: '/logos/omlm1.png', alt: 'Featured Logo A' }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl">
          {/* <img
            src="/logos/omlm1.png"
            alt="Old Mission Medicine Logo"
            className="mx-auto w-20 h-auto mb-4"
          /> */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            OLD MISSION LIFESTYLE MEDICINE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Our healthcare professionals customize your care and keep your health, wellness, and longevity a top priority.
            Lifestyle medicine focuses on diet, physical activity, adequate sleep, stress reduction, responsible supplement use,
            and fostering healthy relationships to prevent, manage, and often reverse chronic illnesses.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            <strong>Client Profile:</strong> Women and men 40 and older, business executives, and elite athletes seeking affordable healthcare to live
            their best lives with high-precision diagnostics, advanced treatment plans, and beneficial supplements.
          </p>
        </div>
        
        {/* Logo Section */}
        <motion.div
          className="text-center w-full max-w-3xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-6">
            As Seen In
          </h3>
          <div className="flex justify-center items-center gap-10 sm:gap-16">
            {featuredLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:invert"
                />
              </motion.div>
            ))}
          </div>
           <div className="h-1 w-16 bg-blue-600 mx-auto mt-12 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {services.map(({ title, description, image, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              className="relative group rounded-lg shadow-lg overflow-hidden block min-h-[16rem] sm:min-h-[14rem]"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              whileHover={{ scale: 1.03 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 text-white">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 drop-shadow-md">{title}</h3>
                  <p className="text-sm drop-shadow-md">{description}</p>
                </div>
                <div className="flex items-center gap-2 mt-4 font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  <span>{title}</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}