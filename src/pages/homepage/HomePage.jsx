import React from 'react';
import Banner from '../../component/banner/Banner.jsx';
import Skill from '../../component/skills/Skill.jsx';
import Service from '../../component/Service/Service.jsx';
import Work from '../../component/work/Work.jsx';
import About from '../../component/about/About.jsx';
import Image from '../../component/backgroundimage/Image.jsx';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Skill></Skill>
            <Service></Service>
            <Work></Work>
            <About></About>
            <Image></Image>
        </div>
    );
};

export default HomePage;