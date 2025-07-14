// import React from "react";
// import { RxCross2 } from "react-icons/rx";

// const Modal=({open,onClose,children})=>{
//     return(
//         <>            <div 
//             onClick={onClose}
//             className={`absolute fixed inset-0 flex justify-center items-center transition-colors 
//             ${open ? "visible bg-black/20 ":"invisible"}`}>
//                     <div 
//                     onClick={(e)=>e.stopPropagation()}
//                     className={`bg-white rounded-xl shadow p-6 transition-all
//                     ${open ?"scale-100 opacity-100" : "scale-125 opacity-0"}`}>
//                     <button 
//                     onClick={onClose}
//                     className="absolute top-2 right-2 p-1 rounded-lg bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-600">
//                         <RxCross2 />

//                     </button>
//                     {children}
//                     </div>
//             </div>
//             </>

        
//     );
// };
// export default Modal;

import React from "react";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ open, onClose, children }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 flex justify-center items-center transition-colors duration-300 ${
          open ? "visible bg-black/40" : "invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-white rounded-lg shadow-lg p-6 transition-all duration-300 w-[90%] max-w-md ${
            open ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <RxCross2 size={20} />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
