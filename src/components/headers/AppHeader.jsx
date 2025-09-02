// import Time from "@common/Time"
// import DateComp from "@common/DateComp";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/all";
// import { useRef } from "react";


// const AppHeader = () => {''
//     const InfoRef = useRef(null);
//     const WorkRef = useRef(null);
//     const ArchiveRef = useRef(null);
//     const ContactRef = useRef(null);
//     const nameRef = useRef(null);
//     const menuBtnRef = useRef(null);
//     const mobileMenuRef = useRef(null);
    
//     useGSAP(()=>{
//         const handelMenubuttonClick = ()=>{
//             if (menuTL.reversed()) {
//                     gsap.set(mobileMenuRef.current,{display:"flex"});
//                     menuTL.play();
//                 } else {
//                     menuTL.reverse().eventCallback("onReverseComplete", () => {
//                         gsap.set(mobileMenuRef.current,{display:"none"});
//                     });
//                 }
//         }   
//         gsap.set(mobileMenuRef.current,{display:"none"});
//         const menuTL = gsap.timeline({paused: true, reversed: true});
//         menuTL.fromTo(".menu-col",{y:"-100%"},{y:"0%",duration:0.6,stagger:0.1,ease:"power2.in"});
//         menuTL.to("#btn-icon-1",{y:1.5,rotation:45,duration:0.3,ease:"power2.inOut"},0);
//         menuTL.to("#btn-icon-2",{y:-1.5,rotation:-45,duration:0.3,ease:"power2.inOut"},0);
//         menuTL.fromTo(".menu-link-text",{alpha:0},{alpha:1,duration:0.4,stagger:0.1,ease:"power2.in"},0.2);
//         menuTL.fromTo(".menu-link-ind",{y:10,alpha:0},{y:0,alpha:1,duration:0.4,stagger:0.1,ease:"power2.in"},0.2);
        
//         menuBtnRef.current.addEventListener("click",handelMenubuttonClick);
//         document.querySelectorAll(".menu-link").forEach(link => {
//             link.addEventListener("click", handelMenubuttonClick);
//         });        
//         document.fonts.ready.then(()=>{
//         const InfoTextUp = new SplitText("#Info-text-up",{type:"lines,words,chars"});
//         const InfoTextDown = new SplitText("#Info-text-down",{type:"lines,words,chars"});
//         const WorkTextUp = new SplitText("#Work-text-up",{type:"lines,words,chars"});
//         const WorkTextDown = new SplitText("#Work-text-down",{type:"lines,words,chars"});
//         const ArchiveTextUp = new SplitText("#Archive-text-up",{type:"lines,words,chars"});
//         const ArchiveTextDown = new SplitText("#Archive-text-down",{type:"lines,words,chars"});
//         const ContactTextUp = new SplitText("#Contact-text-up",{type:"lines,words,chars"});
//         const ContactTextDown = new SplitText("#Contact-text-down",{type:"lines,words,chars"});
//         const NameTextUp = new SplitText("#Name-text-up",{type:"lines,words,chars"});
//         const NameTextDown = new SplitText("#Name-text-down",{type:"lines,words,chars"});

//         const InfoTL = gsap.timeline({paused:true});
//         const WorkTL = gsap.timeline({paused:true});
//         const ArchiveTL = gsap.timeline({paused:true});
//         const ContactTL = gsap.timeline({paused:true});
//         const NameTL = gsap.timeline({paused:true});

//         InfoTL.to([InfoTextUp.chars],{y:"-100%",duration:0.26,stagger: 0.06},0);
//         InfoTL.to([InfoTextDown.chars],{y:"-50%",duration:0.26,stagger: 0.06},0);
//         WorkTL.to([WorkTextUp.chars],{y:"-100%",duration:0.26,stagger: 0.06},0);
//         WorkTL.to([WorkTextDown.chars],{y:"-50%",duration:0.26,stagger: 0.06},0);
//         ArchiveTL.to([ArchiveTextUp.chars],{y:"-100%",duration:0.3,stagger: 0.06},0);
//         ArchiveTL.to([ArchiveTextDown.chars],{y:"-50%",duration:0.3,stagger: 0.06},0);
//         ContactTL.to([ContactTextUp.chars],{y:"-100%",duration:0.3,stagger: 0.06},0);
//         ContactTL.to([ContactTextDown.chars],{y:"-50%",duration:0.3,stagger: 0.06},0);
//         NameTL.to([NameTextUp.chars],{y:"-100%",duration:0.3,stagger: 0.04},0);
//         NameTL.to([NameTextDown.chars],{y:"-50%",duration:0.3,stagger: 0.04},0);
        

