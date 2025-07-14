import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { FaChevronLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function EditUsers() {
  const [updateData, setupdateData] = useState({
    name: "",
    userName: "",
    email: "",
    street: "",
    city: "",
    postalCode: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const updatedata = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        updateData
      );
      console.log("form updated successfully");
      toast.success("User updated successfully!");
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (err) {
      toast.error("Failed to update user.");
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setupdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = response.data;
        console.log(data);
        setupdateData({
          firstName: data.firstName,
          name: data.name,
          email: data.email,
          street: data.address.street,
          city: data.address.city,
          postalCode: data.address.zipcode,
          userName: data.username,
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);
  return (
    <div className="mx-auto w-full min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <FaChevronLeft onClick={() => navigate(-1)} />
        <ToastContainer position="top-right" autoClose={3000} />
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60">
            <svg
              className="animate-spin h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A7.96 7.96 0 014 12H0c0 3.04 1.13 5.82 3 7.94l3-2.65z"
              />
            </svg>
          </div>
        )}

        <form onSubmit={updatedata}>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-900">Add Users</h2>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                type="text"
                value={updateData.name}
                placeholder="Enter Name"
                onChange={handleChange}
                name="name"
                id="name"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                user name
              </label>
              <Input
                type="text"
                value={updateData.userName}
                placeholder="Enter username"
                onChange={handleChange}
                name="username"
                id="username"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <Input
                type="text"
                value={updateData.email}
                placeholder="Enter email"
                onChange={handleChange}
                name="email"
                id="email"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street address
              </label>
              <Input
                type="text"
                value={updateData.street}
                placeholder="Enter Brand"
                onChange={handleChange}
                name="street"
                id="street"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <Input
                type="text"
                value={updateData.city}
                placeholder="Enter city"
                onChange={handleChange}
                name="city"
                id="city"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ZIP / Postal code
              </label>
              <Input
                type="text"
                value={updateData.postalCode}
                placeholder="Enter postalCode"
                onChange={handleChange}
                name="postalCode"
                id="postalCode"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <Button
              label="Save"
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUsers;
