import React from "react";
import cn from "classnames";

const Button = ({ onClick, text, alternate = false, brand = false }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 my-6 text-xl border border-gray-200 rounded-lg",
        {
          "bg-white border-gray-700": alternate,
          "border-primaryColor text-gray-700": brand,
        }
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
