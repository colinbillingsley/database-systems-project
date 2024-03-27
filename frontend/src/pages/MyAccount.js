import { useState } from "react";

const MyAccount = () => {
    const [userLevel, setUserLevel] = useState(2);
    return (
        <div className="my-account">
            <h2 className="main-heading">My Account</h2>

            <form className="account-info-form">
                <div className="form-body">
                    <div className="form-section">
                        <label htmlFor="university">University</label>
                        <input type="text" name="university" id="university" value="University of user will show here" disabled/>
                    </div>

                    <div className="form-section">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" value="Username of user will show here" disabled/>
                    </div>

                    <div className="form-section">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" value="Email of user will show here" disabled/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MyAccount
