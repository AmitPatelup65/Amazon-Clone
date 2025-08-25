import React from 'react'

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          At Amazon, we’re always here to help you. Whether you have a question about your order, 
          our services, or want to give feedback, feel free to reach out.
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-emerald-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">Customer Support</h2>
            <p className="text-gray-600">📞 +1 800 3000 9009</p>
            <p className="text-gray-600">✉️ support@amazon.com</p>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">Head Office</h2>
            <p className="text-gray-600">📍 Seattle, Washington, USA</p>
            <p className="text-gray-600">🌍 www.amazon.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-emerald-800 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
