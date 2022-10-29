import React from "react";

const LinkButton = ({ text, href }) => {
  return (
    <a
      className="px-4 py-2 my-6 text-xl text-gray-700 border rounded-lg border-primaryColor"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default LinkButton;
