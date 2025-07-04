// TODO: Section with key values using icons
import { motion } from 'framer-motion'

const points = [
  { title: 'Experienced Physicians', desc: 'Our team brings decades of clinical excellence.' },
  { title: 'Personalized Care', desc: 'We treat each patient as part of our family.' },
  { title: 'Modern Facility', desc: 'Equipped with state-of-the-art diagnostic tools.' }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-8 bg-gray-100 dark:bg-black/50">
      <h2 className="text-3xl font-semibold mb-10 text-center">Why Choose Us</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {points.map((point, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white dark:bg-gray-700 p-6 rounded shadow"
          >
            <h3 className="text-xl font-bold mb-2">{point.title}</h3>
            <p>{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}