import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

const LandingPageTransition = ({loading}) => {
  const tlRef = useRef();
  useGSAP(
    (context) => {
      const wrapper = context.selector(".transition-container")[0];

      tlRef.current = gsap.timeline({
        paused: true,
        onComplete: () => {
          console.log("animation completed");
          gsap.to(wrapper, { display: "none", duration: 0.8 });
        },
      });

      tlRef.current.to(context.selector(".top-column"), {
        y: "-100%",
        duration: 0.4,
        stagger: { each: 0.06, from: "start" },
        ease: "power2.in",
      }, 0);

      tlRef.current.to(context.selector(".bottom-column"), {
        y: "100%",
        duration: 0.4,
        stagger: { each: 0.06, from: "start" },
        ease: "power2.in",
      }, 0);
    },
    { scope: ".animate-wrapper" } 
  );
  useEffect(()=>{
    if(!loading && tlRef.current){
      tlRef.current.play();
    }
  },[loading,tlRef]);

  return (
      <div className="absolute top-0 left-0 w-full h-screen grid grid-cols-6 cursor-pointer transition-container z-50">
        {[...Array(6)].map((_, i) => (
          <div key={`top-${i}`} className="top-column h-[50vh] bg-brand"></div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div key={`bottom-${i}`} className="bottom-column h-[50vh] bg-brand"></div>
        ))}
      </div>
    
  );
};

export default LandingPageTransition;
