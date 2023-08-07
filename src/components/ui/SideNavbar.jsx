import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '../../Icons/CloseIcon';
import MinusIcon from '../../Icons/MinusIcon';
import PlusIcon from '../../Icons/PlusIcon';
import { menuItems } from '../../utils/MenuItems';

const SideNavbar = ({ className = '', onClick, setNavIsOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuId, setMenuId] = useState(null);

    // controlling the menu
    const handleItemClick = (id) => {
        if (id === menuId) {
            setMenuId(null);
            setIsOpen(!isOpen);
        } else {
            setIsOpen(true);
            setMenuId(id);
        }
    };

    // controlling the sub menu
    const handleSubItemClick = (id) => {
        setNavIsOpen(false);
        setIsOpen(false);
        setMenuId(null);
    };

    return (
        <div className={className}>
            <div className="h-full bg-white overflow-y-scroll ">
                <div className="bg-primary h-11 justify-between flex ps-4 pe-1 items-center fixed w-full top-0">
                    <h1 className="text-white">InstaStore</h1>
                    <div className="p-1 cursor-pointer" onClick={(e) => onClick && onClick(e)}>
                        <CloseIcon className="h-7 w-7 md:hidden" />
                    </div>
                </div>
                <div className="mt-12 mb-3">
                    <ul>
                        {menuItems.map((item) => (
                            <li className="border-b cursor-pointer" key={item.id}>
                                <div
                                    className="flex justify-between items-center"
                                    onClick={() => handleItemClick(item?.id)}
                                >
                                    <h1
                                        className={`py-2 ms-4 ${
                                            isOpen && menuId == item?.id ? 'text-primary' : 'text-[#666]'
                                        }`}
                                    >
                                        {item?.menu}
                                    </h1>
                                    {isOpen && menuId == item?.id ? (
                                        <MinusIcon className="h-6 w-6 me-2 fill-slate-500" />
                                    ) : (
                                        <PlusIcon className="h-6 w-6 me-2 fill-slate-500" />
                                    )}
                                </div>

                                {isOpen && menuId == item?.id && (
                                    <ul>
                                        {item?.sub?.length > 0 &&
                                            item.sub.map((sub) => (
                                                <li
                                                    className="border-t cursor-pointer"
                                                    key={sub.id}
                                                    onClick={() => handleSubItemClick(sub.id)}
                                                >
                                                    <Link to={sub.url} className="flex justify-between items-center">
                                                        <h1 className="py-2 text-start ps-10">{sub?.name}</h1>
                                                        {/* {isOpen && menuId == item?.id ? (
                                                            <MinusIcon className="h-6 w-6 me-2 fill-slate-400" />
                                                        ) : (
                                                            <PlusIcon className="h-6 w-6 me-2 fill-slate-400" />
                                                        )} */}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;
