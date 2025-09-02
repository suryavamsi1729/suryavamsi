import { useState,useEffect } from "react"
const DateComp = ()=>{
    const [date,setDate] = useState("");
    useEffect(()=>{
        const updateDate = ()=>{
            const currentDate = new Date();
            const month = currentDate.getMonth();
            const date = currentDate.getDate();
            const year = currentDate.getFullYear();
            const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
            setDate(`${date} ${months[month]}, ${year}`);
        }
        updateDate();

        // Calculate time until midnight
        const now = new Date();
        const msUntilMidnight =
        new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
        now.getTime();

        const timer = setTimeout(() => {
        updateDate();
        }, msUntilMidnight);

        return () => clearTimeout(timer);
  }, []);
    return (
        <div className="w-full font-mono text-[10px]/[12px] md:text-xs/4 text-[#191B20]">
            {date}
        </div>
    )
}
export default DateComp;