import React from 'react';
import LoadingIcon from '../Icons/LoadingIcon';

const Loading = ({ className, height, width, divClassName }) => {
    return (
        <div className={divClassName}>
            <LoadingIcon className={`rotate ${className}`} height={height} width={width}></LoadingIcon>
        </div>
    );
};

export default Loading;
