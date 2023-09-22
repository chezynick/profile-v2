import React from "react";
import NextPageArrow from "../../components/NextPageArrow";
import PageHeader from "../../components/PageHeader";
import hobbies from "../../data/Hobbies";

const Personal = ({ forwardRef, midRef, nextRef, scrollToComponent }) => {
  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen bg-white"
    >
      <PageHeader text="Looking forward & outside work" />
      <div ref={midRef} className="absolute right-2 top-1/2" />
      <div className="w-full px-12 mt-20 mb-6 space-y-4 md:w-3/4 md:px-0 xl:mt-0">
        <p>
          I am deeply committed to advancing in my career and consistently seek
          out opportunities to enhance my skills and knowledge. At present, I am
          self-teaching Flutter to broaden my expertise and acquaint myself with
          the Dart programming language. Additionally, I have incorporated
          TypeScript into several recent projects for work
        </p>
        <p>
          Outside of work I am active and am always on the go, below are a few
          of my main interests:
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 px-12 mb-10 md:px-0 md:w-3/4 md:grid-cols-3 sm:grid-cols-2 md:flex-row">
        {hobbies.map((hobby) => (
          <div key={hobby.name} className="flex flex-col items-center w-full">
            <h1 className="flex justify-start w-full font-semibold">
              {hobby.name}
            </h1>
            <div className="flex items-center w-full my-4 ">
              <div className="flex-shrink-0 mr-4 ">{hobby.IconName()}</div>
              <div className="w-full h-[1px] bg-primaryColor" />
            </div>
            <p className="text-left ">{hobby.description}</p>
          </div>
        ))}
      </div>
      <NextPageArrow nextRef={nextRef} scrollToComponent={scrollToComponent} />
    </div>
  );
};

export default Personal;
