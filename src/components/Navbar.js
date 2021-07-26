import { Link } from "react-router-dom";
import "./Navbar.css";
import {SUB_URL} from '../App';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <Link to={SUB_URL + "/"} className="menu-link">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to={SUB_URL + "/pictures"} className="menu-link">
            <p>Pictures</p>
          </Link>
        </li>
        <li>
          <Link to={SUB_URL + "/awards"} className="menu-link">
            <p>Awards</p>
          </Link>
        </li>
        <li>
          <Link to={SUB_URL + "/volunteering"} className="menu-link">
            <p>Volunteering</p>
          </Link>
        </li>
        <li>
          <Link to={SUB_URL + "/contacts"} className="menu-link">
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
