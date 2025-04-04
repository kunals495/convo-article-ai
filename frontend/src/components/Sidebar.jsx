import UrlProcessor from "./UrlProcessor.jsx";

export default function Sidebar({ isOpen, setIsOpen, onLogout }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800/90 backdrop-blur-md border-r border-gray-700 shadow-xl transform transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Convo Dashboard
        </h2>
        <UrlProcessor />
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <button
          onClick={onLogout}
          className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 font-semibold shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}