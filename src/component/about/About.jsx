import React from 'react';


const About = () => {
    return (
        <div>
            {/* <!-- About Me Section --> */}
    <section className="bg-black container mx-auto py-16 px-8" id="about">
        <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-16">
            <div className="lg:w-1/2">
                <img src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737525683/Fahim1_smoothed_oekui9.jpg" alt="Profile" className="w-[420px] h-[420px] object-cover " data-aos="zoom-in"/>
            </div>
            <div className="lg:w-1/2" data-aos="zoom-in">
                <h3 className="text-3xl font-semibold text-white">Hello! I'm Md Fahim</h3>
                <p className="text-gray-300 mt-4 leading-relaxed">
                    "I am an enthusiastic web design and development intern passionate about creating modern, user-friendly, and visually stunning websites. With a strong foundation in HTML, CSS, TailwindCSS, and react, I specialize in crafting responsive designs that ensure seamless user experiences across devices. My goal is to help businesses thrive in the digital landscape by combining technical expertise with creative problem-solving. I am always eager to learn new technologies and collaborate on exciting projects to bring ideas to life."
                </p>
                <a href="/contact">
                <button className="mt-6 px-4 py-2 bg-white text-black rounded text-center">Contact Me</button>
                </a>
            </div>
        </div>
    </section>
        </div>
    );
};

export default About;