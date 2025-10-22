
import HeroSection from '../components/pagesSection/HeroSection';
import AboutSection from '../components/pagesSection/AboutSection';
import LandingPageTransition from '../components/animations/LandingPageTransition';
import { useRef, useState } from 'react';
import SplineModel from '../components/animations/SplineModel';
import AboutTitle from '../components/pagesSection/AboutTitle';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import WorkSection from '../components/pagesSection/WorkSection';
import SkillsSection from '../components/pagesSection/SkillsSection';
import ContactSection from '../components/pagesSection/ContactSection';
import { ScrollTrigger } from 'gsap/all';
import SEO from '../components/common/Seo';

const HomePage = () => {
    
    const loadingPageRef = useRef(null);
    const [loading,setLoading] = useState(true);
    const parentRef = useRef(null);
    useGSAP(()=>{
        const aboutText = parentRef.current.querySelectorAll("#aboutText")[0];
        const infoSkillsSection = parentRef.current.querySelectorAll("#info-Skills-section")[0]; 
        gsap.set(aboutText,{
            opacity:1,
            scale:1,
        });
        gsap.to(aboutText,{
            opacity:0.1,
            scale:1,
            ease: "power1.out",
            scrollTrigger:{
                trigger: infoSkillsSection,
                start: "top 80%",
                end: "top 20%",
                scrub:true,
                invalidateOnRefresh: true,
            }
        });
        window.addEventListener("load", () => {
            ScrollTrigger.refresh();
        });
    },{scope:parentRef});
    return (
        <>
            <SEO
                title="Surya Vamsi Doddi | Frontend Developer & AWS Cloud Practitioner"
                description="Portfolio of Surya Vamsi Doddi — building responsive, animated web experiences using React, Tailwind CSS, GSAP, and AWS Cloud."
                url="https://suryavamsi.vercel.app/"
            />
            <LandingPageTransition ref={loadingPageRef} loading={loading}/>
            <SplineModel className={"z-0"} setLoading={setLoading}  url={"https://prod.spline.design/jR40IUSh8RJ0R38K/scene.splinecode"}/>
            <div ref={parentRef} className='relative w-full z-10'>
                <div className='sticky-trigger'>
                    <div className='sticky top-0'> 
                        <HeroSection loadingPageRef={loadingPageRef}/>
                        <AboutTitle title={"About"}/>
                    </div> 
                    <AboutSection/>
                </div>
                <SkillsSection/>
                <WorkSection/>
                <ContactSection/>
            </div>   
        </>
        
    );
};

export default HomePage;