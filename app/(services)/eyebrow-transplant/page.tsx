import type { Metadata } from 'next'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'Eyebrow Transplant UK | Natural Brow Restoration',
  description: 'Restore or reshape your eyebrows with precision transplant surgery. Fix over-plucking, scarring, or thin brows. UK clinics, free consultation.',
}

export default function EyebrowTransplantPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Eyebrow Transplant in the UK
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Restore natural, full eyebrows with precision transplantation. 
                Perfect for over-plucking damage, scarring, or naturally thin brows.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Natural Shape</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Permanent Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Precise Design</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Your Free Quote
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Eyebrow Transplant Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Eyebrow Transplant */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Eyebrow Transplant?</h2>
          <p className="text-gray-700 mb-6">
            Eyebrow transplantation is a delicate procedure that restores or enhances 
            eyebrow density using your own hair follicles. Using precise FUE techniques, 
            individual hairs are transplanted to create natural-looking, perfectly shaped brows.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4">Common Reasons for Eyebrow Transplant:</h3>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>• Over-plucking or waxing damage</li>
            <li>• Scarring from injuries or surgery</li>
            <li>• Naturally thin or sparse eyebrows</li>
            <li>• Alopecia or hair loss conditions</li>
            <li>• Desire for fuller, more defined brows</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-xl mb-3">The Precision Process</h3>
            <p className="text-gray-700">
              Eyebrow transplants require exceptional skill. Each hair must be placed at 
              the correct angle and direction to match natural brow growth. Typically, 
              50-350 grafts per eyebrow are needed.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            The Eyebrow Transplant Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-4">✏️</div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-sm text-gray-600">
                Custom brow shape designed to suit your face
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-4">💉</div>
              <h3 className="font-semibold mb-2">Anaesthetic</h3>
              <p className="text-sm text-gray-600">
                Local numbing for comfort throughout
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="font-semibold mb-2">Extraction</h3>
              <p className="text-sm text-gray-600">
                Fine hairs selected from behind ears
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">Placement</h3>
              <p className="text-sm text-gray-600">
                Precise implantation for natural look
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Eyebrow Transplant Cost UK</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
            <p className="text-5xl font-bold text-blue-600 mb-4">£1,500 - £3,500</p>
            <p className="text-gray-600 mb-6">Depending on coverage needed</p>
            
            <div className="text-left space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span>Partial restoration:</span>
                <span className="font-semibold">£1,500 - £2,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Full eyebrow (one):</span>
                <span className="font-semibold">£2,000 - £2,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Both eyebrows:</span>
                <span className="font-semibold">£2,500 - £3,500</span>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              ✓ Includes consultation & aftercare<br/>
              ✓ Finance options available
            </p>
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recovery & Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Recovery Timeline</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Day 1-3: Mild swelling and redness</li>
                <li>✓ Day 7: Scabs form and start falling off</li>
                <li>✓ Week 2: Return to normal activities</li>
                <li>✓ Week 3-4: Transplanted hairs shed (normal)</li>
                <li>✓ Month 3-4: New growth begins</li>
                <li>✓ Month 6-8: Final results visible</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Aftercare Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Avoid touching or rubbing the area</li>
                <li>✓ Sleep with head elevated for 3 nights</li>
                <li>✓ No makeup for 10 days</li>
                <li>✓ Gentle washing after 48 hours</li>
                <li>✓ Avoid sun exposure for 2 weeks</li>
                <li>✓ Follow clinic's specific instructions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Get Your Eyebrow Transformation Started
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  )
}