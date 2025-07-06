import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { shopProducts } from '../data/shopproducts';


// --- Reusable Icons ---
const StoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const ArrowButton = ({ onClick, direction }) => (
    <motion.button
        onClick={onClick}
        className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 text-gray-800 dark:text-gray-200 shadow-lg z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        {direction === 'left' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        )}
    </motion.button>
);


// --- Main Shop Products Component ---
function App() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleNext = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const scrollEnd = scrollWidth - clientWidth;

    if (scrollLeft >= scrollEnd - 1) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth } = scrollContainerRef.current;

    if (scrollLeft <= 1) {
      scrollContainerRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
    } else {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // --- Drag-to-scroll Logic ---
  const onMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging || !scrollContainerRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2; // The multiplier makes the scroll faster
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Quintic Out
      },
    },
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 font-sans">
      <section id="shop" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16 px-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl uppercase font-extrabold tracking-tight text-gray-900 dark:text-white">
              Shop Our Products
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our curated selection of skincare and wellness products designed to complement your health journey.
            </p>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-8 rounded-full" />
          </motion.div>

          {/* Products Carousel */}
          <div className="relative">
             <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 pl-4 sm:pl-6 z-10">
                <ArrowButton onClick={handlePrev} direction="left" />
            </div>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 pr-4 sm:pr-6 z-10">
                <ArrowButton onClick={handleNext} direction="right" />
            </div>

            <motion.div
              ref={scrollContainerRef}
              className={`flex overflow-x-auto snap-x snap-mandatory scroll-smooth py-8 px-4 sm:px-6 gap-8 cursor-grab ${isDragging ? 'active:cursor-grabbing' : ''}`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{ scrollbarWidth: 'none' }}
              onMouseDown={onMouseDown}
            >
              {shopProducts.map((product) => (
                <motion.div
                  key={product.title}
                  className="group snap-center flex-shrink-0 w-[80%] sm:w-[48%] md:w-[31%] lg:w-[23%]"
                  variants={itemVariants}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:-translate-y-2">
                    <div className="w-full h-80 overflow-hidden">
                       <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out pointer-events-none" // Prevent image drag
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{product.category}</p>
                      <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white truncate">{product.title}</h3>
                      <div className="mt-4 flex-grow flex items-end justify-between">
                        <p className="text-xl font-extrabold text-gray-800 dark:text-white">
                            {product.price}
                        </p>
                        <a href={product.href} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                            <StoreIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
