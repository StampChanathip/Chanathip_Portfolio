import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="relative flex flex-row justify-between items-center px-4 py-6 mr-8 mb-4 md:mb-0 md:py-24 md:w-20 md:flex-col md:justify-start md:min-h-screen ">
      {location.pathname === "/" ? (
        <div className="flex space-x-6 md:space-x-0 md:flex-col md:items-center md:space-y-12">
          <Link
            to="https://github.com/StampChanathip"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-3xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/chanathip-chuehome-693271137/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-3xl" />
          </Link>
          <Link to="mailto:cchanathip.work@gmail.com">
            <HiOutlineMail className="text-3xl" />
          </Link>
        </div>
      ) : (
        <>
          <Link to="/" className="md:-rotate-90">
            <div className="w-fit p-2 rounded-md text-xl md:text-lg hover:bg-light hover:text-dark ">
              Home
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
