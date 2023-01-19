import React from "react";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import PageHeader from "../../components/PageHeader";

const Contact = ({ forwardRef, midRef, scrollToComponent, topRef }) => {
  return (
    <div
      ref={forwardRef}
      className="relative z-0 flex flex-col items-center justify-center w-full h-screen text-gray-100 bg-gray-800"
    >
      <PageHeader text="Contact" light />
      <div className="flex justify-center w-full h-auto space-x-6 ">
        <a
          target="_blank"
          href="https://github.com/chezynick"
          rel="noreferrer"
          aria-label="Link to my git hub page"
        >
          <FontAwesomeIcon size="3x" icon={faGithub} className=" fill-white" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nick-chesterton-3b7818223/"
          rel="noreferrer"
          aria-label="Link to my linked in page"
        >
          <FontAwesomeIcon
            size="3x"
            icon={faLinkedinIn}
            className=" fill-white"
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/chezynickannie/?hl=en"
          rel="noreferrer"
          aria-label="Link to my Instagram in page"
        >
          <FontAwesomeIcon
            size="3x"
            icon={faInstagramSquare}
            className=" fill-white"
          />
        </a>
      </div>
      <div className="absolute bottom-0 flex justify-center w-full">
        <Button onClick={() => scrollToComponent(topRef)} text="Back to top" />
      </div>
      <div ref={midRef} className="absolute left-0 top-1/2" />
    </div>
  );
};

export default Contact;
