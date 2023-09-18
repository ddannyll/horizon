import { IconCircle, IconCircleFilled } from "@tabler/icons-react";
import Header from "./Header";

export default function Experience () {
   return <section className="container mx-auto min-h-screen flex flex-col justify-center align-center">
    <Header>
      01. Experience and Achievements
    </Header>
    <ul className="border-l border-zinc-600 flex flex-col gap-10">
      <li className="relative ml-10">
        <h3>SafetyCulture</h3>
        <p className="text-white/50">Description Description Description </p>
        <IconCircleFilled className="text-zinc-600 absolute w-4 h-4 -left-10 top-1 -translate-x-1/2"></IconCircleFilled>
      </li>
      <li className="relative ml-10">
        <h3>SafetyCulture</h3>
        <p className="text-white/50">Description Description Description </p>
        <IconCircleFilled className="text-zinc-600 absolute w-4 h-4 -left-10 top-1 -translate-x-1/2"></IconCircleFilled>
      </li>
      <li className="relative ml-10">
        <h3>SafetyCulture</h3>
        <p className="text-white/50">Description Description Description </p>
        <IconCircleFilled className="text-zinc-600 absolute w-4 h-4 -left-10 top-1 -translate-x-1/2"></IconCircleFilled>
      </li>
    </ul>
  </section>
}
