import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | UK Hair Transplant',
  description: 'Get in touch with UK Hair Transplant. We\'re here to help with your hair restoration journey.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700">
            We're here to help with your hair transplant journey
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-700">
                    0800 123 4567<br/>
                    Monday - Saturday: 9am - 7pm
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-700">
                    info@ukhairtransplant.co.uk<br/>
                    We aim to respond within 24 hours
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Office</h3>
                  <p className="text-gray-700">
                    UK Hair Transplant<br/>
                    123 High Street<br/>
                    London, SW1A 1AA<br/>
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Prefer to Call?</h3>
                <p className="text-gray-700 mb-4">
                  Our friendly team is available to answer your questions
                </p>
                <a href="tel:08001234567" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Call 0800 123 4567
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>General Enquiry</option>
                    <option>Clinic Partnership</option>
                    <option>Technical Support</option>
                    <option>Complaint</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}