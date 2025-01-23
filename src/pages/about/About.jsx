
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {
    useEffect(() => {
                  AOS.init({
                    duration: 1000,
                    once: true,
                  });
                }, []);
    return (
        <div className="bg-gray-900 text-white">
            <div className="w-full lg:w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-4 mt-4">
        {/* <!-- Left Side (Image) --> */}
        <div className="left-side bg-gray-800 flex items-center justify-center" data-aos="zoom-in">
            <img src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737525683/Fahim1_smoothed_oekui9.jpg" alt="MD Fahim" className="rounded-lg max-h-screen max-w-full object-cover shadow-lg"/>
        </div>

        {/* <!-- Right Side (Text Content) --> */}
        <div className="right-side bg-black flex flex-col justify-start" data-aos="zoom-in">
            {/* <!-- Introduction Section --> */}
            <div>
                <h1 className="text-3xl lg:text-4xl font-bold mt-6 text-white">MD Fahim</h1>
                <p className="mt-4 text-base lg:text-lg">Delivering Premium Web Design and Development Services to Boost Your Online Presence.</p>
            </div>

            {/* <!-- Content Section --> */}
            <div className="bg-gray-800 p-6 lg:p-8 rounded-lg shadow-xl mt-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white">MD Fahim</h3>
                <h1 className="text-2xl lg:text-4xl font-bold mt-4">Your Partner in Bringing Your Web Design Vision to Life</h1>
                <p className="mt-6 text-base lg:text-lg leading-relaxed">
                    As an intern in the rapidly evolving field of web development, I am passionate about crafting engaging, functional, and visually appealing websites. With a deep understanding of both front-end and back-end technologies, I strive to create user-friendly designs that bring business visions to life.
                </p>
                <p className="mt-4 text-base lg:text-lg leading-relaxed">
                    I work tirelessly to deliver projects that not only look great but also function seamlessly, ensuring that every site I build meets the unique needs of clients while adhering to the best development practices.
                </p>
                <p className="mt-4 text-base lg:text-lg leading-relaxed">
                    I’m here to help you make your online presence stand out. Let's work together to create something amazing!
                </p>
            </div>

            {/* <!-- Social Media Links --> */}
            <div>
                <h3 className="text-2xl lg:text-3xl font-semibold mt-12 mb-6 text-white">Follow Me</h3>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                    <NavLink  to="#" aria-label="Follow me on Facebook" className="flex items-center justify-center text-xl text-white bg-gray-800 border border-gray-700 p-4 rounded-full social-icon">
                    <FaFacebook />
                    </NavLink>
                    <NavLink  to="#" aria-label="Follow me on Twitter" className="flex items-center justify-center text-xl text-white bg-gray-800 border border-gray-700 p-4 rounded-full social-icon">
                    <FaTwitter />
                    </NavLink>
                    <NavLink  to="#" aria-label="Follow me on Instagram" className="flex items-center justify-center text-xl text-white bg-gray-800 border border-gray-700 p-4 rounded-full social-icon">
                    <FaInstagram />
                    </NavLink>
                    <NavLink  to="#" aria-label="Follow me on LinkedIn" className="flex items-center justify-center text-xl text-white bg-gray-800 border border-gray-700 p-4 rounded-full social-icon">
                    <FaLinkedin />
                    </NavLink>
                    <NavLink  to="#" aria-label="Follow me on GitHub" className="flex items-center justify-center text-xl text-white bg-gray-800 border border-gray-700 p-4 rounded-full social-icon">
                    <FaGithub />
                    </NavLink>
                    <NavLink  to="#" aria-label="Follow me on YouTube" className="flex items-center justify-center text-xl text-white bg-gray-800 border border-gray-700 p-4 rounded-full social-icon">
                    <FaYoutube />
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default About;