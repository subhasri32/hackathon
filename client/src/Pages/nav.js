import "./nav.css";

import { FaUserCheck} from 'react-icons/fa';
import {Link} from "react-router-dom";

export default function NavHead()
{

return(
    <>
    <div className="navContainer">
    <div className="head">
        <img src="public\LogoGlyphMd.svg" alt=""></img>
        Stack Overflow Clone
    </div>
    <div><h1><FaUserCheck/></h1></div>
    <div className="Home" ><Link to="/users"><h4>Home</h4></Link></div>
    

    <div className="loginUser" ><Link to="/create-user"><h4>Login</h4></Link></div>
    <div className="addUser" ><Link to="/create-user"><h4>Signup</h4></Link></div>
    </div>
    <searchBar/>
    </>
)
}