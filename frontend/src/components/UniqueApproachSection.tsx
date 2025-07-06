import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Define the data for the unique features
const uniqueFeatures = [
  {
    id: 1,
    title: 'Patient-Centered Care',
    description: 'We prioritize your well-being with personalized treatment plans and compassionate support tailored to your unique needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-blue-600 dark:text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Integrated Health Solutions',
    description: 'Combining cutting-edge medical science with holistic approaches for comprehensive health and lasting wellness.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-blue-600 dark:text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Expert Medical Team',
    description: 'Our highly qualified physicians and specialists are leaders in their fields, dedicated to continuous learning and innovation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-blue-600 dark:text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m-4.5 5.25H12c2.485 0 4.5-2.015 4.5-4.5V4.689c0-.494-.65-.727-1.006-.358L12 8.485l-3.494-4.154c-.356-.369-1.006-.136-1.006.358V18c0 2.485 2.015 4.5 4.5 4.5z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Advanced Technology',
    description: 'Utilizing the latest medical technologies and evidence-based practices to ensure the most effective and efficient care.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-blue-600 dark:text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
];

// Data for the animated counters
const stats = [
  { label: 'Patients Served', value: 12000, suffix: '+' },
  { label: 'Years of Experience', value: 15 },
  { label: 'Locations Nationwide', value: 6 },
  { label: 'Providers on Staff', value: 30, suffix: '+' }
];

// Custom AnimatedCounter component
const AnimatedCounter = ({ endValue, duration = 2, suffix = '' }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const animationFrameId = useRef(null);
  const startTime = useRef(null);

  useEffect(() => {
    // Reset for re-animation if component re-renders or comes into view again
    setCurrentValue(0);
    startTime.current = null; // Ensure startTime is reset for new animation cycle

    const animateCount = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = (timestamp - startTime.current) / (duration * 1000); // Progress from 0 to 1

      if (progress < 1) {
        setCurrentValue(Math.floor(progress * endValue));
        animationFrameId.current = requestAnimationFrame(animateCount);
      } else {
        setCurrentValue(endValue); // Ensure it reaches the final value
      }
    };

    // Start the animation
    animationFrameId.current = requestAnimationFrame(animateCount);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      startTime.current = null; // Clear start time on unmount/cleanup
    };
  }, [endValue, duration]); // Dependencies for useEffect

  return (
    <span>
      {currentValue.toLocaleString()}{suffix}
    </span>
  );
};


// Animation variants for the feature cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

export default function UniqueApproachSection() {
  return (
    <section className="bg-gray-50 dark:bg-black/50 py-24 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto text-center">
        {/* <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Our Unique Approach
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16">
          Discover the core principles and advantages that set us apart in delivering exceptional healthcare and wellness solutions.
        </p> */}
          <motion.div
            className="text-center mb-16 px-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl uppercase font-extrabold tracking-tight text-gray-900 dark:text-white">
              Our Unique Approach
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the core principles and advantages that set us apart in delivering exceptional healthcare and wellness solutions.
            </p>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-8 rounded-full" />
          </motion.div>
        {/* --- Animated Counters Section --- */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24"> {/* Added margin-bottom */}
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                <AnimatedCounter endValue={stat.value} suffix={stat.suffix} duration={2} />
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Unique Features Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {uniqueFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center
                         transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1 }} // Staggered animation
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
