"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from '../../hooks/useTheme';


export default function AboutTitle() {
  const sectionRef = useRef(null);
  const {changeThemeTo} = useTheme();

  useGSAP(() => {
    const section = sectionRef.current;
    gsap.set(section,{
      clipPath: "inset(50% 0%)",
    });
    gsap.set(".about-text",{
      opacity:0,
      scale:0.9,
    
    });
    gsap.to(
      section,
      {
        clipPath: "inset(0% 0%)",
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
            onUpdate : (self) => {
              if(self.progress>0.9){
                changeThemeTo("dark");
              }else{
                changeThemeTo("light");
              }
            }
        },
      }
    );
    gsap.to(".about-text",{
      opacity:1,
      scale:1,
      ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "bottom 80%",
            end: "bottom top",
            scrub: true,
        }
    });

  }, {scope:sectionRef});

  return (
    <section ref={sectionRef} className="w-full bg-[#191B20] px-6 md:px-12 lg:px-20 pointer-events-none absolute inset-0 z-20">
      <div className="track-wrapper h-svh flex flex-col justify-center items-center">
        <h1 id="aboutText" className="about-text font-respira font-bold text-8xl md:text-[120px] lg:text-[320px] tracking-tight text-brand">About</h1>
      </div>
    </section>
  );
}
