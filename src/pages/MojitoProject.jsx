import { MdArrowBack } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { Flip } from "gsap/all";

const MojitoProject = () => {
  const scopeRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [closeX, setCloseX] = useState("24.5rem"); // default for small screens
  const scrollSizeRef = useRef("24.5rem");

useEffect(() => {
  const mm = gsap.matchMedia(scopeRef.current);

  mm.add("(min-width: 1024px)", () => { 
    setCloseX("24.5rem");
    scrollSizeRef.current="24.5rem";
  });

  mm.add("(max-width: 1023px)", () => {
    setCloseX("100%");
    scrollSizeRef.current="100%";
  });

  return () => mm.revert();
}, []);

  useEffect(() => {
    const setWrapperHeight = () => {
      if (scrollTrackRef.current) {
        const scrollTrack = scrollTrackRef.current;
        const trackHeight = scrollTrack.scrollHeight;
        gsap.set(".scroll_wraper", {
          // height: `calc(${trackHeight}px + 100vh)`,
          height: trackHeight + window.innerHeight,
          // height: trackHeight,
        });
        // Tell GSAP to recalc all triggers
        ScrollTrigger.refresh();
      }
    };

    // Run once
    setWrapperHeight();

    // Run on resize
    window.addEventListener("resize", setWrapperHeight);

    // Run after images load
    window.addEventListener("load", setWrapperHeight);

    return () => {
      window.removeEventListener("resize", setWrapperHeight);
      window.removeEventListener("load", setWrapperHeight);
    };
  }, []);

  const {contextSafe} = useGSAP((context) => {
    // your animations here later
    const trigger = context.selector(".scroll_wraper")[0];
    const track = context.selector(".sticky-track")[0];
    const bottomSection = context.selector(".bottom-section")[0];
    const bottomSectionImage= context.selector(".bottomSectionImage")[0];
    const projectDetails = context.selector(".project-detiles")[0];
    // const state = Flip.getState(".project-detiles");
    gsap.set(track,{
        yPercent:0
    });
    gsap.set(bottomSectionImage,{
      scale:1.1
    });
    gsap.set(projectDetails, { x: 0 });
    ScrollTrigger.create({
      trigger:scopeRef.current,
      start:"2% top",
      onEnter:()=>{
        gsap.to(projectDetails,{
          x:scrollSizeRef.current,
          duration:0.6,
          ease:"power1.out"
        });
        setIsOpen(false);
      }
    });

    gsap.to(bottomSectionImage,{
      scale:1,
      ease: "none",
      scrollTrigger:{
        trigger:bottomSection,
        start:"bottom bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      }
    });
    gsap.to(track,{
        yPercent:-100,
         ease: "none",
        scrollTrigger:{
            trigger:trigger,
            start: "top top",
            end: "bottom bottom",
            scrub:true,
            invalidateOnRefresh: true,
        }
    });

  }, { scope: scopeRef,dependencies:[closeX] });
  const handelEnter = contextSafe(()=>{
    gsap.to(".project-detiles",{
      x:0,
      duration:0.6,
      ease:"power1.out"
    });
    setIsOpen(true);
  });
  const handelLeave = contextSafe(()=>{
    gsap.to(".project-detiles",{
      x:closeX,
      duration:0.6,
      ease:"power1.in"
    });
    setIsOpen(false);
  });
  const handleToggle = contextSafe(() => {
    gsap.killTweensOf(".project-detiles");
    gsap.to(".project-detiles", {
      x: isOpen ? closeX : 0, // toggle
      duration: 0.6,
      ease: "power1.inOut"
    });
    setIsOpen(!isOpen); // flip state
  });

  return (
    <div ref={scopeRef} className="relative w-full h-auto flex flex-col justify-start items-center">
      <div className="fixed top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 w-8 h-8 text-sm rounded bg-[#CEC4FE] flex flex-row justify-center items-center hover:cursor-pointer z-[999]">
        [<MdArrowBack className="h-4" />]
      </div>
      <div className="fixed inset-0 w-screen h-screen flex flex-row justify-end items-center pointer-events-none p-2 z-[900]">
        <div onMouseEnter={handelEnter} onMouseLeave={handelLeave} className="project-detiles w-auto h-full flex flex-row items-center pointer-events-auto">
          <div onClick={handleToggle} className="project-detile-handeler relative w-8 h-20 bg-[#F3F4EF] rounded-l shrink-0 flex flex-row justify-center items-center gap-1">
            <div className="top-border absolute -top-2 right-0 w-2 h-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 6 6" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M6 0C5.97799 3.31622 3.30304 5.99767 0.00649147 5.99767C0.00432909 5.99767 0.00216526 5.99768 0 5.99768H6V0Z" fill="#F3F4EF"></path></svg>
            </div>
            <div className="bottom-border absolute -bottom-2 right-0 w-2 h-2 rotate-270">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 6 6" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M6 0C5.97799 3.31622 3.30304 5.99767 0.00649147 5.99767C0.00432909 5.99767 0.00216526 5.99768 0 5.99768H6V0Z" fill="#F3F4EF"></path></svg>
            </div>
            <div className="w-[1px] h-6 bg-black "></div>
            <div className="w-[1px] h-6 bg-black "></div>
          </div>
          <div className="w-full lg:w-sm flex-1 h-full rounded bg-[#F3F4EF]">
          </div>
        </div>
      </div>
      <div className="relative w-full h-screen overflow-hidden flex flex-col justify-start items-center z-50">
        <img src={"/images/optimized/mojito.avif"} className="w-full h-full object-cover" />
      </div>
      <section className="w-full relative scroll_wraper">
        <div className="sticky_continer sticky top-0 w-full h-screen p-2 bg-[#F3F4F0]">
          <div className="stick_scroll_inner relative w-full h-full overflow-clip flex flex-col rounded">
            <div ref={scrollTrackRef} className="sticky-track relative flex flex-col flex-nowrap gap-2">
                <div className="w-full lg:h-screen relative overflow-hidden rounded">
                    <img src="/images/optimized/topsection.avif" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-12 md:p-24 lg:p-36 ">
                        <img src="/images/optimized/mojitoweb2.avif" className="w-full h-full object-contain"/>
                    </div>
                </div>
                <div className="relative w-full lg:h-screen overflow-hidden rounded ">
                    <img src="/images/optimized/secondsection.avif" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-12 md:p-24 lg:p-36 ">
                        <img src="/images/optimized/mojitoweb7.avif" className="w-full h-full object-contain"/>
                    </div>
                </div>
                <div className="relative w-full lg:h-screen overflow-hidden rounded mb-2">
                    <img src="/images/optimized/thirdsection.avif" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-12 md:p-24 lg:p-36 ">
                        <img src="/images/optimized/mojitoweb3.avif" className="w-full h-full object-contain"/>
                    </div>
                </div>
                <div className=" relative w-full lg:h-screen overflow-hidden rounded mb-2">
                    <img src="/images/optimized/mojitoweb6.avif" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-12 md:p-24 lg:p-36 ">
                        <img src="/images/optimized/mojitoweb4.avif" className="w-full h-full object-contain"/>
                    </div>
                </div>
                <div className="bottom-section absolute top-full overflow-hidden w-full h-[calc(100vh_-_16px)] rounded">
                    <img src="/images/optimized/drink4.avif" className="bottomSectionImage w-full h-full object-cover scale-110"/>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MojitoProject;
