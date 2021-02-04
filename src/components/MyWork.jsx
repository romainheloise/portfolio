import "./MyWork.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const work = [
  {
    titre: "MyFamily",
    description: "Perso Project",
    path: "",
    link: "",
  },
  {
    titre: "Snake",
    description: "Perso Project",
    path: "",
    link: "",
  },
  {
    titre: "MediaTransport",
    description: "Perso Project",
    path: "",
    link: "",
  },
  {
    titre: "MediaTransport",
    description: "Perso Project",
    path: "",
    link: "",
  },
  {
    titre: "MediaTransport",
    description: "Perso Project",
    path: "",
    link: "",
  },
];

const MyWork = () => {
  return (
    <div id="mywork-all">
      <h2>My Work</h2>
      <Carousel responsive={responsive}>
        {work.map((x) => {
          return (
            <div>
              <h3>{x.titre}</h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyWork;
