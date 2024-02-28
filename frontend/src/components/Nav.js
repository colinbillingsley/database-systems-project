import { Link } from "react-router-dom";
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Nav = ({userLevel}) => {
    const [loggedIn, setLoggedIn] = useState(true);
    const userDropdown = document.getElementsByClassName('user-profile-dropdown');
    const eventDropdown = document.getElementsByClassName('events-dropdown');
    const caret = document.getElementsByClassName('caret');

    const mouseOverEvents = () => {
        changeCaretColorBlue();
        eventDropdown[0].classList.remove('hidden');
    }

    const mouseLeaveEvents = () => {
        changeCaretColorBlack();
        eventDropdown[0].classList.add('hidden');
    }

    const mouseOverUser = () => {
        userDropdown[0].classList.remove('hidden');
    }

    const mouseLeaveUser = () => {
        userDropdown[0].classList.add('hidden');
    }
    
    // set user dropdown to hidden
    const handleUserProfileClick = () => {
        if (userLevel > 0 && !eventDropdown[0].classList.contains('hidden')) {
            eventDropdown[0].classList.add('hidden');
        }
        userDropdown[0].classList.toggle('hidden');
    }

    // set event dropdown to hidden
    const handleEventNavClick = () => {
        if (userLevel > 0 && !userDropdown[0].classList.contains('hidden')) {
            userDropdown[0].classList.add('hidden');
        }
        eventDropdown[0].classList.toggle('hidden');
    }

    // set caret color to blue
    const changeCaretColorBlue = () => {
        caret[0].style.color = "blue";
    }

    // set caret color to black
    const changeCaretColorBlack = () => {
        caret[0].style.color = "black";
    }
    
    // if user logged in display nav links (temp solution for testing)
    if (loggedIn) {

        // user is super admin
        if (userLevel === 2) {
            return (
                <header>
                    <nav className="navbar-container">
                        <Link to="/" className="univents">UNIVENTS</Link>
                        
                        <ul className="nav-links-list">
                            <li>
                                <Link className="nav-link-item" to="/requests">Requests</Link>
                            </li>
                            <li>
                                <Link className="nav-link-item" to="/rsos">RSOs</Link>
                            </li>
                            <li onMouseOver={mouseOverEvents} onMouseLeave={mouseLeaveEvents}>
                                <p className="event-toggle">
                                    Events <FontAwesomeIcon className="caret" icon={faAngleDown} size="sm" style={{color: "#000000",}} />
                                </p>
                                <ul className="events-dropdown hidden">
                                    <li>
                                        <Link to="/events">All Events</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-events">My Events</Link>
                                    </li>
                                </ul>
                            </li>
                            <li onMouseOver={mouseOverUser} onMouseLeave={mouseLeaveUser}>
                                <FontAwesomeIcon className="user-profile" icon={faCircleUser} size="xl" style={{color: "#000000",}} />
                                <ul className="user-profile-dropdown hidden">
                                    <li>
                                        <Link to="/my-account">My Account</Link>
                                    </li>
                                    <li>
                                        <form action="" method="POST">
                                            <input type="submit" value="Logout"/>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </header>
            )
        }

        // user is admin
        else if (userLevel === 1) {
            return (
                <header>
                    <nav className="navbar-container">
                        <Link to="/" className="univents">UNIVENTS</Link>
                        
                        <ul className="nav-links-list">
                            <li>
                                <Link className="nav-link-item" to="/rsos">RSOs</Link>
                            </li>
                            <li onMouseOver={mouseOverEvents} onMouseLeave={mouseLeaveEvents}>
                                <p className="event-toggle">
                                    Events <FontAwesomeIcon className="caret" icon={faAngleDown} size="sm" style={{color: "#000000",}} />
                                </p>
                                <ul className="events-dropdown hidden">
                                    <li>
                                        <Link to="/events">All Events</Link>
                                    </li>
                                    <li>
                                        <Link to="/my-events">My Events</Link>
                                    </li>
                                </ul>
                            </li>
                            <li onMouseOver={mouseOverUser} onMouseLeave={mouseLeaveUser}>
                                <FontAwesomeIcon className="user-profile" icon={faCircleUser} size="xl" style={{color: "#000000",}} />
                                <ul className="user-profile-dropdown hidden">
                                    <li>
                                        <Link to="/my-account">My Account</Link>
                                    </li>
                                    <li>
                                        <form action="" method="POST">
                                            <input type="submit" value="Logout"/>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </header>
            )
        }

        // user is student
        else if (userLevel === 0){
            return (
                <header>
                    <nav className="navbar-container">
                        <Link to="/" className="univents">UNIVENTS</Link>
                        <ul className="nav-links-list">
                            <li>
                                <Link className="nav-link-item" to="/rsos">RSOs</Link>
                            </li>
                            <li>
                                <Link className="nav-link-item" to="/events">Events</Link>
                            </li>
                            <li onMouseOver={mouseOverUser} onMouseLeave={mouseLeaveUser}>
                                <FontAwesomeIcon className="user-profile" icon={faCircleUser} size="xl" style={{color: "#000000",}} />
                                <ul className="user-profile-dropdown hidden">
                                    <li>
                                        <Link to="/my-account">My Account</Link>
                                    </li>
                                    <li>
                                        <form action="" method="POST">
                                            <input type="submit" value="Logout"/>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </header>
            )
        } 
        
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
