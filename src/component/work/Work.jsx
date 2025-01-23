import React from 'react';

const Work = () => {
    return (
        <div>
            {/* <!-- Selected Work Section --> */}
    <section className="container bg-black mx-auto py-16 px-8" id="work">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="p-4 border border-gray-700 bg-gray-800 rounded-lg shadow-lg" data-aos="flip-left">
                <img src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737525858/r_pxxnj8.jpg" alt="Work" className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="py-4">
                    <h3 className="text-xl font-semibold">Rahman & Sons Group</h3>
                    <p className="text-gray-300">2024</p>
                </div>
            </div>
            <div className="p-4 border border-gray-700 bg-gray-800 rounded-lg shadow-lg" data-aos="flip-right">
                <img src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737526591/670_heazbz.png" alt="Work" className="w-full h-64 object-cover rounded-t-lg"/>
                <div className="py-4">
                    <h3 className="text-xl font-semibold">Nextfit Multivendor Project</h3>
                    <p className="text-gray-300">2025</p>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Work;