// import Link from 'next/link'

// export default function VideoSection() {
//   return (
//     <section className="relative w-full h-[80vh] md:h-[80vh] overflow-hidden">
//       {/* Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/your-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay dim layer */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

//       {/* Content/buttons over video */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
//         <div className="flex justify-center">
//           <Link href="/appointment">
//             <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight hover:tracking-wider transition-all inline-flex items-center cursor-pointer">
//               Book an Appointment
//               <span className="ml-2 animate-pulse text-blue-500 text-4xl md:text-5xl">→</span>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
// Import the necessary icons
import { FaArrowRight, FaCommentDots, FaArrowDown } from 'react-icons/fa'

export default function VideoSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        // Remember to replace with your video source
        src="/your-video.mp4" 
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Centered Content from the Hero Design */}
      <div className="relative z-20 px-6 sm:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block text-xs sm:text-sm uppercase tracking-widest font-semibold mb-4">
            Health and Wellness Innovations
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            A New Standard in Personalized Care
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-200 leading-relaxed drop-shadow-md">
            We’re a national leader in personalized healthcare solutions — from lifestyle medicine to aesthetics. Old Mission brings together compliance, strategy, and wellness so you can serve patients better, faster, and healthier.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/appointment" legacyBehavior>
              <a className="flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span>Book Appointment</span>
                <FaArrowRight />
              </a>
            </Link>
             <Link href="/chat" legacyBehavior>
              <a className="flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300">
                <span>Chat with Us</span>
                <FaCommentDots />
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="absolute z-20 bottom-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2 text-sm text-white/80">
          Scroll Down
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaArrowDown />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}