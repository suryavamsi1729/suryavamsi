"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import { useTheme } from '../../hooks/useTheme';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  // const {toggleTheme} = useTheme();

  useGSAP(() => {
    const section = sectionRef.current;
    gsap.set(section,{
      clipPath: "inset(50% 0%)",
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
            markers: true, 
        }
      }
    );
  }, {scope:sectionRef});

  return (
    <section ref={sectionRef} className="w-full  bg-[#191B20] px-6 md:px-12 lg:px-20 absolute inset-0">
      <div className="track-wrapper h-svh flex flex-col justify-center items-center">
        <h1 className="font-respira font-bold text-[180px] text-brand">About</h1>
      </div>
    </section>
  );
}
