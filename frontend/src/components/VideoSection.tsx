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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Watch Our Medical Videos
        </h2>
        <div className="flex space-x-4">
          <Link href="#services" passHref>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition">
              View Our Services
            </button>
          </Link>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
