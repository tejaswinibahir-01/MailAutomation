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
                <a href ="/Projects">Projects</a>
            </li>
            <li>
                <a href ="/My Profile">My Profile</a>
            </li>
        </ul>
    </nav>
    )
}