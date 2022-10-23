import "./App.css";
import React, { useRef } from "react";

import About from "./pages/About";
import Personal from "./pages/Personal";
import Welcome from "./pages/Welcome";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import MenuDots from "./components/MenuDots";

function App() {
  const aboutRef = useRef();
  const workRef = useRef();
  const personalRef = useRef();
  const contactRef = useRef();
  const welcomeRef = useRef();

  const scrollToComponent = (ref) =>
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop,
    });
  return (
    <div className="App">
      <MenuDots
        workRef={workRef}
        welcomeRef={welcomeRef}
        personalRef={personalRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        scrollToComponent={scrollToComponent}
      />
      <Welcome
        forwardRef={welcomeRef}
        workRef={workRef}
        scrollToComponent={scrollToComponent}
      />
      <Work forwardRef={workRef} />
      <About forwardRef={aboutRef} />
      <Personal forwardRef={personalRef} />

      <Contact forwardRef={contactRef} />
    </div>
  );
}

export default App;
