// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";
// import { MdArrowOutward } from "react-icons/md";

// const WorkSection = () => {
//     const scopeRef = useRef(null);
//     const triggerItemsRef = useRef([]);
//     const scrollItemRef = useRef([]);
//     const projects = [
//         {
//             imageurl:"/images/drink4.png",
//             title: "MOJITO",
//             link: "https://mojito-cocktailes.vercel.app/",
//             keywords:[
//                 "Creative Animations",
//                 "Seamless Transitions",
//                 "Animation-Rich UI"
//             ]
//         },
//         {
//             imageurl:"/images/photo.jpg",
//             title: "PHOTOGRAM",
//             link: "https://photogram-with-firebase.vercel.app/",
//             keywords:[
//                 "Smart Photo Sharing",
//                 "Shadcn UI + Uploadcare",
//                 "Firebase-Powered"
//             ]
//         },
//         {
//             imageurl:"/images/cygnus1.png",
//             title: "CYGNUS",
//             link: "https://cygnus-frontend-sigma.vercel.app/",
//             keywords:[
//                 "Creative Frontend",
//                 "Festival-Themed Web",
//                 "Animation"
//             ]
//         },
//         {
//             imageurl: "/images/scorify.webp",
//             title:"SCORIFY",
//             link: "https://landlord-scorify.vercel.app/",
//             keywords:[
//                 "Pixel-Perfect UI",
//                 "Responsive Design",
//                 "User-Centric Platform"
//             ]
//         },
//     ];
//     useGSAP(() => {
//         const triggers = triggerItemsRef.current;
//         const items = scrollItemRef.current;

//         triggers.forEach((trigger, index) => {
//             if (index === 0) {
//             gsap.timeline({
//                 scrollTrigger: {
//                 trigger,
//                 start: "top top",
//                 end: "bottom top",
//                 scrub: true,
//                 },
//                 defaults: { ease: "none" }
//             }).fromTo(items[index],
//                 { clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
//                 { clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }
//             );
//             } 
//             else if (index === triggers.length - 1) {
//             gsap.timeline({
//                 scrollTrigger: {
//                 trigger,
//                 start: "top bottom",
//                 end: "bottom bottom",
//                 scrub: true,
//                 },
//                 defaults: { ease: "none" }
//             }).fromTo(items[index],
//                 { clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
//                 { clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" } 
//             );
//             } 
//             else {
//             gsap.timeline({
//                 scrollTrigger: {
//                 trigger,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: true,
//                 // markers: true,
//                 },
//                 defaults: { ease: "none" }
//             })
//             .fromTo(items[index],
//                 { clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
//                 { clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
//             )
//             .to(items[index],
//                 { clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
//                 ">" // wait until reveal is done
//             );
//             }
//         });

//     }, { scope: scopeRef });

//     return (
//         <section ref={scopeRef} id="Work-Section" className="work-section relative min-h-screen">
//             {
//                 projects.map((project,index)=>(
//                     <div ref={(ele)=>(triggerItemsRef.current[index]=ele)} key={index} className="scroll_tigger relative h-screen overflow-hidden">
//                         <img src={project.imageurl} alt="Work Background" className="absolute inset-0 w-full h-full object-cover"/>
//                         <div className="absolute inset-0 backdrop-blur-[44px]"></div>
//                     </div>
//                 ))
//             }
//             <div id="scroll_track" className="w-full h-full absolute top-0 left-0 right-0 bottom-0">
//                 <div id="scroll_sticky" className="w-full h-screen sticky top-0 ">
//                     {
//                         projects.map((project,index)=>(
//                             <div ref={(ele)=>(scrollItemRef.current[index]=ele)} className={`scroll_item w-full h-full absolute top-0 left-0 right-0 bottom-0 px-4 py-11 md:px-5 md:py-12 lg:px-6 lg:py-14 `} key={index}>
//                                 <div className="w-full h-full grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6 ">
//                                     <div className="item-col-1 col-start-1 col-span-6 md:col-start-2 md:col-span-5 lg:col-start-3 lg:col-span-5 overflow-hidden place-self-center p-4">
//                                         <img src={project.imageurl} alt="Work Background"  className="lg:max-w-[512px] aspect-square object-cover rounded-lg"/>
//                                     </div>
//                                     <div className="item-col-2 col-start-2 col-span-5 md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4 flex flex-col justify-end items-start gap-1 md:gap-2">
//                                         <div className="w-full h-full  md:h-1/2 flex flex-col justify-between items-start">
//                                             <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
//                                                 <p className={`id-skill h-fit col-span-1 flex flex-row justify-start items-start text-[10px] text-white overflow-hidden `}>[ {String(index+1).padStart(2, "0")} ]</p>
//                                                 <a href={project.link} className="skill-title h-fit col-start-2 col-span-5 md:col-start-2 md:col-span-4 font-editorial-thin flex flex-row justify-start items-start font-semibold text-2xl lg:text-3xl text-white overflow-hidden hover:cursor-pointer">
//                                                     {project.title}
//                                                 </a>
//                                             </div>
//                                             <div className="w-full h-auto grid grid-cols-5 md:grid-cols-4 gap-4">
//                                                 <div className="col-start-1 col-span-3 md:col-span-2 flex flex-col justify-end items-start gap-1.5">
//                                                     {
//                                                         project.keywords.map((item,ind)=>(
//                                                             <p key={ind} className=" text-[10px] lg:text-xs uppercase text-white">
//                                                                 {item}
//                                                             </p>
//                                                         ))
//                                                     }
//                                                 </div>
//                                                 <div className="col-start-4 col-span-2 md:col-start-3 md:col-span-2 flex flex-row justify-start items-end gap-1.5 hover:cursor-pointer">
                                                    
