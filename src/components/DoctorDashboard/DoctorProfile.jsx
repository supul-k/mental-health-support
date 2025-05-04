import { useState } from 'react';

export default function DoctorProfile() {
    const [doctor, setDoctor] = useState({
      name: "Dr. Sarah Smith",
      email: "dr.sarah@example.com",
      specialization: "Psychiatrist",
      contact: "0712345678",
      slmcNumber: "SL12345",
      bio: "Specialized in cognitive behavioral therapy with 10 years of experience.",
    });
  
    const [availableSlots, setAvailableSlots] = useState([
      { day: 'Monday', slots: ['9:00 AM', '11:00 AM'] },
      { day: 'Wednesday', slots: ['10:00 AM', '2:00 PM'] },
      { day: 'Friday', slots: ['9:00 AM', '1:00 PM'] },
    ]);
  
    const [newSlot, setNewSlot] = useState({
      day: 'Monday',
      time: '',
    });
  
    const handleAddSlot = () => {
      if (!newSlot.time) return;
      
      setAvailableSlots(prev => {
        const updated = [...prev];
        const dayIndex = updated.findIndex(d => d.day === newSlot.day);
        
        if (dayIndex >= 0) {
          updated[dayIndex].slots.push(newSlot.time);
        } else {
          updated.push({ day: newSlot.day, slots: [newSlot.time] });
        }
        
        return updated;
      });
      
      setNewSlot({ ...newSlot, time: '' });
    };
  
    const handleRemoveSlot = (day, time) => {
      setAvailableSlots(prev => {
        const updated = [...prev];
        const dayIndex = updated.findIndex(d => d.day === day);
        
        if (dayIndex >= 0) {
          updated[dayIndex].slots = updated[dayIndex].slots.filter(t => t !== time);
          // Remove day if no slots left
          if (updated[dayIndex].slots.length === 0) {
            updated.splice(dayIndex, 1);
          }
        }
        
        return updated;
      });
    };
  
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-6">My Profile</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-medium mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md p-2"
                      value={doctor.name}
                      onChange={(e) => setDoctor({...doctor, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full border rounded-md p-2"
                      value={doctor.email}
                      onChange={(e) => setDoctor({...doctor, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <input
                      type="tel"
                      className="mt-1 block w-full border rounded-md p-2"
                      value={doctor.contact}
                      onChange={(e) => setDoctor({...doctor, contact: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-4">Professional Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Specialization</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md p-2"
                      value={doctor.specialization}
                      onChange={(e) => setDoctor({...doctor, specialization: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">SLMC Number</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md p-2"
                      value={doctor.slmcNumber}
                      onChange={(e) => setDoctor({...doctor, slmcNumber: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      className="mt-1 block w-full border rounded-md p-2"
                      rows="3"
                      value={doctor.bio}
                      onChange={(e) => setDoctor({...doctor, bio: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Profile
              </button>
            </div>
          </div>
        </div>
  
        <div>
          <h2 className="text-xl font-bold mb-4">Availability Slots</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-end space-x-4 mb-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Day</label>
                <select
                  className="mt-1 block w-full border rounded-md p-2"
                  value={newSlot.day}
                  onChange={(e) => setNewSlot({...newSlot, day: e.target.value})}
                >
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  className="mt-1 block w-full border rounded-md p-2"
                  value={newSlot.time}
                  onChange={(e) => setNewSlot({...newSlot, time: e.target.value})}
                />
              </div>
              <button
                onClick={handleAddSlot}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Add Slot
              </button>
            </div>
  
            <div className="space-y-4">
              {availableSlots.map((daySlot, index) => (
                <div key={index} className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">{daySlot.day}</h3>
                  <div className="flex flex-wrap gap-2">
                    {daySlot.slots.map((time, timeIndex) => (
                      <div key={timeIndex} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                        <span>{time}</span>
                        <button
                          onClick={() => handleRemoveSlot(daySlot.day, time)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }