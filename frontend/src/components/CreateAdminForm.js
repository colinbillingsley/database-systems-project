import { Link } from "react-router-dom"
import { useState } from "react";

const CreateAdminForm = () => {
    const [university, setUniversity] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        const role = 1;
        
        e.preventDefault();

        console.log(`Role: ${role} (Admin)\nUniversity: ${university}\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}\n`)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} method="POST">
                <div className="form-header">
                    <h3 className="form-heading">Create Account - Admin</h3>
                    <p className="form-heading-text">Please fill out the information below to create an account.</p>
                    <hr />
                </div>

                {/* Form body (input) */}
                <div className="form-body">
                    {/* university input */}
                    <div className="form-section">
                        <label htmlFor="university">University</label>
                        <input type="text" name="university" id="university" placeholder="Enter university" onChange={(e) => {setUniversity(e.target.value)}}/>
                    </div>

                    {/* username input */}
                    <div className="form-section">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter username" onChange={(e) => {setUsername(e.target.value)}}/>
                    </div>

                    {/* email input */}
                    <div className="form-section">
                        <label htmlFor="email">School Email</label>
                        <input type="text" name="email" id="email" placeholder="Enter school email" onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>

                    {/* password input */}
                    <div className="form-section">
                        <label htmlFor="password1">Password</label>
                        <input type="password" name="password1" id="password1" placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}}/>
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

export default CreateAdminForm
