
import React from "react";
const Input=({
    type,placeholder,value,onChange,icon,name,id,className
})=>{
    return(
        <>
        <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
       
        icon={icon}
        name={name}
        id={id}
        className={className}
        />
        </>
    );
};

export default Input;