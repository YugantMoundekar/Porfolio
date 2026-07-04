import { technologies } from '../data'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Skills = () => {
    return (
        <>
            <div id='skill' className='lg:mx-28 text-center flex flex-col justify-center items-center gap-5 pt-36 pb-32 '>
                <motion.h1
                    variants={fadeIn("right", 0.3)}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    initial="hidden"
                    className="uppercase text-white font-bold text-3xl tracking-wider">
                    Technologies
                </motion.h1>
                <div className='grid lg:grid-cols-7 grid-cols-2 gap-16 text-center mt-12 lg:mt-32  items-center font-semibold'>
                    {technologies.map((skill, index) => (
                        <motion.div
                            variants={fadeIn("left", index * 0.2)}
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            initial="hidden"


                            key={index} className="flex w-24   flex-col gap-2">
                            <h1 className='text-white'>{skill.name}</h1>
                            <img src={skill.icon} width={150} className='' alt="" />
                        </motion.div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Skills