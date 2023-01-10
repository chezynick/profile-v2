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
              Presently, I am Front End Developer at Bright HR, a company
              providing cutting edge human resource software. Since beginning my
              journey with Bright in January 2021, I have been part of a small
              team working on a number of exciting projects focusing on
              enhancing the existing packages to stay ahead of the competition.
            </p>

            <p>
              During lockdown I used the Odin project, an online course to learn
              coding. This required alot of self discipline and determination.
              Previously, I worked in sales and retail, the skills from this
              background have been transferable to my new role, as I am a
              excellent communicator and a good team player.
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
              text="A new additional view for the existing rota planning software which I conceived and built as prototype,
               was after demoing to stakeholders, allotted time to be be fully developed.
                It is now the primary view used by over 70% of customers and is the sole
                 focus of future development.
"
            />
            <ListItem
              text="BrightHR Lite is a free to use rota planner, it is built
             to showcase the rota planner above and uses the navigation system I was also involved in."
            />
          </ul>
        </div>
      </div>

      <HorizontalDivide />
      <NextPageArrow nextRef={nextRef} scrollToComponent={scrollToComponent} />
    </div>
  );
};

export default About;
