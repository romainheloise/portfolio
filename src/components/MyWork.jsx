import "./MyWork.css";
import { forwardRef, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useIntersectionObs from "../customhooks/useIntersectionObs";
import WorkCard from "./WorkCard";
import axios from "axios";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyWork = (props, ref) => {
  const ratio = useIntersectionObs(ref);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/work");
        setWorks(data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div id="mywork-all" ref={ref}>
      <div className="mywork-title">
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
          <h2 className="about-title">My work</h2>
        </div>
        <p
          className="code-like"
          style={{
            transform: ` translateX(${(1 - ratio) * -350}px)`,
          }}
        >
          {"</h2>"}
        </p>
      </div>
      <div className="mywork-carou-cont">
        <p
          className="code-like"
          style={{
            transform: ` translateX(${(1 - ratio) * -400}px)`,
          }}
        >
          {"<section>"}
        </p>
        <div
          className="mywork-carou"
          style={{
            transform: ` translateX(${(1 - ratio) * 2050}px)`,
          }}
        >
          <Carousel
            draggable={true}
            swipeable={true}
            arrows={false}
            showDots={true}
            responsive={responsive}
            containerClass="carousel-container"
          >
            {works.map((x) => {
              return <WorkCard {...x} key={x.titre} ratio={ratio} />;
            })}
          </Carousel>
        </div>
        <p
          className="code-like"
          style={{
            transform: ` translateX(${(1 - ratio) * -350}px)`,
          }}
        >
          {"</section>"}
        </p>
      </div>
    </div>
  );
};

export default forwardRef(MyWork);
