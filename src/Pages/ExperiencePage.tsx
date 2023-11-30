import ExperienceCard from "../Components/ExpCard";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col px-8 items-center pb-12 md:py-20 w-full space-y-8 ">
      <h1 className="font-Playfair-Display text-5xl lg:text-7xl underline animate-fade-up animate-delay-200 animate-normal">
        Experiences
      </h1>
      <ExperienceCard
        title="Full Stack Developer Internship"
        place="Geotalent Co., Ltd."
        period="29 June 2023 – 11 August 2023"
        imgUrl="Assets/Intern.JPG"
        details="Get fundamental training in web development and join a team to work as a full-stack developer developing the user interface for contract work for the company."
      />
      <ExperienceCard
        title="Frontend Developer (Part-Time)"
        place="Herocat"
        period="10 September 2023 – Present"
        imgUrl="Assets/HeroCat.jpeg"
        details="Develop user interface of GameFi using React Javascript and TailwindCSS."
      />
      <ExperienceCard
        title="Head of Event Organizer"
        place="Chula Investment Forum"
        period="20 June 2022 – 10 September 2022"
        imgUrl="Assets/Investment.JPG"
        details="Establish and clarify the project's goals and scope. Manage the organizing team to plan the event, which drew a total of 160 attendees."
      />
      <ExperienceCard
        title="Bitkub Academy Blockathon Boot Camp Participant"
        place="Bitkub Labs Co., Ltd."
        period="15 November 2022 – 18 November 2022"
        imgUrl="Assets/Bitkub.JPG"
        details="Participate in business pitching competition during Bootcamp and responsible for technical research role in business pitching competition"
      />
      <ExperienceCard
        title="ChAMP Career Center | Software Engineer Career Track"
        place="ChAMP Engineering"
        period="12 November 2022 – 25 May 2023"
        imgUrl="Assets/ChAMP.png"
        details="Attend career roadmap guided seminars and workshops on software engineering career paths."
      />
    </div>
  );
};

export default ExperiencePage;
