import { useState } from "react";
import { queryDocs } from "../api";
import { ArrowRight } from "lucide-react";

export default function QueryBox() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleQuery = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const result = await queryDocs(query);
      if (result && result.answer) {
        setResponse(result);
      } else {
        setError("No answer found. Please try a different query.");
      }
    } catch (err) {
      setError(err.message || "Failed to fetch the answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 mx-auto max-w-3xl w-full text-center p-8 bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700">
      <h2 className="text-3xl font-semibold mb-6 text-white bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Process the URL First, Then Ask Anything
      </h2>

      {/* Large Input Box with Arrow Button */}
      <div className="relative flex items-center w-full bg-gray-900/80 rounded-2xl p-2 border border-gray-600 shadow-inner">
        <input
          className="w-full text-lg p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-0"
          placeholder="What do you want to know?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 shadow-md"
          onClick={handleQuery}
          disabled={loading}
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 border border-red-700 rounded-xl bg-red-900/80 text-red-200 text-left shadow-md">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="mt-4 p-4 border border-gray-600 rounded-xl bg-gray-700/80 text-white text-left shadow-md">
          <p className="text-sm">Loading...</p>
        </div>
      )}

      {/* Response Section */}
      {response && !loading && !error && (
        <div className="mt-6 p-6 border border-gray-600 rounded-xl bg-gray-700/80 text-white text-left shadow-md">
          <p className="text-lg">
            <strong className="text-indigo-400">Answer:</strong> {response.answer}
          </p>
          <p className="text-sm text-gray-300 mt-2">
            <strong className="text-indigo-400">Sources:</strong>{" "}
            {response.sources || "No sources provided"}
          </p>
        </div>
      )}
    </div>
  );
}