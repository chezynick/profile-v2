import React from "react";

const ListItem = ({ text }) => {
  return (
    <li className="mb-2 list-disc md:mb-4 text-primaryColor">
      <span className="text-gray-700">{text}</span>
    </li>
  );
};

export default ListItem;
