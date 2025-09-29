import { CornerDownRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
const ContactSection = () => {
    const scoperef = useRef(null);
    const connectRef = useRef([]);
    const emailRef = useRef(null);
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
            connectRef.current.forEach((target) => {
                if (!target) return;

                const upText = new SplitText(target.querySelector(".text-up"), {
                type: "chars",
                });
                const downText = new SplitText(target.querySelector(".text-down"), {
                type: "chars",
                });

                const connectTL = gsap.timeline({ paused: true });
                connectTL.to(upText.chars, { y: "-100%", duration: 0.26, stagger: 0.06 }, 0);
                connectTL.to(downText.chars, { y: "-100%", duration: 0.26, stagger: 0.06 }, 0);

                target.addEventListener("mouseenter", () => connectTL.play());
                target.addEventListener("mouseleave", () => connectTL.reverse());
            });
            const emailTxtTL = gsap.timeline({paused:true});
            const emailUpTxt = new SplitText(emailRef.current.querySelector(".text-up"), {type: "chars",});
            const emailDownTxt = new SplitText(emailRef.current.querySelector(".text-down"), {type: "chars",});
            emailTxtTL.to(emailUpTxt.chars, { y: "-100%", duration: 0.2, stagger: 0.01 }, 0);
            emailTxtTL.to(emailDownTxt.chars, { y: "-100%", duration: 0.2, stagger: 0.01 }, 0);
            emailRef.current.addEventListener("mouseenter", () => emailTxtTL.play());
            emailRef.current.addEventListener("mouseleave", () => emailTxtTL.reverse());

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
                    <div ref={emailRef} className='w-auto h-auto relative overflow-hidden'>
                        <div className="text-up text-xl lg:text-3xl font-semibold">suryavamsi2005doddi@gmail.com</div>
                        <div className="text-down text-xl lg:text-3xl font-semibold absolute inset-[100%_auto_auto_0%]">suryavamsi2005doddi@gmail.com</div>
                    </div>
                </a>
            </div>
            <div className="col-start-1 col-span-6 md:col-start-7 md:col-span-6 lg:col-start-9 lg:col-span-4 pt-48 ">
                {
                    connect.map((ele,index)=>(
                        <div key={index} className=' w-full h-auto flex flex-col justify-center items-center gap-2 pt-2'>
                            <div className='w-full h-[1px] bg-[#191b201a]'></div>
                            <div className="w-full h-auto flex flex-row justify-start items-center gap-4 py-4 px-4">
                                <p className="id-skill w-auto h-fit flex flex-row justify-start items-center text-[10px] text-black">
                                     {`[ ${String(index + 1).padStart(2, "0")} ]`}
                                </p>

                                {/* wrapper with ref */}
                                <div ref={(ele)=>(connectRef.current[index]=ele)} className="w-auto h-auto relative overflow-hidden">
                                    <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={ele.link}
                                    className="skill-title h-fit font-mono flex flex-row justify-start items-center text-xs text-black relative overflow-hidden uppercase"
                                    >
                                    <div className="text-up text-xs uppercase">{ele.title}</div>
                                    <div className="text-down text-xs uppercase absolute inset-[100%_auto_auto_0%]">
                                        {ele.title}
                                    </div>
                                    </a>
                                </div>
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