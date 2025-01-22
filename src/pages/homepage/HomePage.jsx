import React from 'react';
import Banner from '../../component/banner/Banner';
import Skill from '../../component/skills/Skill';
import Service from '../../component/Service/Service';
import Work from '../../component/work/Work';
import About from '../../component/about/About';
import Image from '../../component/backgroundimage/Image';

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