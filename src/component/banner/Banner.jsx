import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Animation happens only once
    });

    // Refresh AOS on window load
    window.addEventListener("load", AOS.refresh);
    return () => window.removeEventListener("load", AOS.refresh);
  }, []);

  return (
    <div>
      {/* <!-- Hero Section --> */}
      <section className="relative bg-gray-900">
        <div>
          <img
            src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737525773/A_minimalist_yhnen6.webp"
            alt="A minimalist design background"
            className="w-full h-[100vh] object-cover opacity-50"
            loading="lazy"
          />
        </div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 px-4"
          data-aos="zoom-in"
        >
          <h1 className="text-7xl md:text-5xl sm:text-4xl font-extrabold tracking-tight italic text-white">
            Web Designer & Developer
          </h1>
          <p className="text-3xl md:text-2xl sm:text-xl text-gray-300 max-w-xl">
            Delivering modern, elegant web designs and seamless user experiences
            tailored for your business.
          </p>
          <a
            href="https://drive.google.com/file/d/1Duws8o-isPr4eBQHZlVOrgESntmOXG0s/view?usp=sharing"
            aria-label="Download My CV"
          >
            <button className="px-6 py-3 text-sm font-semibold bg-white text-black rounded hover:bg-gray-200 transition duration-200">
              Download My CV
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Banner;
