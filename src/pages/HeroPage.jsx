import React, { useState } from 'react';
import { LandingPageTransition,SplineModel } from '@animations';

const HeroPage = () => {
    const [loading,setLoading] = useState(true);
    return (
        <div className="relative min-h-screen flex flex-col bg-white text-white animate-wrapper">
            <LandingPageTransition loading={loading}/>
            <SplineModel setLoading={setLoading}  url={"https://prod.spline.design/jR40IUSh8RJ0R38K/scene.splinecode"}/>
        </div>
    );
};

export default HeroPage;