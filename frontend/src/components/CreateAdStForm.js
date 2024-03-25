import { Link } from "react-router-dom"

const CreateAdStForm = () => {
    return (
        <div className="form-container">
            <form action="" method="POST">
                <div className="form-header">
                    <h3 className="form-heading">Create Account</h3>
                    <p className="form-heading-text">Please fill out the information below to create an account.</p>
                    <hr />
                </div>

                {/* Form body (input) */}
                <div className="form-body">
                    {/* university input */}
                    <div className="form-section">
                        <label htmlFor="university">University</label>
                        <input type="text" name="university" id="university" placeholder="Enter university" required/>
                    </div>

                    {/* username input */}
                    <div className="form-section">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter username" required/>
                    </div>

                    {/* password input */}
                    <div className="form-section">
                        <label htmlFor="password1">Password</label>
                        <input type="password" name="password1" id="password1" placeholder="Enter password" required/>
                    </div>

                    {/* re-enter password */}
                    <div className="form-section">
                        <label htmlFor="password2">Re-enter Password</label>
                        <input type="password" name="password2" id="password2" placeholder="Re-enter password" required/>
                    </div>

                    {/* create account button */}
                    <div className="form-section">
                        <input type="submit" value="Create Account" />
                    </div>
                </div>

                {/* Form footer */}
                <div className="have-account">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default CreateAdStForm
