import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import AppointmentList from '../components/DoctorDashboard/AppointmentList';
import CalendarView from '../components/DoctorDashboard/CalendarView';
import DoctorProfile from '../components/DoctorDashboard/DoctorProfile';

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('appointments');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Doctor Portal</h2>
          <p className="text-sm text-gray-500">Welcome, Dr. Smith</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'appointments' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
              >
                Appointments
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'calendar' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
              >
                Calendar View
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
              >
                My Profile
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'appointments' && <AppointmentList />}
        {activeTab === 'calendar' && <CalendarView />}
        {activeTab === 'profile' && <DoctorProfile />}
      </div>
    </div>
  );
}