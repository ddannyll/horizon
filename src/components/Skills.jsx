import squareCode from "../assets/square-code.svg"
import squareTerminal from "../assets/square-terminal.svg"
import codeCompare from "../assets/code-compare.svg"
import { motion } from 'framer-motion'

export default function Skills() {
    const list = {
        visible: {
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.3,
            },
          },
          hidden: {
            opacity: 0,
            transition: {
              when: "afterChildren",
            },
          },
      }
      
      const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }
      
    
    return (
        <motion.section
            className="container mx-auto flex flex-col items-center px-5 h-screen justify-center md:mt-[-20vh]">
            <div className="p-6 border rounded-lg text-center h-fit max-w-full w-[450px] mb-10">
                <h1 className="text-xl">02. Here are some of my skills</h1>
            </div>
            <motion.ul 
                initial="hidden"
                animate="visible"
                variants={list}
            className="flex flex-col gap-y-10 text-sm md:flex-row md:gap-x-20">
                <motion.li variants={item} className="">
                    <h2 className="flex gap-2 text-xl font-medium">
                        <img src={squareTerminal} alt="code icon" className="w-5" />
                        Programming
                    </h2>
                    <ul className="list-disc list-inside pl-2">
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C</li>
                    </ul>
                </motion.li>
                <motion.li variants={item} className="">
                    <h2 className="flex gap-2 text-xl font-medium">
                        <img src={squareCode} alt="code icon" className="w-5" />
                        Web
                    </h2>
                    <ul className="list-disc list-inside pl-2">
                        <li>HTML</li>
                        <li>CSS (+Tailwind)</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Flask</li>
                    </ul>
                </motion.li>
                <li className="">
                    <h2 className="flex gap-2 text-xl font-medium">
                        <img src={codeCompare} alt="code icon" className="w-5" />
                        Technologies
                    </h2>
                    <ul className="list-disc list-inside pl-2">
                        <li>Linux</li>
                        <li>Git</li>
                        <li>CLI/Bash</li>
                    </ul>
                </li>
            </motion.ul>
        </motion.section>
    )
}