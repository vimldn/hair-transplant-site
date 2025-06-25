import type { Metadata } from 'next'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'Hair Loss Treatment UK | Medical Solutions & Prevention',
  description: 'Non-surgical hair loss treatments including PRP, medications, and laser therapy. Stop hair loss and strengthen existing hair. UK clinics.',
}

export default function HairLossTreatmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hair Loss Treatment in the UK
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Stop hair loss in its tracks with proven medical treatments. 
                From medications to PRP therapy, preserve and strengthen your existing hair.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Non-Surgical</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Proven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Prevent Further Loss</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition">
                Get Treatment Plan
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Hair Loss Treatment Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Medical Hair Loss Treatments Available
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* PRP Therapy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">💉</div>
              <h3 className="text-2xl font-bold mb-4">PRP Therapy</h3>
              <p className="text-gray-700 mb-4">
                Platelet-Rich Plasma therapy uses your own blood to stimulate hair growth. 
                Natural growth factors rejuvenate follicles and improve hair thickness.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ 3-4 sessions recommended</li>
                <li>✓ Natural & safe treatment</li>
                <li>✓ No downtime required</li>
                <li>✓ Visible results in 3-6 months</li>
              </ul>
              <p className="text-2xl font-bold text-green-600">£250-400 per session</p>
            </div>

            {/* Medications */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold mb-4">Medications</h3>
              <p className="text-gray-700 mb-4">
                FDA-approved medications that effectively slow or stop hair loss. 
                Finasteride and Minoxidil are the gold standard treatments.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Clinically proven effective</li>
                <li>✓ Prescription available</li>
                <li>✓ Oral & topical options</li>
                <li>✓ Maintenance treatment</li>
              </ul>
              <p className="text-2xl font-bold text-green-600">£30-80 per month</p>
            </div>

            {/* Laser Therapy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Laser Therapy</h3>
              <p className="text-gray-700 mb-4">
                Low-level laser therapy stimulates cellular activity in follicles. 
                Pain-free treatment that can be done at home or in clinic.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ FDA-cleared devices</li>
                <li>✓ No side effects</li>
                <li>✓ Home devices available</li>
                <li>✓ Use 3x per week</li>
              </ul>
              <p className="text-2xl font-bold text-green-600">£200-2000 device</p>
            </div>

            {/* Mesotherapy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-2xl font-bold mb-4">Mesotherapy</h3>
              <p className="text-gray-700 mb-4">
                Vitamin and nutrient injections delivered directly to the scalp. 
                Nourishes follicles and improves blood circulation.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Customised formulas</li>
                <li>✓ Monthly sessions</li>
                <li>✓ Minimal discomfort</li>
                <li>✓ Combined treatments</li>
              </ul>
              <p className="text-2xl font-bold text-green-600">£150-300 per session</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Who Can Benefit from Hair Loss Treatment?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Ideal Candidates:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Early stages of hair loss (prevention is key)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Thinning hair but not complete baldness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Post-transplant maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Not ready for surgical options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Want to strengthen existing hair</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Expected Results:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Slower or stopped hair loss progression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Thicker, healthier existing hair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Some regrowth in recent loss areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Improved hair quality and texture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Better results with combination therapy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Plans */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Recommended Treatment Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">£30-50/month</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Minoxidil solution</li>
                <li>✓ Hair vitamins</li>
                <li>✓ Basic consultation</li>
                <li>✓ 3-month check-ups</li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition">
                Get Started
              </button>
            </div>
            
            <div className="border-2 border-green-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Plan</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">£150-200/month</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Finasteride + Minoxidil</li>
                <li>✓ Quarterly PRP session</li>
                <li>✓ Hair analysis</li>
                <li>✓ Monthly check-ups</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Get Started
              </button>
            </div>
            
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">£300+/month</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ All medications</li>
                <li>✓ Monthly PRP</li>
                <li>✓ Laser therapy</li>
                <li>✓ Personal consultant</li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Hair Loss Treatment FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">How long before I see results?</h3>
              <p className="text-gray-700">
                Most treatments require 3-6 months for visible results. Hair growth is a slow 
                process, and consistency is key. Some may notice reduced shedding within weeks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Can I combine treatments?</h3>
              <p className="text-gray-700">
                Yes! Combination therapy often provides the best results. Many patients use 
                medications alongside PRP or laser therapy for maximum effectiveness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Are there side effects?</h3>
              <p className="text-gray-700">
                Side effects vary by treatment. Medications may have mild side effects in some 
                users. PRP and laser therapy typically have no side effects. Always consult a doctor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Do I need treatment forever?</h3>
              <p className="text-gray-700">
                Most hair loss treatments are maintenance therapies. Stopping treatment usually 
                results in resumed hair loss. Think of it like going to the gym for fitness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Get Your Personalised Treatment Plan
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Connect with hair loss specialists for a custom treatment programme
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  )
}