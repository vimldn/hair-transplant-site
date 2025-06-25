'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '#',
    dropdown: [
      { name: 'FUE Hair Transplant', href: '/fue-hair-transplant' },
      { name: 'FUT Hair Transplant', href: '/fut-hair-transplant' },
      { name: 'Beard Transplant', href: '/beard-transplant' },
      { name: 'Eyebrow Transplant', href: '/eyebrow-transplant' },
      { name: 'Female Hair Transplant', href: '/female-hair-transplant' },
      { name: 'Hair Loss Treatment', href: '/hair-loss-treatment' },
    ]
  },
  { name: 'Locations', href: '/locations' },
  { name: 'Cost Calculator', href: '/cost-calculator' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>0800 123 4567</span>
          </div>
          <div>
            <span>⭐⭐⭐⭐⭐ 4.8/5 from 12,453 reviews</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            UK Hair Transplant
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
                      {item.name}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-gray-700 hover:text-blue-600 font-medium ${
                      pathname === item.href ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/free-consultation"
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Free Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="mb-2">
                    <p className="font-semibold text-gray-900 px-2 py-2">{item.name}</p>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-2 py-2 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/free-consultation"
              className="block bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}