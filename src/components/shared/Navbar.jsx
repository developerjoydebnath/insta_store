import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../../Icons/CartIcon';
import CloseIcon from '../../Icons/CloseIcon';
import FavouriteIcon from '../../Icons/FavouriteIcon';
import MenuIcon from '../../Icons/MenuIcon';
import SearchIcon from '../../Icons/SearchIcon';
import UserIcon from '../../Icons/UserIcon';
import { useAuth } from '../../hooks/useAuth';
import UserNavigationDropdown from '../../ui/UserNavigationDropdown';
import UserSettingDropdown from '../../ui/UserSettingDropdown';
import CartSideBar from '../ui/CartSideBar';
import FavouriteSideBar from '../ui/FavouriteSideBar';
import Search from '../ui/Search';
import SideNavbar from '../ui/SideNavbar';
import SubNav from '../ui/SubNav';
import TopNav from '../ui/TopNav';

const Navbar = () => {
    const { user } = useAuth();
    const [searchText, setSearchText] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [sideNavOpen, setSideNavOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [favouriteItemsOpen, setFavouriteItemsOpen] = useState(false);
    const navbarRef = useRef(null);
    const cartBarRef = useRef(null);
    const favouriteBarRef = useRef(null);
    // const screenWidth = screen.width;
    const screenWidth = window.innerWidth;
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchText);
    };

    useEffect(() => {
        // add event listener to document to detect clicks outside of navbar
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [navbarRef]);

    useEffect(() => {
        // add event listener to document to detect clicks outside of navbar
        const handleOutsideClick = (event) => {
            if (cartBarRef.current && !cartBarRef.current.contains(event.target)) {
                setCartOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [cartBarRef]);

    useEffect(() => {
        // add event listener to document to detect clicks outside of navbar
        const handleOutsideClick = (event) => {
            if (favouriteBarRef.current && !favouriteBarRef.current.contains(event.target)) {
                setFavouriteItemsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [favouriteBarRef]);

    const handleMenuClick = () => {
        if (screenWidth < 768) {
            setIsOpen(!isOpen);
        } else {
            setIsOpen(false);
        }
    };
    const handleCartOpen = () => {
        if (screenWidth > 768) {
            setCartOpen(!cartOpen);
        } else {
            navigate('/cart');
        }
    };

    const handleFavouriteItemsOpen = () => {
        if (screenWidth > 768) {
            setFavouriteItemsOpen(!favouriteItemsOpen);
        } else {
            navigate('/favourite-items');
        }
    };

    return (
        <nav className="sticky top-0 drop-shadow-md z-50">
            <div className="bg-base-100 z-20 relative">
                <TopNav />
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex justify-between items-center md:py-5 py-3 px-3">
                        <div className="flex justify-center items-center gap-2 ">
                            <div className="p-1 cursor-pointer" onClick={handleMenuClick}>
                                {sideNavOpen ? (
                                    <CloseIcon className="h-7 w-7 md:hidden" />
                                ) : (
                                    <MenuIcon className="h-7 w-7 md:hidden" />
                                )}
                            </div>
                            <h1 className="font-bold text-3xl cursor-pointer" onClick={() => navigate('/')}>
                                InstaStore
                            </h1>
                        </div>
                        <Search
                            className="md:block hidden"
                            onClick={handleSearch}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <div className="flex justify-center items-center md:gap-1 gap-0">
                            <div className="md:hidden" onClick={() => setOpenSearch(!openSearch)}>
                                <SearchIcon className="" height="28" width="28" />
                            </div>

                            <div className="flex justify-center items-center user-div hover:cursor-pointer relative user-icon-div">
                                <UserIcon className="md:mx-2 mx-1 cursor-pointer md:h-6 md:w-6 h-5 w-5 user-icon md:block hidden" />
                                <UserIcon
                                    onClick={() => navigate(user ? '/user/account' : '/auth/login')}
                                    className="md:mx-2 mx-1 cursor-pointer md:h-6 md:w-6 h-5 w-5 user-icon md:hidden"
                                />

                                <div className={`inner-user-div  hidden ${user ? 'md:hidden' : 'md:block'}`}>
                                    <p className="text-[13px] text-start font-medium text-slate-500 -mb-1">Sing in</p>
                                    <p className="text-md text-start font-medium ">Account</p>
                                </div>
                                {user ? (
                                    <UserSettingDropdown className="absolute top-full right-0 w-64 h-12 user-dropdown pt-3 md:block hidden" />
                                ) : (
                                    <UserNavigationDropdown className="absolute top-full right-0 w-52 user-dropdown pt-3 md:block hidden" />
                                )}
                            </div>

                            {/* ============ favourite items start ================ */}
                            <div onClick={handleFavouriteItemsOpen} className="">
                                <FavouriteIcon className="md:mx-2 mx-1 cursor-pointer md:h-6 md:w-6 h-5 w-5 hover:fill-[#ff0000]" />
                            </div>

                            {/* =========== favourite items end ================  */}

                            {/*============= cart icon started ================= */}
                            <div
                                onClick={handleCartOpen}
                                className="flex justify-center items-center gap-1 cart-div hover:cursor-pointer"
                            >
                                <CartIcon className="mx-3 cursor-pointer md:h-6 md:w-6 h-5 w-5 cart-icon" />

                                <div className="inner-cart-div md:block hidden">
                                    <p className="text-[13px] text-start font-medium text-slate-500 -mb-1">Total:</p>
                                    <p className="text-md text-start font-medium ">$300.00</p>
                                </div>
                            </div>

                            {/* ============== cart icon end ================= */}
                        </div>
                    </div>
                </div>
                <SubNav />
                <div
                    className={`absolute inline-block md:hidden transition-all delay-150 ease-in-out -bottom-9 left-0 origin-top z-10 w-full h-8 ${
                        openSearch ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-0'
                    }`}
                >
                    <Search
                        className="block md:hidden mx-2"
                        onClick={handleSearch}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                {/* side navbar in mobile viewport */}
                <div ref={navbarRef}>
                    <SideNavbar
                        setNavIsOpen={setIsOpen}
                        onClick={handleMenuClick}
                        className={`absolute top-0 left-0 transition-all h-screen overflow-y-scroll w-64 delay-150 ease-in-out origin-left z-20 md:hidden ${
                            isOpen ? 'opacity-100 visible scale-x-100' : 'opacity-0 invisible scale-x-0'
                        }`}
                    />
                </div>
                <div
                    className={`absolute h-screen transition-all delay-150 ease-in-out w-full top-0 left-0 bg-[#5c5c5c67] z-10 ${
                        isOpen ? 'visible  opacity-100 md:invisible md:opacity-0' : 'invisible opacity-0'
                    }`}
                ></div>

                {/* side bar for cart in mobile devices */}
                <div ref={cartBarRef}>
                    <CartSideBar
                        setCartOpen={setCartOpen}
                        onClick={handleCartOpen}
                        className={`absolute w-[450px] z-20 top-0 right-0 md:block hidden transition-all delay-150 ease-in-out origin-right shadow-slate-500 shadow-2xl ${
                            cartOpen ? 'visible  opacity-100 scale-x-100' : 'invisible opacity-0 scale-x-0'
                        }`}
                    />
                </div>

                {/* side bar for favourite items in mobile devices */}
                <div ref={favouriteBarRef}>
                    <FavouriteSideBar
                        setFavouriteItemsOpen={setFavouriteItemsOpen}
                        onClick={handleFavouriteItemsOpen}
                        className={`absolute w-[450px] z-20 top-0 right-0 md:block hidden transition-all delay-150 ease-in-out origin-right shadow-slate-500 shadow-2xl ${
                            favouriteItemsOpen ? 'visible  opacity-100 scale-x-100' : 'invisible opacity-0 scale-x-0'
                        }`}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
