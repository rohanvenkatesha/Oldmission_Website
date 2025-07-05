import Link from 'next/link'
import { useTheme } from '../../context/ThemeContext'
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

export default function ContactFooterSection() {
  const { toggleTheme } = useTheme()
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    city: '',
    service: '',
    helpText: ''
  })

  // For showing OLD MISSION text & stethoscope bg only when footer is visible (parallax effect)
  const footerRef = useRef(null)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    if (!footerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% visible
      }
    )

    observer.observe(footerRef.current)

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLSfruwyXkI3Z4bHze1KmxYV_g989FoMmixVfbU9V1JMQ1chqsg/formResponse'

    const formDataEncoded = new URLSearchParams({
      'entry.2071625149': formData.email,
      'entry.58397751': formData.name,
      'entry.973569754': formData.city,
      'entry.1812664144': formData.service,
      'entry.2043294507': formData.helpText
    })

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formDataEncoded.toString()
    })

    alert('Message sent! We’ll get back to you soon.')
    setFormData({
      email: '',
      name: '',
      city: '',
      service: '',
      helpText: ''
    })
  }

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-black/70 dark:to-black text-gray-800 dark:text-white pt-36 pb-16 overflow-hidden"
    >
      {/* OLD MISSION text - visible on scroll */}
      <h1
        className={`pointer-events-none select-none leading-none tracking-tighter font-extrabold absolute top-0 left-1/2 transform -translate-x-1/2 text-[200px] z-0 text-gray-200 dark:text-white/5 transition-opacity duration-700 ease-in-out ${
          footerVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ userSelect: 'none' }}
      >
        OLD
      </h1>
      <h1
        className={`pointer-events-none select-none leading-none tracking-tighter font-extrabold absolute top-[140px] left-1/2 transform -translate-x-1/2 text-[200px] z-0 text-gray-200 dark:text-white/5 transition-opacity duration-700 ease-in-out ${
          footerVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ userSelect: 'none' }}
      >
        MISSION
      </h1>

      {/* Big stethoscope background - Desktop only */}
      <div
        aria-hidden="true"
        className={`hidden md:block pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-0 bg-no-repeat bg-contain bg-right-bottom
          transform-gpu transition-transform transition-opacity duration-1000 ease-in-out
          ${footerVisible ? 'translate-x-0 opacity-30' : 'translate-x-full opacity-0'}`}
        style={{
          backgroundImage: 'url(/images/stethoscope.png)',
          backgroundSize: '40%',
          transformOrigin: 'right center',
          rotate: '-12deg',
          filter: 'brightness(0.4) saturate(0.5)'
        }}
      />

      {/* Contact Form and top content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold mb-3 tracking-tight">CONTACT US</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Whether you're a patient, provider, or partner — we’re here for you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base"
          noValidate
        >
          <input
            name="email"
            type="email"
            required
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-4 rounded-xl w-full shadow-sm
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition"
          />
          <input
            name="name"
            required
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-4 rounded-xl w-full shadow-sm
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition"
          />
          <input
            name="city"
            required
            placeholder="City / State *"
            value={formData.city}
            onChange={handleChange}
            className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-4 rounded-xl w-full shadow-sm
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition"
          />
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-4 rounded-xl w-full shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition"
          >
            <option value="" disabled>
              Select Service *
            </option>
            <option value="Lifestyle Medicine">Lifestyle Medicine</option>
            <option value="IV Nutrition">IV Nutrition</option>
            <option value="Aesthetics">Aesthetics</option>
            <option value="Emergency Medicine">Emergency Medicine</option>
            <option value="Wound Care">Wound Care</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="helpText"
            required
            rows={4}
            placeholder="How can we help you? *"
            value={formData.helpText}
            onChange={handleChange}
            className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-4 rounded-xl md:col-span-2 shadow-sm
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition resize-none"
          />
<button
  type="submit"
  className="md:col-span-2 mx-auto bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg text-sm hover:bg-blue-700 transition shadow-md active:scale-95 block"
>
  SEND MESSAGE
</button>

        </form>
      </div>

      {/* Appointment Call To Action with stethoscope background on desktop */}
      <div className="relative z-10 mb-20 max-w-7xl mx-auto px-6">
        {/* Stethoscope background - show on desktop here */}
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none absolute inset-0 z-0 bg-no-repeat bg-contain bg-right-bottom
            transform-gpu transition-transform transition-opacity duration-1000 ease-in-out opacity-20"
          style={{
            backgroundImage: 'url(/images/stethoscope.png)',
            backgroundSize: '90%',
            transformOrigin: 'right center',
            rotate: '-12deg',
            filter: 'brightness(0.4) saturate(0.5)'
          }}
        />
        {/* Appointment Link */}
<Link href="/appointment">
  <span className="relative text-4xl font-extralight tracking-tight hover:tracking-wider transition-all inline-flex items-center cursor-pointer z-10">
    Book an Appointment
    <span className="ml-2 animate-pulse text-blue-600 text-5xl">→</span>
  </span>
</Link>

      </div>

      {/* Bottom links & social media container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Mobile stethoscope background only behind this section */}
        <div
          aria-hidden="true"
          className={`md:hidden pointer-events-none absolute inset-0 z-0 bg-no-repeat bg-contain bg-right-bottom
            transform-gpu transition-transform transition-opacity duration-1000 ease-in-out
            ${footerVisible ? 'translate-x-0 opacity-30' : 'translate-x-full opacity-0'}`}
          style={{
            backgroundImage: 'url(/images/stethoscope.png)',
            backgroundSize: '90%',
            transformOrigin: 'right center',
            rotate: '-12deg',
            filter: 'brightness(0.4) saturate(0.5)'
          }}
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">WHY US</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about-us">About</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#shop">Shop</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">LEGAL</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Use</Link>
              </li>
              <li>
                <Link href="#">Disclaimer</Link>
              </li>
              <li>
                <Link href="#">Accessibility</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">REACH OUT</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                Email:{' '}
                <a href="mailto:support@oldmission.com" className="underline hover:text-blue-600">
                  support@oldmission.com
                </a>
              </li>
              <li>
                1989 Kroupa Rd
                <br />
                Traverse City, MI 49686
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">CONNECT</h4>
            <div className="flex space-x-4 text-xl text-gray-600 dark:text-gray-300">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom copyright and toggle */}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-gray-500 px-4 relative z-10">
        &copy; {new Date().getFullYear()} Old Mission Medicine. All rights reserved.
        <button
          onClick={toggleTheme}
          className="ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-white text-xs underline"
        >
          Toggle Theme 🌓
        </button>
      </div>
    </footer>
  )
}
