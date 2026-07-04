import { education } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Education = () => {
    return (
        <div id="education" className="text-center tracking-wider flex flex-col justify-center items-center py-36 ">
            <div>
                <motion.h1
                    variants={fadeIn("up", 0.5)}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    initial="hidden"
                    className="uppercase text-white font-bold text-3xl ">Education</motion.h1>
            </div>
            <div

                className="flex flex-col   gap-16 px-5 text-center mt-32 lg:flex-row font-semibold lg:text-left">

                {education.map((institute, index) => (
                    <motion.div
                        variants={fadeIn("right", index * 0.2)}
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        initial="hidden"
                        className="flex-1"
                        key={index}>

                        <p className="text-primary">{institute.name}</p>{" "}
                        <p className="text-primary">{institute.rank}</p>
                        <p className="text-mixture">{institute.degree}</p>
                        <p className="text-white font-light">{institute.duration}</p>

                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
