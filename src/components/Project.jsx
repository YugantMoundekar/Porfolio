import { projects } from "../data";

const Project = () => {
    return (
        <div id="project" className="text-center  tracking-wider px-12 py-36">

            <h1 className="uppercase text-white font-bold text-3xl ">Projects</h1>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-32">
                {projects.map((project, index) => (
                    <div key={index} className="bg-ternary  rounded-lg  shadow-md  ">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-40 object-cover rounded-lg rounded-b-none mb-4"
                        />
                        <h2 className="text-xl font-semibold text-primary my-5 ">{project.name}</h2>
                        <div
                            className="  font-bold  border rounded-lg rounded-t-none p-2  bg-primary border-primary  "
                            href={project.source_code_link}
                            target="_blank"
                        >
                            View Project
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
