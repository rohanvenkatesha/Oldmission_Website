// import Hero from '../src/components/Hero'
// import ServicesGrid from '../src/components/ServicesGrid'
// import WhyChooseUs from '../src/components/WhyChooseUs'
// import Testimonials from '../src/components/Testimonials'
// import ChatbotWidget from '../src/components/ChatbotWidget'
// import ContactSection from '../src/components/ContactSection'
// import Navbar from '../src/components/Navbar'
// import Footer from '../src/components/Footer'
// import NotificationBar from '../src/components/NotificationBar'

// export default function Home() {
//   return (
//     <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//       <NotificationBar />
//       <Navbar />
//       <Hero />
//       <ServicesGrid />
//       <WhyChooseUs />
//       <ChatbotWidget />
//       <Testimonials />
//       <ContactSection />
//       <Footer />
//     </div>
//   )
// }

import { motion } from 'framer-motion'
import Hero from '../src/components/Hero'
import ServicesGrid from '../src/components/ServicesGrid'
import WhyChooseUs from '../src/components/WhyChooseUs'
import Testimonials from '../src/components/Testimonials'
import ChatbotWidget from '../src/components/ChatbotWidget'
import ContactSection from '../src/components/ContactSection'
import Footer from '../src/components/Footer'
import QuoteSection from '../src/components/QuoteSection'
import AestheticsNutritionGrid from '../src/components/AestheticsNutritionGrid'
import WoundAndEmergencySections from '../src/components/WoundAndEmergencySections'



const slideUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">


      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Hero />
      </motion.div>

      
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <QuoteSection/>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ServicesGrid />
      </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <AestheticsNutritionGrid />
      </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <WoundAndEmergencySections />
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <WhyChooseUs />
      </motion.div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ChatbotWidget />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactSection />
      </motion.div>

      <Footer />
    </div>
  )
}
