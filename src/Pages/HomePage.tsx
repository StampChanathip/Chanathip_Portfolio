import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="font-Montserrat flex flex-col justify-end space-y-2 pl-4 md:pt-24 md:w-[480px] lg:pb-24 w-fit lg:w-[32rem] animate-fade animate-duration-[800ms] animate-delay-[100ms] animate-normal">
        <h1 className="font-Playfair-Display text-3xl md:text-5xl font-semibold ">
          Hi, I'm
        </h1>
        <h2 className="font-Playfair-Display text-3xl md:text-5xl font-semibold">
          Chanathip Chuehome
        </h2>
        <p className="text-lg md:text-2xl font-light">
          Senior Civil Engineering Student
        </p>
        <p className="text-lg md:text-2xl font-light">
          Looking for an opportunity to work as a Software Developer
        </p>
      </div>
      <div className="font-Playfair-Display flex flex-col justify-end w-fit bg-dark pt-8 pl-4 space-y-2 md:space-y-4 lg:px-8 lg:pb-24 ">
        <Link to="About">
          <div className="text-6xl xs:text-4xl md:text-8xl lg:text-9xl animate-fade-left animate-duration-500 animate-delay-[400ms] animate-normal">
            About
          </div>
        </Link>
        <Link to="Experience">
          <div className="text-6xl md:text-8xl lg:text-9xl animate-fade-left animate-duration-500 animate-delay-[600ms] animate-normal">
            Experiences
          </div>
        </Link>
        <Link to="Contact">
          <div className="text-6xl xs:text-4xl md:text-8xl lg:text-9xl animate-fade-left animate-duration-500 animate-delay-[800ms] animate-normal">
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
