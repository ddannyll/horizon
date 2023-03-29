import Balance from "../assets/balance.png";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            staggerDirection: -1
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
};

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 25 },
};

function Projects() {
    return (
        <div className="container px-5 mx-auto mb-24 min-h-screen flex flex-col justify-center">
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="px-10 py-6 mb-10 border rounded-lg text-center text-xl mx-auto"
            >
                03. Things I've created
            </motion.h1>

            <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={list}
                className="flex flex-col items-center justify-center flex-wrap gap-20 md:flex-row md:items-stretch"
            >
                <motion.li variants={item}>
                    <ProjectCard
                        heading="Battleship"
                        subheading="React.js, Express.js"
                        description="Fullstack application recreating the classic naval combat board game, Battleship! Features online play, across devices."
                        image="https://user-images.githubusercontent.com/80935652/216802406-ca45868d-0531-4795-b010-a41fa712aafb.png"
                        source="https://github.com/ddannyll/battleship-frontend"
                        demo="https://ddannyll.github.io/battleship-frontend/"
                    />
                </motion.li>
                <motion.li variants={item}>
                    <ProjectCard
                        heading="Onigiri"
                        subheading="React.js"
                        description="Memory game featuring tasty Japanese sweets and savouries!"
                        image="https://user-images.githubusercontent.com/80935652/213840856-91b65260-7a22-43e8-a8e8-44c1208f54cb.png"
                        source="https://github.com/ddannyll/onigiri"
                        demo="https://ddannyll.github.io/onigiri/"
                    />
                </motion.li>
                <motion.li variants={item}>
                    <ProjectCard
                        heading="Balance"
                        subheading="React.js"
                        description="Website to manage monthly finances. Features expense breakdown, custom expenses and automatic budget calculation."
                        image={Balance}
                        source="https://github.com/ddannyll/balance"
                        demo="https://ddannyll.github.io/balance/"
                    />
                </motion.li>
            </motion.ul>
        </div>
    );
}

export default Projects;
