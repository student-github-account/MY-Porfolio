import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer Section --> */}
    <footer className="bg-tranparent opacity-80 py-8 border-t border-gray-700">
        <div className="container mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-6">
                <NavLink to="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook-f"></i></NavLink>
                <NavLink to="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></NavLink>
                <NavLink to="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin-in"></i></NavLink>
                <NavLink to="#" className="text-gray-300 hover:text-white"><i className="fab fa-github"></i></NavLink>
            </div>
            <p className="text-gray-300 text-sm">&copy; 2025 Md Fahim | All Rights Reserved</p>
        </div>
    </footer>
        </div>
    );
};

export default Footer;