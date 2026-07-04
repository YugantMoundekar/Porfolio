import { experiences } from '../data';
import { FaLocationArrow, FaLink } from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Work = () => {
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = endDate === 'Present' ? new Date() : new Date(endDate);
        const diffInMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

        const years = Math.floor(diffInMonths / 12);
        const months = diffInMonths % 12 + 1;

        if (years > 0) {
            if (months > 0) {
                return `${years} ${years > 1 ? 'years' : 'year'} ${months} ${months > 1 ? 'months' : 'month'}`;
            } else {
                return `${years} ${years > 1 ? 'years' : 'year'}`;
            }
        } else {
            return `${months} ${months > 1 ? 'months' : 'month'}`;
        }
    };
    return (
        <motion.div
            variants={fadeIn("up", 0.5)}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            initial="hidden"
            id='work' className="text-center tracking-wider flex flex-col justify-center items-center pt-36 mx-5 lg:mx-40">
            <div>
                <h1
                    className="uppercase text-white font-bold text-3xl">Work Experience</h1>
            </div>
            <div
                className="flex flex-col items-center mt-32 text-left">
                {experiences.map((work, index) => (
                    <div
                        key={index} className="mb-8 w-full">
                        <div className="experience  bg-ternary p-4 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold text-primary">{work.title}</h2>
                            <a href={work.website} target='_blank' rel='noreferrer' className='flex items-center gap-2 text-primary/50'><p className="text-primary/50">{work.company_name}</p> <FaLink /></a>
                            <div className='flex text-mixture'>
                                <p className="">{work.startDate}</p>
                                <p className='px-5'> - </p>
                                <p className="">{work.endDate}</p>
                            </div>
                            <p className="text-mixture">{calculateDuration(work.startDate, work.endDate)}</p>
                            <p className="text-mixture flex items-center gap-2"><FaLocationArrow className='' />{work.location}</p>
                            <ul className=" list-disc py-2  text-mixture ms-5">
                                {work.points.map((point, i) => (
                                    <li className='' key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Work;
