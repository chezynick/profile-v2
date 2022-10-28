import React from "react";

const About = ({ forwardRef, midRef }) => {
  const HorizontalDivide = () => (
    <div className="w-[80%] flex justify-start">
      <div className="w-[40%] h-[1px] bg-primaryColor" />
    </div>
  );
  return (
    <div
      ref={forwardRef}
      className="bg-white relative text-gray-700 h-screen overflow-clip w-full flex flex-col justify-center text-4xl items-center"
    >
      <div className="w-[80%] flex justify-start">
        <h1 className="text-gray-700 text-xl sm:text-2xl mb-2">About me</h1>
      </div>
      <div className="sm:text-lg text-sm space-y-2  sm:space-y-6 w-[80%] h-[70%] sm:h-auto text-left">
        <div>
          I am currently a front end developer with Bright HR, helping to
          develop their cutting edge human resource software. Since beginning my
          journey with Bright in January 2021 I have been part of a small team
          working on a number of exciting projects.
        </div>
        <HorizontalDivide />
        <div>
          Our current project was to develop a free version of our rota planning
          software to be used by other companies with the aim of upselling those
          companies to our main premium product. At the heart of this offering
          was our latest rota planner, which I was not only the sole front end
          developer but also created and designed it from scratch.
        </div>
        <HorizontalDivide />
        <div>
          The free project &apos;Bright lite&apos; also uses the companies new
          navigation system which was released at the end of last year, I was
          also the sole front end developer on that project.
        </div>
        <HorizontalDivide />
        <div>
          As a developer I am self taught, learning to code during lock down
          using the Odin project an online course which you can complete in your
          own time. This took alot of self disicpline and determination. Before
          that I worked in sales and retail, I have found alot of the skills
          learnt have been useful during my time with Bright, ability to
          communicate well and being a good team player I feel are some of the
          most important skills as a developer.
        </div>
      </div>
      <div ref={midRef} className="right-2 absolute top-1/2" />
    </div>
  );
};

export default About;
