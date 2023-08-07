import React from 'react';

const LoginIcon = ({ className = '' }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
            <path d="M390 729q-9-9-9-21.75t9-21.25l80-80H150q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150 546h318l-81-81q-8-8-8-20.447 0-12.448 9.214-21.5Q396.661 414 409.33 414q12.67 0 21.67 9l133 133q5 5 7 10.133 2 5.134 2 11Q573 583 571 588q-2 5-7 10L432 730q-8 8-20.5 8t-21.5-9Zm129 207q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T519 876h261V276H519q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T519 216h261q24 0 42 18t18 42v600q0 24-18 42t-42 18H519Z" />
        </svg>
    );
};

export default LoginIcon;