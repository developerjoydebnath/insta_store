import React from 'react';
import { Link } from 'react-router-dom';
import { allCategory } from '../../utils/MegaMenuItems';

const AllCategory = () => {
    return (
        <div className="absolute top-full group-hover:block hidden pt-1">
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 bg-base-100 drop-shadow-lg  p-5 rounded-b-lg">
                {allCategory &&
                    allCategory.map((item, index) => (
                        <div key={index} className="text-start">
                            <ul>
                                <li className="mb-5">
                                    <h3 className="font-medium text-primary cursor-default">{item.header}</h3>
                                    <ul>
                                        {item.links.map((link, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={link.link}
                                                    className="text-sm text-neutral my-1 hover:text-primary hover:ms-0.5"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AllCategory;
