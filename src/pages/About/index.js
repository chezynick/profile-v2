import React from "react";
import ListItem from "../../components/ListItem";

const About = ({ forwardRef, midRef }) => {
  const HorizontalDivide = () => (
    <div className="justify-center hidden w-full lg:flex">
      <div className="w-[80%] h-[1px] bg-primaryColor" />
    </div>
  );

  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col justify-center w-full h-screen pl-12 text-4xl text-gray-700 bg-white overflow-y-clip"
    >
      <h1 className="w-full pl-4 mb-2 text-xl text-left text-gray-700 sm:text-2xl">
        About me
      </h1>
      <div className="flex flex-row w-full md:mb-10 ">
        <div className="w-1/2 p-4 ">
          <div className="flex justify-start "></div>
          <div className="space-y-1 text-sm text-left sm:text-lg sm:space-y-6">
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
        <div className="w-1/2 px-8 py-4 space-y-1 text-sm text-left sm:text-lg sm:space-y-6">
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
