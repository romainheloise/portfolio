import { useEffect, useRef, useState } from "react";
import "./About.css";
import useIntersectionObs from "../customhooks/useIntersectionObs";
import { CSSTransition } from "react-transition-group";
import Stackitems from "./Stackitems";
import portrait from "./70567235.jpeg";

const stackDev = [
  { name: "Js" },
  { name: "React" },
  { name: "Redux" },
  { name: "NodeJs" },
  { name: "MYSQL" },
];

const stackGfx = [
  { name: "Adobe Photoshop" },
  { name: "Adobe Illlustrator" },
  { name: "Figma" },
];

const About = () => {
  const sceneRef = useRef();
  const ratio = useIntersectionObs(sceneRef);
  const [stackAnim, setStackAnim] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [portaitPop, setPortraitPop] = useState(false);

  useEffect(() => {
    if (ratio > 0.8) {
      setStackAnim(true);
    } else {
      setStackAnim(false);
    }

    if (ratio > 0.5) {
      setPortraitPop(true);
    } else {
      setPortraitPop(false);
    }

    if (ratio > 0.9) {
      setOpacity(ratio);
    } else {
      setOpacity(0);
    }
  }, [ratio]);

  return (
    <div id="about-all" ref={sceneRef}>
      <div className="about-info">
        <p
          className="code-like"
          style={{
            transform: ` translateX(${(1 - ratio) * -400}px)`,
          }}
        >
          {"<h2>"}
        </p>
        <div
          className="title-underline"
          style={{
            transform: ` rotate(-2deg)`,
            width: `${ratio * 150}px`,
          }}
        >
          <h2
            className="about-title"
            style={{
              opacity: ` ${opacity}`,
            }}
          >
            About me
          </h2>
        </div>
        <p
          className="code-like"
          style={{
            transform: ` translateX(${(1 - ratio) * -350}px)`,
          }}
        >
          {"</h2>"}
        </p>
        <div className="about-text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            perspiciatis a, porro minus suscipit dolorum distinctio ipsa sint
            modi ducimus architecto nihil quis maiores iusto error. Inventore
            suscipit nisi illum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Libero perspiciatis a, porro minus suscipit
            dolorum distinctio ipsa sint modi ducimus architecto nihil quis
            maiores iusto error. Inventore suscipit nisi illum. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Libero perspiciatis a,
            porro minus suscipit dolorum distinctio ipsa sint modi ducimus
            architecto nihil quis maiores iusto error. Inventore suscipit nisi
            illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Libero perspiciatis a, porro minus suscipit dolorum distinctio ipsa
            sint modi ducimus architecto nihil quis maiores iusto error.
            Inventore suscipit nisi illum.
          </p>
          <div
            className="portrait"
            style={{
              transform: ` scale(${ratio},${ratio})`,
              opacity: `${ratio}`,
            }}
          >
            <p className="code-like">{"<img/>"}</p>
            <CSSTransition
              in={portaitPop}
              timeout={500}
              classNames="my-node"
              unmountOnExit
            >
              <img src={portrait} alt="portrait" />
            </CSSTransition>
          </div>
        </div>
        <div className="stacklist">
          <div className="stack-column">
            <div
              className="title-underline"
              style={{
                width: `${ratio * 150}px`,
              }}
            >
              <h3
                style={{
                  opacity: ` ${opacity}`,
                }}
              >
                My Dev stack
              </h3>
            </div>
            <CSSTransition
              in={stackAnim}
              timeout={500}
              classNames="my-node"
              unmountOnExit
            >
              <Stackitems type={stackDev} />
            </CSSTransition>
          </div>
          <div className="stack-column">
            <div
              className="title-underline"
              style={{
                width: `${ratio * 150}px`,
              }}
            >
              <h3
                style={{
                  opacity: ` ${opacity}`,
                }}
              >
                My Gfx stack
              </h3>
            </div>
            <CSSTransition
              in={stackAnim}
              timeout={500}
              classNames="my-node"
              unmountOnExit
            >
              <Stackitems type={stackGfx} />
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
