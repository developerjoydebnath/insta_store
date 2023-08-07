import React, { useEffect, useState } from 'react';
import NextIcon from '../../Icons/NextIcon';
import PreviousIcon from '../../Icons/PreviousIcon';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 20;
    const [renderButtons, setRenderButtons] = useState([]);
    // console.log(currentPage);
    // console.log(totalPages);

    useEffect(() => {
        const buttons = [];
        if (currentPage <= 3) {
            for (let i = 1; i < 5; i++) {
                buttons.push(i);
            }
        }
        if (currentPage > 3 && currentPage < totalPages - 3) {
            for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                buttons.push(i);
            }
        }

        if (currentPage >= totalPages - 3) {
            for (let i = totalPages - 4; i <= totalPages; i++) {
                buttons.push(i);
            }
        }

        setRenderButtons(buttons);
    }, [currentPage]);

    return (
        <div className="flex items-center gap-1 my-5">
            <span
                className={`hover:bg-gray-200 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md cursor-pointer ${
                    currentPage === 1 && 'pointer-events-none'
                }`}
                onClick={() => setCurrentPage((prev) => prev - 1)}
            >
                <PreviousIcon className="h-5 w-5" />
            </span>
            {
                // render dots
                renderButtons[0] > 1 && <span className="w-6 h-6 flex items-center justify-center text-sm">...</span>
            }

            {renderButtons.map((item) => (
                <button
                    key={item}
                    onClick={() => setCurrentPage(item)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md text-sm ${
                        item === currentPage ? 'bg-blue-500 text-blue-50' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                >
                    {item}
                </button>
            ))}

            {
                // render dots
                renderButtons[renderButtons.length - 1] < totalPages - 1 && (
                    <span className="w-6 h-6 flex items-center justify-center text-sm">...</span>
                )
            }
            <span
                className={`hover:bg-gray-200 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md cursor-pointer ${
                    currentPage === totalPages && 'pointer-events-none'
                }`}
                onClick={() => setCurrentPage((prev) => prev + 1)}
            >
                <NextIcon className="h-5 w-5" />
            </span>
        </div>
    );
};

export default Pagination;
