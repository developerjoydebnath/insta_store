import React from 'react';

const NextIcon = ({ className = '', ...props }) => {
    return (
        <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M354-262q-8-10-8.5-22t8.5-21l176-176-177-177q-8-8-7.5-21.5T354-701q10-10 21.5-9.5T396-701l199 199q5 5 7 10t2 11q0 6-2 11t-7 10L397-262q-9 9-21 8.5t-22-8.5Z" />
        </svg>
    );
};

export default NextIcon;
