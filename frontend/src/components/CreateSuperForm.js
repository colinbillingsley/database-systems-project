import { Link } from "react-router-dom"

const CreateSuperForm = () => {
    return (
        <div className="form-container">
            <form action="" method="POST">
                {/* Form header */}
                <div className="form-header">
                    <h3 className="form-heading">Create Account - Super Admin</h3>
                    <p className="form-heading-text">Please fill out the information below to create an account.</p>
                    <hr />
                </div>

                <div className="super-form-body-container">
                    {/* Form body (input) */}
                    <div className="form-body">
                        {/* username input */}
                        <div className="form-section">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Enter username" required/>
                        </div>

                        {/* email input */}
                        <div className="form-section">
                            <label htmlFor="email">School Email</label>
                            <input type="text" name="email" id="email" placeholder="Enter school email" required/>
                        </div>

                        {/* password input */}
                        <div className="form-section">
                            <label htmlFor="password1">Password</label>
                            <input type="password" name="password1" id="password1" placeholder="Enter password" required/>
                        </div>

                        {/* university input */}
                        <div className="form-section">
                            <label htmlFor="university">University</label>
                            <input type="text" name="university" id="university" placeholder="Enter university name" required/>
                        </div>

                        {/* address input */}
                        <div className="form-section">
                            <label htmlFor="address">University Address</label>
                            <input type="text" name="address" id="address" placeholder="Enter university address" required/>
                        </div>

                        {/* student population input */}
                        <div className="form-section">
                            <label htmlFor="population">Student Population</label>
                            <input type="text" name="population" id="population" placeholder="Enter student population" required/>
                        </div>
                    </div>

                    <div className="super-descr-container">
                            {/* university description */}
                            <div className="form-section">
                                <label htmlFor="description">University Description</label>
                                <textarea className="super-textarea" name="description" id="description" rows="26" placeholder="Enter a description of the university..." required></textarea>
                            </div>
                        </div>
                </div>

                {/* create account button */}
                <div className="form-section">
                            <input type="submit" value="Create Account" />
                    </div>

                {/* Form footer */}
                <div className="have-account">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default CreateSuperForm
