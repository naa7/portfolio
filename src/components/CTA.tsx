import { Link } from "react-router-dom";
// @ts-ignore
import * as icons from "../assets/icons";

const CTA = () => {
  return (
    <section className="cta flex flex-row">
      <p className="cta-text">Do you want to get in touch? </p>
      <a
        href="https://www.linkedin.com/in/naa7"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-center border-2 border-black bg-cover shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none hover:bg-yellow-400"
      >
        <img
          src={icons.linkedin}
          alt="Linkedin Icon"
          className="w-10 h-9 rounded-full"
        />
      </a>

      <a
        href="https://www.github.com/naa7"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-center border-2 border-black bg-cover shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none hover:bg-yellow-400"
      >
        <img src={icons.github} alt="GitHub Icon" className="w-10 h-8" />
      </a>

      <Link
        to="/contact"
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-center border-2 border-black bg-cover shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none hover:bg-yellow-400"
      >
        <img
          src={icons.email}
          alt="Email Icon"
          className="w-10 h-9 rounded-full"
        />
      </Link>
    </section>
  );
};

export default CTA;