//                                                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full flex flex-row justify-start items-end gap-1.5 decoration-none">
//                                                         <p className="text-[10px] lg:text-xs uppercase text-white">VIEW PROJECT</p>
//                                                         <span className="inline-flex justify-center items-center text-[10px] lg:text-xs uppercase text-white">[ <MdArrowOutward /> ]</span>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WorkSection;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const scopeRef = useRef(null);
  const triggerItemsRef = useRef([]);
  const scrollItemRef = useRef([]);

  const projects = [
    {
      imageurl: "/images/drink4.png",
      title: "MOJITO",
      link: "https://mojito-cocktailes.vercel.app/",
      keywords: ["Creative Animations", "Seamless Transitions", "Animation-Rich UI"],
    },
    {
      imageurl: "/images/photo.jpg",
      title: "PHOTOGRAM",
      link: "https://photogram-with-firebase.vercel.app/",
      keywords: ["Smart Photo Sharing", "Shadcn UI + Uploadcare", "Firebase-Powered"],
    },
    {
      imageurl: "/images/cygnus1.png",
      title: "CYGNUS",
      link: "https://cygnus-frontend-sigma.vercel.app/",
      keywords: ["Creative Frontend", "Festival-Themed Web", "Animation"],
    },
    {
      imageurl: "/images/scorify.webp",
      title: "SCORIFY",
      link: "https://landlord-scorify.vercel.app/",
      keywords: ["Pixel-Perfect UI", "Responsive Design", "User-Centric Platform"],
    },
  ];

  useGSAP(() => {
    const triggers = triggerItemsRef.current;
    const items = scrollItemRef.current;

    triggers.forEach((trigger, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: index === 0 ? "top top" : "top bottom",
          end: index === triggers.length - 1 ? "bottom bottom" : "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true, // uncomment for debugging
        },
        defaults: { ease: "none" },
      });

      if (index === 0) {
        // First project (reveal → hide)
        tl.fromTo(
          items[index],
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }
        );
      } else if (index === triggers.length - 1) {
        // Last project (bottom reveal only)
        tl.fromTo(
          items[index],
          { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
        );
      } else {
        // Middle projects (reveal → hide)
        tl.fromTo(
          items[index],
          { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
        ).to(items[index], {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        });
      }
    });
    ScrollTrigger.refresh(); 
  }, { scope: scopeRef });

  return (
    <section ref={scopeRef} id="Work-Section" className="work-section relative min-h-screen">
      {/* Background triggers */}
      {(() => {
        triggerItemsRef.current = [];
        return projects.map((project, index) => (
          <div
            ref={(el) => (triggerItemsRef.current[index] = el)}
            key={`trigger-${project.title}`}
            className="scroll_trigger relative h-screen overflow-hidden"
          >
            <img
              src={project.imageurl}
              alt={`${project.title} Background`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 backdrop-blur-[44px]" />
          </div>
        ));
      })()}

      {/* Sticky scroll items */}
      <div id="scroll_track" className="w-full h-full absolute inset-0">
        <div id="scroll_sticky" className="w-full h-screen sticky top-0">
          {(() => {
            scrollItemRef.current = [];
            return projects.map((project, index) => (
              <div
                ref={(el) => (scrollItemRef.current[index] = el)}
                key={`scroll-${project.title}`}
                className="scroll_item w-full h-full absolute inset-0 px-4 py-11 md:px-5 md:py-12 lg:px-6 lg:py-14"
              >
                <div className="w-full h-full grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6">
                  {/* Image */}
                  <div className="col-start-1 col-span-6 md:col-start-2 md:col-span-5 lg:col-start-3 lg:col-span-5 overflow-hidden place-self-center p-4">
                    <img
                      src={project.imageurl}
                      alt={`${project.title} Preview`}
                      className="lg:max-w-[512px] aspect-square object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="col-start-2 col-span-5 md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4 flex flex-col justify-end items-start gap-1 md:gap-2">
                    <div className="w-full h-full md:h-1/2 flex flex-col justify-between items-start">
                      {/* Title + Index */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[10px] text-white">[ {String(index + 1).padStart(2, "0")} ]</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:cursor-pointer"
                        >
                          <h2 className="font-editorial-thin font-semibold text-2xl lg:text-3xl text-white">
                            {project.title}
                          </h2>
                        </a>
                      </div>

                      {/* Keywords + Link */}
                      <div className="w-full grid grid-cols-5 md:grid-cols-4 gap-4">
                        <div className="col-span-3 md:col-span-2 flex flex-col gap-1.5">
                          {project.keywords.map((item) => (
                            <p key={item} className="text-[10px] lg:text-xs uppercase text-white">
                              {item}
                            </p>
                          ))}
                        </div>
                        <div className="col-span-2 md:col-start-3 md:col-span-2 flex items-end gap-1.5 hover:cursor-pointer">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-end gap-1.5"
                          >
                            <p className="text-[10px] lg:text-xs uppercase text-white">VIEW PROJECT</p>
                            <span className="inline-flex items-center text-white">
                              [ <MdArrowOutward /> ]
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ));
          })()}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;



