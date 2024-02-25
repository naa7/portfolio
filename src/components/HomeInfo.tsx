import { Link } from "react-router-dom";
// @ts-ignore
import arrow from "../assets/icons/arrow.svg";
type Props = {
  currentStage: number | null;
  setCurrentStage: (value: number | null) => void;
};

type InfoBoxProps = {
  text: string;
  link: string;
  btnText: string;
};

const InfoBox = ({ text, link, btnText }: InfoBoxProps) => (
  <div className="info-box">
    <p className="font-medium text-sm sm:text-lg md:text-xl text-center">
      {text}
    </p>
    <Link
      to={link}
      className="bg-white font-semibold text-sm sm:text-md md:text-base neo-btn flex cursor-pointer px-2 py-4 transition-all shadow-[4px_4px_0px_0px_rgba(43,119,231,0.7)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
    >
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent: {
  [key in NonNullable<Props["currentStage"]>]: JSX.Element;
} = {
  1: (
    <h1 className="text-md sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-4 sm:py-3 sm:px-6 text-white mx-5">
      Hi, I am <span className="font-semibold">Najeeb</span>
      <br />A Software and AI Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="Joined a few fellowships and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Built many projects and learned many things along the way"
      link="/projects"
      btnText="Check Them Out"
    />
  ),
  4: (
    <InfoBox
      text="Want to work together? Let's get in touch"
      link="/contact"
      btnText="Contact Me"
    />
  ),
};

const HomeInfo = ({ currentStage }: Props) => {
  if (currentStage !== null) {
    return renderContent[currentStage] || null;
  }
};

export default HomeInfo;
