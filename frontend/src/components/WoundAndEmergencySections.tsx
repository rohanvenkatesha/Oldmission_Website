// import React from 'react'
// import { motion } from 'framer-motion'

// const sectionVariant = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 }
// }

// export default function WoundAndEmergencySections() {
//   return (
//     <section className="bg-white dark:bg-gray-900 py-24 px-4">
//       <div className="max-w-7xl mx-auto flex flex-col gap-20">

//         {/* Emergency Medicine Section */}
//         <motion.div
//           className="relative bg-white dark:bg-black/30 rounded-3xl shadow-xl p-8 flex flex-col-reverse md:flex-row items-center gap-10
//             before:absolute before:top-0 before:left-0 before:right-0 before:h-4 before:rounded-t-3xl before:shadow-md before:z-[-1]"
//           variants={sectionVariant}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Text */}
//           <div className="flex-1 text-left px-8 py-8 md:pr-10">
//             <img src="/logos/omem1.png" alt="Emergency Logo" className="h-12 mb-4" />
//             <p className="text-sm font-semibold text-blue-500 uppercase mb-2">
//               Hospital Management & Leadership Development
//             </p>
//             <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
//               EMERGENCY MEDICINE
//             </h2>
//             <p className="text-base text-gray-700 dark:text-gray-300 mb-4 max-w-xl">
//               Customized staffing, consulting on hospital operations, and executive coaching for hospitals and physician groups.
//             </p>
//             <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-6 max-w-xl">
//               Client Profile: Hospital executives and physicians seeking innovative and collaborative solutions to improve clinical quality and leadership.
//             </p>
//             <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
//               Contact Us
//             </button>
//           </div>

//           {/* Image */}
//           <div className="flex-1 w-full max-w-md">
//             <img
//               src="/images/funky-emergency.png"
//               alt="Emergency Funky"
//               className="rounded-xl w-full h-auto max-h-[280px] object-contain"
//             />
//           </div>
//         </motion.div>

//         {/* Wound Care Section - Right Aligned */}
//         <motion.div
//           className="relative bg-white dark:bg-black/30 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-10
//             before:absolute before:top-0 before:left-0 before:right-0 before:h-4 before:rounded-t-3xl before:shadow-md before:z-[-1]"
//           variants={sectionVariant}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Image */}
//           <div className="flex-1 w-full max-w-md order-2 md:order-1">
//             <img
//               src="/images/funky-woundcare.png"
//               alt="Wound Care Funky"
//               className="rounded-xl w-full h-auto max-h-[280px] object-contain"
//             />
//           </div>

//           {/* Text - Right Aligned */}
//           <div className="flex-1 text-right px-8 py-8 md:pl-10 order-1 md:order-2">
//             <div className="flex justify-end">
//               <img src="/logos/omwc1.png" alt="Wound Care Logo" className="h-12 mb-4" />
//             </div>
//             <p className="text-sm font-semibold text-blue-500 uppercase mb-2">
//               Providing Advanced Wound Healing Therapy
//             </p>
//             <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
//               WOUND CARE
//             </h2>
//             <p className="text-base text-gray-700 dark:text-gray-300 mb-4 max-w-xl ml-auto">
//               Full-spectrum wound care programs for diverse conditions with compliance guidance and reimbursement support.
//             </p>
//             <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-6 max-w-xl ml-auto">
//               Client Profile: Non-physician wound care providers delivering the most advanced healing therapy aligned with regulatory compliance.
//             </p>
//             <div className="flex justify-end">
//               <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function WoundAndEmergencySections() {
  return (
    <section className="bg-gray-100 dark:bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* --- Emergency Medicine Section (60/40 Split) --- */}
        <motion.div
          className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text Content (Wider) */}
          <div className="w-full md:w-3/5 p-8 md:p-12 order-2 md:order-1 flex flex-col justify-center subtle-pattern">
            <img src="/logos/omem1.png" alt="Emergency Logo" className="h-12 mb-4 self-start" />
            <p className="text-sm font-semibold text-blue-500 uppercase mb-2">
              Hospital Management & Leadership
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              EMERGENCY MEDICINE
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
              Customized staffing, consulting on hospital operations, and executive coaching for hospitals and physician groups.
            </p>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-6">
              Client Profile: Hospital executives and physicians seeking innovative solutions to improve clinical quality.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors self-start">
              Contact Us
            </button>
          </div>
          
          {/* Image Content (Smaller) */}
          <div className="w-full md:w-2/5 order-1 md:order-2 relative min-h-[300px] md:min-h-0">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50 hidden md:block" />
            <Image
              className="rounded-xl w-full h-auto max-h-[380px] object-contain"
              src="/images/funky-emergency.png"
              alt="Emergency Medicine"
              width={400}
              height={400}
              // className="object-cover"
            />
          </div>
        </motion.div>

        {/* --- Wound Care Section (60/40 Split, Reversed) --- */}
        <motion.div
          className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Content (Smaller) */}
          <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-0">
            <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50 hidden md:block" />
            <Image
              className="rounded-xl w-full h-auto max-h-[380px] object-contain"
              src="/images/funky-woundcare.png"
              alt="Wound Care"
              width={400}
              height={400}
              // className="object-cover"
            />
          </div>

          {/* Text Content (Wider) */}
          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center subtle-pattern">
            <img src="/logos/omwc1.png" alt="Wound Care Logo" className="h-12 mb-4 self-start" />
            <p className="text-sm font-semibold text-blue-500 uppercase mb-2">
              Advanced Wound Healing Therapy
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              WOUND CARE
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
              Full-spectrum wound care programs for diverse conditions with compliance guidance and reimbursement support.
            </p>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-6">
              Client Profile: Non-physician providers delivering advanced healing therapy aligned with regulatory compliance.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-700 transition-colors self-start">
              Contact Us
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}