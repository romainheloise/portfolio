import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Nav from "./components/Nav";
import useScrollMove from "./customhooks/useScrollMove";
import { useEffect, useState, useRef } from "react";

function App() {
  const wheel = useScrollMove();
  const [pageIndex, setPagesIndex] = useState(0);
  const [clickIndex, setClickIndex] = useState(null);
  const introRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const pages = [introRef.current, aboutRef.current, workRef.current];

  useEffect(() => {
    let changePage = pageIndex;

    if (wheel.dir === "up" && changePage > 0) {
      changePage -= 1;
      setPagesIndex(changePage);
    } else if (wheel.dir === "down" && changePage < pages.length - 1) {
      changePage += 1;
      setPagesIndex(changePage);
    }

    if (pages[changePage]) {
      pages[changePage].scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [wheel]);

  useEffect(() => {
    if (pages[clickIndex]) {
      pages[clickIndex].scrollIntoView({ behavior: "smooth", block: "end" });
      setPagesIndex(clickIndex);
    }
  }, [clickIndex]);

  return (
    <div className="App">
      <Nav click={[clickIndex, setClickIndex]} pageIndex={pageIndex} />
      <Intro ref={introRef} />
      <About ref={aboutRef} />
      <MyWork ref={workRef} />
    </div>
  );
}

export default App;
