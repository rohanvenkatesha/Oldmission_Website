import { motion } from 'framer-motion'
import Hero from '../src/components/Hero'
import ServicesGrid from '../src/components/ServicesGrid'
import TestimonialCarousel from '../src/components/Testimonials'
import Footer from '../src/components/Footer'
import QuoteSection from '../src/components/QuoteSection'
import AestheticsNutritionGrid from '../src/components/AestheticsNutritionGrid'
import WoundAndEmergencySections from '../src/components/WoundAndEmergencySections'
import ShopProductsSection from '../src/components/ShopProductsSection'
import MeetOurTeam from '../src/components/MeetOurTeam'
import UniqueApproachSection from "../src/components/UniqueApproachSection"



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
        transition={{ duration: 0.7, delay: 0.1 }}
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <UniqueApproachSection />
      </motion.div>



      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <TestimonialCarousel />
      </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ShopProductsSection />
      </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.7, delay: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <MeetOurTeam />
      </motion.div>

      <Footer />
    </div>
  )
}
