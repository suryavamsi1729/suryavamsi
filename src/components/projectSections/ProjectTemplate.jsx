import { MdArrowBack, MdArrowOutward } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { Link, useNavigate } from "react-router-dom";

const ProjectTemplate = ({project}) => {
  const navigate = useNavigate();
  const scopeRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [closeX, setCloseX] = useState("24.5rem"); // default for small screens
  const scrollSizeRef = useRef("24.5rem");
  const [media,setMedia] = useState("desktop");

  useEffect(() => {
    const mm = gsap.matchMedia(scopeRef.current);

    const updateHeight = () => {
      const contentTarget = document.querySelector("#project-content");
      if (!contentTarget) return;
      const targetHeight = contentTarget.clientHeight;
      setCloseX(window.innerWidth >= 1024 ? "25rem" : `${targetHeight}px`);
      setMedia(window.innerWidth >= 1024 ? "desktop" : "mobile");
      scrollSizeRef.current = window.innerWidth >= 1024 ? "25rem" : `${targetHeight}px`;
    };

    window.addEventListener("load", updateHeight); // wait for all content to load
    window.addEventListener("resize", updateHeight); // handle resize too

    mm.add("(min-width: 1024px)", updateHeight);
    mm.add("(max-width: 1023px)", updateHeight);

    return () => {
      mm.revert();
      window.removeEventListener("load", updateHeight);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);


  useEffect(() => {
    const setWrapperHeight = () => {
      if (scrollTrackRef.current) {
        const scrollTrack = scrollTrackRef.current;
        const trackHeight = scrollTrack.scrollHeight;
        gsap.set(".scroll_wraper", {
          height: trackHeight + window.innerHeight,
        });
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
  
    gsap.set(track,{
        yPercent:0
    });
    gsap.set(bottomSectionImage,{
      scale:1.1
    });
    gsap.set(projectDetails, { x: 0,y:0 });
    ScrollTrigger.create({
      trigger:scopeRef.current,
      start:"2% top",
      onEnter:()=>{
        gsap.fromTo(projectDetails,
          {
            x:0,
            y:0
          },
          {
            x:media=="desktop"?scrollSizeRef.current:0,
            y:media=="mobile"?scrollSizeRef.current:0,
            duration:0.6,
            ease:"power1.out"
        });
        setIsOpen(false);
      },
      onLeaveBack: () => {
        gsap.to(projectDetails, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "power1.out"
        });
        setIsOpen(true);
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

  }, { scope: scopeRef,dependencies:[closeX,media] });
  const handelEnter = contextSafe(()=>{
    gsap.to(".project-detiles",{
      x:0,
      y:0,
      duration:0.6,
      ease:"power1.out"
    });
    setIsOpen(true);
  });
  const handelLeave = contextSafe(()=>{
    gsap.to(".project-detiles",{
      x:media=="desktop"?scrollSizeRef.current:0,
      y:media=="mobile"?scrollSizeRef.current:0,
      duration:0.6,
      ease:"power1.in"
    });
    setIsOpen(false);
  });
  const handleToggle = contextSafe(() => {
    gsap.killTweensOf(".project-detiles");
    gsap.to(".project-detiles", {
      x: isOpen ? media=="desktop"?scrollSizeRef.current:0 : 0, // toggle
      y: isOpen ? media=="mobile"?scrollSizeRef.current:0 : 0,
      duration: 0.6,
      ease: "power1.inOut"
    });
    setIsOpen(!isOpen); // flip state
  });

  return (
    <div ref={scopeRef} className="relative w-full h-auto flex flex-col justify-start items-center">
      <div onClick={()=>{navigate(-1)}} className="fixed top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 w-8 h-8 text-sm rounded bg-[#CEC4FE] flex flex-row justify-center items-center hover:cursor-pointer z-[999]">
        [<MdArrowBack className="h-4" />]
      </div>
      <div className="fixed inset-0 w-screen h-screen flex flex-col lg:flex-row justify-end items-center pointer-events-none p-2 z-[900]">
        <div onMouseEnter={handelEnter} onMouseLeave={handelLeave} className="project-detiles w-full lg:w-auto h-auto lg:h-full flex flex-col lg:flex-row items-center pointer-events-auto">
          <div onClick={handleToggle} className="project-detile-handeler relative w-20 h-8 lg:w-8 lg:h-20 bg-[#F3F4EF] rounded-t lg:rounded-l lg:rounded-se-none shrink-0 flex flex-col lg:flex-row justify-center items-center gap-1">
            <div className="top-border absolute bottom-0 -left-2 lg:-left-[100%_+_8px] lg:-top-2 lg:right-0 w-2 h-2 ">
              <svg xmlns="http://www.w3.org/2000/svg"  width="100%" viewBox="0 0 6 6" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M6 0C5.97799 3.31622 3.30304 5.99767 0.00649147 5.99767C0.00432909 5.99767 0.00216526 5.99768 0 5.99768H6V0Z" fill="#F3F4EF"></path></svg>
            </div>
            <div className="bottom-border absolute bottom-0 -right-2 lg:-bottom-2 lg:right-0 w-2 h-2 rotate-90 lg:rotate-270 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 6 6" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M6 0C5.97799 3.31622 3.30304 5.99767 0.00649147 5.99767C0.00432909 5.99767 0.00216526 5.99768 0 5.99768H6V0Z" fill="#F3F4EF"></path></svg>
            </div>
            <div className="w-6 h-[1px] lg:w-[1px] lg:h-6 bg-black "></div>
            <div className="w-6 h-[1px] lg:w-[1px] lg:h-6 bg-black "></div>
          </div>
          <div id="project-content" className=" w-full lg:w-[25rem] h-auto lg:h-full rounded bg-[#F3F4EF] py-10 lg:py-12 px-9 lg:px-10">
            <div className="w-full h-full flex flex-col justify-between items-start gap-12">
              <div className="w-full h-auto flex flex-col justify-center items-start gap-2 lg:gap-4">
                <h1 className="text-3xl text-black font-editorial-thin font-bold mb-2 lg:mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-start font-editorial-thin">
                    {project.description}
                </p>
                <p className="text text-start font-editorial-thin">
                    {project.techStack}
                </p>
                <p className='text-[10px] text-[#191B20] font-mono uppercase mt-2'>[scroll to explore]</p>
              </div>
              <div className="w-full h-auto flex flex-row justify-between items-end gap-4">
                  <div className="w-auto h-auto flex flex-col justify-end items-start gap-2">
                      {
                        project?.keywords.map((item,ind)=>(
                            <p key={ind} className="font-mono text-start text-black text-sm/[14px] font-light">{item}</p>
                        ))
                      }
                      {/* <p className="font-mono text-start text-black text-sm/[14px] font-light">{project.keywords[0]}</p> */}
                      {/* <p className="font-mono text-start text-black text-sm/[14px]">{project.keywords[1]}</p> */}
                  </div>
                  <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-end gap-1.5"
                  >
                      <p className="text-xs uppercase text-black">LIVE SITE</p>
                      <span className="text-xs inline-flex items-center text-black">
                      [ <MdArrowOutward /> ]
                      </span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-screen overflow-hidden flex flex-col justify-start items-center z-50">
        <img src={project.photos[0]} className="w-full h-full object-cover" />
      </div>
      <section className="w-full relative scroll_wraper">
        <div className="sticky_continer sticky top-0 w-full h-screen p-2 bg-[#F3F4F0]">
          <div className="stick_scroll_inner relative w-full h-full overflow-clip flex flex-col rounded">
            <div ref={scrollTrackRef} className="sticky-track relative flex flex-col flex-nowrap gap-2">
                <div className="w-full lg:h-screen relative overflow-hidden rounded">
                    <img src="/images/optimized/topsection.avif" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-12 md:p-24 lg:p-36 ">
                      
                        <video src={project.video}  muted loop autoPlay  className="h-full rounded border-4 border-white">
                          <source src={project.video} type="video/mp4"/>
                        </video>
                      
                    </div>
                </div>
                <div className="relative w-full lg:h-screen overflow-hidden rounded ">
                    <img src="/images/optimized/secondsection.avif" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-12 md:p-24 lg:p-36 ">
                        <img src={project.photos[1]} className="w-full h-full object-contain "/>
                    </div>
                </div>
                <div className="relative w-full lg:h-screen overflow-hidden rounded mb-2">
                    <img src="/images/optimized/thirdsection.avif" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-12 md:p-24 lg:p-36 ">
                        <img src={project.photos[2]} className="w-full h-full object-contain"/>
                    </div>
                </div>
                <div className=" relative w-full lg:h-screen overflow-hidden rounded mb-2">
                    <img src="/images/optimized/mojitoweb6.avif" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-12 md:p-24 lg:p-36 ">
                        <img src={project.photos[3]} className="w-full h-full object-contain"/>
                    </div>
                </div>
                <div className="bottom-section absolute top-full overflow-hidden w-full h-[calc(100vh_-_16px)] rounded">
                    <img src={project.next.image} className="bottomSectionImage w-full h-full object-cover scale-110"/>
                    <div className="absolute inset-0 flex flex-col justify-center lg:justify-end items-start">
                      <div className="w-auto h-auto flex flex-col justify-center items-start gap-4 px-8 md:px-10 lg:pb-10">
                          <p className='text-[10px] text-white font-mono uppercase text-start'>[next]</p>
                          <h1 className="text-4xl/[36px] text-white font-editorial-thin text-start">
                            {project.next.title}
                          </h1>
                          <Link
                            to={project.next.route}
                            className="flex items-end gap-1.5"
                          >
                            <p className="text-xs uppercase text-white">VIEW PROJECT</p>
                            <span className="inline-flex items-center text-white text-xs">
                              [ <MdArrowOutward /> ]
                            </span>
                          </Link>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectTemplate;
