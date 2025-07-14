
import React from "react";
const Input=({
    type,placeholder,value,onChange,errorMessage,icon,name,id,className
})=>{
    return(
        <>
        <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        errorMessage={errorMessage}
        icon={icon}
        name={name}
        id={id}
        className={className}
        />
        </>
    );
};

export default Input;