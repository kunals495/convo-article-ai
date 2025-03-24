import UrlProcessor from "./UrlProcessor"; // ✅ Importing UrlProcessor

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#0D0D0D] shadow-lg p-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 text-white`}
      >
        {/* Close Button (X) */}
        <button
          className="text-2xl font-bold mb-4 text-gray-400 hover:text-white transition"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        {/* URL Processor */}
        <UrlProcessor />
      </div>
    </>
  );
}
