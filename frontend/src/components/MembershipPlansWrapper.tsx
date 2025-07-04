import React, { useState, useRef } from 'react'
import { memberships } from '../data/memberships'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type Props = {
  delay?: number
}

export default function MembershipPlansWrapper({ delay = 0.9 }: Props) {
  const [showMemberships, setShowMemberships] = useState(false)
  const swiperRef = useRef<any>(null)

  const handlePrev = () => swiperRef.current?.slidePrev()
  const handleNext = () => swiperRef.current?.slideNext()

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        <button
          onClick={() => setShowMemberships(!showMemberships)}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          aria-expanded={showMemberships}
          aria-controls="membership-carousel"
        >
          {showMemberships ? 'Hide Memberships' : 'View Memberships'}
        </button>
      </motion.div>

      <div
        id="membership-carousel"
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          showMemberships ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {showMemberships && (
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            navigation={false}
            pagination={false}
            spaceBetween={30}
            style={{ paddingBottom: '3rem' }}
          >
{memberships.map(({ type, plans }) => {
  const isLastSlideWithTwoCards = plans.length === 2;

  return (
    <SwiperSlide key={type}>
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <FaChevronLeft />
        </button>

        <h2 className="text-3xl font-semibold dark:text-white flex items-center gap-2">
          {type}
        </h2>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Wrap grid in flex container if 2 cards */}
      <div className={isLastSlideWithTwoCards ? 'flex justify-center' : ''}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full ${
            isLastSlideWithTwoCards ? 'max-w-lg' : 'max-w-full'
          }`}
        >
          {plans.map(({ title, bullets, price }, idx) => (
            <div
              key={title}
              className={`rounded-lg shadow-lg p-6 flex flex-col justify-between h-full ${
                idx % 2 === 0
                  ? 'bg-white dark:bg-gray-800'
                  : 'bg-gray-50 dark:bg-gray-700'
              }`}
            >
              <h4 className="text-xl font-bold mb-4">{title}</h4>
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
                {price.monthly && (
                  <p className="text-sm text-gray-500">{price.monthly}</p>
                )}
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SwiperSlide>
  );
})}

          </Swiper>
        )}
      </div>
    </section>
  )
}
