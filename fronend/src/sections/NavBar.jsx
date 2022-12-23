export const NavBar = () => {
  return (
    <nav>
      <h2 className="nav__logo">Eretz</h2>
      <ul className="nav__items">
        <li>
          <a href="/">
            <span className="accent__span">1.</span>Home
          </a>
        </li>
        <li>
          <a href="#">
            <span className="accent__span">2.</span>Info
          </a>
        </li>
        <li>
          <a href="#">
            <span className="accent__span">3.</span>Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
