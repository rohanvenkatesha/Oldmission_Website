

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { memberships } from '../data/memberships';
import { services } from '../data/services';

// --- Data Transformation ---
// This converts the array into a key-value object for easier lookup, matching the component's logic.
const membershipData = memberships.reduce((acc, curr) => {
  acc[curr.type] = curr.plans.map(plan => ({
    name: plan.title,
    price: plan.price,
    features: plan.bullets
  }));
  return acc;
}, {});


// --- Reusable Icons (SVG) ---
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);
const CheckIcon = () => (
    <svg className="h-5 w-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);


// --- Membership Plans Component ---
const MembershipPlans = () => {
    const categories = Object.keys(membershipData);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [activePlanIndex, setActivePlanIndex] = useState(0);
    const [showAllFeatures, setShowAllFeatures] = useState(false);

    const handleNext = () => {
        setShowAllFeatures(false);
        setActivePlanIndex((prev) => (prev + 1) % membershipData[activeCategory].length);
    };

    const handlePrev = () => {
        setShowAllFeatures(false);
        setActivePlanIndex((prev) => (prev - 1 + membershipData[activeCategory].length) % membershipData[activeCategory].length);
    };
    
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setActivePlanIndex(0);
        setShowAllFeatures(false);
    };

    const currentPlan = membershipData[activeCategory][activePlanIndex];
    const displayedFeatures = showAllFeatures ? currentPlan.features : currentPlan.features.slice(0, 5);

    return (
        <motion.div
          
            className="w-full mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl sm:text-5xl uppercase font-extrabold tracking-tight text-gray-900 dark:text-white">
                Membership Plans
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                Choose a plan that aligns with your health goals and lifestyle.
            </p>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-8 rounded-full" />

            <div className="mt-12 flex justify-center flex-wrap gap-2 sm:gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-md transition-colors duration-300 ${activeCategory === category ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="mt-8 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + activePlanIndex}
                        className="w-full px-8 sm:px-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <div className="bg-white dark:bg-black/50 rounded-2xl shadow-2xl p-8 sm:p-10 text-left">
                            <div className="flex flex-col md:flex-row justify-between md:items-center">
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{currentPlan.name}</h3>
                                <div className="mt-4 md:mt-0 text-right">
                                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{currentPlan.price.start}</p>
                                    {currentPlan.price.monthly && <p className="text-lg text-gray-500 dark:text-gray-400">{currentPlan.price.monthly}</p>}
                                </div>
                            </div>
                            
                            <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

                            <ul className="space-y-4">
                                {displayedFeatures.map((feature, index) => (
                                    <motion.li 
                                        key={index} 
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <CheckIcon />
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {currentPlan.features.length > 5 && (
                                <button
                                    onClick={() => setShowAllFeatures(!showAllFeatures)}
                                    className="text-blue-600 dark:text-blue-400 font-semibold mt-6 hover:underline"
                                >
                                    {showAllFeatures ? 'Show Less' : `Show ${currentPlan.features.length - 5} More Features...`}
                                </button>
                            )}

                            <div className="mt-8 text-center">
                                <button className="w-full sm:w-auto bg-blue-600 text-white font-bold py-4 px-12 rounded-lg text-xl hover:bg-blue-700 transition-transform hover:scale-105 duration-300 shadow-lg">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                
                {/* Carousel Controls */}
                <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full p-2 text-gray-800 dark:text-gray-200 shadow-md transition z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full p-2 text-gray-800 dark:text-gray-200 shadow-md transition z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </motion.div>
    );
};


// --- Main App Component ---
function App() {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <div className="bg-white dark:bg-gray-900 font-sans">
      <section id="services" className="py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          {/* Header Section */}
          <motion.div
            className="text-center mb-16 max-w-3xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src="/logos/omlm1.png" alt="Old Mission Lifestyle Medicine Logo" className="mx-auto w-24 h-24 mb-6 rounded-full shadow-md" />
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              OLD MISSION LIFESTYLE MEDICINE
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Our healthcare professionals customize your care, keeping your health, wellness, and longevity a top priority. We focus on diet, physical activity, sleep, and stress reduction to prevent, manage, and often reverse chronic illnesses.
            </p>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-8 rounded-full" />
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map(({ title, description, image, href }) => (
              <motion.a
                key={title}
                href={href}
                className="relative group rounded-xl shadow-lg overflow-hidden block aspect-w-1 aspect-h-1"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                  <div>
                    <h3 className="text-2xl font-bold drop-shadow-lg">{title}</h3>
                    <p className="mt-1 text-base opacity-90 drop-shadow-md">{description}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <span>Learn More</span>
                    <ArrowIcon />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* --- NEW Membership Plans Section --- */}
          <MembershipPlans />

        </div>
      </section>
    </div>
  );
}

export default App;
