import Balance from "../assets/balance.png"
import ProjectCard from "./ProjectCard"
function Projects () {
    return (
        <div className="container px-5 mx-auto mb-24 min-h-screen flex flex-col justify-center">
            <h1 className="p-6 mb-10 border rounded-lg text-center text-xl mx-auto min-w-[450px]">
                03. Things I've created
            </h1>

            <div className="flex flex-col items-center justify-center flex-wrap gap-20 md:flex-row md:items-stretch">
                <ProjectCard 
                    heading="Battleship"
                    subheading="React.js, Express.js"
                    description="Fullstack application recreating the classic naval combat board game, Battleship! Features online play, across devices."
                    image="https://user-images.githubusercontent.com/80935652/216802406-ca45868d-0531-4795-b010-a41fa712aafb.png"
                />
                <ProjectCard 
                    heading="Onigiri"
                    subheading="React.js"
                    description="Memory game featuring tasty Japanese sweets and savouries!"
                    image="https://user-images.githubusercontent.com/80935652/213840856-91b65260-7a22-43e8-a8e8-44c1208f54cb.png"
                />
                <ProjectCard 
                    heading="Balance"
                    subheading="React.js"
                    description="Website to manage monthly finances. Features expense breakdown, custom expenses and automatic budget calculation."
                    image={Balance}
                />
            </div>
        </div>
    )
}

export default Projects