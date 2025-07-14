import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";
import Modal from "../components/Modal";

export function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
    const [loading, setLoading] = useState(false);
  const [open,setOpen]=useState(false)
const [selectedProductId, setSelectedProductId] = useState(null);

  const fetchproducts = async () => {
      setLoading(true);
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
  
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchproducts();
  }, []);

  //delete api
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `https://dummyjson.com/products/${id}`
      );

       toast.success("Product Deleted Successfully");
       setOpen(false);
      
    } catch (err) {
            toast.error("Failed to delete product . Please try again");
      
      console.log(err);
    }finally{
      setLoading(false);
       setOpen(false);
    }
  };
  const handleEdit = async (id) => {
    navigate(`/editproducts/${id}`);
  };

  const handlenavigate = () => {
    navigate("/addproducts");
  };

  return (
    <div className="px-4 py-6 scrollbar-hide">
      <div className="max-w-screen-xl mx-auto h-screen flex flex-col">
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

        <div className="flex flex-row gap-10 justify-between items-center px-2">
          <h2 className="text-2xl font-semibold mb-4">Product List</h2>
          <Button
            label="Add Products"
            onClick={handlenavigate}
            loading={false}
            className="px-3 py-1 mb-4 text-sm bg-sky-500 text-white rounded hover:bg-blue-600 w-24"
          />
        </div>

     
        <div className="flex-1 overflow-y-auto px-2 scrollbar-hide">
          <table className="min-w-full border rounded-md shadow-sm bg-white">
            <thead className="bg-gray-100 text-left sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 border-b">ID</th>
                <th className="px-4 py-3 border-b">Product Name</th>
                <th className="px-4 py-3 border-b">Price ($)</th>
                <th className="px-4 py-3 border-b">Category</th>
                <th className="px-4 py-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{product.id}</td>
                  <td className="px-4 py-2 border-b">{product.title}</td>
                  <td className="px-4 py-2 border-b">{product.price}</td>
                  <td className="px-4 py-2 border-b">{product.category}</td>
                  <td className="px-4 py-2 border-b  flex flex-col md:flex-row justify-center items-center gap-2  ">
                    <button aria-label="edit kar skte ho"
                      onClick={() => handleEdit(product.id)}
                      className="flex px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 w-16"
                    >
                      Edit
                    </button>
                    <button
                      
                     onClick={() => {
    setSelectedProductId(product.id); // set product to delete
    setOpen(true); // open modal
  }}
                      className="flex px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 w-16"
                    >
                      Delete
                    </button>
                    {/* <button onClick={()=>setOpen(true)}>
                      <MdDelete />
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal open={open} onClose={()=>setOpen(false)}>
        <div className="text-center w-42">
          <MdDelete  size={24} className="mx-auto text-red-600"/>
          <div className="mx-auto m-2 w-full">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">Are you sure you want to delete this item</p>
          </div>
          <div className="flex gap-4 justify-center items-center w-full">
            <button 
            onClick={() => handleDelete(selectedProductId)}
            className=" w-24 h-8 flex  items-center justify-center bg-red-500 text-white  " >
              Delete
            </button>
             <button 
             onClick={ ()=>setOpen(false)}  
             className="  w-24 h-8 flex  items-center justify-center text-gray-700 bg-gray-200">
              Cancel
            </button>
          </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Products;
