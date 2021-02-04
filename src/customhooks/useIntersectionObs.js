import { useEffect, useState } from "react";

const useIntersectionObs = (refCard) => {
  const [ratio, setRatio] = useState(1);

  useEffect(() => {

    if (refCard.current) {

      const options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList(100),
      };

      let observer = new IntersectionObserver((entries) => {
        const iRatio = entries[0].intersectionRatio;

        setRatio(iRatio);
      }, options);
      observer.observe(refCard.current);
    }
  }, [refCard]);
  return ratio;
};

export default useIntersectionObs;

const buildThresholdList = (numSteps) => {
  let thresholds = [];

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
};