//         const OnEnter = (tl)=>{
//             tl.play();
//         }
//         const OnLeave = (tl)=>{
//             tl.reverse();
//         }

//         InfoRef.current.addEventListener("mouseenter",()=>OnEnter(InfoTL));
//         InfoRef.current.addEventListener("mouseleave",()=>OnLeave(InfoTL));


//         WorkRef.current.addEventListener("mouseenter",()=>OnEnter(WorkTL));
//         WorkRef.current.addEventListener("mouseleave",()=>OnLeave(WorkTL));

//         ArchiveRef.current.addEventListener("mouseenter",()=>OnEnter(ArchiveTL));
//         ArchiveRef.current.addEventListener("mouseleave",()=>OnLeave(ArchiveTL));

//         ContactRef.current.addEventListener("mouseenter",()=>OnEnter(ContactTL));
//         ContactRef.current.addEventListener("mouseleave",()=>OnLeave(ContactTL));

//         nameRef.current.addEventListener("mouseenter",()=>OnEnter(NameTL));
//         nameRef.current.addEventListener("mouseleave",()=>OnLeave(NameTL));

//         return()=>{
//             InfoRef.current.removeEventListener("mouseenter",()=>OnEnter(InfoTL));
//             InfoRef.current.removeEventListener("mouseleave",()=>OnLeave(InfoTL));
//             WorkRef.current.removeEventListener("mouseenter",()=>OnEnter(WorkTL));
//             WorkRef.current.removeEventListener("mouseleave",()=>OnLeave(WorkTL));
//             ArchiveRef.current.removeEventListener("mouseenter",()=>OnEnter(ArchiveTL));
//             ArchiveRef.current.removeEventListener("mouseleave",()=>OnLeave(ArchiveTL));
//             ContactRef.current.removeEventListener("mouseenter",()=>OnEnter(ContactTL));
//             ContactRef.current.removeEventListener("mouseleave",()=>OnLeave(ContactTL));
//             nameRef.current.removeEventListener("mouseenter",()=>OnEnter(NameTL));
//             nameRef.current.removeEventListener("mouseleave",()=>OnLeave(NameTL));
            
//             InfoTL.kill();
//             WorkTL.kill();
//             ArchiveTL.kill();
//             ContactTL.kill();
//             NameTL.kill();

