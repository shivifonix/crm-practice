import React from "react";

const Card = ({ image, title, description,className }) => {
  return (

    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
    </div>
   
  );
};

export default Card;
