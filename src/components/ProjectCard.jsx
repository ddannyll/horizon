function ProjectCard ({heading, subheading, image, description, source, demo}) {
    return (
        <div className="group max-w-xs border flex flex-col h-full md:max-w-sm">
            <div className="p-6">
                <h2 className="text-lg">
                    {heading}
                </h2>
                <p className="text-white/60 text-sm">
                    {subheading}
                </p>
            </div>
            <div className="border-y w-full aspect-[5/4] overflow-hidden">
                <img 
                    className="object-cover h-full w-full opacity-50 transition-all group-hover:opacity-100 group-hover:scale-105"
                    src={image} alt="Image of project" />
            </div>
            <div className="p-6 text-white/60">
                <p>{description}</p>
            </div>
            <div className="flex flex-col justify-end grow">
                <div className="flex">
                    <a href={source} target="_blank" className="w-full border text-center py-3 transition-all hover:bg-pop hover:text-zinc-900 ">
                        Source
                    </a>
                    <a href={demo} target="_blank" className="w-full border text-center py-3 transition-all hover:bg-pop hover:text-zinc-900">
                        Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard