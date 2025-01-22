import React from 'react';

const Skill = () => {
    return (
        <div>
               {/* <!-- Skills Section --> */}
<section className="container bg-black mx-auto py-16 px-8" id="skills">
    <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
    <div className="overflow-hidden">
        <div className="flex gap-6 animate-scroll">
            <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">HTML</h3>
            </div>
            <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">CSS</h3>
            </div>
            <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">TailwindCSS</h3>
            </div>
            <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">Django</h3>
            </div>
            <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">REST API</h3>
            </div>
            <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">React</h3>
            </div>
            <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">Git</h3>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Skill;