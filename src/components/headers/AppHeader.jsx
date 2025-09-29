
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Time from "@common/Time";
import DateComp from "@common/DateComp";
import { useTheme } from "../../hooks/useTheme";
import DownloadButton from "../ui/DownloadButton";


const AppHeader = () => {
  const headerRef = useRef(null);
  const menuBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navRefs = useRef([]);
  const nameRef = useRef(null);
  const menuTL = useRef(null);
  const {theme} = useTheme();

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
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
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
    // bg-linear-to-b from-black from-0% via-60% via-black  to-100% to-[#f3f4ef00]
    <header id="nav-section" ref={headerRef} className={`w-screen z-40 fixed top-0 left-0 right-0 bg-transparent px-4 md:px-6 pt-4 md:pt-8 pb-8 md:pb-12  ${theme=="light"?"text-black ":"text-white "} transition-colors duration-300 ease-in-out`}>
      <div className="w-full h-auto grid grid-cols-6 md:grid-cols-12 gap-4">
        <div className="col-span-1 flex md:hidden justify-start items-start z-50">
          <button ref={menuBtnRef} onClick={handleMenuToggle} className="w-8 pb-2 pr-2 flex justify-center items-center bg-transparent">
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
        <div className="hidden md:col-span-2 md:flex flex-col gap-1 z-50">
          {[{title:"INFO",link:"#About-myself"}, {title:"SKILLS",link:"#Skills-section"}, {title:"WORK",link:"#Work-Section"}, {title:"CONTACT",link:"#contact-section"}].map((item, i) => (
            <a key={i} href={`${item.link}`} className="relative w-fit font-mono rounded-md flex flex-row gap-1 px-2 py-2 overflow-clip">
              <div className="relative z-40 text-[9px]">{String(i + 1).padStart(2, "0")}</div>
              <div
                ref={(el) => (navRefs.current[i] = el)}
                className="relative overflow-hidden z-40"
              >
                <div className="text-up text-xs uppercase">{item.title}</div>
                <div className="text-down text-xs uppercase absolute inset-[100%_auto_auto_0%]">
                  {item.title}
                </div>
              </div>
              <div id="section-Scrolle-percent" className="absolute inset-0 bg-[#8348ff] z-30">

              </div>
            </a>
          ))}
        </div>
        <div className="col-start-2 col-span-3 md:col-start-7 md:col-span-3 lg:col-start-7 lg:col-span-2 flex flex-col gap-0.5 z-50">
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
        <div className="col-start-5 col-span-2 md:col-start-10 md:col-span-3 lg:col-start-9 lg:col-span-2 flex flex-col gap-0.5 z-50">
          <Time />
          <DateComp />
          
        </div>
        <div className="hidden lg:col-start-11 lg:col-span-2 lg:flex flex-col justify-start items-center gap-0.5 z-50">
          <DownloadButton/>
        </div>
        <div ref={mobileMenuRef} className="fixed top-0 left-0 w-screen h-screen hidden">
          <div className="relative menu-content w-full h-full px-4 z-50">
            <div className="h-full flex flex-col gap-4 pt-36 ml-16">
              {[{title:"INFO",link:"#About-myself"}, {title:"SKILLS",link:"#Skills-section"}, {title:"WORK",link:"#Work-Section"}, {title:"CONTACT",link:"#contact-section"}].map((item, i) => (
                <a key={i} href={item.link} className="menu-link font-mono flex flex-row gap-2 px-2 pb-4" onClick={handleMenuToggle}>
                  <div className="menu-link-ind text-[10px]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="menu-link-text text-2xl font-editorial-thin">
                    {item.title}
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
