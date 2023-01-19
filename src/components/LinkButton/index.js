import React from "react";

const LinkButton = ({ text, href }) => {
  return (
    <a
      className="px-4 py-2 my-2 text-base text-gray-700 border rounded-lg sm:my-6 sm:text-xl border-primaryColor"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Link to ${text}`}
    >
      {text}
    </a>
  );
};

export default LinkButton;
