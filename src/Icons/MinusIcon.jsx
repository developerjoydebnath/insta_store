import React from 'react';

const MinusIcon = ({ className = '', onClick }) => {
    return (
        <svg
            onClick={() => onClick && onClick()}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
        >
            <path d="M200 606v-60h560v60H200Z" />
        </svg>
    );
};

export default MinusIcon;
