import type { Metadata } from 'next'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export const metadata: Metadata = {
  title: 'FUE Hair Transplant UK | Pain-Free Hair Restoration',
  description: 'Discover FUE hair transplant in the UK. Natural results, minimal scarring, quick recovery. Get your free consultation and quote today.',
}

export default function FUEHairTransplantPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                FUE Hair Transplant in the UK
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Restore your confidence with the UK's most advanced hair transplant technique. 
                Natural results, minimal scarring, and a pain-free experience.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No Linear Scar</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Quick Recovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Natural Results</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Your Free Quote
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">FUE Procedure Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is FUE Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is FUE Hair Transplant?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Follicular Unit Extraction (FUE) is the gold standard in modern hair transplantation. 
              Unlike traditional strip methods, FUE involves extracting individual hair follicles 
              from the donor area (typically the back and sides of your head) and transplanting 
              them to areas experiencing hair loss.
            </p>
            <p className="mb-6">
              This minimally invasive technique uses a specialised micro-punch tool, typically 
              0.8-1.0mm in diameter, to extract follicles one by one. The result? No linear 
              scarring, faster healing, and the freedom to wear your hair short without visible 
              signs of surgery.
            </p>
            <h3 className="text-2xl font-semibold mb-4">The FUE Process</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Consultation:</strong> Assessment of hair loss pattern and donor area</li>
              <li><strong>Design:</strong> Creating a natural hairline that suits your face</li>
              <li><strong>Extraction:</strong> Individual follicles removed under local anaesthetic</li>
              <li><strong>Preparation:</strong> Follicles sorted and prepared for transplantation</li>
              <li><strong>Implantation:</strong> Follicles placed at precise angles for natural growth</li>
              <li><strong>Aftercare:</strong> Comprehensive support throughout your recovery</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose FUE Hair Transplant?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Minimal Scarring</h3>
              <p className="text-gray-600">
                Tiny extraction points heal within days, leaving virtually no visible scarring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Recovery</h3>
              <p className="text-gray-600">
                Most patients return to work within 5-7 days with minimal discomfort.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Results</h3>
              <p className="text-gray-600">
                Individual follicle placement creates completely natural-looking results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">FUE Hair Transplant Cost in the UK</h2>
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <p className="text-lg mb-4">FUE hair transplant costs vary based on:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Number of grafts:</strong> £2-5 per graft (most need 1,500-3,000 grafts)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Clinic location:</strong> London clinics typically charge 20-30% more</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Surgeon experience:</strong> Top surgeons command premium prices</span>
              </li>
            </ul>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-4">Typical UK Price Ranges:</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Small procedure (1,000-1,500 grafts):</span>
                  <span className="font-semibold">£3,000 - £5,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Medium procedure (1,500-2,500 grafts):</span>
                  <span className="font-semibold">£5,000 - £8,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Large procedure (2,500-4,000 grafts):</span>
                  <span className="font-semibold">£8,000 - £12,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Get Your Free FUE Consultation
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Compare quotes from verified UK clinics. No obligation, completely free.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Is FUE painful?</h3>
              <p className="text-gray-600">
                FUE is performed under local anaesthetic, making the procedure virtually pain-free. 
                Most patients experience minimal discomfort during recovery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">How long does FUE take?</h3>
              <p className="text-gray-600">
                A typical FUE session takes 6-8 hours, depending on the number of grafts. 
                Larger sessions may be split across two days.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">When will I see results?</h3>
              <p className="text-gray-600">
                Initial growth starts at 3-4 months, with significant improvement by 6-8 months. 
                Final results are visible after 12-18 months.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}