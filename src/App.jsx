import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import AdminDashboard from "./pages/Dashboard";
import DoctorList from "./pages/DoctorList";
import DoctorDetail from "./pages/DoctorDetail";
import PatientList from "./pages/PatientList";
import PatientDetail from "./pages/PatientDetail";
import DoctorDashboard from "./pages/DoctorDashboard";
// import About from "./pages/About"; // Create these components
// import Features from "./pages/Features";
// import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetail />} />
          {/* <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="support" element={<Support />} /> */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/doctors" element={<DoctorList />} />
          <Route path="/admin/doctors/:id" element={<DoctorDetail />} />
          <Route path="/admin/patients" element={<PatientList />} />
          <Route path="/admin/patients/:id" element={<PatientDetail />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
