import { useState, useEffect } from "react";

const useScrollMove = () => {
  const [move, setMove] = useState({
    dir: "",
    change: false,
  });

  useEffect(() => {
    const wheelGo = (e) => {
      if (e.deltaY < 0) {
        setMove({ dir: "up", change: !move.change });
      } else {
        setMove({ dir: "down", change: !move.change });
      }
    };

    window.addEventListener("wheel", wheelGo);

    return () => {
      window.removeEventListener("wheel", wheelGo);
    };
  }, [move.change]);

  return move;
};

export default useScrollMove;
