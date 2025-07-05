import React from 'react'

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-100 to-white dark:from-black dark:to-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interested in our services or have questions? Fill out the form and we’ll get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfruwyXkI3Z4bHze1KmxYV_g989FoMmixVfbU9V1JMQ1chqsg/formResponse"
          method="POST"
          target="_blank"
          className="bg-white dark:bg-gray-950 rounded-3xl shadow-2xl p-10 md:p-16 grid gap-8 md:grid-cols-2 transition-all"
        >
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name *</label>
              <input
                type="text"
                name="entry.58397751"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email *</label>
              <input
                type="email"
                name="entry.2071625149"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">City / State *</label>
              <input
                type="text"
                name="entry.973569754"
                required
                placeholder="Your location"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">
                What Service Are You Interested In? *
              </label>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  'Lifestyle Medicine',
                  'IV Nutrition',
                  'Aesthetics',
                  'Emergency Medicine',
                  'Wound Care',
                  'Other'
                ].map((label, i) => (
                  <label key={i} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="entry.1812664144"
                      value={label}
                      className="form-checkbox text-blue-600 h-4 w-4"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Please Explain How We Can Help You *
              </label>
              <textarea
                name="entry.2043294507"
                rows={5}
                required
                placeholder="Tell us more about your needs..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />
            </div>

            <div className="text-right pt-4">
              <button
                type="submit"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all"
              >
                Submit Form
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
