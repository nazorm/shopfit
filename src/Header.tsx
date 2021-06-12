

function Header():JSX.Element{
  return (
    <header className="header">
      <h1>Shopfit</h1>
      <nav className="header-nav">
        <img src="" alt="hamburger" className="hamburger" />
        <ul className="nav-ul">
          <li className="nav-li">Welcome newbie</li>
          <li className="nav-li">Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
