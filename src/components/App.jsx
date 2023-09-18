
import Home from "./Home"
import Stars from "./Stars"
import { useEffect, useRef } from "react"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import './App.css'
import Experience from "./Experience"


function App() {
    const mainRef = useRef()

    return (
        <div className="font-mono">
            <Home nextSection={mainRef}></Home>
            <Stars className='absolute top-0 bg-zinc-900 overflow-hidden w-full h-[125vh] z-[-1]' />

            <div className="w-full h-[25vh] bg-gradient-to-b from-[#00000000] to-zinc-900"></div>

            <div ref={mainRef} className="main bg-zinc-900 text-zinc-50 overflow-hidden">
                <About />
                <Experience></Experience>
                <Skills />
                <Projects />
            </div>
        </div>
    )
}

export default App
