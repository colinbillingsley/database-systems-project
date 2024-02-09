import { Link } from "react-router-dom"

const LoginForm = () => {
    return (
        <div className="login-form-container">

            {/* FORM */}
            <form action="" method="GET">
                {/* Form Heading */}
                <div className="login-form-header">
                    <h3 className="form-heading">Login to Univents</h3>
                    <p className="form-heading-text">Please Login or Create an Account</p>
                </div>

                {/* Form body (input) */}
                <div className="login-form-body">
                    {/* username input */}
                    <div className="form-section">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter username"/>
                    </div>

                    {/* password input */}
                    <div className="form-section">
                        <label htmlFor="password1">Password</label>
                        <input type="password" name="password1" id="password1" placeholder="Enter password"/>
                    </div>

                    {/* re-enter password */}
                    <div className="form-section">
                        <label htmlFor="password2">Re-enter Password</label>
                        <input type="password" name="password2" id="password2" placeholder="Re-enter password"/>
                    </div>

                    {/* login button */}
                    <div className="form-section">
                        <input type="submit" value="Login" />
                    </div>
                </div>

                {/* Form footer */}
                <div className="no-account">
                    <p>Don't have an account? <Link to="/account-type">Create Account</Link></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
