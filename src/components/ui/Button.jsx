import React from 'react';

const Button = ({ className = '', type, children, onClick }) => {
    return (
        <button
            onClick={() => onClick && onClick()}
            className={`btn rounded-full font-semibold ${className}`}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
