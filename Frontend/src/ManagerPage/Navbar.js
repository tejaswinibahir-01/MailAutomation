import { Link } from "react-router-dom";
import "./Manager.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="Atlas Copco">
        Atlas Copco
      </Link>
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to ="/profile">My Profile</Link>
        </li>
        <li className="logout-container">
          <div className="nav-button">
            <button>O</button>
          </div>
          <div className="logout-option">Logout</div>
        </li>
      </ul>
    </nav>
  );
}
