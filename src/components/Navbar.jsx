import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li className="text-lg text-white hover:text-[#e21266]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg text-white hover:text-[#e21266]">
        <NavLink to="/addCar">Add Car</NavLink>
      </li>
      <li className="text-lg text-white hover:text-[#e21266]">
        <NavLink to="/myListings">My Listings</NavLink>
      </li>
      <li className="text-lg text-white hover:text-[#e21266]">
        <NavLink to="/myBookings">My Bookings</NavLink>
      </li>
      <li className="text-lg text-white hover:text-[#e21266]">
        <NavLink to="/browseCars">Browse Cars</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gray-900 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rounded-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#e21266] rounded-box z-50 mt-5 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl text-white font-semibold text-center">
            Car Rental <br /> Platform
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/auth/login"
            className="btn bg-[#e21266] text-white font-bold border-2 border-white rounded-full hover:bg-white hover:text-[#e21266] mr-2"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="btn bg-[#e21266] text-white font-bold border-2 border-white rounded-full hover:bg-white hover:text-[#e21266]"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
