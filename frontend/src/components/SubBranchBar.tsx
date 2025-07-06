import Image from 'next/image'

const subBranches = [
  { src: '/logos/omlm.png', alt: 'Old Mission Lifestyle' },
  { src: '/logos/omwc.png', alt: 'Old Mission Wound Care' },
  { src: '/logos/omem.png', alt: 'Old Mission Emergency Medicine' },
  { src: '/logos/OMA.png', alt: 'Old Mission Aesthetics' },
  { src: '/logos/omivn.png', alt: 'IV Nutrition' },
  { src: '/logos/oml.png', alt: 'Old Mission Lifestyle Shop' }
]

export default function SubBranchBar() {
  return (
    <div className="bg-white dark:bg-black/50 shadow-md py-5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-8 overflow-x-auto scrollbar-hide">
        {subBranches.map(({ src, alt }) => (
          <div
            key={alt}
            className="flex-shrink-0 cursor-pointer hover:scale-105 transform transition duration-500 rounded-md p-1 bg-white dark:bg-black"
            title={alt}
            style={{ filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))' }}
          >
            <Image
              src={src}
              alt={alt}
              width={100}
              height={40}
              objectFit="contain"
              className="dark:invert"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
