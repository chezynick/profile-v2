import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import BIRDS from "vanta/dist/vanta.birds.min";

const Welcome = ({ scrollToComponent, forwardRef, aboutRef, midRef }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: forwardRef.current,
          backgroundColor: 0x1f2937,
          color1: 0xfb3dfb,
          color2: 0xf3f4f6,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          birdSize: 1.2,
          quantity: 2.2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={forwardRef}
      className="relative flex flex-col items-center justify-center w-full h-screen p-4 text-white bg-gray-800"
    >
      <p className="z-10 flex flex-col mb-2 space-y-6 text-4xl sm:flex-row sm:space-y-0">
        <span>Hello, My name is </span>
        <span className="pl-2 text-primaryColor"> Nick Chesterton</span>
      </p>
      <Button
        onClick={() => {
          scrollToComponent(aboutRef);
        }}
        addBG
        text="About me..."
      />
      <div ref={midRef} className="absolute right-2 top-1/2" />
    </div>
  );
};

export default Welcome;
