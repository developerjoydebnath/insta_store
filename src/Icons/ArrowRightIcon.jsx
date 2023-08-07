import React from 'react';

const ArrowRightIcon = ({ className = '', ...props }) => {
    return (
        <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="m375-240-43-43 198-198-198-198 43-43 241 241-241 241Z" />
        </svg>
    );
};

export default ArrowRightIcon;
