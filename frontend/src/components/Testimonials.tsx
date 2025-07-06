import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate, AnimatePresence } from 'framer-motion' // Import AnimatePresence
// Assuming 'testimonials' data is available globally or passed via props
import { testimonials } from '../data/testimonials' // Commented out as it's not provided in this context



export default function TestimonialCarousel() {
  const x = useMotionValue(0)
  const [isPaused, setIsPaused] = useState(false)
  const offset = useRef(0)
  const animationRef = useRef(null)

  // State to manage the currently selected testimonial for the modal
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const CARD_WIDTH = 280 + 24 // card + gap
  const totalWidth = CARD_WIDTH * testimonials.length
  const loopWidth = totalWidth

  // Double the testimonials array for seamless looping
  const doubleTestimonials = [...testimonials, ...testimonials]

  // Function to start the automatic scroll animation
  const startAutoScroll = () => {
    // Stop any existing animation to prevent conflicts
    if (animationRef.current) {
      animationRef.current.stop();
    }

    animationRef.current = animate(x, -loopWidth, {
      type: 'tween',
      duration: 60, // Duration of the full loop
      ease: 'linear',
      onUpdate: (latest) => {
        offset.current = latest; // Update the current offset
      },
      onComplete: () => {
        x.set(0); // Reset x to 0 when animation completes
        offset.current = 0; // Reset offset
        startAutoScroll(); // Restart the animation for continuous loop
      },
    });
  };

  // Effect hook to manage auto-scrolling based on pause state
  useEffect(() => {
    if (!isPaused && !selectedTestimonial) { // Only auto-scroll if not paused AND no modal is open
      startAutoScroll();
    } else {
      animationRef.current?.stop(); // Stop animation if paused or modal is open
    }
    // Cleanup function to stop animation when component unmounts
    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [isPaused, x, loopWidth, selectedTestimonial]); // Added selectedTestimonial to dependencies

  // Function to handle manual sliding of the carousel
  const handleSlide = (dir) => {
    setIsPaused(true); // Pause auto-scroll during manual slide
    const delta = dir === 'left' ? CARD_WIDTH : -CARD_WIDTH; // Determine slide direction
    const next = offset.current + delta; // Calculate next position
    x.set(next); // Set the new x position
    offset.current = next; // Update the current offset
  };

  // Helper to truncate long feedback text for display on cards
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  // Function to open the modal with the full testimonial
  const openTestimonialModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  // Function to close the modal
  const closeTestimonialModal = () => {
    setSelectedTestimonial(null);
  };

  // Testimonial Modal Component
  const TestimonialModal = ({ testimonial, onClose }) => {
    if (!testimonial) return null;

    // Handle clicks on the overlay to close the modal
    const handleOverlayClick = (e) => {
      // Check if the click occurred directly on the overlay div, not its children
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <motion.div // This is now a motion.div for overlay animation
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
        onClick={handleOverlayClick}
        initial={{ opacity: 0 }} // Initial state for overlay opacity
        animate={{ opacity: 1 }} // Animate to full opacity
        exit={{ opacity: 0 }} // Animate to transparent on exit
      >
        <motion.div // This is the modal content itself, handles scale/opacity
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }} // Exit animation for modal content
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden w-full max-w-2xl relative flex flex-col md:flex-row"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-3xl font-bold z-10"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Image section in modal */}
          <div className="w-full md:w-1/3 relative min-h-[200px] md:min-h-auto flex-shrink-0">
            <img
              src={testimonial.image}
              alt={`${testimonial.name} avatar`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content section in modal */}
          <div className="w-full md:w-2/3 p-8 flex flex-col justify-center text-gray-900 dark:text-white">
            <p className="text-3xl font-bold mb-2">{testimonial.name}</p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{testimonial.age} years old</p>
            <p className="text-lg leading-relaxed italic">
              “{testimonial.feedback}”
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-black/50 overflow-hidden relative font-inter">
      <h2 className="text-4xl font-extrabold mb-12 uppercase text-center text-gray-900 dark:text-white max-w-7xl mx-auto px-4">
        Hear From Our Valued Clients
      </h2>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 z-20 px-4 md:px-8">
        <button
          onClick={() => handleSlide('left')}
          className="bg-black/0 text-transparent rounded-full w-12 h-12 flex items-center justify-center
                     hover:bg-black/30 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Slide Left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => handleSlide('right')}
          className="bg-black/0 text-transparent rounded-full w-12 h-12 flex items-center justify-center
                     hover:bg-black/30 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Slide Right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)} // Pause on hover
        onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
      >
        <motion.div
          style={{ x }}
          className="flex gap-6 w-max px-4 select-none cursor-pointer md:cursor-grab" // Changed cursor to pointer
          drag="x"
          dragConstraints={{ left: -loopWidth, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => setIsPaused(false)}
        >
          {doubleTestimonials.map((testimonial, i) => { // Use full testimonial object
            const imgHeight = 450;

            return (
              <motion.div // Make the card itself a motion.div
                key={i}
                layoutId={`testimonial-card-${testimonial.id}`} // Shared layout ID
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg min-w-[280px] max-w-[300px] flex-shrink-0
                           transition-all duration-300 hover:shadow-xl relative overflow-hidden // Re-added overflow-hidden here
                           border border-gray-200 dark:border-gray-700"
                onClick={() => openTestimonialModal(testimonial)} // Added onClick handler
              >
                <div className="relative w-full" style={{ height: imgHeight }}>
                  <motion.img // Make the image a motion.img
                    layoutId={`testimonial-image-${testimonial.id}`} // Shared layout ID
                    src={testimonial.image}
                    alt={`${testimonial.name} avatar`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-t-3xl" // Added rounded-t-3xl here
                    draggable={false}
                  />

                  {/* Enhanced gradient overlay for better text contrast */}
                  <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                  {/* Text content on overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <motion.p layoutId={`testimonial-name-${testimonial.id}`} className="text-2xl font-bold mb-1">{testimonial.name}</motion.p>
                    <motion.p layoutId={`testimonial-age-${testimonial.id}`} className="text-lg text-gray-300 mb-3">{testimonial.age}</motion.p>
                    <p className="text-base leading-relaxed max-h-24 overflow-hidden text-ellipsis">
                      “{truncateText(testimonial.feedback, 120)}”
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Testimonial Modal */}
      <AnimatePresence> {/* Wrap with AnimatePresence */}
        {selectedTestimonial && (
          <TestimonialModal testimonial={selectedTestimonial} onClose={closeTestimonialModal} />
        )}
      </AnimatePresence>
    </section>
  )
}
