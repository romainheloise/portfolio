const NavChoices = ({ handleDots, menuChoice }) => {
  return (
    <ul>
      <li id="home" onClick={handleDots}>
        <span
          className="dot"
          style={{
            transform: `${
              menuChoice.home ? "scale(1.5,1.5)" : "scale(0.5,0.5)"
            }`,
          }}
        ></span>
        Home
      </li>

      <li id="about" onClick={handleDots}>
        <span
          className="dot"
          style={{
            transform: `${
              menuChoice.about ? "scale(1.5,1.5)" : "scale(0.5,0.5)"
            }`,
          }}
        ></span>
        About Me
      </li>

      <li id="work" onClick={handleDots}>
        <span
          className="dot"
          style={{
            transform: `${
              menuChoice.work ? "scale(1.5,1.5)" : "scale(0.5,0.5)"
            }`,
          }}
        ></span>
        My Work
      </li>
    </ul>
  );
};

export default NavChoices;
