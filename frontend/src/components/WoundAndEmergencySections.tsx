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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image'; // Removed next/image as it's not supported in this environment

// Animation variant for the individual boxes
const boxVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

export default function WoundAndEmergencySections() {
  // State for Emergency Medicine LLM feature
  const [emInsight, setEmInsight] = useState('');
  const [emLoading, setEmLoading] = useState(false);
  const [showEmModal, setShowEmModal] = useState(false);

  // State for Wound Care LLM feature
  const [wcTherapy, setWcTherapy] = useState('');
  const [wcLoading, setWcLoading] = useState(false);
  const [showWcModal, setShowWcModal] = useState(false);

  // Function to call Gemini API for Emergency Medicine insight
  const generateEmInsight = async () => {
    setEmLoading(true);
    setEmInsight(''); // Clear previous insight
    setShowEmModal(true); // Show modal immediately with loading state

    try {
      const prompt = "Provide a concise, actionable leadership tip for hospital executives focused on improving team collaboration and efficiency in an emergency department. Keep it under 50 words.";
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // Canvas will automatically provide this at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setEmInsight(text);
      } else {
        setEmInsight("Could not generate insight. Please try again.");
      }
    } catch (error) {
      console.error("Error generating EM insight:", error);
      setEmInsight("Failed to generate insight due to an error.");
    } finally {
      setEmLoading(false);
    }
  };

  // Function to call Gemini API for Wound Care therapy suggestion
  const generateWcTherapy = async () => {
    setWcLoading(true);
    setWcTherapy(''); // Clear previous therapy
    setShowWcModal(true); // Show modal immediately with loading state

    try {
      const prompt = "Suggest an advanced wound healing therapy for a chronic venous ulcer, briefly explaining its benefit. Keep it under 50 words.";
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // Canvas will automatically provide this at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setWcTherapy(text);
      } else {
        setWcTherapy("Could not suggest therapy. Please try again.");
      }
    } catch (error) {
      console.error("Error generating WC therapy:", error);
      setWcTherapy("Failed to suggest therapy due to an error.");
    } finally {
      setWcLoading(false);
    }
  };

  // Modal component for displaying LLM output
  const LLMOutputModal = ({ title, content, isLoading, onClose }) => {
    if (!content && !isLoading) return null; // Don't show if no content and not loading

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
          >
            &times;
          </button>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              <p className="ml-4 text-gray-700 dark:text-gray-300">Generating...</p>
            </div>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 text-lg">{content}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 font-inter"> {/* Adjusted overall background */}
      <div className="max-w-6xl mx-auto flex flex-col gap-24"> {/* Slightly larger max-w, increased gap */}

        {/* --- Emergency Medicine Section --- */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch"> {/* Increased gap between boxes */}
          {/* Text Content Box (Rectangular appearance) */}
          <motion.div
            className="w-full md:w-3/5 p-8 flex flex-col justify-center relative z-10
                       bg-white dark:bg-black/50 rounded-3xl shadow-2xl
                       transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-3xl" // Enhanced shadow on hover
            variants={boxVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Logo */}
            <img src="/logos/omem1.png" alt="Emergency Logo" className="h-14 mb-4 self-start filter brightness-90 dark:brightness-110" /> {/* Slightly larger logo */}

            {/* Subtitle */}
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
              Hospital Management & Leadership
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase text-gray-900 dark:text-white mb-4 leading-tight">
              Emergency <span className="text-blue-600 dark:text-blue-400">Medicine</span> Solutions
            </h2>

            {/* Description */}
            <p className="text-base text-gray-700 dark:text-gray-300 mb-6 max-w-lg">
              We provide <strong>customized staffing, operational consulting</strong>, and <strong>executive coaching</strong> to elevate hospital and physician group performance in emergency care.
            </p>

            {/* Client Profile */}
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-8 max-w-lg">
              <strong>Client Profile:</strong> Hospital executives and physicians dedicated to innovative, collaborative solutions for improving clinical quality and leadership.
            </p>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row gap-4">
<a href="#footer" className="self-start">
  <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
    Get in Touch
  </button>
</a>

              <button
                onClick={generateEmInsight}
                className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 self-start flex items-center justify-center"
                disabled={emLoading}
              >
                {emLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>Leadership Insight ✨</>
                )}
              </button>
            </div>
          </motion.div>

          {/* Image Content Box (Square) */}
          <motion.div
            className="w-full md:w-2/5 relative flex items-center justify-center p-0 aspect-square md:aspect-auto md:h-auto
                       rounded-3xl overflow-hidden shadow-2xl
                       transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-3xl
                       bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-700 dark:to-blue-900" /* Added gradient background */
            variants={boxVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image using standard <img> tag */}
            <img
              src="/images/emermedi.png" // Placeholder for demonstration
              alt="Emergency Medicine"
              className="rounded-3xl z-10 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
          </motion.div>
        </div>

        {/* --- Wound Care Section --- */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-stretch"> {/* Increased gap between boxes */}
          {/* Text Content Box (Rectangular appearance) */}
          <motion.div
            className="w-full md:w-3/5 p-8 flex flex-col justify-center relative z-10 text-right md:text-left
                       bg-white dark:bg-black/50 rounded-3xl shadow-2xl
                       transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-3xl"
            variants={boxVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Logo */}
            <img src="/logos/omwc1.png" alt="Wound Care Logo" className="h-14 mb-4 self-end md:self-start filter brightness-90 dark:brightness-110" />

            {/* Subtitle */}
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
              Advanced Healing Therapies
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase text-gray-900 dark:text-white mb-4 leading-tight">
              Specialized <span className="text-blue-600 dark:text-blue-400">Wound Care</span> Programs
            </h2>

            {/* Description */}
            <p className="text-base text-gray-700 dark:text-gray-300 mb-6 max-w-lg ml-auto md:ml-0">
              We offer <strong>full-spectrum wound care programs</strong> for diverse conditions, complemented by <strong>compliance guidance</strong> and <strong>reimbursement support</strong>.
            </p>

            {/* Client Profile */}
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-8 max-w-lg ml-auto md:ml-0">
              <strong>Client Profile:</strong> Non-physician wound care providers committed to delivering the most advanced healing therapy aligned with regulatory compliance.
            </p>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 self-end md:self-start">
<a href="#footer" className="self-start">
  <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
    Get in Touch
  </button>
</a>

              <button
                onClick={generateWcTherapy}
                className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                disabled={wcLoading}
              >
                {wcLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>Therapy Suggestion ✨</>
                )}
              </button>
            </div>
          </motion.div>

          {/* Image Content Box (Square) */}
          <motion.div
            className="w-full md:w-2/5 relative flex items-center justify-center p-0 aspect-square md:aspect-auto md:h-auto
                       rounded-3xl overflow-hidden shadow-2xl
                       transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-3xl
                       bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-700 dark:to-blue-900" /* Added gradient background */
            variants={boxVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image using standard <img> tag */}
            <img
              src="/images/woundcare.png" // Placeholder for demonstration
              alt="Wound Care"
              className="rounded-3xl shadow-xl z-10 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
          </motion.div>
        </div>

      </div>

      {/* Modals for LLM output */}
      {showEmModal && (
        <LLMOutputModal
          title="Leadership Insight"
          content={emInsight}
          isLoading={emLoading}
          onClose={() => setShowEmModal(false)}
        />
      )}
      {showWcModal && (
        <LLMOutputModal
          title="Therapy Suggestion"
          content={wcTherapy}
          isLoading={wcLoading}
          onClose={() => setShowWcModal(false)}
        />
      )}
    </section>
  );
}
