import gsap from 'gsap'
import { ScrollTrigger,Flip,SplitText } from 'gsap/all'
import './App.css'
import AppProvider from './context/AppProvider'
import AppRoutes from './routes/AppRoutes'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip, SplitText)


function App() {


  return (
    <>
      <AppProvider>
          <AppRoutes/>
      </AppProvider>
    </>
  )
}

export default App
