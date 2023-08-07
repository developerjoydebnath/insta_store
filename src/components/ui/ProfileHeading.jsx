import React from 'react';

const ProfileHeading = ({ heading }) => {
    return (
        <div className="text-start text-xl font-semibold border-b border-dashed border-gray-300 mb-5 pb-3">
            <h1>#{heading}</h1>
        </div>
    );
};

export default ProfileHeading;
