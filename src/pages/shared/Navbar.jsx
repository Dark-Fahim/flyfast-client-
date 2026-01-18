import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from '/assests/logo.png'

export default function FlyFastNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "hover:text-[#004A8F] dark:hover:text-[#FF7A00] transition";
  const activeClass = "text-[#004A8F] dark:text-[#FF7A00] font-semibold";

  return (
    <nav className="w-full bg-white dark:bg-[#0D1117] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div  className="flex items-center space-x-2">
            <Link to={'/'}><img className="h-10" src={logo} alt="" /></Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/coverage"
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              Coverage
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/be-rider"
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              Be a Rider
            </NavLink>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLink to="/login">
              <button className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Sign In
              </button>
            </NavLink>

            <NavLink to="/be-rider">
              <button className="px-5 py-2 rounded-lg bg-[#ff7a00] text-white font-semibold hover:bg-[#e66b00]">
                Be a Rider
              </button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0D1117] px-4 pb-4 space-y-3 mt-2 shadow">

          <NavLink to="/services" className={({ isActive }) =>
            `block py-2 text-center ${isActive ? activeClass : "text-gray-700 dark:text-gray-300"}`
          }>
            Services
          </NavLink>

          <NavLink to="/coverage" className={({ isActive }) =>
            `block py-2 text-center ${isActive ? activeClass : "text-gray-700 dark:text-gray-300"}`
          }>
            Coverage
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            `block py-2 text-center ${isActive ? activeClass : "text-gray-700 dark:text-gray-300"}`
          }>
            About Us
          </NavLink>

          <NavLink to="/pricing" className={({ isActive }) =>
            `block py-2 text-center ${isActive ? activeClass : "text-gray-700 dark:text-gray-300"}`
          }>
            Pricing
          </NavLink>

          

          <NavLink to="/signin">
            <button className="w-full mt-2 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
              Sign In
            </button>
          </NavLink>

          <NavLink to="/be-rider">
            <button className="w-full mt-2 py-2 rounded-lg bg-[#FF7A00] text-white font-semibold hover:bg-[#e66b00]">
              Be a Rider
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
}
