import gsap from 'gsap'
import { ScrollTrigger,Flip,SplitText } from 'gsap/all'
import './App.css'
import { HomePage } from './pages'
import AppProvider from './context/AppProvider'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip, SplitText)


function App() {


  return (
    <>
      <AppProvider>
          <HomePage/>
      </AppProvider>
    </>
  )
}

export default App
