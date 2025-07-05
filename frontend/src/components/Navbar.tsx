import { useTheme } from '../../context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const { toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex justify-center py-4 px-6 bg-transparent">
      <nav
        className={`transition-all duration-300 ease-in-out flex flex-col items-center max-w-7xl w-full bg-white dark:bg-black rounded-xl shadow-lg relative ${
          mobileMenuOpen ? 'pb-6' : 'pb-0'
        }`}
      >
        {/* Top Row */}
        <div className="w-full flex justify-between items-center p-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/oldmissionmedicinelogo.png"
              alt="Old Mission Medicine Logo"
              width={80}
              height={20}
              priority
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex flex-1 items-center justify-around text-sm md:text-base font-medium text-gray-900 dark:text-white">

            {/* About Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition">About</button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white dark:bg-gray-800 shadow-md rounded-md py-2 z-50 min-w-max">
                <Link
                  href="#about-us"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  About Us
                </Link>
                <Link
                  href="#cpom"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  CPOM
                </Link>
                <Link
                  href="#leadership"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Leadership
                </Link>
                <Link
                  href="#our-team"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Our Team
                </Link>
                <Link
                  href="#virtual-office"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Virtual Office
                </Link>
                <Link
                  href="#videos"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Videos
                </Link>
              </div>
            </div>

            <Link href="#services" className="hover:text-blue-600 transition">
              Lifestyle Medicine
            </Link>
            <Link href="#iv-aesthetics" className="hover:text-blue-600 transition">
              IV & Aesthetics
            </Link>
            <Link href="#shop" className="hover:text-blue-600 transition">
              Shop
            </Link>
            <Link href="#footer" className="hover:text-blue-600 transition">
              Contact
            </Link>

            {/* Theme toggle */}
            <button onClick={toggleTheme} aria-label="Toggle Theme" className="text-xl">
              🌓
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-gray-900 dark:text-white"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Expanded Links */}
        {mobileMenuOpen && (
          <div className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6 pt-2 pb-4 rounded-b-xl space-y-4 transition-all duration-300 md:hidden">
            <Link href="/" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <details className="group">
              <summary className="cursor-pointer hover:text-blue-600 transition list-none font-medium">
                About
              </summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link href="#about-us" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link href="#cpom" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>CPOM</Link>
                <Link href="#leadership" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Leadership</Link>
                <Link href="#our-team" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                <Link href="#virtual-office" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Virtual Office</Link>
                <Link href="#videos" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Videos</Link>
              </div>
            </details>

            <Link href="#lifestyle" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Lifestyle Medicine</Link>
            <Link href="#iv-aesthetics" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>IV & Aesthetics</Link>
            <Link href="#shop" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link href="#contact" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

            {/* Theme toggle */}
            <button onClick={toggleTheme} aria-label="Toggle Theme" className="text-2xl mt-2">🌓</button>
          </div>
        )}
      </nav>
    </div>
  )
}
