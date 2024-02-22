import React from "react";
import { skills, experiences } from "../Constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container ">
      <h1 className="head-text">
        Hello, I am{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Najeeb
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
        <p>
          A Software and AI Engineer deeply committed to crafting impactful web
          applications, I bring expertise in full-stack development, with
          proficiency in modern frameworks like React and Next.js. Additionally,
          my skills extend to backend technologies such as Node.js and Express.
          Leveraging hands-on experience in cloud services like Vercel and
          Render, I ensure seamless deployment and scalability. In my role as an
          AI Engineer, I integrate machine learning and data science techniques
          to enhance application intelligence and functionality, driving
          innovation and excellence.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20" key={index}>
              <div className="rounded-xl" key={index}>
                <div
                  key={index}
                  className="btn-front rounded-xl justify-center items-center flex flex-col  "
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                  <p className="mt-3 text-sm font-semibold text-center">
                    {skill.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500 "></div>

        <div className="mt-12 flex">
          <VerticalTimeline lineColor="#7a8593">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[100%] h-[100%] rounded-full object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map(
                    (
                      point:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | null
                        | undefined,
                      index: React.Key | null | undefined
                    ) => (
                      <li
                        key={index}
                        className="text-black text-sm font-poppins font-normal"
                      >
                        {point}
                      </li>
                    )
                  )}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
