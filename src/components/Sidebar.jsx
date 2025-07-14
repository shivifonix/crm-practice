
import React, { useState } from "react";
import {
  HiMenu,
  HiOutlineDocumentText,
  HiOutlineLogout,
  HiOutlineCog,
  HiUsers,
  HiUserCircle,
} from "react-icons/hi";
import logo from "../images/logo.jpg";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
      <div className="lg:hidden p-4 bg-white shadow flex">
        <div className="flex justify-start items-start">
          
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2 " />
        </button>
      </div>
</div>
  
      <div
        className={`fixed lg:static z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex flex-col w-64 h-screen bg-white border`}
      >
       
        <div className="flex items-center px-6 py-4 border-b">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded ${
                isActive ? "text-gray-900" : "text-gray-700"
              }`
            }
          >
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <h1 className="text-xl font-semibold text-gray-700">MR. Chemicals</h1>
          </NavLink>
        </div>

      
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded ${
                    isActive
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <HiOutlineDocumentText className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded ${
                    isActive
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <HiMenu className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded ${
                    isActive
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <HiUsers className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Users</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Footer Section */}
        <div className="border-t px-4 py-4">
          <ul className="space-y-1">
           
            <li>
               <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded ${
                    isActive
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <HiUserCircle className="h-5 w-5 text-gray-500" />
                <span className="ml-3">Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Backdrop when sidebar open on mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-30 z-40 lg:hidden"
        ></div>
      )}
    </>
  );
}

