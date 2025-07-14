import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function AddUsers() {
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    street: "",
    city: "",
    postalCode: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      username: "",
      email: "",
      street: "",
      city: "",
      postalCode: "",
    });
    setFormErrors({});
  };

  const postdata = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fill all the feilds before submitting.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("form submitted successfully");
      toast.success("User added successfully!");

      resetForm();
    } catch (err) {
      toast.error("Failed to add user.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "Name is required";
    }

    if (!values.username.trim()) {
      errors.username = "Username is required";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email format is invalid";
    }

    if (!values.street.trim()) {
      errors.street = "Street is required";
    }
    if (!values.city.trim()) {
      errors.city = "City is required";
    }
    if (!values.postalCode.trim()) {
      errors.postalCode = "Postal Code is required";
    } else if (!/^\d{5,6}$/.test(values.postalCode)) {
      errors.postalCode = "Postal Code must be 5-6 digits";
    }
    return errors;
  };

  return (
    <div className="mx-auto w-full min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
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

        <form onSubmit={postdata}>
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
                value={formData.name}
                placeholder="Enter Name"
                onChange={handleChange}
                name="name"
                id="name"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.name}</p>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                user name
              </label>
              <Input
                type="text"
                value={formData.username}
                placeholder="Enter username"
                onChange={handleChange}
                name="username"
                id="username"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.username}</p>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <Input
                type="text"
                value={formData.email}
                placeholder="Enter email"
                onChange={handleChange}
                name="email"
                id="email"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.email}</p>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street address
              </label>
              <Input
                type="text"
                value={formData.street}
                placeholder="Enter Brand"
                onChange={handleChange}
                name="street"
                id="street"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.street}</p>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <Input
                type="text"
                value={formData.city}
                placeholder="Enter city"
                onChange={handleChange}
                name="city"
                id="city"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.city}</p>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ZIP / Postal code
              </label>
              <Input
                type="text"
                value={formData.postalCode}
                placeholder="Enter postalCode"
                onChange={handleChange}
                name="postalCode"
                id="postalCode"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.postalCode}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <Button
              label="Cancel"
              type="button"
              onClick={resetForm}
              className="text-sm font-semibold text-gray-700 hover:text-gray-900"
            ></Button>
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

export default AddUsers;