//             InfoTextUp.revert();
//             InfoTextDown.revert();
//             WorkTextUp.revert();
//             WorkTextDown.revert();
//             ArchiveTextUp.revert();
//             ArchiveTextDown.revert();
//             ContactTextUp.revert();
//             ContactTextDown.revert();
//             NameTextUp.revert();
//             NameTextDown.revert();
//         }
//     })
//         return()=>{
//             menuBtnRef.current.removeEventListener("click",handelMenubuttonClick);
//             menuTL.kill();
//         }
//     },{scope:"#AppHeader"});
//     return(
//         <header id="AppHeader" className=" z-40 fixed top-0 left-0 right-0 bg-transparent px-4 md:px-6 pt-4 md:pt-8 pb-8 md:pb-12">
//             <div className='w-full h-auto grid grid-cols-6 md:grid-cols-12 gap-4'>
//                 <div className="col-span-1 flex md:hidden justify-start items-start z-50">
//                     <button ref={menuBtnRef} className="w-8 pb-2 pr-2 flex justify-center items-center bg-transparent">
//                         <div className="w-full h-full flex justify-start items-start">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 12" fill="none">
//                                 <path d="M4 1H1V11H4" stroke="currentColor" strokeWidth="var(--svg-stroke-width--main)" vectorEffect="non-scaling-stroke"></path>
//                             </svg>
//                         </div>
//                         <div className="flex flex-col justify-center items-center gap-0.5">
//                             <div id="btn-icon-1" className="w-3 h-[1px] bg-current rounded-[2px] origin-center"></div>
//                             <div id="btn-icon-2" className="w-3 h-[1px] bg-current rounded-[2px] origin-center"></div>
//                         </div>
//                         <div className="w-full h-full flex justify-start items-start">
//                             <svg  xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 12" fill="none">
//                                 <path d="M0 1H3V11H0" stroke="currentColor" strokeWidth="var(--svg-stroke-width--main)" vectorEffect="non-scaling-stroke"></path>
//                             </svg>
//                         </div>
//                     </button>
//                 </div>
//                 <div className='hidden md:col-span-2 md:flex flex-col justify-start items-start gap-0.5 z-50'>
//                     <a href="/" className='font-mono flex flex-row justify-center items-start gap-1 px-2 pt-0 pb-4 overflow-clip'>
//                         <div className='text-[9px]'>01</div>
//                         <div ref={InfoRef} id="Info-text" className="relative overflow-hidden">
//                             <div id="Info-text-up" className='text-xs/3 font-normal uppercase '>INFO</div>
//                             <div id="Info-text-down" className='text-xs/3 font-normal uppercase absolute inset-[100%_auto_auto_0%]'>INFO</div>
//                         </div>
//                     </a>
//                     <a href="/" className='font-mono flex flex-row justify-center items-start gap-1 px-2 pt-0 pb-4 overflow-clip' >
//                         <div className='text-[9px]'>02</div>
//                         <div ref={WorkRef} id="Work-text" className="relative overflow-hidden">
//                             <div id="Work-text-up" className='text-xs/3 font-normal uppercase '>WORK</div>
//                             <div id="Work-text-down" className='text-xs/3 font-normal uppercase absolute inset-[100%_auto_auto_0%]'>WORK</div>
//                         </div>
//                     </a>
//                     <a href="/" className='font-mono flex flex-row justify-center items-start gap-1 px-2 pt-0 pb-4 overflow-clip'>
//                         <div className='text-[9px]'>03</div>
//                         <div ref={ArchiveRef} id="Archive-text" className="relative overflow-hidden">
//                             <div id="Archive-text-up" className='text-xs/4 font-normal uppercase '>ARCHIVE</div>
//                             <div id="Archive-text-down" className='text-xs/4 font-normal uppercase absolute inset-[100%_auto_auto_0%]'>ARCHIVE</div>
//                         </div>
//                     </a>
//                     <a href="/" className='font-mono flex flex-row justify-center items-start gap-1 px-2 pt-0 pb-4 overflow-clip'>
//                         <div className='text-[9px]'>04</div>
//                         <div ref={ContactRef} id="Contact-text" className="relative overflow-hidden">
//                             <div id="Contact-text-up" className='text-xs/4 font-normal uppercase '>CONTACT</div>
//                             <div id="Contact-text-down" className='text-xs/4 font-normal uppercase absolute inset-[100%_auto_auto_0%]'>CONTACT</div>
//                         </div>
//                     </a>
//                 </div>
//                 <div className='col-start-2 col-span-3 md:col-start-7 md:col-span-3 lg:col-start-9 lg:col-span-2 flex flex-col justify-start items-start gap-0.5 z-50'>
//                     <div ref={nameRef} id="Name-text" className="relative overflow-hidden">
//                             <div id="Name-text-up" className='text-[10px]/[12px] md:text-xs/4 font-normal uppercase '>SURYA VAMSI</div>
//                             <div id="Name-text-down" className='text-[10px]/[12px] md:text-xs/4 font-normal uppercase absolute inset-[100%_auto_auto_0%]'>SURYA VAMSI</div>
//                         </div>
//                     <div className='font-mono text-[10px]/[12px] md:text-xs/4 text-[#707173] uppercase'>
//                         FRONTEND DEVELOPER
//                     </div>
//                 </div>
//                 <div className='col-start-5 col-span-2 md:col-start-10 md:col-span-3 lg:col-start-11 lg:col-span-2 flex flex-col justify-start items-start gap-0.5 z-50'>
//                     <Time/>
//                     <DateComp/>
//                 </div>
//                 <div id="mobile-menu" ref={mobileMenuRef} className="fixed top-0 left-0 w-screen h-screen hidden">
//                     <div className="relative menu-content w-full h-full px-4 z-50">
//                         <div className='h-full flex flex-col justify-start items-start gap-4 pt-36 ml-16 '>
//                             <a href="#d" className='menu-link font-mono flex flex-row justify-center items-start gap-2 px-2 pt-1 pb-4 overflow-clip'>
//                                 <div className='menu-link-ind text-[10px]/[10px] overflow-hidden'>01</div>
//                                 <div id="Info-text-up" className='menu-link-text text-2xl font-editorial-thin  font-normal '>Info</div>
//                             </a>
//                             <a href="#c" className='menu-link font-mono flex flex-row justify-center items-start gap-2 px-2 pt-1 pb-4 overflow-clip' >
//                                 <div className='menu-link-ind text-[10px]/[10px] overflow-hidden '>02</div>
//                                 <div id="Work-text-up" className='menu-link-text text-2xl font-editorial-thin  font-normal'>Work</div>
//                             </a>
//                             <a href="#b" className='menu-link font-mono flex flex-row justify-center items-start gap-2 px-2 pt-1 pb-4 overflow-clip'>
//                                 <div className='menu-link-ind text-[10px]/[10px]'>03</div>
//                                 <div id="Archive-text-up" className='menu-link-text text-2xl font-editorial-thin  font-normal '>Archive</div>    
//                             </a>
//                             <a href="#a" className='menu-link font-mono flex flex-row justify-center items-start gap-2 px-2 pt-1 pb-4 overflow-clip'>
//                                 <div className='menu-link-ind text-[10px]/[10px]'>04</div>
//                                 <div id="Contact-text-up" className='menu-link-text text-2xl font-editorial-thin  font-normal'>Contact</div>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="menu-base absolute inset-0 grid grid-cols-3 gap-0 z-40">
//                         <div id="menu-col-1" className="menu-col h-full col-span-1 bg-[#CFC4FE]"></div>
//                         <div id="menu-col-2" className="menu-col  h-full col-span-1 bg-[#CFC4FE]"></div>
//                         <div id="menu-col-3" className="menu-col  h-full col-span-1 bg-[#CFC4FE]"></div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }
// export default AppHeader;

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Time from "@common/Time";
import DateComp from "@common/DateComp";


