import { projects } from "../Constants";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
// @ts-ignore
import * as icons from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My {"  "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 text-justify">
        <p>
          Welcome to my projects showcase! This section offers a glimpse into
          some of the remarkable projects I've had the pleasure of working on.
          Each project represents a unique opportunity where I've applied my
          skills, creativity, and expertise to deliver exceptional results. From
          web applications to AI implementations, and from Bash scripting to
          Unity game development, each project reflects my passion for
          innovation and dedication to excellence. Feel free to explore these
          projects to gain insight into my capabilities and the quality of work
          I strive to achieve. If you're interested in discovering more about my
          projects, simply click the links provided to explore additional
          projects and dive deeper into my professional journey.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={index}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl justify-center items-center flex flex-col">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

              <p className="mt-2 flex items-center gap-2">
                {project.description}
              </p>

              <div className="mt-5 flex items-center gap-2">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="blue-gradient_text"
                >
                  Check it out
                </Link>
                <img src={icons.arrow} alt="arrow" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-t-2 border-slate-500" />
      <CTA />
    </section>
  );
};

export default Projects;
