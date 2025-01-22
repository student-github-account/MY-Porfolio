import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
  return (
    <div>
    {/* <!-- Services Section --> */}
    <section className="container bg-black mx-auto py-16 px-8" id="services">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My Services
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Service 1 */}
        <div
          className="p-6 border border-gray-700 bg-gray-800 rounded-lg shadow-lg"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <p className="text-sm text-white">01</p>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Web Design
          </h3>
          <p className="text-gray-300 mb-6">
            Crafting visually captivating designs that resonate with your
            audience and elevate your brand.
          </p>
          <NavLink
            to="/service"
            className="flex items-center text-white hover:underline"
          >
            <span>Learn more</span>
            <FaArrowRight className="ml-1" />
          </NavLink>
        </div>
  
        {/* Service 2 */}
        <div
          className="p-6 border border-gray-700 bg-gray-800 rounded-lg shadow-lg"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <p className="text-sm text-white">02</p>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Development
          </h3>
          <p className="text-gray-300 mb-6">
            Building robust and efficient websites with a focus on performance
            and user experience.
          </p>
          <NavLink
            to="/service"
            className="flex items-center text-white hover:underline"
          >
            <span>Learn more</span>
            <FaArrowRight className="ml-1" />
          </NavLink>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Service;
