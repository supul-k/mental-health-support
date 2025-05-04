import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Posts", href: "/posts" },
  { name: "Features", href: "/features" },
  { name: "Support", href: "/support" },
];

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div>
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
            <Link
              to="/register"
              className="rounded bg-[#006989] px-4 py-2 text-sm font-semibold text-white hover:bg-[#005f7a]"
            >
              Join
            </Link>
          </div>
        </nav>
        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
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

        <Outlet /> {/* This is where child routes will render */}
      </div>

      <footer className="text-center text-sm p-4 text-gray-500">
        <div className="text-center text-gray-500">
          <p>© CodeBell (PVT) Ltd. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-600">
              Cookie Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
