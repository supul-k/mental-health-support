import React from "react";

export default function Section1() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-3 gap-16 items-start">
      {/* Left Column */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 uppercase">
          Empower
        </h3>
        <h2 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Explore Our Key
          <br />
          Features for Better Support
        </h2>
        <p className="mt-6 text-base text-gray-600">
          Discover how our platform enhances mental health support. Our features
          are designed to connect, engage, and empower users.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="inline-block rounded-md border border-gray-800 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100"
          >
            Learn More
          </a>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-blue-700 hover:underline"
          >
            Join Us
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Right - Features Grid */}
      <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Peer Support: Connect with Others Like You",
            desc: "Engage with a community that understands your journey.",
          },
          {
            title: "Private Messaging: Communicate Securely and Confidentially",
            desc: "Enjoy private conversations with trusted peers and professionals.",
          },
          {
            title: "Secure Payments: Hassle-Free and Safe Transactions",
            desc: "Experience seamless payment options for your sessions.",
          },
          {
            title: "Creative Sharing: Express Yourself Freely",
            desc: "Share your thoughts, art, and experiences with our community.",
          },
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="text-blue-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Example icon — you can replace it */}
                <path d="M12 2L2 7v6c0 5.55 3.84 10.74 10 13 6.16-2.26 10-7.45 10-13V7l-10-5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
