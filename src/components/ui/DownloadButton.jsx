import { useRef } from "react";
import { Download } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DownloadButton = () => {
  const btnRef = useRef(null);

  useGSAP(() => {
    if (!btnRef.current) return;

    // Entrance animation
    gsap.from(btnRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Hover animations
    const btn = btnRef.current;
    const onEnter = () => gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    const onLeave = () => gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a
      ref={btnRef}
      href="/resume/suryavamsi_resume _recent_with_AWS.pdf"
      download="SuryaVamsi_Resume.pdf"
      className="w-auto flex items-center font-mono gap-2 px-3 py-2 text-sm rounded-lg tracking-wide border"
    >
      <Download size={20} />
      <span>Download Resume</span>
    </a>
  );
};

export default DownloadButton;
