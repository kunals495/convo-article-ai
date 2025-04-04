import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Since there's no login endpoint, directly navigate to dashboard
    try {
      setTimeout(() => {
        navigate("/dashboard");
        setLoading(false);
      }, 1000); // Simulate a delay for UX
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/2 relative">
        <img
          src="/News Article.avif"
          alt="News Collage"
          className="w-full h-full object-cover"
          style={{ imageRendering: "crisp-edges" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-800/30 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
            Convo
          </h1>
          <p className="text-xl max-w-md text-center font-medium text-gray-200 leading-relaxed drop-shadow-md">
            Your AI-powered query resolver delivering instant insights from news and beyond
          </p>
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-800">
        <div className="w-96 p-8 bg-gray-700 rounded-xl shadow-2xl border border-gray-600">
          <h2 className="text-4xl font-bold text-white mb-10 text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Sign In to Convo
          </h2>

          <form onSubmit={handleLogin} className="space-y-7">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-gray-600 border border-gray-500 text-white rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                        placeholder-gray-400 transition-all duration-300"
              disabled={loading}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-gray-600 border border-gray-500 text-white rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                        placeholder-gray-400 transition-all duration-300"
              disabled={loading}
            />

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg 
                        hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 
                        focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 
                        transition-all duration-300 font-semibold text-lg shadow-md disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="flex justify-between items-center mt-6">
            <p className="text-gray-400 text-sm">
              Forgot password?{" "}
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Reset it
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              New here?{" "}
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;