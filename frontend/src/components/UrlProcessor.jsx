import { useState } from "react";
import { processUrls } from "../api";

export default function UrlProcessor() {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleProcess = async () => {
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const urlList = urls.split("\n").map((url) => url.trim());
      const response = await processUrls(urlList);
      setMessage(response.message || "Your URLs have been processed. Now you can ask questions!");
      setIsError(false);
    } catch (err) {
      setMessage(err.message || "Failed to process URLs. Please try again.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-white">Process URLs</h2>

      {/* URL Input Box */}
      <textarea
        className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 resize-y"
        rows="4"
        placeholder="Enter URLs (one per line)"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
        disabled={loading}
      />

      {/* Process Button */}
      <button
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 mt-4 rounded-lg w-full hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 disabled:opacity-50 shadow-md"
        onClick={handleProcess}
        disabled={loading}
      >
        {loading ? "Processing..." : "Process URLs"}
      </button>

      {/* Success/Error Message */}
      {message && (
        <div
          className={`mt-4 p-4 rounded-lg text-sm ${
            isError
              ? "bg-red-900/80 text-red-200 border border-red-700"
              : "bg-green-900/80 text-green-200 border border-green-700"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}