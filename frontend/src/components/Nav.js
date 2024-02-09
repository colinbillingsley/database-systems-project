import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    
    // if user logged in display nav links (temp solution for testing)
    if (loggedIn) {
        return (
            <header>
                <nav className="navbar-container">
                    <a href="#" className="univents">UNIVENTS</a>
                    
                    <ul className="nav-links-list">
                        <li>
                            <a href="">RSOs</a>
                        </li>
                        <li>
                            <a href="">Events</a>
                        </li>
                        <li>
                            <i className="user-profile"><FontAwesomeIcon icon={faCircleUser} size="xl" style={{color: 'white'}}/></i>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    } 
    
    // if  user not logged in, just display our app name
    else {
        return (
            <header>
                <nav className="navbar-container">
                    <a href="#" className="univents">UNIVENTS</a>
                </nav>
            </header>
        )
    }
}

export default Nav
