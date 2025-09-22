import { useState } from "react";
import ThemeContext from "./ThemeContex";

const ThemeProvider = ({ children })=>{
    const [theme,setTheme] = useState('light');
    const toggleTheme = ()=>{setTheme((pre)=>pre=='light'?'dark':'light')};
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;