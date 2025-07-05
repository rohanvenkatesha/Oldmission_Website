import Link from 'next/link'

export default function VideoSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[80vh] overflow-hidden">
      {/* Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay dim layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content/buttons over video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <div className="flex justify-center">
          <Link href="/appointment">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight hover:tracking-wider transition-all inline-flex items-center cursor-pointer">
              Book an Appointment
              <span className="ml-2 animate-pulse text-blue-500 text-4xl md:text-5xl">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
