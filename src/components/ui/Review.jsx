import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    return (
        <div>
            <div className="border-b border-dashed py-5">
                <ReviewCard />
            </div>
            <div className="border-b border-dashed py-5">
                <ReviewCard />
            </div>
            <div className="border-b border-dashed py-5">
                <ReviewCard />
            </div>
            <div className="border-b border-dashed py-5">
                <ReviewCard />
            </div>
            <div className="border-b border-dashed py-5">
                <ReviewCard />
            </div>
        </div>
    );
};

export default Review;
