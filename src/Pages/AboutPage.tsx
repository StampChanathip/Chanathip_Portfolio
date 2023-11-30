const AboutPage = () => {
  const onClickDownload = () => {
    fetch("Chanathip_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Chanathip_Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row px-8 md:px-0">
      <div className="flex flex-col w-fit md:ml-16 md:w-[32rem] lg:w-[700px] lg:pt-24">
        <div className="font-Playfair-Display flex flex-col space-y-4 md:space-y-8">
          <h1 className="text-5xl lg:text-7xl underline animate-fade-up animate-delay-200 animate-normal">
            About me
          </h1>
          <h2 className="text-4xl lg:6xl">
            I'm Chanathip. <br />
            Tech enthusiast and challenge seeker.
          </h2>
        </div>
        <div className="flex flex-col space-y-4 py-8 text-justify">
          <p className="indent-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="indent-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="space-y-2">
            <h3 className="font-Playfair-Display text-3xl">Education</h3>
            <ul className="indent-8">
              <li>Department of Civil Engineering, Faculty of Engineering</li>
              <li>Chulalongkorn University (August 2020 – May 2024)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-Playfair-Display text-3xl">Skills</h3>
            <div className="flex flex-row">
              <ul className="indent-8">
                <li>React</li>
                <li>Typescript</li>
                <li>TailwindCSS</li>
                <li>MaterialUI</li>
              </ul>
              <ul className="indent-12">
                <li>Redux</li>
                <li>NodeJS</li>
                <li>NestJS</li>
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button
              onClick={onClickDownload}
              className="font-Playfair-Display text-2xl  bg-light text-dark px-24 py-4 my-2 rounded-full ease-in-out hover:bg-highlight hover:text-light md:text-3xl"
            >
              Get My CV
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-12 md:ml-16 md:pt-24 items-center w-fit animate-fade-up animate-delay-200 animate-normal">
        <img
          src="Assets/Profile.JPG"
          alt="profilePic"
          className="w-72 lg:w-96"
        />
      </div>
    </div>
  );
};

export default AboutPage;
