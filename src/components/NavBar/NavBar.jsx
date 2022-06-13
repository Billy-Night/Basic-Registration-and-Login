import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <ul>
                <li>
                   <Link to="/">Home</Link> 
                </li>
                <li>
                   <Link to="/login">Login</Link> 
                </li>
                <li>
                    <Link to="/registration">Registration</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;