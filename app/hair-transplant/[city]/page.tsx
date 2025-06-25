import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import LeadCaptureForm from '@/components/LeadCaptureForm'
import { getCityBySlug, getAllCities } from '@/lib/cities'

// This tells Next.js which pages to generate
export async function generateStaticParams() {
  const cities = getAllCities()
  return cities.map((city) => ({
    city: city.slug,
  }))
}

// This generates the metadata for each city
export async function generateMetadata(
  { params }: { params: { city: string } }
): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return {
      title: 'City Not Found',
    }
  }

  return {
    title: `Hair Transplant ${city.name} | Compare Costs & Clinics`,
    description: `Looking for hair transplant in ${city.name}? Compare FUE & FUT procedures, costs from £${city.minPrice}. Free consultations available.`,
  }
}

// Main page component
export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city)

  if (!city) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hair Transplant in {city.name}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Compare the best hair transplant clinics in {city.name}. 
            Get free consultations and save up to 40% on your procedure.
          </p>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-blue-600">15+</p>
              <p className="text-gray-600">Verified Clinics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-blue-600">£{city.minPrice}</p>
              <p className="text-gray-600">Starting From</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-blue-600">4.8★</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-blue-600">2-4</p>
              <p className="text-gray-600">Week Wait Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Hair Transplant Services Available in {city.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">FUE Hair Transplant</h3>
              <p className="text-gray-600 mb-4">
                The most popular choice in {city.name}. Minimal scarring and quick recovery.
              </p>
              <p className="font-semibold text-blue-600">From £{city.minPrice}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">FUT Hair Transplant</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective option for extensive coverage. Popular in {city.name}.
              </p>
              <p className="font-semibold text-blue-600">From £{Math.round(city.minPrice * 0.8)}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Beard Transplant</h3>
              <p className="text-gray-600 mb-4">
                Growing in popularity across {city.name}. Natural-looking results.
              </p>
              <p className="font-semibold text-blue-600">From £{Math.round(city.minPrice * 0.7)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose {city.name} for Your Hair Transplant?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              {city.name} has become a leading destination for hair transplant procedures 
              in the {city.region} region, offering world-class facilities and experienced 
              surgeons at competitive prices.
            </p>
            <ul className="space-y-2 mb-6">
              <li>✓ CQC-registered clinics meeting strict UK standards</li>
              <li>✓ Experienced surgeons with proven track records</li>
              <li>✓ Prices typically 20-30% lower than London clinics</li>
              <li>✓ Excellent transport links for easy access</li>
              <li>✓ Comprehensive aftercare packages included</li>
              <li>✓ Finance options available at most clinics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Compare {city.name} Hair Transplant Clinics
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Get free quotes from verified clinics in {city.name}. No obligation, 100% confidential.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Hair Transplant Costs in {city.name}
          </h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-4 text-left">Procedure</th>
                  <th className="px-6 py-4 text-left">Grafts</th>
                  <th className="px-6 py-4 text-left">{city.name} Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">FUE Small Session</td>
                  <td className="px-6 py-4">1,000-1,500</td>
                  <td className="px-6 py-4 font-semibold">£{city.minPrice} - £{Math.round(city.minPrice * 1.5)}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">FUE Medium Session</td>
                  <td className="px-6 py-4">1,500-2,500</td>
                  <td className="px-6 py-4 font-semibold">£{Math.round(city.minPrice * 1.5)} - £{Math.round(city.maxPrice * 0.7)}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">FUE Large Session</td>
                  <td className="px-6 py-4">2,500-3,500</td>
                  <td className="px-6 py-4 font-semibold">£{Math.round(city.maxPrice * 0.7)} - £{city.maxPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}