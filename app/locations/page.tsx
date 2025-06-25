import Link from 'next/link'
import { cities } from '@/lib/cities'

export default function LocationsPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Hair Transplant Locations
        </h1>
        
        <p className="text-xl text-gray-700 text-center mb-12">
          We cover {cities.length} cities across the UK
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/hair-transplant/${city.slug}`}
              className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-400 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-900">
                {city.name}
              </h3>
              <p className="text-sm text-gray-600">
                From £{city.minPrice}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}