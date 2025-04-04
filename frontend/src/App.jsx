import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Pages/login.jsx";
import Sidebar from "./components/Sidebar.jsx";
import QueryBox from "./components/QueryBox.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Logout function (no token to clear, just redirect)
  const handleLogout = () => {
    window.location.href = "/"; // Redirect to login page
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<Login />} />
          {/* Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <div className="relative">
                {/* Sidebar */}
                <Sidebar
                  isOpen={isSidebarOpen}
                  setIsOpen={setIsSidebarOpen}
                  onLogout={handleLogout}
                />
                {/* Menu Button */}
                <button
                  className={`fixed top-6 left-6 text-3xl z-50 p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-lg ${
                    isSidebarOpen ? "translate-x-64" : ""
                  }`}
                  onClick={() => setIsSidebarOpen(true)}
                >
                  ☰
                </button>
                {/* Header */}
                <h1
                  className={`fixed top-6 left-20 z-50 text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 ${
                    isSidebarOpen ? "translate-x-64" : ""
                  }`}
                >
                  Article Based AI Query Resolver
                </h1>
                {/* Main Content */}
                <div className="pl-8 pt-24 pr-8 min-h-screen flex justify-center">
                  <QueryBox />
                </div>
              </div>
            }
          />
          {/* Redirect unknown routes to login */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;