/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#287344] flex items-center justify-center">
      <motion.div
        className="bg-[#f0fdf4] p-8 rounded-lg shadow-lg text-287344 w-96"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Username</label>
          <input
            type="text"
            className="bg-white w-full p-2 rounded text-[#287344]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            className=" bg-white w-full p-2 rounded text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-white text-[#287344] p-2 rounded-lg font-semibold"
          onClick={handleLogin}
        >
          Login
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
