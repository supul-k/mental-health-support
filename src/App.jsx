import { useState } from "react";
import ExampleForm from "./pages/ExampleForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
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
    </div>
  );
}

export default App;
