import { Link } from "react-router-dom"

const LoginForm = () => {
    return (
        <div className="form-container">

            {/* FORM */}
            <form action="" method="GET">
                {/* Form Heading */}
                <div className="form-header">
                    <h3 className="form-heading">Welcome Back to Univents!</h3>
                    <p className="form-heading-text">Please login with your information.</p>
                    <hr />
                </div>

                {/* Form body (input) */}
                <div className="form-body">
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
