import { CornerDownRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
const ContactSection = () => {
    const scoperef = useRef(null);
    const connect = [
        {
            "title": "LinkedIn",
            "link": "https://www.linkedin.com/in/surya-vamsi-570780240/"
        },
        {
            "title": "GitHub",
            "link": "https://github.com/suryavamsi1729"
        },
        {
            "title": "Instagram",
            "link": "https://www.instagram.com/doddisuryavamsi/"
        }
    ]
    useGSAP(()=>{
        
        document.fonts.ready.then(() => {
            const tl = gsap.timeline({
            scrollTrigger: {
                trigger:scoperef.current,
                start: "top 20%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
            }
        });
            const contactText = new SplitText("#title-conect-text", { type: "chars" });
            gsap.set(contactText.chars,{yPercent:100});
            tl.to(contactText.chars, {
                yPercent: 0,
                stagger: 0.08,
                duration:0.6,
            });
        });
        window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
    },{scope:scoperef});

  return (
    <section ref={scoperef} id="contact-section" className="relative w-full min-h-screen flex flex-col justify-start items-center px-8  bg-[#d2d2d27d]">
        <div className="w-full h-auto grid grid-cols-6 md:grid-cols-12 gap-4">
            <div className="col-start-1 col-span-6  lg:col-span-4 flex flex-col justify-start items-start gap-1 pt-24 md:pt-48">
                <h2 className="text-[#191b2080] text-start md:text-3xl lg:text-4xl font-editorial-thin ">Let’s collaborate</h2>
                <a href='mailto:suryavamsi2005doddi@gmail.com' className="w-full h-auto flex justify-start items-center font-editorial-thin text-black gap-2 ">
                    <CornerDownRight/>
                    <span className='text-xl lg:text-3xl font-semibold'>suryavamsi2005doddi@gmail.com</span>
                </a>
            </div>
            <div className="col-start-1 col-span-6 md:col-start-7 md:col-span-6 lg:col-start-9 lg:col-span-4 pt-48 ">
                {
                    connect.map((ele,index)=>(
                        <div key={index} className=' w-full h-auto flex flex-col justify-center items-center gap-2 pt-2'>
                            <div className='w-full h-[1px] bg-[#191b201a]'></div>
                            <div className='w-full h-auto flex flex-row justify-start items-center gap-4 py-4 px-4'>
                                <p className={`id-skill h-fit flex flex-row justify-start items-center text-[10px] text-black overflow-hidden `}>[ {String(index+1).padStart(2, "0")} ]</p>
                                <a target='_blank' href={ele.link} className="skill-title h-fit font-mono flex flex-row justify-start items-center text-xs text-black  overflow-hidden uppercase">
                                    {ele.title}
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='w-full h-auto absolute bottom-0'>
            <h1 id="title-conect-text" className="w-full h-auto text-center text-[24cqw]/[24cqw] font-respira line-clamp-1">
            Connect
            </h1>
      </div>
    </section>
  );
}
export default ContactSection;