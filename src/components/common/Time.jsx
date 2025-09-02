import { useEffect, useRef } from "react";

const Time = () => {
  const timeRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      let hours = currentTime.getHours();
      const minutes = currentTime.getMinutes().toString().padStart(2, "0");
      const meridiem = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const formattedHours = hours.toString().padStart(2, "0");
      if (timeRef.current) {
        timeRef.current.textContent = `${formattedHours}:${minutes} ${meridiem}`;
      }
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px]/[12px] md:text-xs/4 text-[#191B20]" ref={timeRef}></div>
  );
};

export default Time;
