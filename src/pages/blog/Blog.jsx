
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Blog = () => {
    useEffect(() => {
              AOS.init({
                duration: 1000,
                once: true,
              });
            }, []);
    return (
        <div className="bg-gray-900 text-white">
            <section className="container mx-auto py-12 px-6" id="blogs">
        <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="zoom-in">Latest Blogs</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* <!-- Blog Card 1 --> */}
            <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow" data-aos="zoom-in">
                <NavLink to="#" className="block aspect-video overflow-hidden rounded-t-lg">
                    <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737526010/U_m4vbws.jpg" alt="Blog Image" />
                </NavLink>
                <div className="p-5">
                    <NavLink to="#">
                        <h5 className="mb-2 text-2xl font-bold text-white">Understanding the Basics of Web Development</h5>
                    </NavLink>
                    <p className="mb-3 text-gray-400">Web development is at the core of modern digital innovation. Learn how to start your journey into this exciting field.</p>
                    <NavLink to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black text-white rounded-lg hover:bg-gray-700">
                        Read More
                    </NavLink>
                </div>
            </div>

            {/* <!-- Blog Card 2 --> */}
            <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow" data-aos="zoom-in">
                <NavLink to="#" className="block aspect-video overflow-hidden rounded-t-lg">
                    <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737526006/15_d9hywn.jpg" alt="Blog Image" />
                </NavLink>
                <div className="p-5">
                    <NavLink to="#">
                        <h5 className="mb-2 text-2xl font-bold text-white">The future of AI and machine learning</h5>
                    </NavLink>
                    <p className="mb-3 text-gray-400">Exploring the advancements and future trends in AI and machine learning.</p>
                    <NavLink to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black text-white rounded-lg hover:bg-gray-700">
                        Read More
                    </NavLink>
                </div>
            </div>

            {/* <!-- Blog Card 3 --> */}
            <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow" data-aos="zoom-in">
                <NavLink to="#" className="block aspect-video overflow-hidden rounded-t-lg">
                    <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737526006/170_qmkxu5.png" alt="Blog Image" />
                </NavLink>
                <div className="p-5">
                    <NavLink to="#">
                        <h5 className="mb-2 text-2xl font-bold text-white">Top web design trends in 2024</h5>
                    </NavLink>
                    <p className="mb-3 text-gray-400">A roundup of the most popular web design trends of the year.</p>
                    <NavLink to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black text-white rounded-lg hover:bg-gray-700">
                        Read More
                    </NavLink>
                </div>
            </div>

        </div>
    </section>
        </div>
    );
};

export default Blog;