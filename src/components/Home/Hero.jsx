"use client";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#c3e4f8] to-[#a6d8e9]">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 pt-40 pb-20">
        {/* Left - Text */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-50">
            Empower Your Mental
            <br />
            Health Journey Today
          </h1>
          <p className="mt-6 text-lg text-gray-50">
            Welcome to a supportive community dedicated to your mental
            well-being. Join us to connect, share, and grow with others who
            understand your journey.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-x-4">
            <a
              href="#"
              className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            >
              Get Started
            </a>
            <a
              href="#"
              className="rounded-md border border-white px-5 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-gray-900"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="mb-10 lg:mb-0">
          <img
            src="src\assets\Hero.png" // Replace with your actual path
            alt="Smiley and sad face"
            className="w-[400px] rounded-2xl shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}
