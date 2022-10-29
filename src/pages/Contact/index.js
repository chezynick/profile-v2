import React from "react";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
      className="relative z-0 flex flex-col items-center justify-center w-full h-screen text-4xl text-gray-100 bg-gray-800"
    >
      <PageHeader text="Contact" light />
      <Button onClick={() => scrollToComponent(topRef)} text="Back to top" />
      <div className="absolute flex justify-center w-full h-auto space-x-4 bottom-4">
        <FontAwesomeIcon size="lg" icon={faGithub} className=" fill-white" />
        <FontAwesomeIcon
          size="lg"
          icon={faLinkedinIn}
          className=" fill-white"
        />
        <FontAwesomeIcon
          size="lg"
          icon={faInstagramSquare}
          className=" fill-white"
        />
        <FontAwesomeIcon size="lg" icon={faEnvelope} className=" fill-white" />
      </div>
      <div ref={midRef} className="absolute left-0 top-1/2" />
    </div>
  );
};

export default Contact;
