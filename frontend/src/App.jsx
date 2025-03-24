import { useState } from "react";
import Sidebar from "./components/Sidebar";
import QueryBox from "./components/QueryBox";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#1E1E1E]">

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Menu Button (☰) */}
      <button
        className={`fixed top-4 left-4 text-3xl z-50 transition-all duration-300 ${
          isSidebarOpen ? "translate-x-64" : ""
        }`}
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰
      </button>

      {/* Header */}
      <h1
        className={`text-2xl font-bold fixed top-4 left-16 z-50 transition-all duration-300 ${
          isSidebarOpen ? "translate-x-64" : ""
        }`}
      >
        Article Based AI Query Resolver
      </h1>

      {/* Main Content (kept aligned left) */}
      <div className="pl-8 pt-16">
        <QueryBox />
      </div>
    </div>
  );
}

export default App;
