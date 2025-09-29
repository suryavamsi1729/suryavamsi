import { useRef} from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useTheme } from '../../hooks/useTheme';
import gsap from 'gsap';

const HeroSection = ({loadingPageRef}) => {
    const projects = [
        {
            imageurl:"/images/drink4.png",
            title: "MOJITO"
        },
        {
            imageurl:"/images/photo.jpg",
            title: "PHOTOGRAM",
        },
        {
            imageurl:"/images/cygnus1.png",
            title: "CYGNUS",
        },
        {
            imageurl: "/images/scorify.webp",
            title:"SCORIFY"
        },
    ]
    const {theme,toggleTheme} = useTheme();
    
    const infoRef = useRef(null);
    const infoText = useRef(null);
    const tlRef = useRef(null);
    
    useGSAP((context)=>{
        tlRef.current = gsap.timeline();
        gsap.set(".img-slider",{
            clipPath:"inset(0% 100% 0% 0%)",
        })
        gsap.set(".project-title", {
            y: "100%",
        });
        document.fonts.ready.then(() => {
            const infoTextSlide = new SplitText(context.selector(".text-slide"),{ type: "lines" });
            const scrollText = new SplitText(context.selector(".scroll-text"),{ type: "chars" });
            const projectCountText = new SplitText(context.selector(".project-count-text"),{ type: "chars" });
            loadingPageRef.current.timeline.from(infoTextSlide.lines, 
                { 
                    y:100,
                    opacity:0,
                    duration:0.6,
                    stagger:0.06,
                },"0.4"
            );
            loadingPageRef.current.timeline.from(scrollText.chars,{
                opacity:0,
                duration:0.6,
                stagger:0.06,
            },"1");
            loadingPageRef.current.timeline.fromTo(".bottom-img",{
                clipPath:"polygon(0 0, 0 0, 0 100%, 0% 100%)"
            },{
                clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration:0.6,
                stagger:0.15,
            },"1.25");
            loadingPageRef.current.timeline.from(projectCountText.chars,{
                opacity:0,
                duration:0.6,
                stagger:0.05,
            },"<");
        });
        window.addEventListener("load", () => {
            ScrollTrigger.refresh();
        });
    },{ scope: infoRef });
    const handelMouseEnter = (e)=>{
        const parent = e.currentTarget.parentElement;
        const imgSlider = parent.querySelector(".img-slider");
        const title = parent.querySelector(".project-title");
        toggleTheme();
        const tl = gsap.timeline();
        tl.fromTo(
            imgSlider, 
            {
                clipPath: "inset(0% 100% 0% 0%)",
                scale:1.1,
            },
            { 
                clipPath: "inset(0% 0% 0% 0%)",
                scale:1,
                ease:"power1.out",
                duration: 0.3,
                overwrite:"auto"
                
            }
        );
        tl.to(title,{
            y:"0%",
            duration:0.2,
            ease: "power1.out",
            overwrite: "auto",
        });
    }
    const handleMouseLeave = (e) => {
        const parent = e.currentTarget.parentElement; // go to the parent of .group
        const imgSlider = parent.querySelector(".img-slider");
        const title = parent.querySelector(".project-title");
        toggleTheme();
        const tl = gsap.timeline();
        tl.to(title,{
            y:"100%",
            duration:0.2,
            ease: "power1.out",
            overwrite: "auto",
        });
        tl.fromTo(
            imgSlider, 
            {
                clipPath: "inset(0% 0% 0% 0%)",
                scale:1
            },
            { 
                clipPath: "inset(0% 100% 0% 0%)", 
                scale:1.1,
                duration: 0.3,
                ease:"power1.out",
                overwrite:"auto"
            }
        );

        
    };
    return (
        <section ref={infoRef} id="info" className={`relative w-full min-h-screen flex flex-col  animate-wrapper ${theme=="light"?"text-black":"text-white/40"} transition-colors duration-300 ease-in-out flex flex-col justify-end items-center p-4 md:p-6`}>
            <div className='absolute bottom-0 right-0 w-[240px] h-14 bg-white'>
            </div>
            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-12 justify-between items-center gap-4'>
                <div ref={infoText} className='col-span-4 max-w-xs flex flex-col justify-center items-start gap-2'>
                    <p className='text-slide line-clamp-3 lg:line-clamp-4  md:text-lg font-semibold text-black font-editorial-thin overflow-hidden'>
                        I craft responsive, animation-rich frontends with React, Tailwind, and GSAP — bringing ideas to life with creativity and motion.Powered by AWS, my apps are built to be fast and scalable.
                    </p>
                    <p className='scroll-text text-[10px] font-thin text-[#191B20] font-mono uppercase'>[scroll to explore]</p>
                </div>
                <div className='h-full md:col-start-7 md:col-span-6 lg:col-start-9 lg:col-span-4 flex flex-row justify-start items-start gap-2 '>
                    {
                        projects.map((project,ind)=>(
                            <div key={ind} className='flex-1 flex flex-col h-full justify-start items-start gap-2'>
                                <div onMouseEnter={handelMouseEnter}  onMouseLeave={handleMouseLeave} className=' group z-10 flex flex-col h-full justify-start items-start gap-2'>
                                    <p className={`project-count-text text-[10px] ${theme=="light"?"text-black":"text-white/40"} transition-colors duration-300 ease-in-out  group-hover:text-white`}>[{String(ind + 1).padStart(2, "0")}]</p>
                                    <div className='bottom-img'>
                                        <img alt="img"  src={`${project.imageurl}`} className={`w-full aspect-4/5 object-cover text-[#191B20] `}/>
                                    </div>
                                </div>
                                <div className='img-slider absolute inset-0 w-full h-full overflow-hidden'>
                                    <img alt="img"  className=" w-full h-full object-cover" src={`${project.imageurl}`}/>
                                    <div className='grid grid-cols-1  md:grid-cols-12 absolute inset-[50%_0%_auto] px-4 overflow-hidden'>
                                        <a className={`project-title line-clamp-1 font-editorial-thin text-3xl col-span-1 md:col-start-7 md:cols-span-6 lg:col-start-9 lg:col-span-4 ${theme=="light"?"text-black":"text-white"}`}>
                                            {project.title}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
