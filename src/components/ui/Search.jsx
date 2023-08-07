import React from 'react';
import SearchIcon from '../../Icons/SearchIcon';

const Search = ({ className = '', onClick, onChange }) => {
    return (
        <div className={`${className}`}>
            <div className="flex justify-center items-center xl:w-[600px] lg:w-[500px] md:w-[300px]">
                <input
                    className="border border-primary md:h-11 h-9 rounded-l outline-none ps-3 w-full"
                    placeholder="Search"
                    name="search"
                    type="text"
                    onChange={(e) => onChange && onChange(e)}
                />
                <span
                    onClick={() => onClick && onClick()}
                    className="md:h-11 h-9 rounded-r border border-primary bg-primary cursor-pointer md:w-11 w-8 flex items-center justify-center"
                >
                    <SearchIcon className="h-6 w-6" height="30" width="30" fill="white" />
                </span>
            </div>
        </div>
    );
};

export default Search;
