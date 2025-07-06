'use client'
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
import Image from 'next/image'

// Data for your 6 branch logos
const branchLogos = [
    { src: '/logos/OMA.png', alt: 'Old Mission Aesthetics' },
    { src: '/logos/omlm.png', alt: 'OM Lifestyle Medicine' },
    { src: '/logos/omem.png', alt: 'OM Emergency Medicine' },
    { src: '/logos/omivn.png', alt: 'OM IV Nutrition' },
    { src: '/logos/omwc.png', alt: 'OM Wound Care' },
    { src: '/logos/oml.png', alt: 'OM Lifestyle' },
];

export default function ContactFooterSection() {
  const { toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    service: '',
    helpText: ''
  });

  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfruwyXkI3Z4bHze1KmxYV_g989FoMmixVfbU9V1JMQ1chqsg/formResponse';
    const formDataEncoded = new URLSearchParams({
      'entry.2071625149': formData.email,
      'entry.58397751': formData.name,
      'entry.973569754': formData.city,
      'entry.1812664144': formData.service,
      'entry.2043294507': formData.helpText
    });
    fetch(formUrl, { method: 'POST', mode: 'no-cors', body: formDataEncoded.toString() });
    alert('Message sent!');
    setFormData({ name: '', email: '', city: '', service: '', helpText: '' });
  };

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative w-full bg-gray-100 dark:bg-black text-gray-800 dark:text-white pt-36 pb-16 overflow-hidden subtle-pattern"
    >
      {/* Parallax Background Text */}
      <h1
        className={`pointer-events-none select-none leading-none tracking-tighter font-extrabold absolute top-0 left-1/2 transform -translate-x-1/2 text-[200px] z-0 text-gray-200 dark:text-white/5 transition-opacity duration-1000 ${
          footerVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        OLD
      </h1>
      <h1
        className={`pointer-events-none select-none leading-none tracking-tighter font-extrabold absolute top-[140px] left-1/2 transform -translate-x-1/2 text-[200px] z-0 text-gray-200 dark:text-white/5 transition-opacity duration-1000 ${
          footerVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        MISSION
      </h1>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* --- LEFT COLUMN: Contact Form & Map --- */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight text-gray-900 dark:text-white">CONTACT US</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Whether you're a patient, provider, or partner — we’re here for you.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required className="form-input-glass" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className="form-input-glass" />
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City / State *" required className="form-input-glass" />
                  <select name="service" value={formData.service} onChange={handleChange} required className="form-input-glass">
                    <option value="" disabled>Select Service *</option>
                    <option className="text-black" value="Lifestyle Medicine">Lifestyle Medicine</option>
                    <option className="text-black" value="IV Nutrition">IV Nutrition</option>
                    <option className="text-black" value="Aesthetics">Aesthetics</option>
                  <option className="text-black" value="Emergency Medicine">Emergency Medicine</option>
                  <option className="text-black" value="Wound Care">Wound Care</option>
                  <option className="text-black" value="Other">Other</option>
                  </select>
                </div>
                <textarea name="helpText" value={formData.helpText} onChange={handleChange} placeholder="How can we help? *" required rows={4} className="form-input-glass w-full resize-none"></textarea>
                <div>
                  <button type="submit" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-100">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Location</h3>
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.1470411751354!2d-85.61938647341906!3d44.762908625480264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881e32b2d7da29dd%3A0x47bfdc3f3f745621!2sTraverse%20City%2C%20MI!5e0!3m2!1sen!2sus!4v1751756570708!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Quote, Logos, and Links --- */}
          <div className="space-y-12">
            <div>
              <blockquote className="text-xl italic text-gray-800 dark:text-gray-300 border-l-4 border-blue-500 pl-6">
                "Our mission is to build a national network of healthcare innovators, empowering them with the tools and compliance needed to deliver exceptional, life-changing care."
              </blockquote>
              <p className="mt-4 text-right font-semibold text-gray-600 dark:text-gray-400">— Dr. Christopher P. Mason, Founder</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">OUR FAMILY OF BRANDS</h4>
              <div className="grid grid-cols-3 gap-4">
                {branchLogos.map((logo, idx) => (
                  <div key={idx} className="bg-gray-200 dark:bg-white/5 p-3 rounded-lg flex items-center justify-center h-20">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={40}
                      className="object-contain dark:invert"
                    />
                  </div>
                ))}
              </div>
            </div>
            
             <div className="pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 gap-8 text-sm">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">WHY US</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li><Link href="/" className="hover:text-blue-500 transition">Home</Link></li>
                    <li><Link href="#about-us" className="hover:text-blue-500 transition">About</Link></li>
                    <li><Link href="#services" className="hover:text-blue-500 transition">Services</Link></li>
                    <li><Link href="#shop" className="hover:text-blue-500 transition">Shop</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">LEGAL</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li><Link href="#" className="hover:text-blue-500 transition">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-blue-500 transition">Terms of Use</Link></li>
                    <li><Link href="#" className="hover:text-blue-500 transition">Disclaimer</Link></li>
                    <li><Link href="#" className="hover:text-blue-500 transition">Accessibility</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">REACH OUT</h4>
                   <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li><a href="mailto:support@oldmission.com" className="hover:text-blue-500 transition">support@oldmission.com</a></li>
                    <li>1989 Kroupa Rd<br />Traverse City, MI 49686</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">CONNECT</h4>
                  <div className="flex flex-wrap gap-x-5 gap-y-3 text-xl text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
                      <a href="#" className="hover:text-red-600 transition"><FaYoutube /></a>
                      <a href="#" className="hover:text-pink-600 transition"><FaInstagram /></a>
                      <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
                      <a href="#" className="hover:text-sky-500 transition"><FaTwitter /></a>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Copyright and Theme Toggle */}
      <div className="relative z-10 mt-24 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Old Mission Medicine. All rights reserved.</p>
        <button onClick={toggleTheme} className="ml-4 hover:text-gray-800 dark:hover:text-white text-xs underline">
          Toggle Theme 🌓
        </button>
      </div>
    </footer>
  )
}