import { useEffect, useRef, useState } from 'react'
import BlackHole from './BlackHole'
import Stars from './Stars'
import Typed from 'typed.js'
import ChevronDown from '../assets/chevron-down.svg'
import { EXTRA_QUOTES, QUOTES } from '../config'

function Home ({nextSection}) {
    const typedElement = useRef(null)
  
    useEffect(() => {
      const typed = new Typed(typedElement.current, {
        strings: QUOTES,
        typeSpeed: 50,
        backSpeed: 200,
        backDelay: 1500,
        cursorChar: '█',
        loopCount: Infinity,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
      })
      return () => {typed.destroy()}
    }, [])

    const scrollToNext = () => {
      nextSection.current.scrollIntoView({behavior: "smooth"})
    }
  
    return (
      <div className="App h-screen relative">
        <div className="p-10 h-1/3 mx-auto flex text-center justify-center text-white font-mono text-2xl relative z-10 ">
            <div className="h-fit w-[500px] bg-zinc-900">
              <span ref={typedElement}></span>
            </div>
        </div>
        <BlackHole className="absolute top-0 w-full h-full"/>
        <button onClick={scrollToNext} className='absolute bottom-0 w-full flex justify-center py-5 text-white flex-col items-center text-center gap-y-5'>
          <p className='opacity-80'>Scroll Down</p>
          <img src={ChevronDown} alt="chevron down" className='w-10 animate-bounce'/>
        </button>
      </div>
    )
}

export default Home