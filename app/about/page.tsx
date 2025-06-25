import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | UK Hair Transplant Experts',
  description: 'Learn about UK Hair Transplant - the trusted comparison service helping thousands find the right clinic and save on hair restoration procedures.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About UK Hair Transplant
          </h1>
          <p className="text-xl text-gray-700">
            The UK's trusted hair transplant comparison service since 2020
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Our Mission</h2>
          <p>
            We believe everyone deserves access to quality hair restoration at fair prices. 
            Our platform connects patients with verified clinics across the UK, making it 
            easy to compare options and make informed decisions.
          </p>

          <h2>What We Do</h2>
          <ul>
            <li>Connect patients with CQC-registered clinics</li>
            <li>Provide transparent pricing comparisons</li>
            <li>Offer unbiased information about procedures</li>
            <li>Facilitate free consultations</li>
            <li>Support patients throughout their journey</li>
          </ul>

          <h2>Why Choose Us</h2>
          <p>
            ✓ <strong>100% Free Service:</strong> No hidden fees or charges<br/>
            ✓ <strong>Verified Clinics:</strong> All partners are thoroughly vetted<br/>
            ✓ <strong>Save Money:</strong> Compare prices to get the best deal<br/>
            ✓ <strong>Expert Support:</strong> Our team is here to help<br/>
            ✓ <strong>No Pressure:</strong> No obligation to proceed
          </p>

          <div className="bg-blue-50 p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="mb-4">Join over 50,000 people who found their perfect clinic through us.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}