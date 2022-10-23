import "./App.css";
import React, { useRef, useState } from "react";

import About from "./pages/About";
import Personal from "./pages/Personal";
import Welcome from "./pages/Welcome";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import MenuDots from "./components/MenuDots";
import { WELCOME } from "./constants";

function App() {
  const [currentPage, setCurrentPage] = useState(WELCOME);
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
  console.log(currentPage);
  return (
    <div className="App">
      <MenuDots
        workRef={workRef}
        welcomeRef={welcomeRef}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        personalRef={personalRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        scrollToComponent={scrollToComponent}
      />
      <Welcome
        forwardRef={welcomeRef}
        setCurrentPage={setCurrentPage}
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
