
import Home from "./Home"
import Stars from "./Stars"
import Endurance from "../assets/enduranceDetail.svg"

function App() {
  return(
    <div className="font-mono">
      <Home></Home>
      <Stars className='absolute top-0 bg-zinc-900 overflow-hidden w-full h-[150vh] z-[-1]'/>

      <div className="w-full h-[50vh] bg-gradient-to-b from-[#00000000] to-zinc-900">
      </div>

      <div className="main bg-zinc-900">
        <section className="flex flex-col md:flex-row justify-evenly items-center gap-10 py-20 px-5 text-zinc-50">
          <img src={Endurance} alt="Endurance" className="w-[300px] md:w-[300px] lg:w-[450px]"/>
          <div className="max-w-[750px] flex flex-col gap-y-5">
            <div className="p-6 border text-center">
              <h1 className="text-2xl">I'm a penultimate computer science student</h1>
            </div>
            <p>
              Currently studying at the University of New South Wales and actively looking for opportunities to develop
              and apply my skills. I take my studies very seriously and am very passionate about computer science
              and software development.
            </p>
            <p>
              In my own time, I like to teach myself beyond school. This has accumulated to a few small projects which,
              through the process of making, have compounded my understanding of computer science concepts and practises.
              I'm always eager to learn and test my problem solving ability.
            </p>
            <a href="" className="inline border-l border-pop w-fit px-4 py-2 transition duration-100 hover:bg-pop hover:text-zinc-900">
              Resume
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default App
 