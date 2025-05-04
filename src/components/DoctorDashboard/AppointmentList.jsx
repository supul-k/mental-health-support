import { useState } from 'react';

export default  function AppointmentList() {
    const appointments = [
      {
        id: 1,
        patient: "Chamika Prasad",
        contact: "123456789",
        date: "5/13/2025",
        time: "",
        status: "unknown",
      },
      {
        id: 2,
        patient: "Chamika Prasad",
        contact: "123456789",
        date: "5/15/2025",
        time: "",
        status: "unknown",
      },
      {
        id: 3,
        patient: "Chamika Prasad",
        contact: "123456789",
        date: "5/16/2025",
        time: "9:11 AM - 10:11 AM",
        status: "upcoming",
      },
      // Add more appointments from your sample
    ];
  
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredAppointments = appointments.filter(appt =>
      appt.patient.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleAction = (action, appointmentId) => {
      console.log(`${action} appointment ${appointmentId}`);
      // Implement action logic here
    };
  
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">AI Appointments</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search by patient name"
              className="px-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="text-sm text-gray-500">
              Showing appointments from 5/4/2025 to 8/3/2025
            </span>
          </div>
        </div>
  
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAppointments.map((appt) => (
                <tr key={appt.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{appt.patient}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{appt.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {appt.date} {appt.time && `- ${appt.time}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      appt.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                      appt.status === 'completed' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {appt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button 
                      onClick={() => handleAction('complete', appt.id)}
                      className="text-green-600 hover:underline"
                    >
                      Complete
                    </button>
                    <button 
                      onClick={() => handleAction('cancel', appt.id)}
                      className="text-red-600 hover:underline"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => handleAction('update', appt.id)}
                      className="text-blue-600 hover:underline"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }