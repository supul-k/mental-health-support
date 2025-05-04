import React from 'react';

export default function Section2() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">User Feedback</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Hear what our users have to say!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★★</div>
            <blockquote className="text-gray-700 italic mb-4">
              "This platform has changed my life for the better!"
            </blockquote>
            <div className="font-semibold text-gray-900">Jane Doe</div>
            <div className="text-gray-500">Patient Advocate</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★★</div>
            <blockquote className="text-gray-700 italic mb-4">
              "The support I received was invaluable and uplifting!"
            </blockquote>
            <div className="font-semibold text-gray-900">John Smith</div>
            <div className="text-gray-500">Mental Health Coach</div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★★</div>
            <blockquote className="text-gray-700 italic mb-4">
              "A safe space to share and connect with others."
            </blockquote>
            <div className="font-semibold text-gray-900">Emily Johnson</div>
            <div className="text-gray-500">Community Member</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Contact Us', 'Support Center', 'Blog Posts', 'FAQs'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              {['Careers', 'Partnerships', 'Community', 'Events', 'Resources'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {['Facebook', 'Instagram', 'X', 'LinkedIn', 'YouTube'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
}