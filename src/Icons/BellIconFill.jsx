import React from 'react';

const BellIconFill = ({ className = '', ...props }) => {
    return (
        <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M190-200q-13 0-21.5-8.5T160-230q0-13 8.5-21.5T190-260h54v-306q0-82 49.5-148.5T424-798v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 83.5T717-566v306h53q13 0 21.5 8.5T800-230q0 13-8.5 21.5T770-200H190ZM480-80q-32 0-56-23.5T400-160h160q0 33-23.5 56.5T480-80Z" />
        </svg>
    );
};

export default BellIconFill;
