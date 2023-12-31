import React from 'react';

const PreviousIcon = ({ className = '', ...props }) => {
    return (
        <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M539-262 341-460q-5-5-7-10t-2-11q0-6 2-11t7-10l199-199q9-9 21.5-9t21.5 9q9 9 8.5 22t-9.5 22L406-481l177 177q9 9 9 21t-9 21q-9 9-22 9t-22-9Z" />
        </svg>
    );
};

export default PreviousIcon;
