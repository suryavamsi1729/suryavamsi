
import HeroSection from '../components/pagesSection/HeroSection';
import AboutSection from '../components/pagesSection/AboutSection';
import LandingPageTransition from '../components/animations/LandingPageTransition';
import { useRef, useState } from 'react';
import SplineModel from '../components/animations/SplineModel';
import AboutTitle from '../components/pagesSection/AboutTitle';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HomePage = () => {
    const loadingPageRef = useRef(null);
    const [loading,setLoading] = useState(true);
    const parentRef = useRef(null);
    useGSAP(()=>{
        const aboutText = parentRef.current.querySelectorAll("#aboutText")[0];
        const AboutSection = parentRef.current.querySelectorAll("#About-myself")[0];
        const infoSkillsSection = parentRef.current.querySelectorAll("#info-Skills-section")[0];
        const infoPercent = parentRef.current.querySelectorAll("#section-Scrolle-percent")[0];
        console.log(infoPercent);
        gsap.set(aboutText,{
            opacity:1,
        }); 
        
        gsap.to(aboutText,{
            opacity:0.1,
            ease: "power1.out",
            scrollTrigger:{
                trigger: infoSkillsSection,
                start: "top 80%",
                end: "top 20%",
                scrub:true,
            }
        })
    },{scope:parentRef});
    return (
        <>
            <LandingPageTransition ref={loadingPageRef} loading={loading}/>
            <SplineModel className={"z-0"} setLoading={setLoading}  url={"https://prod.spline.design/jR40IUSh8RJ0R38K/scene.splinecode"}/>
            <div ref={parentRef} className='relative w-full z-10'>
                <div className='sticky-trigger'>
                    <div className='sticky top-0'> 
                        <HeroSection loadingPageRef={loadingPageRef}/>
                        <AboutTitle/>
                    </div> 
                    <AboutSection/>
                </div>
                <div className='h-screen w-full'>

                </div>
            </div>   
        </>
        
    );
};

export default HomePage;