import { Link } from "react-router-dom";

import Nav from "../components/Nav";
import Welcome from "../components/Welcome";

const AccountType = () => {
    return (
        <div className="account-type">
            {/* Navbar */}
            <Nav />
            <div className="landing-content-container">
                {/* Welcome text with image background */}
                <Welcome />

                {/* Choosing account type */}
                <div className="account-type-container">

                    {/* Account type header */}
                    <div>
                        <h3 className="form-heading">Account Type</h3>
                        <p className="form-heading-text">Please choose the type of account being registered.</p>
                    </div>

                    {/* list of account types */}
                    <ul className="account-type-list">
                        <li>
                            <a href="">Super Admin</a>
                        </li>
                        <li>
                            <a href="">Admin</a>
                        </li>
                        <li>
                            <a href="">Student</a>
                        </li>
                    </ul>

                    <div className="have-account">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountType
