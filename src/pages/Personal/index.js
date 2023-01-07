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
      <PageHeader text="Also..." />
      <div ref={midRef} className="absolute right-2 top-1/2" />
      <div className="w-full px-12 mt-20 mb-6 md:w-3/4 md:px-0 md:mt-0">
        Prior to teaching myself to code during lockdown I worked in sales for
        STA Travel for 12 years and prior to that as a retail manager. Alot of
        the skills learnt during this time have been essential throughout the
        last 2 years, from teamwork to communication.
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