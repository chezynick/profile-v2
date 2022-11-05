import "./App.css";
import React, { useRef } from "react";

import About from "./pages/About";
import Personal from "./pages/Personal";
import Welcome from "./pages/Welcome";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import MenuDots from "./components/MenuDots";
import { ABOUT, CONTACT, WELCOME, WORK, PERSONAL } from "./constants";

function App() {
  const aboutRef = useRef();
  const midAboutRef = useRef();
  const workRef = useRef();
  const personalRef = useRef();
  const midPersonalRef = useRef();
  const contactRef = useRef();
  const midContactRef = useRef();
  const welcomeRef = useRef();
  const midWelcomeRef = useRef();
  const midWorkRef = useRef();

  const scrollToComponent = (ref) =>
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop,
    });
  const refPoints = [
    { name: WELCOME, mainRef: welcomeRef, midPoint: midWelcomeRef },
    { name: ABOUT, mainRef: aboutRef, midPoint: midAboutRef },
    { name: WORK, mainRef: workRef, midPoint: midWorkRef },
    { name: PERSONAL, mainRef: personalRef, midPoint: midPersonalRef },
    { name: CONTACT, mainRef: contactRef, midPoint: midContactRef },
  ];
  return (
    <div className="text-base text-gray-800  md:text-lg">
      <Welcome
        forwardRef={welcomeRef}
        aboutRef={aboutRef}
        midRef={midWelcomeRef}
        scrollToComponent={scrollToComponent}
      />
      <MenuDots refPoints={refPoints} scrollToComponent={scrollToComponent} />
      <About forwardRef={aboutRef} midRef={midAboutRef} />
      <Work forwardRef={workRef} midRef={midWorkRef} />
      <Personal forwardRef={personalRef} midRef={midPersonalRef} />
      <Contact
        forwardRef={contactRef}
        midRef={midContactRef}
        scrollToComponent={scrollToComponent}
        topRef={welcomeRef}
      />
    </div>
  );
}

export default App;
