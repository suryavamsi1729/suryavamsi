import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "../components/headers/AppHeader";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useTheme } from "../hooks/useTheme";


export default function AppRoutes() {
  const {changeThemeTo} = useTheme();
  const pageRef = useRef(null);
  useGSAP((context)=>{
    const navSection = context.selector("#nav-section");
    const skillInfoSection = context.selector("#info-Skills-section");
    const AboutSection = context.selector("#About-myself");
    const infoPercent = context.selector("#section-Scrolle-percent")[0];
    const workPercent = context.selector("#section-Scrolle-percent")[1];
    const archivePercent = context.selector("#section-Scrolle-percent")[2];
    const contactPercent = context.selector("#section-Scrolle-percent")[3];
    ScrollTrigger.create({
      trigger: skillInfoSection,
      start: "top bottom",
      end: "bottom 10%",
      onEnter: () => {
        gsap.set(navSection, {
          background: "linear-gradient(to bottom, #191b20 0%, #191b20 60%, #f3f4ef00 100%)",
        });
      },
      onEnterBack: () => {
        changeThemeTo("dark");
        gsap.set(navSection, {
          background: "linear-gradient(to bottom, #191b20 0%, #191b20 60%, #f3f4ef00 100%)",
        });
      },
      onLeave: () => {
        changeThemeTo("light");
        gsap.set(navSection, {
          background: "transparent"
        });

      },
      onLeaveBack: () => {
        gsap.set(navSection, {
          background: "transparent"
        });
      },
    })
    gsap.set(infoPercent,{
        x: "-101%",
    });
    gsap.set(workPercent,{
        x: "-101%",
    });
    gsap.set(archivePercent,{
        x: "-101%",
    });
    gsap.set(contactPercent,{
        x: "-101%",
    });
    gsap.to(infoPercent,{
      x: "0%",
      ease: "none",
      scrollTrigger:{
        trigger: AboutSection,
        start: "top top",
        end: "bottom 10%",
        scrub:true,
      }
    });
  
  },{scope:pageRef});
  return (
    <div ref={pageRef} className="overflow-clip">
      <Router>
        <AppHeader/>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </main>
      </Router>
    </div>
    
  );
}
