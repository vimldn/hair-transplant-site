'use client'

import { useState } from 'react'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export default function Home() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            UK Hair Transplant Experts
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Compare verified clinics across the UK. Save up to 40% on FUE & FUT procedures.
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
            Get Free Quotes
          </button>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free Service</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>500+ Clinics</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No Obligation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Your Free Hair Transplant Quote</h2>
              <p className="text-gray-600 mb-6">Compare prices from verified clinics in your area</p>
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Hair Restoration Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FUE Service */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">FUE Hair Transplant</h3>
              <p className="text-gray-600 mb-4">
                Minimally invasive technique with no linear scarring. Individual follicle extraction for natural results.
              </p>
              <p className="font-semibold text-blue-600">From £2,500</p>
            </div>

            {/* FUT Service */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">FUT Hair Transplant</h3>
              <p className="text-gray-600 mb-4">
                Strip method offering maximum grafts in a single session. Cost-effective for extensive coverage.
              </p>
              <p className="font-semibold text-blue-600">From £2,000</p>
            </div>

            {/* Beard Service */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">Beard Transplant</h3>
              <p className="text-gray-600 mb-4">
                Create or enhance your beard with transplanted hair. Natural-looking facial hair restoration.
              </p>
              <p className="font-semibold text-blue-600">From £2,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Takes 2 minutes • No obligation • 100% confidential
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Hair Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands who have restored their confidence. Get your free consultation today.
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </section>
    </main>
  )
}