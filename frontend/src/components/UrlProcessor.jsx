import { useState } from "react";
import { processUrls } from "../api";

export default function UrlProcessor() {
  const [urls, setUrls] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProcess = async () => {
    setLoading(true);
    const urlList = urls.split("\n").map((url) => url.trim());
    await processUrls(urlList);
    setLoading(false);
    alert("Your URLs have been processed. Now you can ask questions!");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-white">Process URLs</h2>
      
      {/* URL Input Box */}
      <textarea
        className="w-full p-3 border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none caret-transparent"
        rows="4"
        placeholder="Enter URLs (one per line)"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />

      {/* Process Button */}
      <button
        className="bg-blue-600 text-white p-3 mt-4 rounded-lg w-full hover:bg-blue-700 transition"
        onClick={handleProcess}
        disabled={loading}
      >
        {loading ? "Processing..." : "Process URLs"}
      </button>
    </div>
  );
}
