import React from "react";
import PageHeader from "../../components/PageHeader";
import hobbies from "../../data/Hobbies";

const Personal = ({ forwardRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen bg-white"
    >
      <PageHeader text="Outside work" />
      <div ref={midRef} className="absolute right-2 top-1/2" />
      <div className="w-full px-12 mt-20 mb-6 md:w-3/4 md:px-0 md:mt-0">
        Prior to teaching myself to code during lockdown I worked in sales for
        STA Travel for 12 years for prior to that a retail manager. ALot of the
        skills learnt during this time have been essential throughout the last
        years, from teamwork to communication.
      </div>
      <div className="grid w-full grid-cols-1 gap-6 px-12 mb-10 md:px-0 md:w-3/4 md:grid-cols-3 sm:grid-cols-2 md:flex-row">
        {hobbies.map((hobby) => (
          <div key={hobby.name} className="flex flex-col items-center w-full">
            <div className="flex justify-start w-full font-semibold">
              {hobby.name}
            </div>
            <div className="flex items-center w-full my-4 ">
              <div className="flex-shrink-0 mr-4 ">{hobby.IconName()}</div>
              <div className="w-full h-[1px] bg-primaryColor" />
            </div>
            <div className="text-left ">{hobby.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personal;
