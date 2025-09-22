import { AppHeader } from '@headers'
import HeroSection from '../components/pagesSection/HeroSection';

const HomePage = () => {
    return (
        <>
            <AppHeader/>
            <main>
                <HeroSection/>
            </main>
        </>
        
    );
};

export default HomePage;