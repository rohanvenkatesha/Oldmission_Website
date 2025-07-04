import React from 'react'
import { motion } from 'framer-motion'

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function WoundAndEmergencySections() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Emergency Medicine Section */}
        <motion.div
          className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col-reverse md:flex-row items-center gap-10
            before:absolute before:top-0 before:left-0 before:right-0 before:h-4 before:rounded-t-3xl before:shadow-md before:z-[-1]"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text */}
          <div className="flex-1 text-left md:pr-10">
            <img src="/logos/omem1.png" alt="Emergency Logo" className="h-12 mb-4" />
            <p className="text-sm font-semibold text-blue-500 uppercase mb-2">
              Hospital Management & Leadership Development
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              EMERGENCY MEDICINE
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4 max-w-xl">
              Customized staffing, consulting on hospital operations, and executive coaching for hospitals and physician groups.
            </p>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-6 max-w-xl">
              Client Profile: Hospital executives and physicians seeking innovative and collaborative solutions to improve clinical quality and leadership.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-md">
            <img
              src="/images/funky-emergency.png"
              alt="Emergency Funky"
              className="rounded-xl w-full h-auto max-h-[280px] object-contain"
            />
          </div>
        </motion.div>

        {/* Wound Care Section - Right Aligned */}
        <motion.div
          className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-10
            before:absolute before:top-0 before:left-0 before:right-0 before:h-4 before:rounded-t-3xl before:shadow-md before:z-[-1]"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image */}
          <div className="flex-1 w-full max-w-md order-2 md:order-1">
            <img
              src="/images/funky-woundcare.png"
              alt="Wound Care Funky"
              className="rounded-xl w-full h-auto max-h-[280px] object-contain"
            />
          </div>

          {/* Text - Right Aligned */}
          <div className="flex-1 text-right md:pl-10 order-1 md:order-2">
            <div className="flex justify-end">
              <img src="/logos/omwc1.png" alt="Wound Care Logo" className="h-12 mb-4" />
            </div>
            <p className="text-sm font-semibold text-blue-500 uppercase mb-2">
              Providing Advanced Wound Healing Therapy
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              WOUND CARE
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4 max-w-xl ml-auto">
              Full-spectrum wound care programs for diverse conditions with compliance guidance and reimbursement support.
            </p>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-6 max-w-xl ml-auto">
              Client Profile: Non-physician wound care providers delivering the most advanced healing therapy aligned with regulatory compliance.
            </p>
            <div className="flex justify-end">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
