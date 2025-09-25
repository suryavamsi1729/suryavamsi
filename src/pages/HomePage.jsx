import { AppHeader } from '@headers'
import HeroSection from '../components/pagesSection/HeroSection';
import AboutSection from '../components/pagesSection/AboutSection';
import { FaCode, FaUsers, FaLightbulb } from "react-icons/fa";

const HomePage = () => {
    return (
        <>
            
            <div className='relative w-full'>
                <div className='sticky-trigger'>
                    <div className='sticky top-0 h-screen'>
                        <HeroSection/>
                        <AboutSection/>
                    </div>
                    <div className='mt-[100vh] h-screen'>
                        <h1 className='text-8xl text-white'>surya </h1>
                    </div>
                </div>
                <div className='h-screen w-full'>

                </div>
            </div>   
        </>
        
    );
};

export default HomePage;