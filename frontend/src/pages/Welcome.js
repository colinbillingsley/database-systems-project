import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <div className="welcome-img-container">
            <div className="welcome-content-container">
                <h1>Welcome to Univents</h1>
                <p>Create and find all your university's events and organizations around campus</p>
                <div className="welcome-buttons-container">
                    <Link className="welcome-button" to="/login">Login</Link>
                    <Link className="welcome-button" to="/account-type">Create Account</Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome
