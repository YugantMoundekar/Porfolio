import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });
    return (
        <div
            ref={ref}
            id="about"
            className="container mx-auto text-center flex flex-col justify-center items-center gap-5 pt-36 pb-32 "
        >

            <div>
                <motion.h1
                    variants={fadeIn("right", 0.3)}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    initial="hidden"
                    className="uppercase text-white font-bold text-3xl tracking-wider">
                    ABOUT ME
                </motion.h1>
            </div>
            <motion.div
                variants={fadeIn("left", 0.4)}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                initial="hidden"
                className="text-mixture text-xl font-semibold pt-9 lg:w-1/2 w-4/5  tracking-wider flex flex-col gap-9">
                <p

                >
                    I am <span className="text-primary">Yugant Moundekar</span>. I am{" "}
                    <span className="text-primary">
                        {inView ?
                            <CountUp start={0} end={24} duration={1} /> : null
                        }

                    </span>{" "}
                    years old and dedicated individual with a passion for{" "}
                    <span className="text-primary">Cloud Technologies</span>. I enjoy
                    the entire process, from conceptualization to actual implementation. I
                    am particularly interested in overcoming challenges that push me
                    beyond my comfort zone. Throughout my journey, I have experience in
                    developing and hosting various web pages and sites.
                </p>
                <p>
                    I have worked with <span className="text-primary">startups</span> and{" "}
                    <span className="text-primary">individuals</span> from around the
                    world
                </p>
            </motion.div>

        </div>
    );
};

export default About;
