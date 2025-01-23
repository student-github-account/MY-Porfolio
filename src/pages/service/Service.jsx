
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
     useEffect(() => {
          AOS.init({
            duration: 1000,
            once: true,
          });
        }, []);
    return (
        <div className='bg-gray-900 text-white'>
            {/* <!-- Services Section --> */}
    <section className="container mx-auto py-16 px-8" id="services">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="zoom-in">My Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* <!-- Service 1 --> */}
            <div className="p-6 border border-gray-700 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors" data-aos="fade-right">
                <img src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737529171/images00_emjuuw.jpg" alt="Web Design" className="h-48 w-full object-cover rounded-lg mb-4"/>
                <p className="text-sm text-blue-500">01</p>
                <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
                <p className="text-gray-300 mb-6">
                    Crafting visually captivating designs that resonate with your audience and elevate your brand.
                    From wireframes to stunning layouts, we ensure your website stands out.
                </p>
                <NavLink to="#" className="text-blue-500 hover:underline">Learn more <i className="fas fa-arrow-right"></i></NavLink>
            </div>

            {/* <!-- Service 2 --> */}
            <div className="p-6 border border-gray-700 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors" data-aos="fade-left">
                <img src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737526005/images_1_yptpdm.jpg" alt="Development" className="h-48 w-full object-cover rounded-lg mb-4"/>
                <p className="text-sm text-blue-500">02</p>
                <h3 className="text-2xl font-semibold mb-4">Development</h3>
                <p className="text-gray-300 mb-6">
                    Building robust and efficient websites with a focus on performance, responsiveness, and user
                    experience. We bring your ideas to life using the latest technologies.
                </p>
                <NavLink to="#" className="text-blue-500 hover:underline">Learn more <i className="fas fa-arrow-right"></i></NavLink>
            </div>

            {/* <!-- Service 3 --> */}
            <div className="p-6 border border-gray-700 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors" data-aos="fade-right">
                <img src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737526006/170_qmkxu5.png" alt="E-Commerce Solutions" className="h-48 w-full object-cover rounded-lg mb-4"/>
                <p className="text-sm text-blue-500">03</p>
                <h3 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h3>
                <p className="text-gray-300 mb-6">
                    Creating feature-rich and user-friendly online stores. From inventory management to seamless
                    checkout processes, we help you sell online effortlessly.
                </p>
                <NavLink to="#" className="text-blue-500 hover:underline">Learn more <i className="fas fa-arrow-right"></i></NavLink>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Service;