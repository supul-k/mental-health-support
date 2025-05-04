// PatientDetail.jsx
import { useParams } from 'react-router-dom';

const patientData = {
  id: 1,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  contact: "+94123456789",
  age: 32,
  gender: "Female",
  joinedDate: "2023-01-15",
  lastSession: "2023-06-10",
  conditions: ["Anxiety", "Mild Depression"],
  therapist: "Dr. Sarah Chen"
};

export default function PatientDetail() {
  const { id } = useParams();
  const patient = patientData; // In real app, fetch by id

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{patient.name}</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-medium mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>{patient.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact Number</p>
                <p>{patient.contact}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Age</p>
                <p>{patient.age}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gender</p>
                <p>{patient.gender}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Treatment Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Joined Date</p>
                <p>{new Date(patient.joinedDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Session</p>
                <p>{patient.lastSession ? new Date(patient.lastSession).toLocaleDateString() : 'Never'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Conditions</p>
                <p>{patient.conditions.join(', ')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Assigned Therapist</p>
                <p>{patient.therapist}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t">
          <h2 className="text-lg font-medium mb-4">Session History</h2>
          {/* Session history table would go here */}
          <p className="text-gray-500">No recent sessions</p>
        </div>
      </div>
    </div>
  );
}