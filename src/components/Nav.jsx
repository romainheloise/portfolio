import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <p className="code-like">{"<nav>"}</p>
      <ul>
        <a href="#intro-all">
          <li>Home</li>
        </a>
        <a href="#about-all">
          <li>About Me</li>
        </a>
        <li>My Work</li>
      </ul>
      <p className="code-like">{"</nav>"}</p>
    </nav>
  );
};

export default Nav;
