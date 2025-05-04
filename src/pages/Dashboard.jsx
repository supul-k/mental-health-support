import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  // Sample data - replace with actual API calls
  const stats = {
    doctors: { total: 42, verified: 38 },
    patients: { total: 1256 },
    appointments: { upcoming: 28, completed: 342 }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Doctors Card */}
        <Link 
          to="/admin/doctors"
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Doctors</h3>
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {stats.doctors.verified} verified
            </span>
          </div>
          <p className="text-3xl font-bold mt-2">{stats.doctors.total}</p>
        </Link>

        {/* Patients Card */}
        <Link 
          to="/admin/patients"
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
        >
          <h3 className="text-lg font-medium">Patients</h3>
          <p className="text-3xl font-bold mt-2">{stats.patients.total}</p>
        </Link>

        {/* Appointments Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Appointments</h3>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-sm text-gray-500">Upcoming</p>
              <p className="text-2xl font-bold">{stats.appointments.upcoming}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-2xl font-bold">{stats.appointments.completed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        {/* Activity list would go here */}
      </div>
    </div>
  );
}