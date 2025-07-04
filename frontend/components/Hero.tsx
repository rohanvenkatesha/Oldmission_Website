import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Old Mission Medicine</h1>
        <p className="text-lg mb-6">Your trusted partner in comprehensive healthcare.</p>
        <div className="space-x-4">
          <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Book Appointment</button>
          <button className="px-5 py-2 bg-gray-200 dark:bg-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition">Chat with Us</button>
        </div>
      </div>
      <img src="/doctor-illustration.svg" alt="Doctor" className="w-80 mt-10 md:mt-0" />
    </motion.section>
  )
}