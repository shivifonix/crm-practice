import React, { useState, useEffect, use } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open,setOpen]=useState(false)
const [selectedUserId, setSelectedUserId] = useState(null);
  const userdata = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
      console.log(response.data)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userdata();
  }, []);

  const handlenavigate = () => {
    navigate("/addusers");
  };

  const handleDelete = async (id) => {
    setLoading(true);
    

    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      toast.success("User Deleted Successfully");
    } catch (err) {
      toast.error("Failed to delete users . Please try again");
      console.log("data not deleted");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editusers/${id}`);
  };

  return (
    <div className="px-4 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="p-4">
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

          <div className="flex flex-row gap-10 justify-start align-center ">
            <h2 className="flex-1 text-2xl font-semibold mb-6">Users List</h2>
            {/* <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600  " onClick={handlenavigate}>Add Users</button> */}
            <Button
              label="Add Users"
              onClick={handlenavigate}
              loading={false}
              className="px-3 py-1 mb-4 text-sm bg-sky-500 text-white rounded hover:bg-blue-600 w-24"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-md shadow-sm bg-white">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-3 border-b">Name</th>
                  <th className="px-4 py-3 border-b">Email</th>
                  <th className="px-4 py-3 border-b">Company name</th>
                  <th className="px-4 py-3 border-b">City</th>
                  <th className="px-4 py-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{user.name}</td>
                    <td className="px-4 py-2 border-b">{user.email}</td>
                    <td className="px-4 py-2 border-b">{user.company.name}</td>
                    <td className="px-4 py-2 border-b">{user.address.city}</td>
                    <td className="px-4 py-2 border-b  flex flex-col md:flex-row justify-center items-center gap-2 ">
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="flex px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 w-16"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="flex px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 w-16"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default Users;
