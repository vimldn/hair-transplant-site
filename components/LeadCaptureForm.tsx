'use client'

import { useState } from 'react'

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    postcode: '',
    hairLoss: '',
    budget: '',
    timeframe: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
    }, 1000)
  }

  if (showSuccess) {
    return (
      <div className="text-center py-8">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your enquiry and will contact you within 24 hours with personalised quotes.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="07123 456789"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Postcode */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Postcode *
          </label>
          <input
            type="text"
            required
            value={formData.postcode}
            onChange={(e) => setFormData({...formData, postcode: e.target.value})}
            placeholder="SW1A 1AA"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Hair Loss Level */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Hair Loss Level *
        </label>
        <select
          required
          value={formData.hairLoss}
          onChange={(e) => setFormData({...formData, hairLoss: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select level</option>
          <option value="minimal">Minimal - Slight recession</option>
          <option value="mild">Mild - Noticeable thinning</option>
          <option value="moderate">Moderate - Visible baldness</option>
          <option value="advanced">Advanced - Large bald areas</option>
          <option value="extensive">Extensive - Significant loss</option>
        </select>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Budget Range
        </label>
        <select
          value={formData.budget}
          onChange={(e) => setFormData({...formData, budget: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select budget</option>
          <option value="under-3000">Under £3,000</option>
          <option value="3000-5000">£3,000 - £5,000</option>
          <option value="5000-8000">£5,000 - £8,000</option>
          <option value="8000-12000">£8,000 - £12,000</option>
          <option value="over-12000">Over £12,000</option>
        </select>
      </div>

      {/* Timeframe */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          When are you looking to have treatment?
        </label>
        <select
          value={formData.timeframe}
          onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select timeframe</option>
          <option value="asap">As soon as possible</option>
          <option value="1-3-months">1-3 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="6-12-months">6-12 months</option>
          <option value="research">Just researching</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 rounded-lg font-semibold text-white transition ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Get Your Free Quotes'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to be contacted by clinics. Your data is secure and never sold.
      </p>
    </form>
  )
}