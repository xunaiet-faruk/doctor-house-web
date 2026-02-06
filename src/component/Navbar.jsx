import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'
const Navbar = () => {
    const links =<>
    
    <NavLink to={'/'}>
        Home
    </NavLink>
    <NavLink to={'/booking'}>
        My Bookings
    </NavLink>
    <NavLink to={'/da'}>
        Blogs
    </NavLink>
    <NavLink to={'/da'}>
        Contact
    </NavLink>

    </>
    return (
        <div>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>
                   <img className='w-[100px]' src="/public/Frame 1.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1  text-[16px] font-semibold gap-16">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-blue-500 text-white rounded-xl">Emergancy</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;