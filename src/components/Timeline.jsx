import { IconCircleFilled } from "@tabler/icons-react"
import {cn} from "../lib/util"

export default function Timeline({nodes, className}) {
  return <ul className={cn("max-w-xl border-l border-zinc-600 flex flex-col gap-10", className)}>
    {nodes?.map((node) => { 
      return <li key={node.title} className="relative ml-10">         
        <h3 className="text-lg">{node.title}</h3>
        <p className="text-white/50">{node.description}</p>
        <IconCircleFilled className="text-zinc-600 absolute w-3 h-3 -left-10 top-1 -translate-x-1/2"/>
      </li>      
      })}
  </ul>
}
