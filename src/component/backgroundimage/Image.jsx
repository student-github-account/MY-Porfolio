import React from 'react';

const Image = () => {
    return (
        <div>
            <div className="relative bg-black">
        {/* <!-- Background Image --> */}
        <div>
            <img src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737525773/A_minimalist_yhnen6.webp" alt="Background" className="w-full h-[100vh] object-cover opacity-50"/>
        </div>
        {/* <!-- Content Overlay --> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-7xl font-extrabold tracking-tight italic">Let’s make your <br/>Website shine</h1>
            <p className="text-3xl text-white max-w-xl">
                Premium web design, development, to help your business stand out.
            </p>
            <a href="/contact">
            <button className="px-6 py-3 text-sm font-semibold bg-white text-black rounded hover:bg-gray-200">
                Learn More
            </button>
            </a>
        </div>
    </div>
        </div>
    );
};

export default Image;