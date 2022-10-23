import React from "react";

const MenuDots = ({
  workRef,
  contactRef,
  welcomeRef,
  personalRef,
  aboutRef,
  scrollToComponent,
}) => {
  const dotStyle = "m-2 p-2 flex-shrink-0 rounded-full bg-black h-2 w-2";
  return (
    <div className="fixed border opacity-50 border-black rounded-lg p-2 flex flex-col justify-center items-center z-20 left-0 top-1/3">
      <button
        className={dotStyle}
        onClick={() => scrollToComponent(welcomeRef)}
      />
      <button className={dotStyle} onClick={() => scrollToComponent(workRef)} />
      <button
        className={dotStyle}
        onClick={() => scrollToComponent(aboutRef)}
      />
      <button
        className={dotStyle}
        onClick={() => scrollToComponent(personalRef)}
      />
      <button
        className={dotStyle}
        onClick={() => scrollToComponent(contactRef)}
      />
    </div>
  );
};

export default MenuDots;
