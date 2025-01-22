import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* <!-- Hero Section --> */}
    <section className="relative bg-gray-900 ">
        <div>
            <img src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737525773/A_minimalist_yhnen6.webp" alt="Hero Background" className="w-full h-[100vh] object-cover opacity-50"/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-7xl font-extrabold tracking-tight italic">Web Designer & Developer</h1>
            <p className="text-3xl text-gray-300 max-w-xl">
                Delivering modern, elegant web designs and seamless user experiences tailored for your business.
            </p>
            <a href="https://docs.google.com/document/d/1VRdhCMiIwmqu1PX5IF9l4lGHa_hM_CZ1/edit?usp=sharing&ouid=102578738151190019885&rtpof=true&sd=true"><button className="px-6 py-3 text-sm font-semibold bg-white text-black rounded hover:bg-gray-200">Download My CV</button></a>
        </div>
    </section>
        </div>
    );
};

export default Banner;