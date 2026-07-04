import {
    BsEnvelope,
    BsGithub,
    BsLinkedin,
} from "react-icons/bs";
import { TbFileDownload } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Header = () => {
    return (
        <header
            id="home"
            className="min-h-screen flex items-center justify-center lg:pt-24 lg:mx-40 pt-16"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8">
                    <div className="flex-1 flex flex-col items-center text-center">
                        <motion.h1
                            variants={fadeIn("up", 0.3)}
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            initial="hidden"
                            className="font-bold text-primary text-[55px]  lg:text=[110px] md:tracking-wider "
                        >
                            Yugant Moundekar
                        </motion.h1>
                        <motion.h2
                            variants={fadeIn("up", 0.4)}
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            initial="hidden"

                            className="font-bold text-white text-4xl py-7  ">
                            Senior Technical Support Engineer
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            initial="hidden"
                            className="text-mixture  font-bold mb-8 mt-1  max-w-3xl mx-auto   tracking-wider">
                            Senior Technical Support Engineer with experience supporting
                            enterprise applications, IT infrastructure, and end users in
                            global production environments. Currently working at Amdocs,
                            specializing in incident management, troubleshooting, ITSM
                            processes, and delivering high-quality technical support in
                            SLA-driven environments.
                            <br />
                            <br />
                            Skilled in Application Support, Technical Support, ServiceNow,
                            Microsoft 365, Windows Administration, Networking, SQL, and IT
                            Operations. Backed by a software development foundation in Java,
                            Spring Boot, REST APIs, and databases, enabling effective
                            collaboration across support and development teams.
                            <br />
                            <br />
                            Passionate about problem-solving, continuous learning, and
                            delivering reliable technology solutions that enhance business
                            operations and user experience.
                        </motion.p>

                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            initial="hidden"
                            className="flex flex-col lg:flex-row justify-center items-center">
                            <a href="/Resume.pdf" target="_blank" download>
                                <div className="text-center font-bold flex justify-center w-48 lg:me-5 items-center gap border rounded-lg bg-primary border-primary">
                                    <TbFileDownload className="text-2xl m-2 ms-0 " /> Download CV
                                </div>
                            </a>
                            <div className="flex gap-x-6 text-[20px] max-w-max mx-auto lg:mt-0 mt-8  text-white ">

                                <a href="mailto:moundekaryugant@gmail.com">
                                    <div className=" bg-primary text-black  p-3  rounded-full">
                                        <BsEnvelope />
                                    </div>
                                </a>
                                <a href="https://github.com/YugantMoundekar" target="_blank" rel="noreferrer">
                                    <div className=" bg-primary text-black  p-3  rounded-full">
                                        <BsGithub />
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/yugantmoundekar" target="_blank" rel="noreferrer">
                                    <div className=" bg-primary text-black  p-3  rounded-full">
                                        <BsLinkedin />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
