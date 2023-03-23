import { useEffect, useRef, useState } from 'react'
import BlackHole from './BlackHole'
import Stars from './Stars'
import Typed from 'typed.js'
import { EXTRA_QUOTES, QUOTES } from '../config'

function Home () {
    const typedElement = useRef(null)
  
    useEffect(() => {
      const typed = new Typed(typedElement.current, {
        strings: EXTRA_QUOTES,
        typeSpeed: 50,
        backSpeed: 200,
        backDelay: 3000,
        cursorChar: '█',
        loopCount: Infinity,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
      })
      return () => {typed.destroy()}
    }, [])
  
    return (
      <div className="App h-screen relative">
        <div className="p-10 h-1/3 mx-auto flex text-center justify-center text-white font-mono text-2xl relative z-10 ">
            <div className="border h-fit w-[500px] p-6 bg-zinc-900">
              <span ref={typedElement}></span>
            </div>
        </div>
        <BlackHole className="absolute top-0 w-full h-full"/>
      </div>
    )
}

export default Home