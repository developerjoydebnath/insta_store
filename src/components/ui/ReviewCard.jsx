import React from 'react';
import StarFillIcon from '../../Icons/StarFillIcon';
import logo from '../../assets/Images/sweater-4.webp';

const ReviewCard = () => {
    return (
        <div>
            <div className="flex justify-start items-center gap-2">
                <div className="h-12 w-12 border rounded-full overflow-hidden border-primary p-1">
                    <img className="h-full w-full" src={logo} alt="" />
                </div>
                <div>
                    <h4 className="text-lg text-start ms-0.5">Alex Carry</h4>
                    <div className="flex justify-start">
                        <StarFillIcon className="h-4 w-4 fill-amber-500" />
                        <StarFillIcon className="h-4 w-4 fill-amber-500" />
                        <StarFillIcon className="h-4 w-4 fill-amber-500" />
                        <StarFillIcon className="h-4 w-4 fill-amber-500" />
                        <StarFillIcon className="h-4 w-4 fill-amber-500" />
                    </div>
                </div>
            </div>

            <p className="text-start text-sm mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita, nulla in recusandae, et
                deserunt minima eius officia dignissimos necessitatibus ullam cum ea fugiat molestias totam rem, tempora
                ex eos culpa doloribus quidem iste. Molestias, eius labore! Illum quae facere aperiam rem, error impedit
                quo libero, ex nulla, suscipit eligendi?
            </p>
            <div className="flex gap-2 mt-3">
                <div className="h-20 w-20 p-1">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
                <div className="h-20 w-20 p-1">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
            </div>
            <div>
                <h5 className="text-slate-500 text-start text-sm mt-3 italic">[ 5 April, 2023 ]</h5>
            </div>
        </div>
    );
};

export default ReviewCard;
