import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="flex md:flex-row px-8 md:px-0">
      <div className="flex flex-col md:ml-16 md:pt-24 w-[520px]">
        <div className="font-Playfair-Display flex flex-col space-y-8 md:space-y-16">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] w-fit animate-fade-up animate-delay-200 animate-normal">
            Hello.
          </h1>
        </div>
        <div className="flex flex-col space-y-4 py-12">
          <p>
            I'm looking for an opportunity to work as a Software Developer.
            <br />
            <br></br>Dedicated and committed to becoming a dependable and
            valuable team member.
          </p>
          <p>
            Email:{" "}
            <Link to="mailto:cchanathip.work@gmail.com" className="underline">
              cchanathip.work@gmail.com
            </Link>
          </p>
          <p>
            On the internet:{" "}
            <Link
              to="https://github.com/StampChanathip"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>{" "}
            {" / "}
            <Link
              to="https://www.linkedin.com/in/chanathip-chuehome-693271137/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
