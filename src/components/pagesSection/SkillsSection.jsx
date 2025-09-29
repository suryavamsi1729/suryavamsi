import { useGSAP } from "@gsap/react";
import AboutSection from "./AboutSection";
import AboutTitle from "./AboutTitle";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";


const SkillsSection = () => {
    const scopeRef = useRef(null);
    const skillsRef = useRef(null);
    const skillsItemsRef = useRef([]);
    
    const skills = [
        {
            "title": "Frontend",
            "skills": [
            { "name": "React.js", "image": "https://img.icons8.com/color/96/react-native.png" },
            { "name": "Next.js", "image": "https://portfolio-ecru-sigma-69.vercel.app//images/next.webp" },
            { "name": "Angular", "image": "https://img.icons8.com/color/96/angularjs.png" },
            { "name": "HTML5", "image": "https://img.icons8.com/color/96/html-5.png" },
            { "name": "CSS3", "image": "https://img.icons8.com/color/96/css3.png" },
            { "name": "Tailwind CSS", "image": "https://img.icons8.com/color/96/tailwindcss.png" },
            { "name": "Bootstrap", "image": "https://img.icons8.com/?size=96&id=EzPCiQUqWWEa&format=png&color=000000" },
            { "name": "Redux", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/redux.png" },
            ]
        },
        {
            "title": "Backend",
            "skills": [
            { "name": "Node.js", "image": "https://img.icons8.com/?size=96&id=hsPbhkOH4FMe&format=png&color=000000" },
            { "name": "Express.js", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/express.png" }
            ]
        },
        {
            "title": "Databases",
            "skills": [
            { "name": "MongoDB", "image": "https://img.icons8.com/?size=96&id=bosfpvRzNOG8&format=png&color=000000" },
            { "name": "MySQL", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/mysql.png" }
            ]
        },
        {
            "title": "Animations",
            "skills": [
            { "name": "GSAP", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/gsap.png" },
            { "name": "Framer Motion", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/framer-motion.webp" },
            { "name": "Anime.js", "image": "https://cdn.bsky.app/img/avatar/plain/did:plc:itelljk76ga66jzza5rxky6b/bafkreidettspfjrooyhiihe6xzomgse7hz3csvyxxrob4srnrzla255b64@jpeg" }
            ]
        },
        {
            "title": "Tools",
            "skills": [
            { "name": "Git", "image": "https://img.icons8.com/color/96/git.png" },
            { "name": "Postman", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/postman-icon.webp" }
            ]
        },
        {
            "title": "AWS",
            "skills": [
            { "name": "AWS S3", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/s3.png" },
            { "name": "AWS CloudFront", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/CloudFront.png" },
            { "name": "AWS EC2", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/EC2.png" },
            { "name": "Lambda", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/Lambda.png" },
            { "name": "Auto Scaling", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/autoscaling.png" },
            { "name": "VPC", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/vpc.png" },
            { "name": "IAM", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/iam.png" },
            { "name": "DynamoDB", "image": "https://portfolio-ecru-sigma-69.vercel.app/images/DynamoDB.png" }
            ]
        },
        {
            "title": "Languages",
            "skills": [
            { "name": "Python", "image": "https://img.icons8.com/color/96/python.png" },
            { "name": "Java", "image": "https://img.icons8.com/color/96/java-coffee-cup-logo.png" },
            { "name": "JavaScript", "image": "https://img.icons8.com/color/96/javascript.png" },
            { "name": "TypeScript", "image": "https://img.icons8.com/color/96/typescript.png" }
            ]
        }
    ];
    useGSAP(()=>{
        
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: skillsRef.current,
                start: "top bottom",
                end: "top 20%",
                scrub: true,
            }
        });
        tl.to("#skillText",{
            opacity:0.1
        });
        document.fonts.ready.then(() => {
            
            skillsItemsRef.current.forEach((ref) => {
            if (!ref) return;
            const skillItem = ref.querySelectorAll(".skill-item");
            console.log(skillItem);
            const title = new SplitText(ref.querySelector(".skill-title"), { type: "chars" });

            const resetState = () => {
               
                gsap.set(title.chars, { y: 0, opacity: 0 });
                gsap.set(skillItem,{y:"100%",opacity:0});
            };

            // Initial set
            resetState();

            // Create a single timeline for this skill element
            const tl = gsap.timeline({
                scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                toggleActions: "restart none none none",
                onLeaveBack: () => resetState(), // reset when scrolling back past the section
                },
            });
            
            tl.to(title.chars, { y: 0, opacity: 1, duration: 0.3, stagger: 0.04 });
            tl.to(skillItem,{
                y:0,
                opacity:1,
                duration: 0.5,
                stagger: 0.2,
            }, "<")
            });
        });

    },{scope:scopeRef})
    return (
        <section ref={scopeRef} id="Skills-section" className='relative w-full flex flex-col justify-start items-start  bg-black '>
            <div className="w-full sticky top-0 z-10">
                <div className="w-full h-screen flex justify-center items-center">
                    <h1 id="skillText" className="about-text font-respira font-bold text-8xl md:text-[120px] lg:text-[320px] tracking-tight text-brand">Skills</h1>
                </div>
            </div>
            <div ref={skillsRef} id="my-Skills-continer" className="w-full h-auto flex flex-col justify-start items-center gap-6 md:gap-8 lg:gap-12 px-6 md:px-8 py-24 md:py-52 z-20">
                {
                    skills.map((skill, index) => (
                        <div ref = {(ele)=>(skillsItemsRef.current[index]=ele)} key={index} className="w-full grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-16">
                            <div className="col-span-6 md:col-span-12 h-[1px] bg-[#f3f4ef1a]"></div>
                            <h2 className="skill-title col-start-1 col-span-6 md:col-start-2 md:col-span-3 text-3xl md:text-5xl font-semibold text-start text-white font-editorial-thin">{skill.title}</h2>
                            <div className="col-start-1 col-span-6 md:col-start-6 md:col-span-7 w-full h-auto  flex flex-row justify-start items-center flex-wrap gap-4 md:gap-6">
                                {
                                    skill.skills.map((item, ind) => (
                                        <div key={ind} className="skill-item w-auto h-auto flex flex-row justify-start items-center gap-4 p-2">
                                            <img loading="lazy" src={item.image} alt={item.name} className="w-10 h-10 aspect-square object-contain"/>
                                            <p className="text-md md:text-base lg:text-lg text-white font-mono">{item.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SkillsSection
