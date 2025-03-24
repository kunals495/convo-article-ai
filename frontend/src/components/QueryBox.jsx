import { useState } from "react";
import { queryDocs } from "../api";
import { ArrowRight } from "lucide-react"; // Import arrow icon

export default function QueryBox() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);

  const handleQuery = async () => {
    const result = await queryDocs(query);
    setResponse(result);
  };

  return (
    <div className="mt-[100px] mx-auto max-w-3xl text-center p-8 bg-transparent">
      <h2 className="text-3xl font-semibold mb-6 text-white">
        Process the URL First then Ask Anything
      </h2>

      {/* Large Input Box with Arrow Button */}
      <div className="relative flex items-center w-full bg-gray-900 rounded-2xl p-4">
        <input
          className="w-full text-lg p-4 pr-16 border-none rounded-2xl bg-transparent text-white placeholder-gray-400 focus:outline-none"
          placeholder="What do you want to know?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all"
          onClick={handleQuery}
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Response Section */}
      {response && (
        <div className="mt-6 p-6 border rounded-xl bg-gray-800 text-white text-left">
          <p className="text-lg">
            <strong>Answer:</strong> {response.answer}
          </p>
          <p className="text-sm text-gray-400">
            <strong>Sources:</strong> {response.sources}
          </p>
        </div>
      )}
    </div>
  );
}
