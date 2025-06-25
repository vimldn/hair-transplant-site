import type { Metadata } from 'next'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'Female Hair Transplant UK | Restore Confidence & Volume',
  description: 'Specialised hair transplant for women. Restore density, lower hairline, fix thinning. No shave options available. UK clinics, free consultation.',
}

export default function FemaleHairTransplantPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Female Hair Transplant in the UK
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Restore your confidence with specialised hair restoration for women. 
                Address thinning, receding hairlines, or volume loss with natural results.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">No Shave Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Natural Density</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Discreet Recovery</span>
                </div>
              </div>
              <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition">
                Get Your Free Consultation
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Female Hair Restoration Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Female Hair Loss */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Female Hair Loss</h2>
          <p className="text-gray-700 mb-6">
            Female pattern hair loss affects millions of women in the UK. Unlike male pattern 
            baldness, women typically experience diffuse thinning across the scalp while 
            maintaining their frontal hairline. Hair transplantation offers a permanent solution.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Common Causes:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Genetic factors (androgenetic alopecia)</li>
                <li>• Hormonal changes (menopause, pregnancy)</li>
                <li>• Traction alopecia from styling</li>
                <li>• Medical conditions (PCOS, thyroid)</li>
                <li>• Stress and nutritional deficiencies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Treatment Areas:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Crown and parting widening</li>
                <li>• Temple recession</li>
                <li>• Overall density enhancement</li>
                <li>• Hairline lowering</li>
                <li>• Eyebrow restoration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different for Women */}
      <section className="bg-pink-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Female Hair Transplants Are Different
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-4">💇‍♀️</div>
              <h3 className="font-semibold mb-3">No Shave Technique</h3>
              <p className="text-gray-600">
                Long Hair FUE allows treatment without shaving, maintaining your current style
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold mb-3">Density Focus</h3>
              <p className="text-gray-600">
                Strategic placement between existing hairs for maximum density improvement
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-semibold mb-3">Natural Design</h3>
              <p className="text-gray-600">
                Feminine hairline patterns and careful attention to natural flow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Female Hair Transplant Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Long Hair FUE</h3>
              <p className="text-gray-700 mb-4">
                The preferred method for women, allowing transplantation without shaving 
                the donor or recipient areas. Ideal for discretion.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ No visible shaving required</li>
                <li>✓ Immediate return to normal appearance</li>
                <li>✓ 1,000-2,500 grafts per session</li>
                <li>✓ Higher cost but worth it</li>
              </ul>
              <p className="font-semibold text-pink-600">From £4,000</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Shaved FUE</h3>
              <p className="text-gray-700 mb-4">
                Traditional FUE with partial or full shaving. More grafts possible 
                in one session, lower cost, but requires style change.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Maximum grafts per session</li>
                <li>✓ Lower cost per graft</li>
                <li>✓ 2,000-3,500 grafts possible</li>
                <li>✓ Temporary style adjustment</li>
              </ul>
              <p className="font-semibold text-pink-600">From £3,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Female Hair Transplant Cost UK
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <p className="text-4xl font-bold text-pink-600 mb-2">£3,000 - £10,000</p>
              <p className="text-gray-600">Depending on technique and graft count</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Price Factors:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Technique (Long Hair vs Shaved)</li>
                  <li>• Number of grafts needed</li>
                  <li>• Clinic location</li>
                  <li>• Surgeon experience</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Typical Costs:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Small area: £3,000-£4,500</li>
                  <li>• Medium coverage: £4,500-£7,000</li>
                  <li>• Extensive treatment: £7,000-£10,000</li>
                  <li>• Finance from £125/month</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What to Expect</h2>
          <div className="bg-pink-50 p-8 rounded-lg">
            <h3 className="font-semibold text-xl mb-4">Your Journey Timeline:</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-pink-600 font-bold">Week 1:</span>
                <span>Initial healing, minimal swelling, can style hair normally</span>
              </div>
              <div className="flex gap-4">
                <span className="text-pink-600 font-bold">Month 1:</span>
                <span>Transplanted hairs shed (completely normal process)</span>
              </div>
              <div className="flex gap-4">
                <span className="text-pink-600 font-bold">Month 3-4:</span>
                <span>New growth begins, exciting first signs</span>
              </div>
              <div className="flex gap-4">
                <span className="text-pink-600 font-bold">Month 6-9:</span>
                <span>Significant improvement in density</span>
              </div>
              <div className="flex gap-4">
                <span className="text-pink-600 font-bold">Month 12:</span>
                <span>Final results - fuller, natural-looking hair</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="bg-pink-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Start Your Hair Restoration Journey
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Connect with specialists experienced in female hair transplants
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  )
}