import Link from 'next/link'
import { useTheme } from '../../context/ThemeContext'
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const { toggleTheme } = useTheme()

  return (
    <footer className="w-full bg-gray-50 dark:bg-black px-4 sm:px-6 md:px-10 py-10 mt-20">
<div className="max-w-7xl mx-auto backdrop-blur-md bg-white/50 dark:bg-black/10 text-gray-800 dark:text-gray-100 py-10 px-6 rounded-3xl shadow-lg">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left: Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="#about-us" className="hover:text-blue-600 transition">About Us</Link>
            <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link href="#shop" className="hover:text-blue-600 transition">Shop</Link>
          </div>

          {/* Center: Social Media */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><FaFacebookF /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition"><FaTwitter /></a>
            </div>
          </div>

          {/* Right: Theme Toggle & Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <button
              onClick={toggleTheme}
              className="text-sm px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              Toggle Theme 🌓
            </button>
            <p className="text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} Old Mission Medicine. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
