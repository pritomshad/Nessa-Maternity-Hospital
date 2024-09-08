import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`Donate`}>Donate</Link>
                    </li>
                    <li>
                        <Link to={`/AboutUs`}>About Us</Link>
                    </li>
                </ul>
        </nav>
    );
}