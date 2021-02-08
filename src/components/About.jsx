import { useEffect, useState, forwardRef } from "react";
import "./About.css";
import useIntersectionObs from "../customhooks/useIntersectionObs";
import { CSSTransition } from "react-transition-group";
import Stackitems from "./Stackitems";
import portrait from "./70567235.jpeg";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiMysql, SiFigma } from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const stackDev = [
  { name: "Js", icone: <IoLogoJavascript size={30} /> },
  { name: "React", icone: <FaReact size={30} /> },
  { name: "Redux", icone: <SiRedux size={30} /> },
  { name: "NodeJs", icone: <FaNodeJs size={30} /> },
  { name: "MYSQL", icone: <SiMysql size={30} /> },
];

const stackGfx = [
  { name: "Adobe Photoshop", icone: <DiPhotoshop size={30} /> },
  { name: "Adobe Illlustrator", icone: <DiIllustrator size={30} /> },
  { name: "Figma", icone: <SiFigma size={30} /> },
];

const About = (props, ref) => {
  const ratio = useIntersectionObs(ref);
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
    <div id="about-all" ref={ref}>
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
          <div className="">
            <h4>BLABLABLABLABLABLA</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              perspiciatis a, porro minus suscipit dolorum distinctio ipsa sint
              modi ducimus architecto nihil quis maiores iusto error. Inventore
              suscipit nisi illum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Libero perspiciatis a, porro minus suscipit
              dolorum distinctio ipsa sint modi ducimus architecto nihil quis
              maiores iusto error. Inventore suscipit nisi illum. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Libero perspiciatis
              a, porro minus suscipit dolorum distinctio ipsa sint modi ducimus
              architecto nihil quis maiores iusto error. Inventore suscipit nisi
              illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Libero perspiciatis a, porro minus suscipit dolorum distinctio
              ipsa sint modi ducimus architecto nihil quis maiores iusto error.
              Inventore suscipit nisi illum.
            </p>
            <a>
              <AiFillLinkedin size={30} />
            </a>
            <a>
              <AiFillGithub size={30} />
            </a>
          </div>
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

export default forwardRef(About);
