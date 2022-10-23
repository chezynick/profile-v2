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
  const midWorkRef = useRef();

  const scrollToComponent = (ref) =>
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop,
    });
  const refPoints = [
    { name: WELCOME, mainRef: welcomeRef, midPoint: welcomeRef },
    { name: WORK, mainRef: workRef, midPoint: midWorkRef },
    { name: ABOUT, mainRef: aboutRef, midPoint: midAboutRef },
    { name: PERSONAL, mainRef: personalRef, midPoint: midPersonalRef },
    { name: CONTACT, mainRef: contactRef, midPoint: midContactRef },
  ];
  return (
    <div className="App">
      <MenuDots refPoints={refPoints} scrollToComponent={scrollToComponent} />
      <Welcome
        forwardRef={welcomeRef}
        workRef={workRef}
        scrollToComponent={scrollToComponent}
      />
      <Work forwardRef={workRef} midRef={midWorkRef} />
      <About forwardRef={aboutRef} midRef={midAboutRef} />
      <Personal forwardRef={personalRef} midRef={midPersonalRef} />

      <Contact forwardRef={contactRef} midRef={midContactRef} />
    </div>
  );
}

export default App;
