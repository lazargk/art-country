import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <Link to="/" className="menu-link">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/pictures" className="menu-link">
            <p>Pictures</p>
          </Link>
        </li>
        <li>
          <Link to="/awards" className="menu-link">
            <p>Awards</p>
          </Link>
        </li>
        <li>
          <Link to="/volunteering" className="menu-link">
            <p>Volunteering</p>
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="menu-link">
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
