import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const NextPageArrow = ({ scrollToComponent, nextRef }) => {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showArrow) {
    return null;
  }
  return (
    <button
      onClick={() => {
        scrollToComponent(nextRef);
      }}
      aria-label="Move to next page"
      className="absolute hidden lg:flex bottom-10 left-1/2"
    >
      <FontAwesomeIcon
        size="2x"
        icon={faArrowDown}
        className=" fill-primaryColor text-primaryColor opacity-30 hover:opacity-60"
      />
    </button>
  );
};

export default NextPageArrow;
