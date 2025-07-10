import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-300 py-12 bg-no-repeat bg-top bg-cover"
      style={{
        backgroundImage:
          'url("https://preview.uideck.com/items/blaze/assets/images/footer/footer-bg.svg")',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Your SaaS Company</h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering your business with cutting-edge SaaS solutions. Our platform
              makes your workflow smarter, faster, and easier.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Twitter" className="hover:text-white transition">
                {/* Twitter Icon */}
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                {/* LinkedIn Icon */}
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-white transition">
                {/* GitHub Icon */}
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="/docs" className="hover:text-white transition">Docs</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Subscribe to our newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500 hover:border"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your SaaS Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
