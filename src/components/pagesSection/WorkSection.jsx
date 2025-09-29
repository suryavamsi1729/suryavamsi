

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger,SplitText);

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
          refreshPriority:1,
          markers: true, // uncomment for debugging
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
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
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
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 backdrop-blur-[44px] will-change-transform" />
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
                className="scroll_item w-full h-full absolute inset-0 px-4 py-11 md:px-5 md:py-12 lg:px-6 lg:py-14 will-change-[clip-path]"
              >
                <div className="w-full h-full grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6">
                  {/* Image */}
                  <div className="col-start-1 col-span-6 md:col-start-2 md:col-span-5 lg:col-start-3 lg:col-span-5 overflow-hidden place-self-center p-4">
                    <img
                      src={project.imageurl}
                      alt={`${project.title} Preview`}
                      className="lg:max-w-[512px] aspect-square object-cover rounded-lg will-change-transform"
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



// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { useRef } from "react";
// import { MdArrowOutward } from "react-icons/md";

// gsap.registerPlugin(ScrollTrigger);

// const WorkSection = () => {
//   const scopeRef = useRef(null);
//   const scrollItemRef = useRef([]);

//   const projects = [
//     {
//       imageurl: "/images/drink4.png",
//       title: "MOJITO",
//       link: "https://mojito-cocktailes.vercel.app/",
//       keywords: ["Creative Animations", "Seamless Transitions", "Animation-Rich UI"],
//     },
//     {
//       imageurl: "/images/photo.jpg",
//       title: "PHOTOGRAM",
//       link: "https://photogram-with-firebase.vercel.app/",
//       keywords: ["Smart Photo Sharing", "Shadcn UI + Uploadcare", "Firebase-Powered"],
//     },
//     {
//       imageurl: "/images/cygnus1.png",
//       title: "CYGNUS",
//       link: "https://cygnus-frontend-sigma.vercel.app/",
//       keywords: ["Creative Frontend", "Festival-Themed Web", "Animation"],
//     },
//     {
//       imageurl: "/images/scorify.webp",
//       title: "SCORIFY",
//       link: "https://landlord-scorify.vercel.app/",
//       keywords: ["Pixel-Perfect UI", "Responsive Design", "User-Centric Platform"],
//     },
//   ];

//   useGSAP(() => {
//     // Kill old triggers before creating new ones
//     ScrollTrigger.getAll().forEach(t => t.kill());

//     // Batch all scroll items for performance
//     ScrollTrigger.batch(scrollItemRef.current, {
//       start: "top 80%",
//       end: "bottom 20%",
//       scrub: true,
//       refreshPriority: 1,
//       onEnter: (batch) => {
//         gsap.to(batch, {
//           clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//           duration: 1,
//           ease: "power1.out",
//           stagger: 0.2,
//         });
//       },
//       onLeaveBack: (batch) => {
//         gsap.to(batch, {
//           clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//           duration: 0.6,
//           ease: "power1.in",
//           stagger: 0.1,
//         });
//       },
//     });

//     // Ensure proper refresh after images load
//     window.addEventListener("load", () => ScrollTrigger.refresh());
//   }, { scope: scopeRef });

//   return (
//     <section
//       ref={scopeRef}
//       id="Work-Section"
//       className="work-section relative min-h-screen"
//     >
//       <div id="scroll_track" className="w-full h-full absolute inset-0">
//         <div id="scroll_sticky" className="w-full h-screen sticky top-0">
//           {(() => {
//             scrollItemRef.current = [];
//             return projects.map((project, index) => (
//               <div
//                 ref={(el) => (scrollItemRef.current[index] = el)}
//                 key={`scroll-${project.title}`}
//                 className="scroll_item w-full h-full absolute inset-0 px-4 py-11 md:px-5 md:py-12 lg:px-6 lg:py-14 will-change-[clip-path]"
//                 style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
//               >
//                 <div className="w-full h-full grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6">
//                   {/* Image */}
//                   <div className="col-start-1 col-span-6 md:col-start-2 md:col-span-5 lg:col-start-3 lg:col-span-5 overflow-hidden place-self-center p-4">
//                     <img
//                       src={project.imageurl}
//                       alt={`${project.title} Preview`}
//                       loading="lazy"
//                       className="lg:max-w-[512px] aspect-square object-cover rounded-lg will-change-transform"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="col-start-2 col-span-5 md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4 flex flex-col justify-end items-start gap-1 md:gap-2">
//                     <div className="w-full h-full md:h-1/2 flex flex-col justify-between items-start">
//                       {/* Title + Index */}
//                       <div className="flex flex-col gap-2">
//                         <p className="text-[10px] text-white">
//                           [ {String(index + 1).padStart(2, "0")} ]
//                         </p>
//                         <a
//                           href={project.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="hover:cursor-pointer"
//                         >
//                           <h2 className="font-editorial-thin font-semibold text-2xl lg:text-3xl text-white">
//                             {project.title}
//                           </h2>
//                         </a>
//                       </div>

//                       {/* Keywords + Link */}
//                       <div className="w-full grid grid-cols-5 md:grid-cols-4 gap-4">
//                         <div className="col-span-3 md:col-span-2 flex flex-col gap-1.5">
//                           {project.keywords.map((item) => (
//                             <p
//                               key={item}
//                               className="text-[10px] lg:text-xs uppercase text-white"
//                             >
//                               {item}
//                             </p>
//                           ))}
//                         </div>
//                         <div className="col-span-2 md:col-start-3 md:col-span-2 flex items-end gap-1.5 hover:cursor-pointer">
//                           <a
//                             href={project.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-end gap-1.5"
//                           >
//                             <p className="text-[10px] lg:text-xs uppercase text-white">
//                               VIEW PROJECT
//                             </p>
//                             <span className="inline-flex items-center text-white">
//                               [ <MdArrowOutward /> ]
//                             </span>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ));
//           })()}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkSection;
