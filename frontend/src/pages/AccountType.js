import { Link } from "react-router-dom";

import Nav from "../components/Nav";

const AccountType = () => {
    return (
        <div className="account-type">
            {/* Navbar */}
            <Nav />

            <div className="account-content-container">
                {/* Choosing account type */}
                <div className="account-type-container">

                    {/* Account type header */}
                    <div className="form-header">
                        <h3 className="form-heading">Account Type</h3>
                        <p className="form-heading-text">Please choose the type of account being registered.</p>
                        <hr />
                    </div>

                    {/* list of account types */}
                    <ul className="account-type-list">
                        <li>
                            <Link to="/create-account-super">Super Admin</Link>
                        </li>
                        <li>
                            <Link to="/create-account-adst">Admin</Link>
                        </li>
                        <li>
                            <Link to="/create-account-adst">Student</Link>
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
