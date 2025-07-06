import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { leadership, team, type TeamMember } from '../data/teamData'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// Card component
const TeamCard = ({ member, onClick }: { member: TeamMember; onClick: () => void }) => {
  return (
    <motion.div
      layoutId={`card-${member.id}`}
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
    >
      <div className="relative w-full aspect-square">
        <motion.div layoutId={`image-${member.id}`} className="absolute inset-0">
          <Image src={member.image} alt={member.name} fill className="object-cover w-full h-full" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 sm:p-6">
          <motion.h3 layoutId={`name-${member.id}`} className="text-lg sm:text-xl font-bold text-white">
            {member.name}
          </motion.h3>
          <motion.p layoutId={`title-${member.id}`} className="text-sky-200 text-sm">
            {member.title}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default function MeetOurTeam() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const allMembers = [...leadership, ...team]
  const selectedMember = selectedId ? allMembers.find((m) => m.id === selectedId) : null

  useEffect(() => {
    if (selectedId) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [selectedId])

  return (
    <section id="our-team" className="py-24 px-6 bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- LEADERSHIP SECTION --- */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          MEET OUR VISIONARY LEADERS
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Guiding our mission with passion, experience, and a dedication to care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {leadership.map((member) => (
            <TeamCard key={member.id} member={member} onClick={() => setSelectedId(member.id)} />
          ))}
        </div>

        {/* --- OUR TEAM SECTION (CAROUSEL) --- */}
        {team.length > 0 && (
          <div className="mt-24 pb-28">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
             THE HEART OF OUR PRACTICE
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
              Meet the exceptional individuals who ensure your care is always personal.
            </p>

            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="pb-12"
            >
              {team.map((member) => (
                <SwiperSlide key={member.id} style={{ maxWidth: '350px' }}>
                  <TeamCard member={member} onClick={() => setSelectedId(member.id)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      {/* --- MODAL VIEW --- */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 pt-[64px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedMember.id}`}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div layoutId={`image-${selectedMember.id}`} className="relative w-full md:w-1/3 h-64 md:h-auto">
                <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover w-full h-full" />
              </motion.div>

              <div className="p-6 md:p-8 flex flex-col overflow-y-auto max-h-[90vh] md:w-2/3">
                <motion.h3 layoutId={`name-${selectedMember.id}`} className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedMember.name}
                </motion.h3>
                <motion.p layoutId={`title-${selectedMember.id}`} className="text-sky-600 dark:text-sky-400 text-md mb-4">
                  {selectedMember.title}
                </motion.p>
                <div className="text-gray-700 dark:text-gray-300 text-sm mb-6 whitespace-pre-line overflow-y-auto">
                  {selectedMember.bio}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <p className="font-semibold text-gray-600 dark:text-gray-400">Connect:</p>
                  {selectedMember.socials?.linkedin && (
                    <a href={selectedMember.socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <FiLinkedin className="text-gray-500 hover:text-blue-600 transition" size={24} />
                    </a>
                  )}
                  {selectedMember.socials?.twitter && (
                    <a href={selectedMember.socials.twitter} target="_blank" rel="noopener noreferrer">
                      <FiTwitter className="text-gray-500 hover:text-sky-500 transition" size={24} />
                    </a>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition z-50"
                aria-label="Close team member bio"
              >
                <FiX size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
