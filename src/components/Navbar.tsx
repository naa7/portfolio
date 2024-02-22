import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive
              ? "text-black border-black bg-[#C4A1FF] pointer-events-none"
              : //  translate-y-[3px] translate-x-[3px] shadow-none pointer-events-none
                "text-white border-black bg-[#035de4]"
          } flex cursor-pointer items-center rounded-full border-2  px-5 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`
        }
      >
        NA
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium ">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-black border-black bg-[#C4A1FF] pointer-events-none"
                : "text-white border-black bg-[#035de4]"
            } flex cursor-pointer items-center rounded-full border-2  px-5 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-black border-black bg-[#C4A1FF] pointer-events-none"
                : "text-white border-black bg-[#035de4]"
            } flex cursor-pointer items-center rounded-full border-2  px-5 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
