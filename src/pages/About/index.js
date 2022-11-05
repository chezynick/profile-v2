import React from "react";
import ListItem from "../../components/ListItem";
import PageHeader from "../../components/PageHeader";

const About = ({ forwardRef, midRef }) => {
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

      <div className="flex flex-col w-full gap-16 px-12 mt-10 md:px-0 md:w-3/4 md:mt-0 sm:flex-row md:mb-10 ">
        <div className=" sm:w-1/2">
          <div className="flex justify-start "></div>
          <div className="space-y-1 text-left sm:space-y-6">
            <div>
              Presently working at Bright HR as a front end developer, helping
              to develop their cutting edge human resource software. Since
              beginning my journey with Bright in January 2021 I have been part
              of a small team working on a number of exciting projects.
            </div>

            <div>
              As a developer I am self taught, learning to code during lock down
              using the Odin project an online course which you can complete in
              your own time. This took alot of self disicpline and
              determination. Before that I worked in sales and retail, I have
              found alot of the skills learnt have been useful during my time
              with Bright, ability to communicate well and being a good team
              player I feel are some of the most important skills as a
              developer.
            </div>
          </div>
        </div>
        <div ref={midRef} className="absolute right-0 top-1/2" />
        <div className="space-y-1 text-left sm:w-1/2 sm:space-y-6">
          <div>
            Below are 3 of the major projects I have been involved in, I was the
            sole front end developer, involved in planning and decision making
            throughout.
          </div>

          <ul>
            <ListItem
              text="New navigation system for Bright, originally released as a beta
              option this has now replaced the original."
            />
            <ListItem
              text="I concieved and built an alternative rota planner as a prototype for an idea I had,
             after demoing to stakeholders it was allotted time to be be fully develeoped. It is now the primary view used by over 70%
               of our customers and is the sole focus of future deveopment and iteration. "
            />
            <ListItem
              text="BrightHR Lite is a free to use rota planner, it is built to showcase
             the rota planner above and uses the navigation system I was also involved in. "
            />
          </ul>
        </div>
      </div>

      <HorizontalDivide />
    </div>
  );
};

export default About;
