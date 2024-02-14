import { Link } from "react-router-dom";
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [levelAccount, setLevelAccount] = useState(0);
    
    // if user logged in display nav links (temp solution for testing)
    if (loggedIn) {

        // user is super admin
        if (levelAccount === 2) {
            return (
                <header>
                    <nav className="navbar-container">
                        <Link to="/" className="univents">UNIVENTS</Link>
                        
                        <ul className="nav-links-list">
                            <li>
                                <Link to="">Requests</Link>
                            </li>
                            <li>
                                <Link to="">RSOs</Link>
                            </li>
                            <li>
                                <Link to="/events">Events</Link>
                            </li>
                            <li>
                                <i className="user-profile"><FontAwesomeIcon icon={faCircleUser} size="xl" style={{color: "#000000",}} /></i>
                            </li>
                        </ul>
                    </nav>
                </header>
            )
        }

        // user is admin
        else if (levelAccount === 1) {
            return (
                <header>
                    <nav className="navbar-container">
                        <Link to="/" className="univents">UNIVENTS</Link>
                        
                        <ul className="nav-links-list">
                            <li>
                                <Link to="">RSOs</Link>
                            </li>
                            <li>
                                <Link to="/events">Events</Link>
                            </li>
                            <li>
                                <i className="user-profile"><FontAwesomeIcon icon={faCircleUser} size="xl" style={{color: "#000000",}} /></i>
                            </li>
                        </ul>
                    </nav>
                </header>
            )
        }

        // user is student
        else {
            return (
                <header>
                    <nav className="navbar-container">
                        <Link to="/" className="univents">UNIVENTS</Link>
                        
                        <ul className="nav-links-list">
                            <li>
                                <Link to="">RSOs</Link>
                            </li>
                            <li>
                                <Link to="/events">Events</Link>
                            </li>
                            <li>
                                <i className="user-profile"><FontAwesomeIcon icon={faCircleUser} size="xl" style={{color: "#000000",}} /></i>
                            </li>
                        </ul>
                    </nav>
                </header>
            )
        }
    } 
    
    // if  user not logged in, just display our app name
    else {
        return (
            <header>
                <nav className="navbar-container">
                <Link to="/" className="univents">UNIVENTS</Link>
                </nav>
            </header>
        )
    }
}

export default Nav
