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
                staggerChildren: 0.1,
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
        hidden: { opacity: 0, x: -25 },
    }


    return (
        <section
            className="container mx-auto flex flex-col items-center px-5 h-screen justify-center md:mt-[-20vh]">
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay:0.1}}
                className="px-10 py-6 border rounded-lg text-center text-xl h-fit mb-10">
                02. Here are some of my skills
            </motion.h1>
            <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={list}
                className="flex flex-col gap-y-10 text-sm md:flex-row md:gap-x-20">
                <motion.li variants={item} className="">
                    <h2 className="flex gap-2 text-xl font-medium">
                        <img src={squareTerminal} alt="code icon" className="w-5" />
                        Programming
                    </h2>
                    <ul className="list-disc list-inside pl-2">
                        <li>JavaScript</li>
	    		<li>TypeScript</li>
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
                        <li>React.js (+Redux)</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Flask</li>
                    </ul>
                </motion.li>
                <motion.li variants={item} className="">
                    <h2 className="flex gap-2 text-xl font-medium">
                        <img src={codeCompare} alt="code icon" className="w-5" />
                        Technologies
                    </h2>
                    <ul className="list-disc list-inside pl-2">
                        <li>Linux</li>
                        <li>Git</li>
                        <li>CLI/Bash</li>
                    </ul>
                </motion.li>
            </motion.ul>
        </section>
    )
}
