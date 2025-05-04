import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
// import About from "./pages/About"; // Create these components
// import Features from "./pages/Features";
// import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="support" element={<Support />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
