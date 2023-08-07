import React from 'react';

const LoadingIcon = ({ className = '', height = '', width = '' }) => {
    return (
        <svg
            className={className}
            id="Capa_1"
            enableBackground="new 0 0 497 497"
            height={height}
            viewBox="0 0 497 497"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <circle cx="98" cy="376" fill="#ff794d" r="53" />
                <circle cx="439" cy="336" fill="#ffb399" r="46" />
                <circle cx="397" cy="112" fill="#ffd9cc" r="38" />
                <ellipse cx="56.245" cy="244.754" fill="#ff6633" rx="56.245" ry="54.874" />
                <ellipse cx="217.821" cy="447.175" fill="#ff8c66" rx="51.132" ry="49.825" />
                <ellipse cx="349.229" cy="427.873" fill="#ff9f80" rx="48.575" ry="47.297" />
                <ellipse cx="117.092" cy="114.794" fill="#ff531a" rx="58.801" ry="57.397" />
                <ellipse cx="453.538" cy="216.477" fill="#ffc6b3" rx="43.462" ry="42.656" />
                <circle cx="263" cy="62" fill="#ff4000" r="62" />
            </g>
        </svg>
    );
};

export default LoadingIcon;
