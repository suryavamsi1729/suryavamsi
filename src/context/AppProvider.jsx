import ThemeProvider from "./Theme/ThemeProvider"

const AppProvider = ({children})=>{
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    
    )
}

export default AppProvider;
