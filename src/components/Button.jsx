import React from "react";

const Button = ({ label, onClick, loading, className,type }) => {
    return (
        <button
            label={label}
            type={type}
            onClick={onClick}
            disabled={loading}
            className={className}
        >
            {loading ? "Loading..." : label}
        </button>
    );
};

export default Button;
