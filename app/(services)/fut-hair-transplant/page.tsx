import type { Metadata } from 'next'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'FUT Hair Transplant UK | Maximum Coverage, Best Value',
  description: 'FUT (strip method) hair transplant in the UK. Get maximum grafts in one session. Lower cost per graft. Free consultation available.',
}

export default function FUTHairTransplantPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                FUT Hair Transplant in the UK
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Maximum hair restoration in a single session. The FUT strip method offers 
                excellent value for extensive hair loss cases.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Maximum Grafts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Lower Cost Per Graft</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Single Session</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Your Free Quote
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">FUT Procedure Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is FUT Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is FUT Hair Transplant?</h2>
          <p className="text-gray-700 mb-4">
            Follicular Unit Transplantation (FUT) is a proven hair restoration technique where 
            a strip of hair-bearing skin is removed from the donor area. This strip is then 
            carefully dissected into individual follicular units for transplantation.
          </p>
          <p className="text-gray-700 mb-6">
            While it does leave a linear scar, FUT allows for the transplantation of 
            3,000-4,500 grafts in a single session, making it ideal for advanced hair loss.
          </p>
          <h3 className="text-2xl font-semibold mb-4">FUT Advantages</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Maximum number of grafts in one session</li>
            <li>• Lower cost per graft compared to FUE</li>
            <li>• No shaving required for the procedure</li>
            <li>• Excellent for advanced hair loss (Norwood 5-7)</li>
            <li>• Higher graft survival rate</li>
          </ul>
        </div>
      </section>

      {/* Cost Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FUT Hair Transplant Cost UK</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-xl mb-4">Typical Pricing:</h3>
                <ul className="space-y-2">
                  <li>Small (1,500-2,000 grafts): £3,000-£4,000</li>
                  <li>Medium (2,000-3,000 grafts): £4,000-£5,500</li>
                  <li>Large (3,000-4,500 grafts): £5,500-£7,500</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-4">Cost Benefits:</h3>
                <ul className="space-y-2">
                  <li>✓ 20-40% cheaper than FUE</li>
                  <li>✓ Better value for large sessions</li>
                  <li>✓ Finance options available</li>
                  <li>✓ All-inclusive pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">FUT Recovery Timeline</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-2xl">📅</div>
              <div>
                <h3 className="font-semibold">Days 1-3</h3>
                <p className="text-gray-700">Mild discomfort managed with painkillers. Rest recommended.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🏥</div>
              <div>
                <h3 className="font-semibold">Day 7-10</h3>
                <p className="text-gray-700">Suture removal appointment. Most swelling subsides.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">💼</div>
              <div>
                <h3 className="font-semibold">Week 2</h3>
                <p className="text-gray-700">Return to work possible. Light activities only.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🌱</div>
              <div>
                <h3 className="font-semibold">Month 3-6</h3>
                <p className="text-gray-700">New hair growth begins. Exciting progress visible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Get Your Free FUT Consultation
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  )
}