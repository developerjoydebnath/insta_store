import React from 'react';

const BellIcon = ({ className = '', ...props }) => {
    return (
        <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
            <path d="M190 856q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190 796h54V490q0-82 49.5-148.5T424 258v-29q0-23 16.265-38 16.264-15 39.5-15Q503 176 519.5 191t16.5 38v29q81 17 131 83.5T717 490v306h53q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770 856H190Zm290-295Zm0 415q-32 0-56-23.5T400 896h160q0 33-23.5 56.5T480 976ZM304 796h353V490q0-75-50.5-126.5t-125-51.5q-74.5 0-126 51.5T304 490v306Z" />
        </svg>
    );
};

export default BellIcon;