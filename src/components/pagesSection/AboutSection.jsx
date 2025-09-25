import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const AboutSection = () => {
    const skillRef = useRef([]);
    const scopeRef = useRef(null);
    const skillTack = [
        {
            "title": "Frontend Development",
            "description": "I specialize in building responsive, user-friendly, and pixel-perfect interfaces with React.js, Tailwind CSS, and Bootstrap. My focus is on creating seamless user experiences with clean layouts and smooth animations powered by GSAP."
        },
        {
            "title": "Cloud & Deployment",
            "description": "I leverage AWS (S3, CloudFront, EC2, IAM) to deploy fast, scalable, and cost-efficient web applications. From static hosting to auto-scaling infrastructure, I ensure apps are globally accessible and reliable."
        },
        {
            "title": "Programming & Problem-Solving",
            "description": "Proficient in Python, Java, and JavaScript, I bring a strong problem-solving mindset to both frontend and backend collaboration. I enjoy tackling challenges, optimizing performance, and delivering maintainable code."
        },
        {
            "title": "Creative UI/UX",
            "description": "I have an eye for detail when translating designs into production-ready UIs. By combining Figma-to-code precision with animations and interactivity, I craft engaging digital experiences that balance creativity and functionality."
        }
    ]
    // useGSAP(()=>{
    //     const skillElements = skillRef.current;
    //     document.fonts.ready.then(() => {
    //         skillElements.forEach((ref) => {
    //             if (!ref) return;
    //             const title = new SplitText(ref.querySelector(".skill-title"),{
    //                 type: "chars"
    //             });
    //             const descriptionLines = new SplitText(ref.querySelector(".skill-description"),{
    //                 type: "lines"
    //             });
                
    //             gsap.set(ref.querySelector(".id-skill"),{
    //                 y:"100%",
    //                 opacity:0,
    //             })
    //             gsap.set(title.chars,{
    //                 y:0,
    //                 opacity:0,
    //             });
    

    //             gsap.to(ref.querySelector(".id-skill"),{
    //                 y:0,
    //                 opacity:1,
    //                 duration:0.3,
    //                 scrollTrigger:{
    //                     trigger: ref,
    //                     start: "top 80%",
    //                     toggleActions: "restart none restart none"
    //                 }
    //             });
    //             gsap.to(title.chars,{
    //                 y:0,
    //                 duration:0.3,
    //                 opacity:1,
    //                 stagger:0.04,
    //                 scrollTrigger:{
    //                     trigger: ref,
    //                     start: "top 80%",
    //                     toggleActions: "restart none restart none"
    //                 }
    //             });
    //             gsap.from(descriptionLines.lines,{
    //                 y:"100%",
    //                 duration:0.5,
    //                 opacity:0,
    //                 stagger:0.2,
    //                 scrollTrigger:{
    //                     trigger: ref,
    //                     start: "top 80%",
    //                     toggleActions: "restart none restart none"
    //                 }
    //             }); 
    //         });
    //     });
    // },{scope:scopeRef})
    useGSAP(() => {
  const skillElements = skillRef.current;

  document.fonts.ready.then(() => {
    skillElements.forEach((ref) => {
      if (!ref) return;

      const skillItem = ref.querySelector(".id-skill");
      const title = new SplitText(ref.querySelector(".skill-title"), { type: "chars" });
      const descriptionLines = new SplitText(ref.querySelector(".skill-description"), { type: "lines" });

      const resetState = () => {
        gsap.set(skillItem, { y: "100%", opacity: 0 });
        gsap.set(title.chars, { y: 0, opacity: 0 });
        gsap.set(descriptionLines.lines, { y: "100%", opacity: 0 });
      };

      // Initial set
      resetState();

      // Create a single timeline for this skill element
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref,
          start: "top bottom",
          toggleActions: "restart none none none",
          onLeaveBack: () => resetState(), // reset when scrolling back past the section
        },
      });

      tl.to(skillItem, { y: 0, opacity: 1, duration: 0.3 })
        .to(title.chars, { y: 0, opacity: 1, duration: 0.3, stagger: 0.04 }, "<")
        .to(descriptionLines.lines, { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 }, "<0.1");
    });
  });
}, { scope: scopeRef });

    return (
        <section ref={scopeRef} id="About-myself" className='relative w-full min-h-screen mt-[100vh]'>
            <div id="images section" className="w-full h-auto flex flex-row justify-center items-center gap-16">
                <img src="/images/suryavamsi.jpeg" alt="SuryaVamsiImage" className="w-[156px] h-[195px] md:w-[254px] md:h-[316px] lg:w-[344px] lg:h-[430px] object-bottom object-cover z-[1000]"/>
            </div>
            <div  id="info-Skills-section" className=" w-full h-auto flex flex-col justify-start items-center gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 py-24 md:py-52">
                {
                    skillTack.map((skill, index) => (
                        <div ref={(el)=>( skillRef.current[index] = el )} key={skill.title} className=" w-full h-auto text-center grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-5 lg:gap-6 border-t border-[#f3f4ef1a] pt-7">
                            <p className={`id-skill h-fit col-span-1 flex flex-row justify-start items-start text-[10px] text-white overflow-hidden `}>[ {String(index+1).padStart(2, "0")} ]</p>
                            <h1 className="skill-title h-fit col-start-2 col-span-5 md:col-start-2 md:col-span-4 font-editorial-thin flex flex-row justify-start items-start text-lg md:text-xl lg:text-2xl text-white overflow-hidden">
                                {skill.title}
                            </h1>
                            <p className="skill-description col-span-6 md:col-start-9 md:col-span-4 text-base md:text-lg font-editorial-thin text-[#f3f4ef80] text-start max-w-[380px] ">
                                {skill.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default AboutSection