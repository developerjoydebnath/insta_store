import React from 'react';

const CloseIcon = ({ className = '' }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="white">
            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
        </svg>
    );
};

export default CloseIcon;
