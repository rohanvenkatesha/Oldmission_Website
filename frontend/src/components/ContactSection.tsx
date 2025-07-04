// TODO: Contact form and map section
export default function ContactSection() {
  return (
    <section className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold mb-10 text-center">Contact Us</h2>
      <div className="max-w-3xl mx-auto grid gap-6">
        <input type="text" placeholder="Your Name" className="p-3 border rounded" />
        <input type="email" placeholder="Email" className="p-3 border rounded" />
        <textarea placeholder="Message" className="p-3 border rounded h-32"></textarea>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Send</button>
      </div>
    </section>
  )
}