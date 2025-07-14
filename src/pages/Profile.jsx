import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchProfile = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", header);
        setUser(response.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load profile");
      }
    };

    fetchProfile();
  }, [token, navigate]);


  return (
    <div className="min-h-screen bg-gray-100 flex justify-start items-start px-4 ">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className=" rounded-xl w-full max-w-screen p-8 text-black bg-white h-full  ">
        <h2 className="text-2xl font-bold mb-4 text-black">My Profile</h2>

        {!user ? (
          <p className="text-black">Loading...</p>
        ) : (
          <div className="space-y-4">
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-24 h-24 rounded-full mx-auto border-2 border-purple-600 ml-2"
            />
              <div className="flex  rounded px-3 py-2 ">
                          <div className="text-black mr-2" >Name: </div>
                          <div className="w-full text-black ">
                            {user.name}
                          </div>
                        </div>

                            <div className="flex  rounded px-3 py-2">
                          <div className="text-black mr-2" >Email: </div>
                          <div className="w-full text-black">
                           {user.email}
                          </div>
                        </div>

                            <div className="flex  rounded px-3 py-2 ">
                          <div className="text-black mr-2" >Role: </div>
                          <div className="w-full text-black">
                           {user.role || "User"}
                          </div>
                        </div>
            

         
          </div>
        )}
      </div>
    </div>
  );
}
