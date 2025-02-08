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
    <div className="h-dvh flex">
      <div className="lg:block hidden bg-[url('./assets/login_bg_1.jpg')] bg-cover bg-no-repeat bg-center flex-1 ">
      </div>
      <div className="flex-1 flex items-center bg-[url('./assets/login_bg.jpg')] bg-cover bg-no-repeat bg-center lg:bg-none justify-center">
        <motion.div
          className="bg-[#f0fdf4] px-8 py-12 rounded-lg shadow-lg w-11/12 sm:w-2/3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-emerald-950">Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-emerald-950">Username</label>
            <input
              type="text"
              className="bg-white focus:outline-2 shadow-md focus:outline-emerald-950 w-full p-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-14">
            <label className="block font-semibold mb-2 text-emerald-950">Password</label>
            <input
              type="password"
              className=" bg-white w-full shadow-md focus:outline-2 focus:outline-emerald-950 p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <button
            className="w-full bg-emerald-950 text-white p-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            onClick={handleLogin}
          >
            Login
          </button>

        </motion.div>
      </div>
    </div>
  );
};

export default Login;
