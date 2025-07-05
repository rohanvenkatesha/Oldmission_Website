// import React from 'react'
// import { motion } from 'framer-motion'
// import { FaArrowRight } from 'react-icons/fa'

// const aestheticsServices = [
//   {
//     title: 'Regulatory Compliance',
//     description: 'Business-to-business solutions for compliance laws and ownership',
//     image: '/images/regulatory.png',
//     href: '#regulatory'
//   },
//   {
//     title: 'Clinical Liaison Services',
//     description: 'Modernize operations for premier patient care and profitability',
//     image: '/images/clinicalliason.png',
//     href: '#clinicalliason'
//   }
// ]

// // Slide up variant
// const slideUpVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 }
// }

// export default function AestheticsNutritionGrid() {
//   return (
//     <motion.section
//       id="iv-aesthetics"
//       className="py-24 px-4 bg-gray-50 dark:bg-black/50 flex flex-col items-center justify-center"
//       initial="hidden"
//       whileInView="visible"
//       variants={slideUpVariant}
//       transition={{ duration: 0.7 }}
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {/* Header */}
//       <div className="text-center mb-16 max-w-3xl">
//         <motion.h2
//           className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
//         >
//           AESTHETICS & IV NUTRITION
//         </motion.h2>

//         <motion.p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
//           Old Mission Medicine offers comprehensive business-to-business services to med spa and IV therapy practices seeking expert guidance to ensure state compliance, delivery of the highest standards of care, and practical business growth.
//         </motion.p>

//         <motion.p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
//           <strong>Client Profile:</strong> Non-physician healthcare professionals dedicated to delivering the most advanced services in aesthetics, IV nutrition, and wellness with directed regulatory compliance and solid business support by our enterprise leadership team.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div className="mt-6 flex flex-wrap justify-center gap-4">
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
//             ALL SERVICES
//           </button>
//           <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md shadow hover:bg-blue-50 transition dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white/10">
//             REQUEST MORE INFO
//           </button>
//         </motion.div>

//         {/* Decorative divider */}
//         <motion.div
//           className="h-1 w-16 bg-blue-600 mx-auto mt-8 rounded-full"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ delay: 0.3, duration: 0.4 }}
//           style={{ transformOrigin: 'left' }}
//         />
//       </div>

//       {/* Services Grid */}
//       <motion.div
//         className="grid gap-8 sm:grid-cols-2 w-full max-w-4xl"
//         variants={slideUpVariant}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 0.7, delay: 0.2 }}
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {aestheticsServices.map(({ title, description, image, href }, idx) => (
//           <motion.a
//             key={idx}
//             href={href}
//             className="relative group rounded-lg shadow-lg overflow-hidden block h-64"
//             style={{
//               backgroundImage: `url(${image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//             whileHover={{ scale: 1.03 }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: idx * 0.1 + 0.4 }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-opacity duration-300" />

//             {/* Card Content */}
//             <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
//               <div>
//                 <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{title}</h3>
//                 <p className="text-sm drop-shadow-md">{description}</p>
//               </div>

//               <div className="flex items-center gap-2 mt-4 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
//                 <span>{title}</span>
//                 <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.section>
//   )
// }


import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image' // Import the Next.js Image component

const aestheticsServices = [
  {
    title: 'Regulatory Compliance',
    description: 'Business-to-business solutions for compliance laws and ownership',
    image: '/images/regulatory.png',
    href: '#regulatory'
  },
  {
    title: 'Clinical Liaison Services',
    description: 'Modernize operations for premier patient care and profitability',
    image: '/images/clinicalliason.png',
    href: '#clinicalliason'
  }
];

// --- NEW: Data for logos ---
// Replace with your actual logo paths and alt text
const partnerLogos = [
  { src: '/logos/OMA1.png', alt: 'Partner Logo 1' },
  { src: '/logos/omivn1.png', alt: 'Partner Logo 2' }
];

// Slide up variant
const slideUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function AestheticsNutritionGrid() {
  return (
    <motion.section
      id="iv-aesthetics"
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
          AESTHETICS & IV NUTRITION
        </motion.h2>

        <motion.p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Old Mission Medicine offers comprehensive business-to-business services to med spa and IV therapy practices seeking expert guidance to ensure state compliance, delivery of the highest standards of care, and practical business growth.
        </motion.p>

        <motion.p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
          <strong>Client Profile:</strong> Non-physician healthcare professionals dedicated to delivering the most advanced services in aesthetics, IV nutrition, and wellness with directed regulatory compliance and solid business support by our enterprise leadership team.
        </motion.p>

        {/* Buttons */}
        <motion.div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
            ALL SERVICES
          </button>
          <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md shadow hover:bg-blue-50 transition dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white/10">
            REQUEST MORE INFO
          </button>
        </motion.div>
      </div>

      {/* --- NEW: Logo Section --- */}
      <motion.div
        className="text-center w-full max-w-3xl mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
          In Partnership With
        </h3>
        <div className="mt-6 flex justify-center items-center gap-12">
          {partnerLogos.map((logo, idx) => (
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
                width={140}
                height={50}
                className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:invert"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* --- End Logo Section --- */}

      {/* Services Grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 w-full max-w-4xl"
        // Removed animation from the grid container to let individual cards animate
      >
        {aestheticsServices.map(({ title, description, image, href }, idx) => (
          <motion.a
            key={idx}
            href={href}
            className="relative group rounded-lg shadow-lg overflow-hidden block h-64"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-opacity duration-300" />

            {/* Card Content */}
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
      </motion.div>
    </motion.section>
  )
}