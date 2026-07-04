import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Footer = () => {
    return (
        <footer className=" text-primary">

            <motion.figure

                variants={fadeIn("up", 0.5)}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                initial="hidden"
                className="max-w-screen-md mx-auto text-center lg:py-52 pb-32">
                <svg className="w-10 h-10 mx-auto mb-3 text-secondary " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium">&ldquo;If there is a will, There is a way&rdquo;</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">

                    <div className="flex items-center divide-x-2 ">
                        <cite className="pr-3 text-xl font-medium text-mixture">George Herbert</cite>
                        <cite className="pl-3 text-sm"></cite>
                    </div>
                </figcaption>
            </motion.figure>

            <div className="border-t border-mixture/20 py-6 px-6 lg:px-16 flex flex-col gap-4 sm:flex-row items-center justify-between">
                <p className="text-mixture text-sm">
                    &copy; 2026 Yugant Moundekar | All rights reserved
                </p>
                <div className="flex items-center gap-4 text-lg text-white">
                    <a href="mailto:moundekaryugant@gmail.com" aria-label="Email">
                        <div className="border border-mixture/40 hover:border-primary hover:text-primary p-2 rounded-full transition-colors">
                            <BsEnvelope />
                        </div>
                    </a>
                    <a href="https://github.com/YugantMoundekar" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <div className="border border-mixture/40 hover:border-primary hover:text-primary p-2 rounded-full transition-colors">
                            <BsGithub />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/yugantmoundekar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <div className="border border-mixture/40 hover:border-primary hover:text-primary p-2 rounded-full transition-colors">
                            <BsLinkedin />
                        </div>
                    </a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
