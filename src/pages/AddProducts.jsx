import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import Input from "../components/Input";
import { ImCamera } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function AddProducts() {
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [productData, setProductData] = useState({
    title: "",
    description: "",
    category: "",
    brand: "",
    availabilityStatus: "",
    images: [],
    thumbnail: null,
    price: "",
  });
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setProductData((prev) => ({
        ...prev,
        thumbnail: file,
      }));
    }
  };
  const resetForm = () => {
    setProductData({
      title: "",
      description: "",
      category: "",
      brand: "",
      availabilityStatus: "",
      images: null,
      thumbnail: null,
      price: "",
    });
    setPreviewImage(null);
    setFormErrors({});
  };
  const addData = async (e) => {
    e.preventDefault();
    const validationErrors = validate(productData);
    setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fill all the feilds before submitting");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        productData
      );
      console.log("form submitted successfully");
      toast.success("Product added successfully!");
      resetForm();
    } catch (err) {
      console.log("form not submitted ", err);
      toast.error("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validate = (values) => {
    const errors = {};

    if (!values.title.trim()) {
      errors.title = "Title is required";
    }

    if (!values.title.trim()) {
      errors.title = "Title is required";
    }
    if (!values.description.trim()) {
      errors.description = "Description is required";
    }
    if (!values.category.trim()) {
      errors.category = "Category is required";
    }
    if (!values.brand.trim()) {
      errors.brand = "Brand is required";
    }

    if (!values.price.trim()) {
      errors.price = "Price is required";
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

        <form onSubmit={addData}>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Add Products
              </h2>

              <div className="relative w-32 h-32 rounded-lg border-2  border-gray-200 bg-gray-100 flex items-center justify-center overflow-hidden shadow-md">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">No Photo</span>
                )}

                <label
                  htmlFor="upload"
                  className="absolute bottom-1 right-1 p-2 rounded-full cursor-pointer hover:bg-blue-200 transition"
                >
                  <ImCamera />

                  <input
                    id="upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <Input
                type="text"
                value={productData.title}
                placeholder="Enter Title"
                onChange={handleChange}
                name="title"
                id="title"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.title}</p>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                type="text"
                value={productData.description}
                placeholder="Enter Description"
                onChange={handleChange}
                name="description"
                id="description"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.description}</p>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <Input
                type="text"
                value={productData.category}
                placeholder="Enter Category"
                onChange={handleChange}
                name="category"
                id="category"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.category}</p>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand
              </label>
              <Input
                type="text"
                value={productData.brand}
                placeholder="Enter Brand"
                onChange={handleChange}
                name="brand"
                id="brand"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.brand}</p>
            </div>

            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <Input
                type="text"
                value={productData.price}
                placeholder="Enter Price"
                onChange={handleChange}
                name="price"
                id="price"
                className="w-full border border-black rounded-md px-3 py-2 text-gray-900 placeholder-gray-400"
              />
              <p className="text-red-400 mt-2">{formErrors.price}</p>
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

export default AddProducts;
