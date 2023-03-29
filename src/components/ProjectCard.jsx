function ProjectCard ({name, image, description, }) {
    return (
        <div className="group max-w-[400px] border">
            <div className="p-6">
                <h2 className="text-lg">
                    Battleship
                </h2>
                <p className="text-white/60">
                    React.js, Node.js, Express.js
                </p>
            </div>
            <div className="border-y w-full aspect-square overflow-hidden">
                <img 
                    className="object-cover h-full w-full opacity-50 transition-all group-hover:opacity-100 group-hover:scale-105"
                    src="https://user-images.githubusercontent.com/80935652/216802406-ca45868d-0531-4795-b010-a41fa712aafb.png" alt="Image of project" />
            </div>
            <div className="p-6 text-white/60">
                <p>A recreation of the classic naval combat board game, Battleship!</p>
            </div>
        </div>
    )
}

export default ProjectCard