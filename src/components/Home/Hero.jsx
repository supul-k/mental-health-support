"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Support", href: "/support" },
  ];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#c3e4f8] to-[#a6d8e9]">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="text-xl font-bold text-sky-700">
              Logo
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="rounded bg-[#006989] px-4 py-2 text-sm font-semibold text-white hover:bg-[#005f7a]"
            >
              Join
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <a href="#" className="text-lg font-bold text-sky-700">
                Logo
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-semibold text-gray-900"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="block mt-4 rounded bg-[#006989] px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Join
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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
