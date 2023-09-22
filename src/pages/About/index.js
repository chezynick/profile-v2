import React from "react";
import ListItem from "../../components/ListItem";
import NextPageArrow from "../../components/NextPageArrow";
import PageHeader from "../../components/PageHeader";

const About = ({ forwardRef, midRef, scrollToComponent, nextRef }) => {
  const HorizontalDivide = () => (
    <div className="justify-center hidden w-full lg:flex">
      <div className="md:w-3/4 w-full px-10 md:px-0 h-[1px] bg-primaryColor" />
    </div>
  );

  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen py-4 bg-white overflow-y-clip"
    >
      <PageHeader text="Experience" />

      <div className="flex flex-col w-full gap-16 px-12 mt-10 md:px-0 md:w-3/4 lg:mt-0 sm:flex-row md:mb-10 ">
        <div className=" sm:w-1/2">
          <div className="flex justify-start "></div>
          <div className="space-y-1 text-left sm:space-y-6">
            <p>
              Currently, I serve as a Front End Developer at Bright HR, a
              leading provider of innovative human resource software. Since
              joining Bright in January 2021, I&apos;ve collaborated with a
              dedicated team on several projects, aiming to elevate our software
              offerings and maintain our competitive edge.
            </p>

            <p>
              During the lockdown, I engaged with The Odin Project, an online
              coding course, showcasing my self-discipline and determination. My
              background in sales and retail has transitioned smoothly into my
              current role. The skills I honed in those fields, especially my
              strong communication abilities, enable me to excel in team
              settings.
            </p>
          </div>
        </div>
        <div ref={midRef} className="absolute right-0 top-1/2" />

        <div className="space-y-1 text-left sm:w-1/2 sm:space-y-6">
          <p>
            Below are 3 of the major projects I have been involved in. I was the
            sole front end developer, involved in planning and decision making
            throughout.
          </p>

          <ul>
            <ListItem
              text="New navigation system, originally released as a beta
             option, this has now superseded the original."
            />
            <ListItem
              text="I conceived and prototyped a new view for our existing rota planning software.
               After demonstrating it to stakeholders, it was greenlit for full development. Today, it's the preferred view for over 75% of our customers and has become the central focus of our future development efforts.
"
            />
            <ListItem text="Thanks to the new rota planning software above, we were able to introduce BrightHR Lite, a complimentary rota planner. This tool not only highlights the capabilities of our main rota planner but also incorporates the new navigation." />
          </ul>
        </div>
      </div>

      <HorizontalDivide />
      <NextPageArrow nextRef={nextRef} scrollToComponent={scrollToComponent} />
    </div>
  );
};

export default About;
