import { Link } from "react-router-dom";

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
          <Link to="/my-profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
