import { useState } from "react";
import { Button, Input, Select, Modal } from "../components";

const ExampleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const roles = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "moderator", label: "Moderator" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-white mb-3">Welcome!</h2>
      <p className="text-gray-100 mb-4">
        This is a beautifully styled card using Tailwind CSS. It features a
        gradient background, rounded corners, and a subtle shadow.
      </p>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
        Click me
      </button>
    </div>
  );
};

export default ExampleForm;
