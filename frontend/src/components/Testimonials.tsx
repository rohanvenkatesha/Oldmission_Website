// // TODO: Carousel or motion-based testimonials
// import { motion } from 'framer-motion'

// const testimonials = [
//   { name: 'Emily T.', feedback: 'The staff is amazing and caring. They truly listen.' },
//   { name: 'James R.', feedback: 'Best experience I’ve had at any clinic in years!' },
//   { name: 'Sarah L.', feedback: 'Great personalized attention. Highly recommend!' }
// ]

// export default function Testimonials() {
//   return (
//     <section className="py-16 px-8 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-semibold mb-10 text-center">What Our Patients Say</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {testimonials.map((t, i) => (
//           <motion.div
//             key={i}
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.4, delay: i * 0.1 }}
//             className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center"
//           >
//             <p className="italic">"{t.feedback}"</p>
//             <p className="mt-4 font-semibold">- {t.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  { name: 'Emily T.', feedback: 'The staff is amazing and caring. They truly listen.' },
  { name: 'James R.', feedback: 'Best experience I’ve had at any clinic in years!' },
  { name: 'Sarah L.', feedback: 'Great personalized attention. Highly recommend!' }
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-center">What Our Patients Say</h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000 }}
        loop
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded shadow text-center">
              <p className="italic mb-4">"{t.feedback}"</p>
              <p className="font-semibold">- {t.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
