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
    const WorkSection = context.selector("#Work-Section");
    const skillsSection = context.selector("#Skills-section");
    const contactSection = context.selector("#contact-section");
    const infoPercent = context.selector("#section-Scrolle-percent")[0];
    const workPercent = context.selector("#section-Scrolle-percent")[2];
    const skillsPercent = context.selector("#section-Scrolle-percent")[1];
    const contactPercent = context.selector("#section-Scrolle-percent")[3];
    ScrollTrigger.create({
      trigger: skillInfoSection,
      start: "top bottom",
      end: "bottom 20%",
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
        changeThemeTo("dark");
        gsap.set(navSection, {
          background: "linear-gradient(to bottom, #191b20 0%, #191b20 60%, #f3f4ef00 100%)"
        });
      },
      onLeaveBack: () => {
        gsap.set(navSection, {
          background: "transparent"
        });
      },
    });
    ScrollTrigger.create({
      trigger: skillsSection,
      start: "top bottom",
      end: "bottom 30%",
      onLeave:()=>{
        gsap.set(navSection, {
          background: "transparent"
        });
      },
      onEnterBack:()=>{
        gsap.set(navSection, {
          background: "linear-gradient(to bottom, #191b20 0%, #191b20 60%, #f3f4ef00 100%)",
        });
      }
    });
    ScrollTrigger.create({
      trigger: WorkSection,
      start: "top bottom",
      end: "bottom 20%",
      onLeave: () => {
        changeThemeTo("light");
      },
      onEnterBack: () => {
        changeThemeTo("dark");
        
      },
    });
    gsap.set(infoPercent,{
        x: "-101%",
    });
    gsap.set(workPercent,{
        x: "-101%",
    });
    gsap.set(skillsPercent,{
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
        onLeave: ()=>{
          gsap.to(infoPercent,{
            x:"101%"
          })
        }
      }
    });
    gsap.to(skillsPercent,{
      x: "0%",
      ease: "none",
      scrollTrigger:{
        trigger: skillsSection,
        start: "top 5%",
        end: "bottom 5%",
        scrub:true,
        onLeave: ()=>{
          gsap.to(skillsPercent,{
            x:"101%"
          })
        }
      }
    });
    gsap.to(workPercent,{
      x: "0%",
      ease: "none",
      scrollTrigger:{
        trigger: WorkSection,
        start: "top 5%",
        end: "bottom 50%",
        scrub:true,
        onLeave: ()=>{
          gsap.to(workPercent,{
            x:"101%"
          });
          context.selector("#section-Scrolle-percent").forEach(element => {
            gsap.set(element,{ backgroundColor: "#CFC4FE" });
          });
        },
        onEnterBack:()=>{
          context.selector("#section-Scrolle-percent").forEach(element => {
            gsap.set(element,{ backgroundColor: "#8348ff" });
          });
        }
      }
    });
    gsap.to(contactPercent,{
      x: "0%",
      ease: "none",
      scrollTrigger:{
        trigger: contactSection,
        start: "top 50%",
        end: "bottom 90%",
        scrub:true,
        onLeave: ()=>{
          gsap.to(contactPercent,{
            x:"101%"
          })
        }
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
