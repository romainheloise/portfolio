import "./Intro.css";
import useIntersectionObs from "../customhooks/useIntersectionObs";
import { useEffect, useRef, useState } from "react";

const Intro = () => {
  const testRef = useRef();
  const ratio = useIntersectionObs(testRef);
  const [opacity, setOpacity] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [backgroundOk, setBackgroundOk] = useState(false);

  useEffect(() => {
    if (ratio < 1) {
      setTranslate((1 - ratio) * 10);
    }
    if (ratio < 0.8) {
      setOpacity(ratio - 0.5);
    } else {
      setOpacity(ratio);
      setTranslate(1 - ratio);
    }
  }, [ratio]);

  return (
    <div id="intro-all" ref={testRef}>
      <h1
        style={{
          transform: `translateX(${(1 - ratio) * -800}px )  rotate(-2deg)`,
          fontSize: "60px",
          opacity: `${opacity}`,
        }}
      >
        Hello I'am
      </h1>
      <div
        className="intro-blaze"
        style={{ backgroundColor: `${backgroundOk ? "greenyellow" : "none"}` }}
      >
        <p
          style={{
            transform: `scale(${translate + 1},${translate + 1})`,
            fontSize: "80px",
            opacity: `${opacity}`,
            backgroundColor: `${backgroundOk ? "unset" : "greenyellow"}`,
          }}
          onAnimationEnd={() => {
            setBackgroundOk(true);
          }}
        >
          Romain Heloise
        </p>
      </div>
      <h1
        style={{
          transform: `translateX(${(1 - ratio) * +800}px )rotate(2deg)`,
          fontSize: "60px",
          opacity: `${opacity}`,
        }}
      >
        web developper
      </h1>
    </div>
  );
};

export default Intro;
