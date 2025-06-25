import type { Metadata } from 'next'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'Beard Transplant UK | Natural Facial Hair Restoration',
  description: 'Get a fuller, natural-looking beard with transplant surgery. Fill patches, define your beard line. UK clinics, free consultations.',
}

export default function BeardTransplantPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Beard Transplant in the UK
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Create the beard you've always wanted. From filling patches to complete 
                beard reconstruction, achieve natural-looking facial hair.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Natural Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Define Beard Line</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Permanent Solution</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Your Free Quote
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Beard Transplant Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Beard Transplant Process</h2>
          <p className="text-gray-700 mb-6">
            Beard transplants use the same FUE technique as scalp procedures. Hair follicles 
            are typically taken from the back of your scalp and transplanted to create or 
            enhance your beard, moustache, or sideburns.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-semibold mb-2">Design Phase</h3>
              <p className="text-gray-600">Create your ideal beard shape with expert guidance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-semibold mb-2">Extraction</h3>
              <p className="text-gray-600">1,000-3,000 grafts typically needed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-semibold mb-2">Results</h3>
              <p className="text-gray-600">Full growth in 6-12 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Treatments */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Beard Transplant Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-3">Full Beard</h3>
              <p className="text-gray-700 mb-3">Complete beard coverage for those with minimal facial hair</p>
              <p className="text-blue-600 font-semibold">2,500-4,000 grafts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-3">Goatee & Moustache</h3>
              <p className="text-gray-700 mb-3">Popular choice for defined facial hair style</p>
              <p className="text-blue-600 font-semibold">1,200-2,000 grafts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-3">Patch Filling</h3>
              <p className="text-gray-700 mb-3">Fill gaps for a fuller, even beard</p>
              <p className="text-blue-600 font-semibold">500-1,500 grafts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-3">Sideburns</h3>
              <p className="text-gray-700 mb-3">Create or enhance sideburn definition</p>
              <p className="text-blue-600 font-semibold">500-1,000 grafts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Beard Transplant Cost UK</h2>
          <div className="bg-white p-8 rounded-lg shadow-md inline-block">
            <p className="text-5xl font-bold text-blue-600 mb-4">£2,000 - £5,000</p>
            <p className="text-gray-600 mb-6">Depending on coverage needed</p>
            <ul className="text-left space-y-2 mb-6">
              <li>✓ Patch filling: £2,000-£2,500</li>
              <li>✓ Goatee only: £2,500-£3,500</li>
              <li>✓ Full beard: £3,500-£5,000</li>
              <li>✓ Sideburns: £1,500-£2,500</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Start Your Beard Transformation
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  )
}