
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SplineModel from "../components/animations/SplineModel";
import LandingPageTransition from "../components/animations/LandingPageTransition";
import { useTheme } from "../hooks/useTheme";
import SEO from "../components/common/Seo";

export default function ErrorPage() {
  const navigate = useNavigate();
  // const [exit, setExit] = useState(false);
  const [loading,setLoading]=useState(true);
  const loadingPageRef = useRef(null);
  const {toggleTheme} = useTheme();
  useEffect(()=>{
    toggleTheme();
    return ()=>toggleTheme();
  },[toggleTheme]);
   const handleNavigate = (path) => {
      navigate(path);
  };
  return (
<>
    <SEO
        title="Page Not Found | Surya Vamsi Doddi"
        description="Oops! The page you’re looking for doesn’t exist. Return to the home page to explore Surya Vamsi Doddi’s portfolio and projects."
        url="https://suryavamsi.vercel.app/"
        image="https://suryavamsi.vercel.app/images/optimized/suryavamsi.avif"
        keywords="404 page, not found, Surya Vamsi Doddi portfolio, frontend developer, React, Tailwind CSS, GSAP"
      />
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-centen text-center">
      <LandingPageTransition ref={loadingPageRef} loading={loading}/>
      <SplineModel className={"z-0"} setLoading={setLoading}  url={"https://prod.spline.design/P4p1Oh7v7Mf5sbdh/scene.splinecode"}/>
      <div className="absolute inset-0 flex flex-col justify-around items-center">
        <button onClick={()=>{handleNavigate("/")}} className="absolute bottom-36 px-6 py-3 bg-linear-to-r from-[#E600FC] to-[#ff5bd3] text-white rounded-3xl font-semibold hover:cursor-pointer ">
          Go Home
        </button>
      </div>
      
    </div>
  </>
  );
}
