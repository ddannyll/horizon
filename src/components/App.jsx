import { useEffect, useRef, useState } from 'react'
import BlackHole from './BlackHole'
import Stars from './Stars'
import Typed from 'typed.js'

function App() {
  const [count, setCount] = useState(0)
  const typedElement = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Mankind Was Born On Earth. It Was Never Meant To Die Here.",
        "Murphy's Law Doesn’t Mean That Something Bad Will Happen...", 
        "...It Means That Whatever Can Happen Will Happen.",
        "Every hour we spend on that planet will be 7 years back on Earth.",
        "A machine doesn't improvise well because you cannot program a fear of death.",
        "Our survival instinct is our greatest source of inspiration.",
        "No time for caution.",
        "We’ve Always Defined Ourselves By The Ability To Overcome The Impossible.",
        "Do not go gentle into that good night...",
        "...Old age should burn and rave at close of day...",
        "...Rage, rage against the dying of the light.",
        "We Must Reach Far Beyond Our Own Lifespans.",
        "Interstellar.", 
      ],
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
    <div className="App w-screen h-screen bg-zinc-900 absolute top-0 left-0">
      <div className="p-10 h-1/3 inline mx-auto flex text-center justify-center text-white font-mono text-2xl relative z-10 bg-gradient-to-b from-[#18181Bee]">
        <div className="container">
          <span ref={typedElement}/>
        </div>
      </div>
        <BlackHole className="absolute w-screen h-screen top-0 left-0"/>
        <Stars className='absolute w-full h-full top-0 left-0'/>
    </div>
  )
}

export default App
