import { useState } from 'react'
import BlackHole from './BlackHole'
import Stars from './Stars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-screen h-screen bg-zinc-900">
      <BlackHole
        className=''
      />
      <Stars
        className='absolute w-full h-full left-0 top-0'
      />
    </div>
  )
}

export default App
