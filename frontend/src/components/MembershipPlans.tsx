import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import { motion } from 'framer-motion'

interface Plan {
  title: string
  bullets: string[]
  price: {
    start: string
    monthly: string
  }
}

interface MembershipPlansProps {
  plans: Plan[]
  onSwiper?: (swiper: any) => void // Accept swiper instance callback
}

export default function MembershipPlans({ plans, onSwiper }: MembershipPlansProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      centeredSlides={true}
      spaceBetween={24}
      slidesPerView={1.2}
      navigation={false} // Hide default navigation buttons inside Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3 },
      }}
      style={{ paddingBottom: '3rem' }}
      onSwiper={onSwiper} // Pass swiper instance to parent
    >
      {plans.map(({ title, bullets, price }, idx) => (
        <SwiperSlide key={title}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`rounded-xl shadow-2xl p-6 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-[1.03] ${
              idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
            }`}
          >
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul
              className="mb-6 list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300"
              style={{ maxHeight: '280px', overflowY: 'auto' }}
            >
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-lg font-semibold">{price.start}</p>
              {price.monthly && <p className="text-sm text-gray-500">{price.monthly}</p>}
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                Enroll
              </button>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
