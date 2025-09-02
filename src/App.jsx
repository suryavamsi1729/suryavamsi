import gsap from 'gsap'
import { ScrollTrigger,Flip,SplitText } from 'gsap/all'
import { AppHeader } from '@headers'
import { HeroPage } from '@pages'
import './App.css'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip, SplitText)


function App() {


  return (
    <>
      <AppHeader/>
      <HeroPage/>

    </>
  )
}

export default App
