'use client';

import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-black mb-4">FITNESS ZONE</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transform your body, transform your life. Join 5,000+ members achieving their fitness goals.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border-2 border-gray-700 flex items-center justify-center hover:border-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-gray-700 flex items-center justify-center hover:border-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-gray-700 flex items-center justify-center hover:border-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-gray-700 flex items-center justify-center hover:border-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {[
                'Personal Training',
                'Group Classes',
                'Nutrition Plans',
                'Fitness Assessments',
                'Online Coaching'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {[
                'Terms of Service',
                'Privacy Policy',
                'Refund Policy',
                'Cookie Policy'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Fitness Zone. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ for fitness enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
