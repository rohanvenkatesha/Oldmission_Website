import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'

const testimonials = [
  {
    id: 1947,
    name: 'Dustin',
    age: 52,
    feedback:
      "Dr Mason is a doctor that cares about your whole body and mind. I wouldn’t trust anyone else.",
    image: '/images/avatar1.png',
  },
  {
    id: 732,
    name: 'Polly',
    age: 44,
    feedback:
      'Doc is amazing! It has been a very long time since I had a Doctor actually care about my health and set up a viable medical plan vs. just trying to remedy the current health issue.',
    image: '/images/avatar2.jpg',
  },
  {
    id: 444,
    name: 'Jarred',
    age: 42,
    feedback:
      "I'd say the biggest impacts have been the consistency in my energy levels throughout the day.",
    image: '/images/avatar3.png',
  },
  {
    id: 111,
    name: 'Shannon',
    age: 38,
    feedback:
      'With Hone, I was able to get first class care from a doctor I chose. She was informed about the intersection of chronic illness and reproductive health, and had a plan made up for me quickly that addressed all my concerns.',
    image: '/images/avatar1.png',
  },
  {
    id: 194,
    name: 'Josh',
    age: 37,
    feedback:
      'Very comprehensive review of my blood test and results along with some very helpful suggestions on things I needed to do to address some of the numbers. Didn’t try to sell me on anything, just honest diagnosis.',
    image: '/images/avatar2.jpg',
  },
  {
    id: 222,
    name: 'Maya',
    age: 29,
    feedback:
      'The team was incredibly supportive and knowledgeable. My energy levels improved noticeably after just a month.',
    image: '/images/avatar3.png',
  },
  {
    id: 333,
    name: 'Liam',
    age: 35,
    feedback:
      "I appreciate the personalized approach. It's not just treatment; it's care that fits me perfectly.",
    image: '/images/avatar1.png',
  },
  {
    id: 4444,
    name: 'Sophia',
    age: 41,
    feedback:
      'Excellent service and very responsive staff. The care plan addressed issues I had struggled with for years.',
    image: '/images/avatar2.jpg',
  },
  {
    id: 555,
    name: 'Ethan',
    age: 47,
    feedback:
      "I felt listened to and truly cared for. The doctor's advice was practical and easy to follow.",
    image: '/images/avatar3.png',
  },
  {
    id: 666,
    name: 'Olivia',
    age: 33,
    feedback:
      'Fantastic experience overall. The care was holistic and really improved my quality of life.',
    image: '/images/avatar2.jpg',
  },
]

export default function TestimonialCarousel() {
  const x = useMotionValue(0)
  const [isPaused, setIsPaused] = useState(false)
  const offset = useRef(0)
  const animationRef = useRef<ReturnType<typeof animate> | null>(null)

  const CARD_WIDTH = 280 + 24 // card + gap
  const totalWidth = CARD_WIDTH * testimonials.length
  const loopWidth = totalWidth

  const doubleTestimonials = [...testimonials, ...testimonials]

  const startAutoScroll = () => {
    animationRef.current = animate(x, -loopWidth, {
      type: 'tween',
      duration: 60,
      ease: 'linear',
      onUpdate: (latest) => {
        offset.current = latest
      },
      onComplete: () => {
        x.set(0)
        offset.current = 0
        startAutoScroll()
      },
    })
  }

  useEffect(() => {
    if (!isPaused) {
      startAutoScroll()
    } else {
      animationRef.current?.stop()
    }
    return () => animationRef.current?.stop()
  }, [isPaused])

  const handleSlide = (dir: 'left' | 'right') => {
    setIsPaused(true)
    const delta = dir === 'left' ? CARD_WIDTH : -CARD_WIDTH
    const next = offset.current + delta
    x.set(next)
    offset.current = next
  }

  // Helper to truncate long feedback text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength).trim() + '...'
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-black/50 overflow-hidden relative">
      <h2 className="text-3xl font-semibold mb-8 text-center max-w-7xl mx-auto px-4">
        Real People. Real Stories.
      </h2>

      {/* Invisible arrow buttons */}
      <button
        onClick={() => handleSlide('left')}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black bg-opacity-30 rounded-full w-10 h-10 hover:bg-black/60"
        aria-label="Slide Left"
      />
      <button
        onClick={() => handleSlide('right')}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black bg-opacity-30 rounded-full w-10 h-10 hover:bg-black/60"
        aria-label="Slide Right"
      />

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          style={{ x }}
          className="flex gap-6 w-max px-4 select-none cursor-default md:cursor-grab"
          drag="x"
          dragConstraints={{ left: -loopWidth, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => setIsPaused(false)}
        >
          {doubleTestimonials.map(({ id, name, age, feedback, image }, i) => {
            const imgHeight = 450

            return (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-md min-w-[280px] max-w-[300px] flex-shrink-0 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg overflow-hidden relative"
              >
                <div className="relative w-full" style={{ height: imgHeight }}>
                  <img
                    src={image}
                    alt={`${name} avatar`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    draggable={false}
                  />

                  {/* Softer gradient overlay starting a bit higher */}
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                  {/* Text on overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="block text-lg font-semibold bg-black bg-opacity-50 rounded px-3 py-1 inline-block mb-2">
                      {name}, {age}*
                    </span>
                    <p className="text-sm leading-relaxed max-h-20 overflow-hidden text-ellipsis">
                      “{truncateText(feedback, 100)}”
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