const AppHeader = () => {
  const headerRef = useRef(null);
  const menuBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navRefs = useRef([]);
  const nameRef = useRef(null);
  const menuTL = useRef(null);

  useGSAP(() => {
    
    menuTL.current = gsap
      .timeline({ paused: true, reversed: true })
      .set(mobileMenuRef.current, { display: "none" })
      .call(() => gsap.set(mobileMenuRef.current, { display: "flex" }))
      .fromTo(
        ".menu-col",
        { y: "-100%" },
        { y: "0%", duration: 0.6, stagger: 0.1, ease: "power2.in" }
        ,0)
      .to("#btn-icon-1", { y: 1.5, rotation: 45, duration: 0.3 }, 0)
      .to("#btn-icon-2", { y: -1.5, rotation: -45, duration: 0.3 }, 0)
      .fromTo(
        ".menu-link-text",
        { alpha: 0 },
        { alpha: 1, duration: 0.4, stagger: 0.1,ease:"power2.in" },
        0.4)
      .fromTo(
        ".menu-link-ind",
        { y: 10, alpha: 0 },
        { y: 0, alpha: 1, duration: 0.4, stagger: 0.1,ease:"power2.in" },
        0.4);

    document.fonts.ready.then(() => {
      navRefs.current.forEach((ref) => {
        if (!ref) return;

        const upText = new SplitText(ref.querySelector(".text-up"), {
          type: "chars",
        });
        const downText = new SplitText(ref.querySelector(".text-down"), {
          type: "chars",
        });

        const tl = gsap.timeline({ paused: true });
        tl.to(upText.chars, { y: "-100%", duration: 0.26, stagger: 0.06 }, 0);
        tl.to(downText.chars, { y: "-100%", duration: 0.26, stagger: 0.06 }, 0);

        ref.addEventListener("mouseenter", () => tl.play());
        ref.addEventListener("mouseleave", () => tl.reverse());
      });

      if (nameRef.current) {
        const nameUp = new SplitText(
          nameRef.current.querySelector(".text-up"),
          { type: "chars" }
        );
        const nameDown = new SplitText(
          nameRef.current.querySelector(".text-down"),
          { type: "chars" }
        );

        const nameTL = gsap.timeline({ paused: true });
        nameTL.to(nameUp.chars, { y: "-100%", duration: 0.3, stagger: 0.04 }, 0);
        nameTL.to(nameDown.chars, { y: "-100%", duration: 0.3, stagger: 0.04 }, 0);

        nameRef.current.addEventListener("mouseenter", () => nameTL.play());
        nameRef.current.addEventListener("mouseleave", () => nameTL.reverse());
      }
    });
  }, { scope: headerRef });

  const handleMenuToggle = () => {
    if (menuTL.current.reversed()) {
      menuTL.current.play();
    } else {
      menuTL.current.reverse().eventCallback("onReverseComplete", () => {
        gsap.set(mobileMenuRef.current, { display: "none" });
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className="z-40 fixed top-0 left-0 right-0 bg-transparent px-4 md:px-6 pt-4 md:pt-8 pb-8 md:pb-12"
    >
      <div className="w-full h-auto grid grid-cols-6 md:grid-cols-12 gap-4">

        <div className="col-span-1 flex md:hidden justify-start items-start z-50">
          <button
            ref={menuBtnRef}
            onClick={handleMenuToggle}
            className="w-8 pb-2 pr-2 flex justify-center items-center bg-transparent"
          >
            <div className="w-full h-full flex justify-start items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 12" fill="none">                                 <path d="M4 1H1V11H4" stroke="currentColor" strokeWidth="var(--svg-stroke-width--main)" vectorEffect="non-scaling-stroke"></path>
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center gap-0.5">
              <div id="btn-icon-1" className="w-3 h-[1px] bg-current rounded-[2px]"></div>
              <div id="btn-icon-2" className="w-3 h-[1px] bg-current rounded-[2px]"></div>
            </div>
            <div className="w-full h-full flex justify-start items-start">
                <svg  xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 4 12" fill="none">
                    <path d="M0 1H3V11H0" stroke="currentColor" strokeWidth="var(--svg-stroke-width--main)" vectorEffect="non-scaling-stroke"></path>
                </svg>
            </div>
          </button>
        </div>

        
        <div className="hidden md:col-span-2 md:flex flex-col gap-0.5 z-50">
          {["INFO", "WORK", "ARCHIVE", "CONTACT"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="font-mono flex flex-row gap-1 px-2 pb-4 overflow-clip"
            >
              <div className="text-[9px]">{String(i + 1).padStart(2, "0")}</div>
              <div
                ref={(el) => (navRefs.current[i] = el)}
                className="relative overflow-hidden"
              >
                <div className="text-up text-xs uppercase">{item}</div>
                <div className="text-down text-xs uppercase absolute inset-[100%_auto_auto_0%]">
                  {item}
                </div>
              </div>
            </a>
          ))}
        </div>

        
        <div className="col-start-2 col-span-3 md:col-start-7 md:col-span-3 flex flex-col gap-0.5 z-50">
          <div ref={nameRef} className="relative overflow-hidden">
            <div className="text-up text-[10px] md:text-xs uppercase">SURYA VAMSI</div>
            <div className="text-down text-[10px] md:text-xs uppercase absolute inset-[100%_auto_auto_0%]">
              SURYA VAMSI
            </div>
          </div>
          <div className="font-mono text-[10px] md:text-xs text-[#707173] uppercase">
            FRONTEND DEVELOPER
          </div>
        </div>

        
        <div className="col-start-5 col-span-2 md:col-start-10 md:col-span-3 flex flex-col gap-0.5 z-50">
          <Time />
          <DateComp />
        </div>

        
        <div
          ref={mobileMenuRef}
          className="fixed top-0 left-0 w-screen h-screen hidden"
        >
          <div className="relative menu-content w-full h-full px-4 z-50">
            <div className="h-full flex flex-col gap-4 pt-36 ml-16">
              {["Info", "Work", "Archive", "Contact"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="menu-link font-mono flex flex-row gap-2 px-2 pb-4"
                  onClick={handleMenuToggle}
                >
                  <div className="menu-link-ind text-[10px]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="menu-link-text text-2xl font-editorial-thin">
                    {item}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="menu-base absolute inset-0 grid grid-cols-3 z-40">
            <div className="menu-col bg-[#CFC4FE]"></div>
            <div className="menu-col bg-[#CFC4FE]"></div>
            <div className="menu-col bg-[#CFC4FE]"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
