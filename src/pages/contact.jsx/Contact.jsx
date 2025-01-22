import React from 'react';
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center px-6 mt-4 mb-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full">
            {/* <!-- Profile Section --> */}
            <div className="relative bg-gray-800 text-white text-center p-12 rounded-lg shadow-xl mx-auto my-32 max-w-xl left-section">
                {/* <!-- Decorative Corners --> */}
                <div className="corner-decor top-left-decor w-24 h-24"></div>
                <div className="corner-decor bottom-right-decor w-24 h-24"></div>
            
                {/* <!-- Content --> */}
                <h2 className="text-5xl font-extrabold mt-16 text-white">MD Fahim</h2>
                <p className="text-2xl text-gray-400 mb-8">Frontend Developer</p>
                <p className="mb-4 text-lg">
                    <i className="fas fa-map-marker-alt mr-2 text-white"></i>
                    <strong>Location:</strong> 123, Main Street, City, Country
                </p>
                <p className="mb-4 text-lg">
                    <i className="fas fa-phone mr-2 text-white"></i>
                    <strong>Phone:</strong> +880 19330-62109
                </p>
                <p className="text-lg">
                    <i className="fas fa-envelope mr-2 text-white"></i>
                    <strong>Email:</strong> mdf17548@gmail.com
                </p>
            </div>

            {/* <!-- Contact Form and Social Links --> */}
            <div className="bg-black p-8 rounded-lg shadow-xl">
                {/* <!-- Contact Form --> */}
                <h3 className="text-3xl font-semibold mb-6 text-white">Get in Touch</h3>
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <input type="text" id="name" name="name" placeholder="Your Name" required 
                               className="w-full border border-gray-600 p-2 bg-gray-900 text-white text-lg" />
                    </div>
                    <div>
                        <input type="email" id="email" name="email" placeholder="Your Email" required 
                               className="w-full border border-gray-600 p-2 bg-gray-900 text-white text-lg" />
                    </div>
                    <div>
                        <textarea id="message" name="message" rows="5" placeholder="Message" required 
                                  className="w-full border border-gray-600 p-2 bg-gray-900 text-white text-lg"></textarea>
                    </div>
                    <button type="submit" 
                            className="bg-white text-black py-2 px-6 text-lg transition-all duration-300">
                        Send Message
                    </button>
                </form>

                {/* <!-- Social Media Links --> */}
                <h3 className="text-3xl font-semibold mt-12 mb-6 text-white">Follow Me</h3>
                <div className="grid grid-cols-3 gap-6">
                    <NavLink to="#" className="flex items-center justify-center text-xl text-white border border-gray-600 p-3 social-icon hover:text-white">
                        <FaFacebook />
                    </NavLink>
                    <NavLink to="#" className="flex items-center justify-center text-xl text-white border border-gray-600 p-3 social-icon hover:text-white">
                        <FaTwitter />
                    </NavLink>
                    <NavLink to="#" className="flex items-center justify-center text-xl text-white border border-gray-600 p-3 social-icon hover:text-white">
                        <FaInstagram />
                    </NavLink>
                    <NavLink to="#" className="flex items-center justify-center text-xl text-white border border-gray-600 p-3 social-icon hover:text-white">
                        <FaLinkedin />
                    </NavLink>
                    <NavLink to="#" className="flex items-center justify-center text-xl text-white border border-gray-600 p-3 social-icon hover:text-white">
                        < FaGithub />
                    </NavLink>
                    <NavLink to="#" className="flex items-center justify-center text-xl text-white border border-gray-600 p-3 social-icon hover:text-white">
                        <FaYoutube />
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Contact;