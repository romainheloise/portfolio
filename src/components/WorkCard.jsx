import { useState } from "react";
import { AiOutlineCloseSquare, AiFillGithub, AiFillEye } from "react-icons/ai";
import "./WorkCard.css";

const WorkCard = ({ titre, ratio, description, git, link, photo }) => {
  const [viewMore, setViewMore] = useState(false);
  const [animation, setAnimation] = useState(false);

  const animationEnd = () => {
    if (!animation) {
      setViewMore(false);
    }
  };

  return (
    <div
      className="work-card-cont"
      style={{
        transform: ` translateY(${(1 - ratio) * -2050}px) skewX(-5deg)`,
      }}
    >
      <div className="work-images" style={{ backgroundImage: `url(${photo})` }}>

        <div className="work-titre">
          <div
            className="title-underline"
            style={{
              transform: ` rotate(-2deg)`,
              width: `fit-content`,
            }}
          >
            <h2>{titre}</h2>
          </div>
        </div>
        
      </div>

      {!viewMore && (
        <p
          className="viewmore"
          onClick={() => {
            setAnimation(true);
            setViewMore(true);
          }}
        >
          View more
        </p>
      )}

      {viewMore && (
        <div
          className="viewmore-info-container"
          style={{
            animation: `forwards 0.2s ${animation ? "glowup" : "glowdown"}`,
          }}
          onAnimationEnd={animationEnd}
        >
          <div className="viewmore-info-content">
            <div className="viewmore-info-top">
              <div
                className="title-underline"
                style={{
                  transform: ` rotate(-2deg)`,
                  width: `fit-content`,
                }}
              >
                <h5>Description</h5>
              </div>

              <button
                type="button"
                value="X"
                onClick={() => setAnimation(false)}
              >
                <AiOutlineCloseSquare size={30} />
              </button>
            </div>

            <p>{description}</p>
            <div
              className="title-underline"
              style={{
                transform: ` rotate(-2deg)`,
                width: `fit-content`,
                marginTop: "20px",
              }}
            >
              <h5>Visit</h5>
              <div className="view-more-link">
                <a href={link} target="blank">
                  <AiFillEye size={30} />
                </a>
                <a href={git} target="blank">
                  <AiFillGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkCard;
