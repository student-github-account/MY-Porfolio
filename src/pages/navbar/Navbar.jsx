import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // State to manage the open/close of the mobile menu
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-transparent opacity-80 shadow-lg z-50">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737525683/Fahim1_smoothed_oekui9.jpg"
                alt="Logo"
                className="rounded-full h-10 w-10"
              />
              <span className="text-lg font-semibold text-white">Md Fahim</span>
            </a>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="sm:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setOpen(!open)} // Toggle the open state
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" // X Icon (close)
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7" // Hamburger (open)
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center space-x-6">
            <li>
              <NavLink
                className="text-sm font-medium text-gray-300 hover:text-white"
                to="/service"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm font-medium text-gray-300 hover:text-white"
                to="/work"
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm font-medium text-gray-300 hover:text-white"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm font-medium text-gray-300 hover:text-white"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm font-medium text-gray-300 hover:text-white"
                to="https://docs.google.com/document/d/1VRdhCMiIwmqu1PX5IF9l4lGHa_hM_CZ1/edit?usp=sharing&ouid=102578738151190019885&rtpof=true&sd=true"
                target="_blank"
              >
                CV
              </NavLink>
            </li>
          </ul>

          {/* Contact Button (Desktop) */}
          <a href="/contact" className="hidden sm:block">
            <button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-md">
              Contact Me
            </button>
          </a>
        </div>

        {/* Mobile Menu (When Open) */}
        {open && (
          <div className="sm:hidden bg-black opacity-95">
            <ul className="flex flex-col space-y-4 py-4 px-4">
              <li>
                <NavLink
                  className="text-sm font-medium text-gray-300 hover:text-white"
                  to="/service"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-sm font-medium text-gray-300 hover:text-white"
                  to="/work"
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-sm font-medium text-gray-300 hover:text-white"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-sm font-medium text-gray-300 hover:text-white"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-sm font-medium text-gray-300 hover:text-white"
                  to="https://docs.google.com/document/d/1VRdhCMiIwmqu1PX5IF9l4lGHa_hM_CZ1/edit?usp=sharing&ouid=102578738151190019885&rtpof=true&sd=true"
                  target="_blank"
                >
                  CV
                </NavLink>
              </li>
              <li>
                <a href="/contact">
                  <button className="w-full px-4 py-2 text-sm font-medium bg-white text-black rounded-md">
                    Contact Me
                  </button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
