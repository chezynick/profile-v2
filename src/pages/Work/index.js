import React from "react";
import LinkButton from "../../components/LinkButton";
import brightLiteImage from "../../images/brightLite.png";
import foodieFileImage from "../../images/foodieFile.png";
import carcascoreImage from "../../images/carcascoreImage.png";
import PageHeader from "../../components/PageHeader";

const Work = ({ forwardRef, midRef }) => {
  const projects = [
    {
      imgLink: brightLiteImage,
      url: "https://app.brighthr.com/lite",
      alt: "BrightHR Lite image",
      title: "BrightHR Lite",
      description: "Work project which showcases my last 3 projects",
    },
    {
      imgLink: foodieFileImage,
      url: "https://chezynick.github.io/recipe2",
      alt: "FoodieFile main page",
      title: "FoodieFile",
      description: "Recipe storage app - React - Firebase - Styled components ",
    },
    {
      imgLink: carcascoreImage,
      url: "https://chezynick.github.io/Carcascore/",
      alt: "BrightHR Lite image",
      title: "Carcascore",
      description:
        "Score board for Carcasonne game - React - Firebase - Tailwind",
    },
    // "bg-blue-300",
    // "bg-green-200",
  ];
  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen py-8 text-4xl text-gray-700 bg-gray-100"
    >
      <PageHeader text="Projects" />

      <div className="w-[85%] mb-8 mt-10 xl:mt-0 md:gap-8 gap-4 sm:pl-0 pl-4  flex items-center justify-center flex-wrap sm:flex-row flex-col">
        {projects.map((project) => (
          <div
            key={project.url}
            className="w-[18rem] h-[18rem]  flex-shrink-0 flex justify-center items-center  relative "
          >
            <img
              src={project.imgLink}
              alt={project.alt}
              className="w-full h-full overflow-hidden flex-shrink-none"
            />
            <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full py-10 font-bold opacity-0 hover:opacity-90 hover:bg-white">
              <div>{project.title}</div>
              <div className="w-full px-4 my-4 text-base font-bold">
                {project.description}
              </div>
              <LinkButton text="Go to project" href={project.url} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full text-sm md:text-lg">
        <div className="w-1/2 ">
          <span className="hidden md:flex">
            These are just a couple of personal projects along with a work
            project that showcases my most recent work, for more examples click
            to see my{" "}
          </span>
          <a
            className="text-primaryColor"
            target="_blank"
            href="https://github.com/chezynick"
            rel="noreferrer"
          >
            Github page
          </a>
          .
        </div>
      </div>
      <div ref={midRef} className="absolute right-2 top-1/2" />
    </div>
  );
};

export default Work;
