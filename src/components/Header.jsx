import React, { useState, useRef, useEffect } from "react";
import { HiOutlineBell, HiOutlineChevronDown } from "react-icons/hi";
import avatar from "../images/avatar.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/login");
  };
  return (
    <div className="relative flex items-center justify-end px-6 py-4 bg-white border-b">
      <ToastContainer position="top-right" autoClose={3000} />
      <button className="relative text-gray-600 hover:text-gray-800 mr-4">
        <HiOutlineBell className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
          3
        </span>
      </button>

      <div ref={menuRef} className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
        >
          <img src={avatar} alt="Profile" className="h-8 w-8 rounded-full" />
          <HiOutlineChevronDown className="h-5 w-5" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border py-1 z-10 items-center ">
            <button
              onClick={handleLogout}
              className="bg-white text-black px-4 py-2 rounded hover:bg-sky-200 transition w-36"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
