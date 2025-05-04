import { useParams } from 'react-router-dom';
import { useState } from 'react';

const doctorData = {
  id: 1,
  name: "Dr. Sarah Chen",
  email: "sarah.chen@example.com",
  contact: "+94123456789",
  slmcNumber: "SL12345",
  specialization: "Psychiatry",
  qualification: "MD in Psychiatry",
  yearsOfExperience: 8,
  verified: true,
  bio: "Specialized in cognitive behavioral therapy with extensive experience in anxiety disorders.",
  joinedDate: "2021-03-15"
};

export default function DoctorDetail() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(doctorData);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerifyToggle = async () => {
    setIsVerifying(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setDoctor(prev => ({ ...prev, verified: !prev.verified }));
    setIsVerifying(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold">{doctor.name}</h1>
          <p className="text-gray-600">{doctor.specialization}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          doctor.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {doctor.verified ? 'Verified' : 'Unverified'}
        </span>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-medium mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>{doctor.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact Number</p>
                <p>{doctor.contact}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">SLMC Number</p>
                <p>{doctor.slmcNumber}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Professional Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Qualification</p>
                <p>{doctor.qualification}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Years of Experience</p>
                <p>{doctor.yearsOfExperience}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Joined Date</p>
                <p>{new Date(doctor.joinedDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t">
          <h2 className="text-lg font-medium mb-4">Bio</h2>
          <p className="text-gray-700">{doctor.bio}</p>
        </div>

        <div className="p-6 border-t flex justify-end space-x-4">
          <button
            onClick={handleVerifyToggle}
            disabled={isVerifying}
            className={`px-4 py-2 rounded-md ${
              doctor.verified 
                ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            {isVerifying ? 'Processing...' : doctor.verified ? 'Unverify' : 'Verify'}
          </button>
        </div>
      </div>
    </div>
  );
}