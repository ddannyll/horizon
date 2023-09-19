import Timeline from "./Timeline";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="container mx-auto min-h-screen flex-col justify-center items-center gap-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        viewport={{ amount: 0.4 }}
      >
        <Timeline
          nodes={[
            {
              title: "SafetyCulture A{i} Accelerator Program",
              subtitle: "Aug 2023 - Sep 2023",
              description:
                "Participated in a 4-week hackathon-style AI workshop, learning and applying engineering skills through informative seminars and invaluable mentorship from two staff software engineers. Finished the program achieving the 'People's Choice' award.",
            },
            {
              title: "1st Place in CSESoc Flagship Hackathon",
              subtitle: "July 2023",
              description:
                "Particpated in a 24 hour hackathon, conceptualising and developing a working solution with 4 other students. Finished the hackathon acheiving 1st place in the Code Stream.",
            },
            {
              title: "UNSW Casual Academic",
              subtitle: "May 2023 - Sep 2023",
              description:
                "Lab assisted in COMP2041 - Software Construction Tools and Techniques.",
            },
          ]}
        />
      </motion.div>
    </section>
  );
}
