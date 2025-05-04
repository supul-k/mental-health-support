import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div>
      {/* Your header/navbar would go here if it's shared across pages */}
      <Outlet /> {/* This is where child routes will render */}
    </div>

      <footer className="text-center text-sm p-4 text-gray-500">
        <div className="mt-16 pt-8 border-t border-gray-200">
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
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
