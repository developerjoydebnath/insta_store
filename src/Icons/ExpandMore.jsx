import React from 'react';

const ExpandMore = ({ className = '', ...props }) => {
    return (
        <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-357q-6 0-11-2t-10-7L261-564q-8-8-7.5-21.5T262-607q10-10 21.5-8.5T304-606l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501-366q-5 5-10 7t-11 2Z" />
        </svg>
    );
};

export default ExpandMore;
