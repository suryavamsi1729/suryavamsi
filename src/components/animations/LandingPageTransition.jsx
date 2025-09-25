import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

const LandingPageTransition = forwardRef(({loading},ref) => {
  const tlRef = useRef();
  const scopeRf = useRef();
  useGSAP(
    (context) => {
      tlRef.current = gsap.timeline({
        paused: true,
        onComplete: () => {
          console.log("animation completed");
          gsap.set(scopeRf.current, { display: "none" });
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
    { scope: scopeRf  } 
  );
  useEffect(()=>{
    if(!loading && tlRef.current){
      tlRef.current.play();
    }
  },[loading,tlRef]);

  useImperativeHandle(ref, () => ({
    timeline: tlRef.current,
  }));

  return (
      <div ref={scopeRf} className="animate-wrapper fixed top-0 left-0 overflow-hidden w-full h-screen grid grid-cols-6 cursor-pointer transition-container z-[1000]">
        {[...Array(6)].map((_, i) => (
          <div key={`top-${i}`} className="top-column h-[50vh] bg-brand"></div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div key={`bottom-${i}`} className="bottom-column h-[50vh] bg-brand"></div>
        ))}
      </div>
    
  );
});

export default LandingPageTransition;

// second
// import { forwardRef, useEffect, useRef, useImperativeHandle } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const LandingPageTransition = forwardRef(({ loading,triggerExit }, ref) => {
//   const tlRef = useRef();
//   const exitTL = useRef();
//   const scopeRf = useRef();

//   useGSAP(
//     (context) => {
//       tlRef.current = gsap.timeline({
//         paused: true,
//         onComplete: () => {
//           console.log("Animation completed");

//           // Hide wrapper after animation
//           gsap.set(scopeRf.current, { display: "none" });

//           // Reset positions for next time
//           gsap.set(context.selector(".top-column"), { y: "0%" });
//           gsap.set(context.selector(".bottom-column"), { y: "0%" });
//         },
//       });
//       exitTL.current = gsap.timeline({
//         paused: true,
//         // onComplete: () => {
//         //   console.log("Animation completed");

//         //   // Hide wrapper after animation
//         //   // gsap.set(scopeRf.current, { display: "none" });

//         //   // // Reset positions for next time
//         //   // gsap.set(context.selector(".top-column"), { y: "0%" });
//         //   // gsap.set(context.selector(".bottom-column"), { y: "0%" });
//         // },
//       });

//       // Top columns animation
//       tlRef.current.to(
//         context.selector(".top-column"),
//         {
//           y: "-100%",
//           duration: 0.4,
//           stagger: { each: 0.06, from: "start" },
//           ease: "power2.in",
//         },
//         0
//       );
//       exitTL.current.to(
//         context.selector(".top-column"),
//         {
//           y: "0%",
//           duration: 0.4,
//           stagger: { each: 0.06, from: "start" },
//           ease: "power2.in",
//         },
//         0
//       );

//       // Bottom columns animation
//       tlRef.current.to(
//         context.selector(".bottom-column"),
//         {
//           y: "100%",
//           duration: 0.4,
//           stagger: { each: 0.06, from: "start" },
//           ease: "power2.in",
//         },
//         0
//       );
//       exitTL.current.to(
//         context.selector(".bottom-column"),
//         {
//           y: "0%",
//           duration: 0.4,
//           stagger: { each: 0.06, from: "start" },
//           ease: "power2.in",
//         },
//         0
//       );
//     },
//     { scope: scopeRf }
//   );

//   // Play animation when loading becomes false
//   useEffect(() => {
//     if (!loading && tlRef.current) {
//       // Make sure wrapper is visible
//       gsap.set(scopeRf.current, { display: "grid" });

//       // Reset positions before playing
//       gsap.set(scopeRf.current.querySelectorAll(".top-column"), { y: "0%" });
//       gsap.set(scopeRf.current.querySelectorAll(".bottom-column"), { y: "0%" });

//       // Restart timeline from the beginning
//       tlRef.current.restart();
//     }
//   }, [loading]);
//   useEffect(() => {
//     if (triggerExit && exitTL.current) {
//       gsap.set(scopeRf.current, { display: "grid" });
//       gsap.set(scopeRf.current.querySelectorAll(".top-column"), { y: "-100%" });
//       gsap.set(scopeRf.current.querySelectorAll(".bottom-column"), { y: "100%" });

//       exitTL.current.restart();
//     }
//   }, [triggerExit]);


//   // Expose timeline to parent via ref
//   useImperativeHandle(ref, () => ({
//     timeline: tlRef.current,
//     exitTimeLine : exitTL.current
//   }));

//   return (
//     <div
//       ref={scopeRf}
//       className="animate-wrapper absolute top-0 left-0 overflow-hidden w-full h-screen grid grid-cols-6 cursor-pointer transition-container z-50"
//     >
//       {[...Array(6)].map((_, i) => (
//         <div key={`top-${i}`} className="top-column h-[50vh] bg-brand"></div>
//       ))}
//       {[...Array(6)].map((_, i) => (
//         <div key={`bottom-${i}`} className="bottom-column h-[50vh] bg-brand"></div>
//       ))}
//     </div>
//   );
// });

// export default LandingPageTransition;


