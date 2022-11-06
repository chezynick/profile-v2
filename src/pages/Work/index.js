import React from "react";
import LinkButton from "../../components/LinkButton";
import projects from "../../data/projects";
import PageHeader from "../../components/PageHeader";
import cn from "classnames";

const Work = ({ forwardRef, midRef }) => {
  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col items-center justify-center w-full min-h-screen py-8 text-gray-700 bg-gray-100"
    >
      <PageHeader text="Projects" />

      <div className="grid w-full grid-cols-1 gap-4 px-12 mt-10 mb-8 md:w-3/4 md:px-0 xl:mt-0 md:gap-8 md:grid-cols-3 sm:grid-cols-2 ">
        {projects.map((project) => (
          <div
            key={project.url}
            className="relative flex items-center justify-center flex-shrink-0 "
          >
            <img
              src={project.imgLink}
              alt={project.alt}
              className={cn(
                "object-cover w-full h-full overflow-hidden flex-shrink-none",
                {
                  "object-left": project.title === projects[0].title,
                }
              )}
            />
            <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full font-bold opacity-0 sm:py-10 hover:opacity-90 hover:bg-white">
              <div className="sm:text-3xl">{project.title}</div>
              <div className="w-full px-4 my-4 text-sm font-bold sm:px-8 sm:text-base">
                {project.description}
              </div>
              <LinkButton text="Go to project" href={project.url} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full text-sm md:text-lg">
        <div className="px-12 md:w-1/2 md:px-0">
          <span>
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
