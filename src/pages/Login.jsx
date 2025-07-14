import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { IoIosOptions } from "react-icons/io";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import loginphoto from "../images/loginphoto.jpg";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !role || role === "Select Option") {
      toast.error("Please fill all fields.");
      return;
    }

    const payload = { email, password };

    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        payload
      );

      localStorage.setItem("token", response.data.access_token);
      toast.success("Login successful!");
      setTimeout(() => navigate("/profile"), 1500);
    } catch (err) {
      console.error(err);
      toast.error("Login failed.Invalid Username or Password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#1F1B2E] flex justify-center items-center px-4">
      <ToastContainer position="top-right" autoClose={1500} />
      <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl bg-[#2C273A] ">
        
        <div className="hidden md:block w-1/2  bg-cover bg-center relative">
          <div className="h-full">
            <img
              src={loginphoto}
              alt="Logo"
              className="object-cover absolute p-4 w-full h-full  "
            />
          </div>
        </div>

   
        <div className="w-full md:w-1/2 p-10 bg-[#2C273A] text-white">
          <h2 className="text-3xl font-bold mb-2">Sign in to your account</h2>
          <p className="mb-6 text-sm">
            Don't have an account?{" "}
            <span className="text-purple-400 cursor-pointer hover:underline">
              Register
            </span>
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center border border-gray-500 rounded px-3 py-2 bg-[#322E41]">
              <FaEnvelope className="text-gray-400 mr-2" />
              <Input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent focus:outline-none text-white placeholder:text-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center border border-gray-500 rounded px-3 py-2 bg-[#322E41]">
              <FaLock className="text-gray-400 mr-2" />
              <Input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent focus:outline-none text-white placeholder:text-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center border border-gray-500 rounded px-3 py-2 bg-[#322E41] relative">
              <IoIosOptions className="text-gray-400 mr-2" />
              <select
                className="w-full bg-transparent focus:outline-none text-gray-400"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option className="text-black">Select Option</option>
                <option className="text-black">Admin</option>
                <option className="text-black">User</option>
              </select>
              <FiChevronDown className="absolute right-3 text-gray-400 pointer-events-none" />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="accent-purple-600"
              />
              <label htmlFor="remember" className="text-sm text-gray-300">
                I agree to the{" "}
                <span className="text-purple-400 cursor-pointer hover:underline">
                  Terms & Conditions
                </span>
              </label>
            </div>

            <Button
              label="Sign In"
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded transition"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
