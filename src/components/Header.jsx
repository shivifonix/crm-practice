// import React from 'react';
// import { HiOutlineBell, HiOutlineChevronDown } from 'react-icons/hi';
// import avatar from "../images/avatar.png";
// export default function Header() {
//   return (
//     <div className='space-y-2'>
//     <div className="flex items-center justify-end px-6 py-4 bg-white border">
     
//       <div className="flex items-center space-x-4">
//         <button className="relative text-gray-600 hover:text-gray-800">
//           <HiOutlineBell className="h-6 w-6" />
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
//             3
//           </span>
//         </button>

//         <div className="flex items-center cursor-pointer space-x-1 text-gray-600 hover:text-gray-800">
//           <img src={avatar} alt="Profile" className="h-8 w-8 rounded-full" />
//           <HiOutlineChevronDown className="h-5 w-5" />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineBell, HiOutlineChevronDown } from 'react-icons/hi';
import avatar from "../images/avatar.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    setOpen(false);
    // Add your logout logic here
  };

  return (
    <div className='relative flex items-center justify-end px-6 py-4 bg-white border-b'>
      <button className="relative text-gray-600 hover:text-gray-800 mr-4">
        <HiOutlineBell className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">3</span>
      </button>

      <div ref={menuRef} className="relative">
        <button
          onClick={() => setOpen(prev => !prev)}
          className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
        >
          <img src={avatar} alt="Profile" className="h-8 w-8 rounded-full" />
          <HiOutlineChevronDown className="h-5 w-5" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border py-1 z-10">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
