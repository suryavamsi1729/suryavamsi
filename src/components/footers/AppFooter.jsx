import { CornerDownRight } from "lucide-react";
import React from "react";

const AppFooter = () => {
    return (
        <footer className="relative bg-black text-gray-200 px-8 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between flex-wrap items-start gap-6 py-12 ">
                {/* Logo/Brand */}
                <div className="max-w-md md:max-w-sm w-auto flex flex-col justify-start items-start gap-4">
                    <div className="flex items-center gap-4">
                        <img src="/images/slogo.avif" alt="logo" className="logo w-9 h-9 object-contain"/>
                        <span className="text-2xl font-editorial font-bold text-white">Surya Vamsi</span>
                    </div>
                    <p className="font-mono md:text-sm lg:text-base">Every project is a blend of design and logic — <span className="text-[#8348ff] font-bold">React</span> powering the structure, <span className="text-[#8348ff] font-bold">GSAP</span> adding life, and <span className="text-[#8348ff] font-bold">AWS</span> taking it to the world.</p>
                    <div className="flex justify-start items-center gap-4">
                        
                        <a href="https://github.com/suryavamsi1729" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 hover:cursor-pointer transition ">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/surya-vamsi-570780240/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 hover:cursor-pointer transition">
                            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/doddisuryavamsi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 hover:cursor-pointer transition">
                            <svg fill="#000000" className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/></svg>
                        </a>
                    </div>
                </div>
                

                {/* Navigation Links */}
                <div className="w-full md:w-auto h-auto flex flex-col justify-start items-start gap-3">
                    <h3 className="text-xl font-serif">Pages</h3>
                    <nav className="w-full flex flex-row md:flex-col justify-between md:justify-start items-start flex-wrap gap-3 text-sm font-mono font-semibold">
                        {/* [{title:"INFO",link:"#About-myself"}, {title:"SKILLS",link:"#Skills-section"}, {title:"WORK",link:"#Work-Section"}, {title:"CONTACT",link:"#contact-section"}] */}
                        {/* <a href="/" className="hover:text-blue-400 transition">Home</a> */}
                        <a href="#About-myself" className="hover:text-blue-400 transition">Info</a>
                        <a href="#Skills-section" className="hover:text-blue-400 transition">Skills</a>
                        <a href="#Work-Section" className="hover:text-blue-400 transition">Work</a>
                        <a href="#contact-section" className="hover:text-blue-400 transition">Contact</a>
                    </nav>
                </div>

                <div className="hidden  md:w-full md:max-w-lg lg:max-w-xl h-full self-center md:flex flex-col justify-center items-start gap-1">
                    <a href='mailto:suryavamsi2005doddi@gmail.com' className="w-full h-auto flex justify-start items-center font-editorial-thin text-white gap-2 ">
                        <CornerDownRight/>
                        <div className='w-auto h-auto relative overflow-hidden'>
                            <div className="text-up text-xl font-semibold">suryavamsi2005doddi@gmail.com</div>
                            <div className="text-down text-xl font-semibold absolute inset-[100%_auto_auto_0%]">suryavamsi2005doddi@gmail.com</div>
                        </div>
                    </a>
                    <h1 className="text-[88px]/[88px] font-semibold text-brand opacity-30">LET’S TALK</h1>

                </div>
                
            </div>
            <div className="w-full flex flex-col md:flex-row justify-around items-center gap-4  border-t border-[#f3f4ef1a] text-center text-xs text-gray-400 py-4">
                <p className="text-sm font-light">Developed by <a href={"https://github.com/suryavamsi1729"} className="font-semibold text-brand text-base hover:cursor-pointer"> " Surya Vamsi " </a></p>
                <p className="text-sm font-light">Design inspired by <a href={"https://www.jordangilroy.com/"} className="font-semibold text-brand text-base hover:cursor-pointer"> " jordangilroy " </a></p>
            </div>
        </footer>
    );
};

export default AppFooter;