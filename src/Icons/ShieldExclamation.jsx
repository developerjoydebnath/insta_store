import React from 'react';

const ShieldExclamation = ({ className = '', ...props }) => {
    return (
        <svg
            className={className}
            {...props}
            id="Layer_1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
        >
            <path d="m12 15a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1zm.793 8.76c2.16-.868 9.207-4.281 9.207-11.717v-5.171a4.993 4.993 0 0 0 -3.426-4.746l-6.259-2.075a.985.985 0 0 0 -.63 0l-6.259 2.075a4.993 4.993 0 0 0 -3.426 4.746v5.171c0 6.562 7.005 10.576 9.153 11.65a4.628 4.628 0 0 0 .847.307 4.5 4.5 0 0 0 .793-.24zm5.151-19.736a3 3 0 0 1 2.056 2.848v5.171c0 6.183-6.087 9.111-7.953 9.861-1.888-.944-8.047-4.445-8.047-9.861v-5.171a3 3 0 0 1 2.056-2.848l5.944-1.97zm-5.944 12.976a1 1 0 1 0 1 1 1 1 0 0 0 -1-1z" />
        </svg>
    );
};

export default ShieldExclamation;