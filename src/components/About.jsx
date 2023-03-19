import Endurance from "../assets/enduranceDetail.svg"
import { motion } from 'framer-motion'

export default function About() {

    return (
        <section className="container mx-auto h-screen flex flex-col justify-evenly items-center gap-x-10 px-5 text-center md:text-start md:flex-row">
            <motion.img 
                initial={{ 
                    opacity: 0,
                    x:-100
                    
                }}
                whileInView={{ 
                    opacity: 1,
                    x:0
                }}
                transition={{ ease: 'easeOut' }}
                src={Endurance} alt="Endurance" className="w-1/2 max-w-[450px]" />
            
            <motion.div 
                initial={{ 
                    opacity: 0,
                    x:100
                    
                }}
                whileInView={{ 
                    opacity: 1,
                    x:0
                }}
                transition={{ ease: 'easeOut' }}
                className="max-w-2xl flex flex-col gap-y-5 text-sm  md:text-base" >
                <div className="p-6 border text-center rounded-lg">
                    <h1 className="text-lg md:text-xl">01. I'm a penultimate computer science student</h1>
                </div>
                <p>
                    Currently studying at the University of New South Wales and actively looking for opportunities to develop
                    and apply my skills. I am digiligent about my studies and am very passionate about computer science.
                </p>
                <p>
                    I like to teach myself beyond school in my own time. As a young developer/programmer, expanding my skillsets is one
                    of my favourite things to do - I am always eager to learn new things and solve problems.
                </p>
                <div className="flex gap-x-10 justify-around md:justify-start">
                    <a href="" className="profile-btn">
                        Resume
                    </a>
                    <a href="" className="profile-btn">
                        Github
                    </a>
                    <a href="" className="profile-btn">
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </section>
    )
}