import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className ="nav">
        <a href ="/" className="Atlas Copco">
            Atlas Copco
        </a>
        <ul>
            <li className="active">
                <a href = "/My Teams">My Teams</a>
            </li>
           
           
            <li>
            <Link to="/projects" >Projects</Link>
            </li>
            <li>
                <a href ="/My Profile">My Profile</a>
            </li>
        </ul>
    </nav>
    )
}