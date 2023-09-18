import Header from "./Header";
import Timeline from "./Timeline";

export default function Experience () {
   return <section className="container mx-auto min-h-screen flex flex-col justify-center items-center gap-10">
    <Header>
      01. Experience and Achievements
    </Header>
    <Timeline
      nodes={[
        {
          title: "SafetyCulture A{i} Accelerator Program",
          description: "Participated in a 4-week hackathon-style AI workshop, learning and applying engineering skills through informative seminars and invaluable mentorship from two staff software engineers. Finished the program achieving the 'People's Choice' award."
        },
        {
          title: "1st Place in CSESoc Flagship Hackathon 2023",
          description:"Particpated in a 24 hour hackathon, conceptualising and developing a working solution with 4 other students. Finished the hackathon acheiving 1st place in the Code Stream."
        }
      ]}
    />
  </section>
}
