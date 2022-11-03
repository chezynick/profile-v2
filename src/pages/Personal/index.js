import React from "react";
import PageHeader from "../../components/PageHeader";
import hobbies from "../../data/Hobbies";

const Personal = ({ forwardRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen text-4xl text-gray-700 bg-white"
    >
      <PageHeader text="Outside work" />
      <div ref={midRef} className="absolute right-2 top-1/2" />
      <div className="mt-20 mb-6 md:mt-0">Hobbies</div>
      <div className="flex flex-col gap-4 mb-10 md:flex-row">
        {hobbies.map((hobby) => (
          <div
            key={hobby.name}
            className="sm:w-[24rem] w-[20rem] flex flex-col p-4  items-center rounded-lg sm:h-[20rem] h-auto border border-gray-400"
          >
            <div className="flex items-center w-full my-4 text-lg font-semibold ">
              <div className="flex-shrink-0 mr-4">{hobby.IconName()}</div>{" "}
              {hobby.name}
            </div>
            <div className="text-lg text-left">{hobby.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personal;
