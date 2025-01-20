import "../styles/App.css";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-links">
        <a href="#crypto">
          <b>Crypto Taxes</b>
        </a>
        <a href="#tools">
          <b>Free Tools</b>
        </a>
        <a href="#resources">
          <b>Resource Center</b>
        </a>
        <button className="get-started-btn">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
