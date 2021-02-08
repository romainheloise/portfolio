import "./Nav.css";
import { useEffect, useState } from "react";
import NavChoices from "./NavChoices";

const Nav = ({ click, pageIndex }) => {
  const setClickIndex = click[1];
  const [menuChoice, setMenuChoice] = useState({
    home: true,
    about: false,
    work: false,
  });

  const handleDots = (e) => {
    const changeDots = { ...menuChoice };
    let index = 0;
    for (const key in changeDots) {
      if (e.target.id === key) {
        changeDots[key] = true;
        setClickIndex(index);
      } else {
        changeDots[key] = false;
      }
      index++;
    }

    setMenuChoice(changeDots);
  };

  useEffect(() => {
    let index = 0;
    const changeDots = { ...menuChoice };
    for (const key in changeDots) {
      if (index === pageIndex) {
        changeDots[key] = true;
      } else {
        changeDots[key] = false;
      }
      index++;
    }
    setMenuChoice(changeDots);
  }, [pageIndex]);

  return (
    <nav className="nav-menu">
      <p className="code-like">{"<nav>"}</p>
      <NavChoices handleDots={handleDots} menuChoice={menuChoice} />
      <p className="code-like">{"</nav>"}</p>
    </nav>
  );
};

export default Nav;
