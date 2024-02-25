import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive
              ? "text-black border-black bg-yellow-400 pointer-events-none touch-none"
              : //  translate-y-[3px] translate-x-[3px] shadow-none pointer-events-none
                "text-black border-black"
          } flex cursor-pointer items-center font-poppins rounded-2xl border-2 px-2 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none 
                      sm:px-3 sm:py-2 sm:text-md
                      lg:text-lg`
        }
      >
        NA
      </NavLink>
      <nav className="flex pl-7 gap-7 ">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-black border-black bg-yellow-400  pointer-events-none touch-none"
                : "text-black border-black"
            } flex cursor-pointer items-center font-poppins rounded-2xl border-2 px-2 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none 
                        sm:px-3 sm:py-2 sm:text-md
                        lg:px-5 lg:py-2 lg:text-lg`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-black border-black bg-yellow-400  pointer-events-none touch-none"
                : "text-black border-black"
            } flex cursor-pointer items-center font-poppins rounded-2xl border-2 px-2 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none 
                        sm:px-2 sm:py-2 sm:text-md
                        lg:px-4 lg:py-2 lg:text-lg`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
