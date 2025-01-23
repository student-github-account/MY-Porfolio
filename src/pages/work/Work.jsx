
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
    return (
        <div className="bg-gray-900 text-white">
        <section className="container mx-auto py-12 px-4">
          <div className="text-center mb-10" data-aos="zoom-in">
            <h1 className="text-7xl font-semibold text-white mb-4 leading-tight italic">Work</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              My latest web design projects and see <br /> how we can help bring your ideas to life.
            </p>
          </div>
      
          {/* Work Section */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Work Item 1 */}
            <div className="p-4 border border-gray-700 bg-black rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"data-aos="flip-left">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737525858/r_pxxnj8.jpg"
                alt="Rahman & Sons Group"
                className="w-full h-64 object-cover rounded-md mb-4"
                loading="lazy"
              />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Rahman & Sons Group</h3>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-calendar-alt"></i>
                  <span>2024</span>
                </div>
              </div>
            </div>
      
            {/* Work Item 2 */}
            <div className="p-4 border border-gray-700 bg-grey-900 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"data-aos="flip-right">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737526591/670_heazbz.png"
                alt="Nextfit Multivendor Project"
                className="w-full h-64 object-cover rounded-md mb-4"
                loading="lazy"
              />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Nextfit Multivendor Project</h3>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-calendar-alt"></i>
                  <span>2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* Background Section */}
        <section className="relative bg-black">
          {/* Background Image */}
          <div>
            <img
              src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737525773/A_minimalist_yhnen6.webp"
              alt="Minimalist Background"
              className="w-full h-[100vh] object-cover opacity-50"
              loading="lazy"
            />
          </div>
      
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-7xl font-extrabold tracking-tight italic" data-aos="zoom-in">
              Let’s make your <br /> Website shine
            </h1>
            <p className="text-3xl text-white max-w-xl" data-aos="zoom-in">
              Premium web design, development, to help your business stand out.
            </p>
            <button className="px-6 py-3 text-sm font-semibold bg-white text-black rounded hover:bg-gray-200" data-aos="zoom-in">
              Learn More
            </button>
          </div>
        </section>
      </div>
      
    );
};

export default Work;