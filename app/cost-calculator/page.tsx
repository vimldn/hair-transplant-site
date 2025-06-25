'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

// Note: Metadata doesn't work in client components, we'll add it differently later
export default function CostCalculatorPage() {
  const [grafts, setGrafts] = useState('')
  const [technique, setTechnique] = useState('fue')
  const [showResult, setShowResult] = useState(false)

  const calculateCost = () => {
    if (grafts) {
      setShowResult(true)
    }
  }

  const getFUECost = () => {
    const graftCount = parseInt(grafts)
    const minPrice = graftCount * 2.5
    const maxPrice = graftCount * 5
    return { min: minPrice, max: maxPrice }
  }

  const getFUTCost = () => {
    const graftCount = parseInt(grafts)
    const minPrice = graftCount * 2
    const maxPrice = graftCount * 4
    return { min: minPrice, max: maxPrice }
  }

  const cost = technique === 'fue' ? getFUECost() : getFUTCost()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hair Transplant Cost Calculator
          </h1>
          <p className="text-xl text-gray-700">
            Get an instant estimate for your hair transplant procedure
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Calculate Your Cost
            </h2>

            {/* Step 1: Number of Grafts */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                How many grafts do you need?
              </label>
              <input
                type="number"
                value={grafts}
                onChange={(e) => setGrafts(e.target.value)}
                placeholder="e.g., 2500"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Not sure? Most patients need between 1,500-3,500 grafts
              </p>
            </div>

            {/* Step 2: Technique */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Select technique
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setTechnique('fue')}
                  className={`p-4 rounded-lg border-2 transition ${
                    technique === 'fue'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <h3 className="font-semibold">FUE</h3>
                  <p className="text-sm text-gray-600">No linear scar</p>
                </button>
                <button
                  onClick={() => setTechnique('fut')}
                  className={`p-4 rounded-lg border-2 transition ${
                    technique === 'fut'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <h3 className="font-semibold">FUT</h3>
                  <p className="text-sm text-gray-600">More affordable</p>
                </button>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateCost}
              disabled={!grafts}
              className={`w-full py-4 rounded-lg font-semibold text-white transition ${
                grafts
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Calculate Cost
            </button>

            {/* Result */}
            {showResult && grafts && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Your Estimated Cost
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  £{cost.min.toLocaleString()} - £{cost.max.toLocaleString()}
                </div>
                <p className="text-gray-700 mb-4">
                  For {grafts} grafts using {technique.toUpperCase()} technique
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Includes consultation</p>
                  <p>✓ Includes aftercare</p>
                  <p>✓ Finance available from £{Math.round(cost.min / 24)}/month</p>
                </div>
                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Get Exact Quote
                </button>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Graft Guidelines
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Norwood 2-3 (Mild)</span>
                <span className="font-semibold">1,000 - 2,000 grafts</span>
              </div>
              <div className="flex justify-between">
                <span>Norwood 3-4 (Moderate)</span>
                <span className="font-semibold">2,000 - 3,000 grafts</span>
              </div>
              <div className="flex justify-between">
                <span>Norwood 5-6 (Advanced)</span>
                <span className="font-semibold">3,000 - 4,500 grafts</span>
              </div>
              <div className="flex justify-between">
                <span>Norwood 7 (Extensive)</span>
                <span className="font-semibold">4,500 - 6,000 grafts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}